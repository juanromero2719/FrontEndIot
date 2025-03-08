"use client";
import React, { useState } from "react";
import BuscarUsuario from "./BuscarUsuario";
import Title from "./Title";
import CustomButton from "./CustomButton";
import { useDataContext } from "../context/DataContext";
// Se elimina la importación del antiguo DeleteConfirmModal
import ErrorModal from "./ErrorModal"; // Usamos el modal actualizado
import { useRouter } from "next/navigation";
import QuestionModal from "./QuestionModal";
import { downloadExcel, downloadPDF } from "../utils/downloadHelpers";

export default function MainContentTable() {
  const { recaudadores, removeRecaudador, setRecaudadorEnEdicion, updateEstado } = useDataContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);

  const [showConfirmEstadoModal, setShowConfirmEstadoModal] = useState(false);
  const [idToApprove, setIdToApprove] = useState<number | null>(null);

  const [showConfirmPdf, setShowConfirmPdf] = useState(false);
  const [showConfirmExcel, setShowConfirmExcel] = useState(false);

  const router = useRouter();

  function handlePreRegistrar() {
    router.push("/panel");
  }

  function handlePdfExport() {
    setShowConfirmPdf(true);
  }
  function confirmPdf() {
    downloadPDF(recaudadores);
    setShowConfirmPdf(false);
  }
  function cancelPdf() {
    setShowConfirmPdf(false);
  }

  function handleExcelExport() {
    setShowConfirmExcel(true);
  }
  function confirmExcel() {
    downloadExcel(recaudadores);
    setShowConfirmExcel(false);
  }
  function cancelExcel() {
    setShowConfirmExcel(false);
  }

  function handleEditar(id: number) {
    const found = recaudadores.find((x) => x.id === id) || null;
    setRecaudadorEnEdicion(found);
    router.push("/panel");
  }

  function handleAprobar(id: number) {
    setIdToApprove(id);
    setShowConfirmEstadoModal(true);
  }
  function confirmEstado() {
    if (idToApprove !== null) updateEstado(idToApprove, "Finalizado");
    setIdToApprove(null);
    setShowConfirmEstadoModal(false);
  }
  function cancelEstado() {
    setIdToApprove(null);
    setShowConfirmEstadoModal(false);
  }

  function handleEliminar(id: number) {
    setIdToDelete(id);
    setShowDeleteModal(true);
  }
  function confirmDelete() {
    if (idToDelete !== null) removeRecaudador(idToDelete);
    setIdToDelete(null);
    setShowDeleteModal(false);
  }
  function cancelDelete() {
    setIdToDelete(null);
    setShowDeleteModal(false);
  }

  return (
    <div className="mt-4">
      <BuscarUsuario />
      <section className="mt-8">
        <div className="flex justify-end bg-white px-4 py-2 rounded-b-md">
          <CustomButton text="+ Pre - registrar" onClick={handlePreRegistrar} />
        </div>
        <div className="flex items-center justify-between text-white py-2 px-4 rounded-t-md">
          <Title text="Registro de recaudadores pre - identificados" alignment="left" />
          <div className="flex items-center space-x-4 ml-10">
            <button onClick={handlePdfExport} aria-label="Exportar a PDF">
              <img
                src="/icons/pdf.svg"
                alt="Exportar PDF"
                className="w-8 h-8 object-contain hover:opacity-80"
              />
            </button>
            <button onClick={handleExcelExport} aria-label="Exportar a Excel">
              <img
                src="/icons/excel.svg"
                alt="Exportar Excel"
                className="w-8 h-8 object-contain hover:opacity-80"
              />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-black">
            <thead>
              <tr className="bg-white">
                <th className="border-l border-gray-300 p-2 text-left">Id</th>
                <th className="border-l border-gray-300 p-2 text-left">Fecha</th>
                <th className="border-l border-gray-300 p-2 text-left">NIT</th>
                <th className="border-l border-gray-300 p-2 text-left">Razón Social</th>
                <th className="border-l border-gray-300 p-2 text-left">Naturaleza de la empresa</th>
                <th className="border-l border-gray-300 p-2 text-left">Tipo de empresa cacaotera</th>
                <th className="border-l border-gray-300 p-2 text-left">Correo Electrónico</th>
                <th className="border-l border-gray-300 p-2 text-left">Número de Celular</th>
                <th className="border-l border-gray-300 p-2 text-left">Nombre de representante legal</th>
                <th className="border-l border-gray-300 p-2 text-left">Estado</th>
                <th className="border-l border-gray-300 p-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {recaudadores.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border-l border-gray-300 p-2">{item.id}</td>
                  <td className="border-l border-gray-300 p-2">{item.fecha}</td>
                  <td className="border-l border-gray-300 p-2">{item.nit}</td>
                  <td className="border-l border-gray-300 p-2">{item.razonSocial}</td>
                  <td className="border-l border-gray-300 p-2">{item.naturaleza}</td>
                  <td className="border-l border-gray-300 p-2">{item.tipoEmpresa}</td>
                  <td className="border-l border-gray-300 p-2">{item.correo}</td>
                  <td className="border-l border-gray-300 p-2">{item.celular}</td>
                  <td className="border-l border-gray-300 p-2">{item.representante}</td>
                  <td className="border-l border-gray-300 p-2">{item.estado}</td>
                  <td className="border-l border-gray-300 p-2 flex space-x-2">
                    <button
                      onClick={() => handleEditar(item.id)}
                      aria-label="Editar"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <img
                        src="/icons/edit.svg"
                        alt="Editar"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                    <button
                      onClick={() => handleAprobar(item.id)}
                      aria-label="Aprobar"
                      className="text-green-500 hover:text-green-700"
                    >
                      <img
                        src="/icons/check.svg"
                        alt="Aprobar"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                    <button
                      onClick={() => handleEliminar(item.id)}
                      aria-label="Eliminar"
                      className="text-red-500 hover:text-red-700"
                    >
                      <img
                        src="/icons/trash.svg"
                        alt="Eliminar"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Se utiliza el modal actualizado en lugar del DeleteConfirmModal */}
      <ErrorModal
        isOpen={showDeleteModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        message="¿Seguro que quieres eliminar esta persona?"
      />

      <QuestionModal
        isOpen={showConfirmEstadoModal}
        onClose={cancelEstado}
        onConfirm={confirmEstado}
        title="Confirmar aprobación"
        message="¿Deseas cambiar el estado de esta persona a Finalizado?"
      />

      <QuestionModal
        isOpen={showConfirmPdf}
        onClose={cancelPdf}
        onConfirm={confirmPdf}
        title="Descargar PDF"
        message="¿Deseas descargar un PDF con todos los datos actuales?"
      />

      <QuestionModal
        isOpen={showConfirmExcel}
        onClose={cancelExcel}
        onConfirm={confirmExcel}
        title="Descargar Excel"
        message="¿Deseas descargar un Excel con todos los datos actuales?"
      />
    </div>
  );
}
