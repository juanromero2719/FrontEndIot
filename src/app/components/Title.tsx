"use client";
import React from "react";

interface TitleProps {
  text: string;
  alignment?: "left" | "center" | "right";
}

export default function Title({ text, alignment = "center" }: TitleProps) {

  const alignmentClass =
    alignment === "left"
      ? "text-left"
      : alignment === "right"
      ? "text-right"
      : "text-center";

  return (
    <header className={`w-full bg-gradient-to-r from-orange-400 to-orange-300 py-2 px-4 text-white shadow rounded-2xl ${alignmentClass}`}>
      <h2 className="text-lg">{text}</h2>
    </header>
  );
}
