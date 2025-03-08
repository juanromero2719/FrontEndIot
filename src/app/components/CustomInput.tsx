import React from "react";

interface CustomInputProps {
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  id,
  placeholder,
  value,
  onChange,
}: CustomInputProps) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        text-black
        placeholder-black
        border
        border-black-900
        p-4
        outline-none
        focus:ring-2
        focus:ring-black-900
      "
    />
  );
}
