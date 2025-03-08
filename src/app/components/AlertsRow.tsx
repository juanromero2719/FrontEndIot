import React from "react";

export default function AlertsRow() {
  return (
    <div className="w-full grid grid-cols-3 gap-12">
      {/* Alerta verde */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 flex items-center">
        <svg
          className="w-6 h-6 text-green-400 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 
            001.414 0l8-8a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-green-800">
          Se ha encontrado la persona y fue editada
        </span>
      </div>

      {/* Alerta roja #1 */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 flex items-center">
        <svg
          className="w-6 h-6 text-red-400 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.366-.756 1.378-.756 
            1.744 0l6 12A1 1 0 0115 16H5a1 1 0 
            01-.9-1.436l4-8zM11 10a1 1 0 
            10-2 0 1 1 0 002 0zm-1 3a1 
            1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-red-800">
          No existe ninguna persona registrada con este NIT
        </span>
      </div>

      {/* Alerta roja #2 */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 flex items-center">
        <svg
          className="w-6 h-6 text-red-400 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.366-.756 1.378-.756 
            1.744 0l6 12A1 1 0 0115 16H5a1 1 0 
            01-.9-1.436l4-8zM11 10a1 1 0 
            10-2 0 1 1 0 002 0zm-1 3a1 
            1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-red-800">
          No existe ninguna persona registrada con esta persona
        </span>
      </div>
    </div>
  );
}
