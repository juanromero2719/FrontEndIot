"use client";
import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import CustomSelect from "../../components/CustomSelect";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import BuscarUsuario from "../../components/BuscarUsuario";
import ConfirmModal from "../../components/ConfirmModal";
import ErrorModal from "../../components/ErrorModal";
import AlertsRow from "../../components/AlertsRow";

import { useDataContext } from "../../context/DataContext";


const countryOptions = [
  { value: "", label: "País *" },
  { value: "Colombia", label: "Colombia" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Peru", label: "Perú" },
  { value: "Bolivia", label: "Bolivia" },
];

const departamentOptions = [
  { value: "", label: "Departamento *" },
  { value: "Atlantico", label: "Atlántico" },
  { value: "Bolivar", label: "Bolívar" },
  { value: "Cesar", label: "Cesar" },
];

const municipalityOptions = [
  { value: "", label: "Municipio *" },
  { value: "Bogota", label: "Bogotá" },
  { value: "Medellin", label: "Medellín" },
  { value: "Cali", label: "Cali" },
];

const enterpriseOptions = [
  { value: "", label: "Tipo de empresa cacaotera" },
  { value: "Comercializador", label: "Comercializador" },
  { value: "Transformador", label: "Transformador" },
  { value: "Exportador", label: "Exportador" },
];

export default function MainContentForm() {
  const { recaudadores, recaudadorEnEdicion, setRecaudadorEnEdicion } = useDataContext();
  const [formData, setFormData] = useState({
    tipoPersona: "",
    tipoDocumento: "",
    numeroDocumento: "",
    pais: "",
    departamento: "",
    municipio: "",
    digitoVerificacion: "",
    razonSocial: "",
    nombreComercial: "",
    direccion: "",
    tipoEmpresa: "",
    correoElectronico: "",
    confirmarCorreoElectronico: "",
    numeroCelular: "",
    confirmarNumeroCelular: "",
    autorFormulario: "",
    cargo: "",
    area: "",
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (recaudadorEnEdicion) {
      setFormData({
        tipoPersona: recaudadorEnEdicion.naturaleza || "",
        tipoDocumento: "",
        numeroDocumento: recaudadorEnEdicion.nit.split("-")[0] || "",
        pais: recaudadorEnEdicion.pais || "",
        departamento: recaudadorEnEdicion.departamento || "",
        municipio: recaudadorEnEdicion.municipio || "",
        digitoVerificacion: recaudadorEnEdicion.nit.split("-")[1] || "",
        razonSocial: recaudadorEnEdicion.razonSocial || "",
        nombreComercial: recaudadorEnEdicion.nombreComercial || "",
        direccion: recaudadorEnEdicion.direccion || "",
        tipoEmpresa: recaudadorEnEdicion.tipoEmpresa || "",
        correoElectronico: recaudadorEnEdicion.correo || "",
        confirmarCorreoElectronico: recaudadorEnEdicion.correo || "",
        numeroCelular: recaudadorEnEdicion.celular || "",
        confirmarNumeroCelular: recaudadorEnEdicion.celular || "",
        autorFormulario: recaudadorEnEdicion.representante || "",
        cargo: recaudadorEnEdicion.cargo || "",
        area: recaudadorEnEdicion.area || "",
      });
    } else {
      setFormData({
        tipoPersona: "",
        tipoDocumento: "",
        numeroDocumento: "",
        pais: "",
        departamento: "",
        municipio: "",
        digitoVerificacion: "",
        razonSocial: "",
        nombreComercial: "",
        direccion: "",
        tipoEmpresa: "",
        correoElectronico: "",
        confirmarCorreoElectronico: "",
        numeroCelular: "",
        confirmarNumeroCelular: "",
        autorFormulario: "",
        cargo: "",
        area: "",
      });
    }
  }, [recaudadorEnEdicion]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleBuscar() {
    console.log("Buscando con datos:", formData);
  }

  function handleGuardar() {
    if (
      !formData.razonSocial ||
      !formData.correoElectronico ||
      !formData.confirmarCorreoElectronico ||
      !formData.numeroCelular ||
      !formData.confirmarNumeroCelular ||
      !formData.autorFormulario ||
      !formData.cargo ||
      !formData.area ||
      !formData.pais ||
      !formData.departamento ||
      !formData.municipio
    ) {
      setErrorMessage("Faltan campos por llenar");
      setShowErrorModal(true);
      return;
    }
    if (
      formData.correoElectronico !== formData.confirmarCorreoElectronico ||
      formData.numeroCelular !== formData.confirmarNumeroCelular
    ) {
      setErrorMessage("El correo o el número de celular no coincide");
      setShowErrorModal(true);
      return;
    } else {
      setShowConfirmModal(true);
    }
  }

  function handleCancelSave() {
    setShowConfirmModal(false);
  }

  function handleCloseErrorModal() {
    setShowErrorModal(false);
  }

  function handleConfirmSave() {
    const fecha = new Date().toISOString().split("T")[0];
    const nit = formData.numeroDocumento + "-" + formData.digitoVerificacion;
    if (recaudadorEnEdicion) {
      const index = recaudadores.findIndex((r) => r.id === recaudadorEnEdicion.id);
      if (index >= 0) {
        recaudadores[index] = {
          ...recaudadores[index],
          nit,
          razonSocial: formData.razonSocial || "N/A",
          naturaleza: formData.tipoPersona || "N/A",
          tipoEmpresa: formData.tipoEmpresa || "N/A",
          correo: formData.correoElectronico || "N/A",
          celular: formData.numeroCelular || "N/A",
          representante: formData.autorFormulario || "N/A",
          pais: formData.pais,
          departamento: formData.departamento,
          municipio: formData.municipio,
          nombreComercial: formData.nombreComercial,
          direccion: formData.direccion,
          cargo: formData.cargo,
          area: formData.area,
        };
      }
      setRecaudadorEnEdicion(null);
    } else {
      const randomId = Math.floor(Math.random() * 100000);
      const nuevo = {
        id: randomId,
        fecha,
        nit,
        razonSocial: formData.razonSocial || "N/A",
        naturaleza: formData.tipoPersona || "N/A",
        tipoEmpresa: formData.tipoEmpresa || "N/A",
        correo: formData.correoElectronico || "N/A",
        celular: formData.numeroCelular || "N/A",
        representante: formData.autorFormulario || "N/A",
        estado: "Pendiente",
        pais: formData.pais,
        departamento: formData.departamento,
        municipio: formData.municipio,
        nombreComercial: formData.nombreComercial,
        direccion: formData.direccion,
        cargo: formData.cargo,
        area: formData.area,
      };
      recaudadores.push(nuevo);
    }
    setShowConfirmModal(false);
    setFormData({
      tipoPersona: "",
      tipoDocumento: "",
      numeroDocumento: "",
      pais: "",
      departamento: "",
      municipio: "",
      digitoVerificacion: "",
      razonSocial: "",
      nombreComercial: "",
      direccion: "",
      tipoEmpresa: "",
      correoElectronico: "",
      confirmarCorreoElectronico: "",
      numeroCelular: "",
      confirmarNumeroCelular: "",
      autorFormulario: "",
      cargo: "",
      area: "",
    });
  }

  return (
    <main className="p-6 bg-white min-h-screen">
      <BuscarUsuario />
      <section className="border border-gray-200 rounded-md overflow-hidden ml-10 space-y-4">
        <Title text="Información de usuarios recaudadores" alignment="left" />
        <div className="p-4 grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <CustomSelect id="pais" options={countryOptions} value={formData.pais} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomSelect id="departamento" options={departamentOptions} value={formData.departamento} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomSelect id="municipio" options={municipalityOptions} value={formData.municipio} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="digitoVerificacion" placeholder="Dígito de verificación: *" value={formData.digitoVerificacion} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="razonSocial" placeholder="Razón Social:" value={formData.razonSocial} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="nombreComercial" placeholder="Nombre Comercial:" value={formData.nombreComercial} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="direccion" placeholder="Dirección:" value={formData.direccion} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomSelect id="tipoEmpresa" options={enterpriseOptions} value={formData.tipoEmpresa} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomButton text="Generar Dirección" />
          </div>
          <div className="flex flex-col">
            <CustomInput id="correoElectronico" placeholder="Correo electrónico: *" value={formData.correoElectronico} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="confirmarCorreoElectronico" placeholder="Confirmar Correo electrónico: *" value={formData.confirmarCorreoElectronico} onChange={handleChange} />
          </div>
          <div></div>
          <div className="flex flex-col">
            <CustomInput id="numeroCelular" placeholder="Número de Celular: *" value={formData.numeroCelular} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="confirmarNumeroCelular" placeholder="Confirmar Número de Celular: *" value={formData.confirmarNumeroCelular} onChange={handleChange} />
          </div>
          <div></div>
          <div className="flex flex-col">
            <CustomInput id="autorFormulario" placeholder="Quién diligencia el formulario: *" value={formData.autorFormulario} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="cargo" placeholder="Cargo: *" value={formData.cargo} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <CustomInput id="area" placeholder="Área: *" value={formData.area} onChange={handleChange} />
          </div>
          <div></div>
          <div className="flex flex-col">
            <CustomButton text="Actualizar" onClick={handleGuardar} />
          </div>
          <div className="flex flex-col">
            <CustomButton text="Guardar" onClick={handleGuardar} />
          </div>
        </div>
      </section>
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={handleCancelSave}
        onConfirm={handleConfirmSave}
        title={recaudadorEnEdicion ? "Confirmar actualización" : "Confirmar guardado"}
        message={recaudadorEnEdicion ? "¿Deseas actualizar la información?" : "¿Deseas guardar la información?"}
      />
      <ErrorModal
        isOpen={showErrorModal}
        onClose={handleCloseErrorModal}
        message={errorMessage}
      />

    <AlertsRow />
    </main>
  );
}
