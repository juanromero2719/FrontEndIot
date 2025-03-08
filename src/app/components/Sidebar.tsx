"use client";
import React, { useState } from "react";
import Title from "./Title";
import QuestionModal from "./QuestionModal";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function handleLogoutClick() {
    setShowLogoutModal(true);
  }
  function handleConfirmLogout() {
    console.log("Sesión cerrada");
    setShowLogoutModal(false);
    // Aquí puedes agregar la lógica adicional de cierre de sesión
  }
  function handleCancelLogout() {
    setShowLogoutModal(false);
  }

  function handlePanelClick() {
    router.push("/panel");
  }

  return (
    <aside
      className="
        fixed
        top-0
        left-0
        h-screen
        w-64
        bg-[#F9D8C1]
        border-r
        border-red-900
        flex
        flex-col
        items-center
        z-10
      "
    >
      <section className="mt-4 flex flex-col items-center space-y-5">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <img
            src="/images/user.png"
            alt="Ícono de usuario"
            className="w-16 h-16 object-contain"
          />
        </div>
        <h2 className="text-xl text-gray-800">Usuario Interno</h2>
      </section>

      <nav aria-label="Menú de Usuario" className="mt-6 w-full px-2">
        <ul className="space-y-4">
          <li>
            <Title text="Perfil" />
          </li>
          <li>
            <button
              onClick={handleLogoutClick}
              className="w-full rounded-md bg-orange-200 border border-orange-500 py-2 text-black shadow"
            >
              Cerrar Sesión
            </button>
          </li>
          <li>
            <Title text="Gestor de Recaudo" />
          </li>
          <li>
            <button
              className="w-full rounded-md bg-orange-200 border border-orange-500 py-2 text-black shadow text-sm"
              onClick={handlePanelClick}
            >
              Identificación de Usuarios
            </button>
          </li>
        </ul>
      </nav>

      <QuestionModal
        isOpen={showLogoutModal}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
        title="Cerrar sesión"
        message="¿Seguro que deseas cerrar sesión?"
      />
    </aside>
  );
}
