"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  
  const router = useRouter();

  function handleHomeClick() {
    router.push("/");
  }

  return (
    <header
      className="
        fixed
        top-0
        left-64
        right-0
        h-16
        bg-[#F9D8C1] 
        flex 
        items-center 
        justify-end 
        px-4
        py-2
        border-b 
        border-dotted 
        border-gray-300
        z-10
      "
    >
      <nav aria-label="Barra de navegación principal">
        <ul className="flex space-x-4">
          <li>
            <button
              type="button"
              aria-label="Ir a inicio"
              onClick={handleHomeClick}
              className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
            >
              <img
                src="/icons/home.svg"
                alt="Home"
                className="w-6 h-6 object-contain"
              />
            </button>
          </li>

          <li>
            <button
              type="button"
              aria-label="Ver perfil de usuario"
              className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
            >
              <img
                src="/icons/user.svg"
                alt="Usuario"
                className="w-6 h-6 object-contain"
              />
            </button>
          </li>

          <li>
            <button
              type="button"
              aria-label="Ver notificaciones"
              className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
            >
              <img
                src="/icons/bell.svg"
                alt="Notificaciones"
                className="w-6 h-6 object-contain"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
