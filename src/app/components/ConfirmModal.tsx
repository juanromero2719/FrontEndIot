"use client";
import React from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "¿Deseas guardar la información?",
  message = "",
}: ConfirmModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40" role="dialog" aria-modal="true">
      <div className="bg-white rounded-md shadow-lg p-6 w-[400px] flex flex-col items-center">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#8CC63F" strokeWidth="2" />
          <path fill="none" stroke="#8CC63F" strokeWidth="8" d="M30 50 l15 15 l25 -25" />
        </svg>
        <div className="text-green-600 text-xl font-medium mt-4" id="modal-title">
          {title}
        </div>
        {message && <div className="text-green-600 text-base mt-2">{message}</div>}
        <div className="flex justify-center space-x-4 mt-6">
          <button onClick={onClose} className="flex items-center px-4 py-2 bg-white border border-gray-400 text-gray-700 rounded hover:bg-gray-100">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.42 1.42L12 13.41l4.89 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
            </svg>
            CANCELAR
          </button>
          <button onClick={onConfirm} className="flex items-center px-4 py-2 bg-[#003366] text-white rounded hover:bg-[#002244]">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h9l5 5v11c0 1.1-.9 2-2 2zM12 11h-2v2h2v-2zm4 0h-2v2h2v-2z" />
            </svg>
            ACEPTAR
          </button>
        </div>
      </div>
    </div>
  );
}
