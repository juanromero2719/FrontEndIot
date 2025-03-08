import React from "react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  onConfirm?: () => void;
}

export default function ErrorModal({ isOpen, onClose, message, onConfirm }: ErrorModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-md shadow-lg p-6 w-[400px] flex flex-col items-center">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#FF0000" strokeWidth="2" />
          <path fill="none" stroke="#FF0000" strokeWidth="8" d="M35 35 L65 65 M65 35 L35 65" />
        </svg>

        <div className="text-red-600 text-xl font-medium mt-4" id="modal-title">
          {message}
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              ELIMINAR
            </button>
          )}
          <button
            onClick={onClose}
            className="flex items-center px-4 py-2 bg-white border border-gray-400 text-gray-700 rounded hover:bg-gray-100"
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}
