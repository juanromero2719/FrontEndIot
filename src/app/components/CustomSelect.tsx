import React from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CustomSelect({
  id,
  options,
  value,
  onChange,
}: CustomSelectProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="
        text-black
        border
        border-black-900
        p-4
        pr-10
        appearance-none
        bg-no-repeat
        bg-[url('/icons/arrowdown.png')]
        bg-[length:1rem_1rem]
        bg-[position:right_0.75rem_center]
      "
    >
      {options.map(({ value: val, label }) => (
        <option key={val} value={val}>
          {label}
        </option>
      ))}
    </select>
  );
}
