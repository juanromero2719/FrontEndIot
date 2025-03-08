import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

export default function CustomButton({ text, onClick }: CustomButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        h-12
        bg-orange-400
        text-white
        px-6
        py-2
        font-semibold
        hover:bg-orange-600
        transition-colors
        duration-300
        rounded
      "
    >
      {text}
    </button>
  );
}
