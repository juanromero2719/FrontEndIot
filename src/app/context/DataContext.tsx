"use client";
import React, { createContext, useState, useContext } from "react";

interface Recaudador {
  id: number;
  fecha: string;
  nit: string;
  razonSocial: string;
  naturaleza: string;
  tipoEmpresa: string;
  correo: string;
  celular: string;
  representante: string;
  estado: string;
  pais?: string;
  departamento?: string;
  municipio?: string;
  nombreComercial?: string;
  direccion?: string;
  cargo?: string;
  area?: string;
}

interface DataContextType {
  recaudadores: Recaudador[];
  removeRecaudador: (id: number) => void;
  recaudadorEnEdicion: Recaudador | null;
  setRecaudadorEnEdicion: (r: Recaudador | null) => void;
  updateEstado: (id: number, nuevoEstado: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [recaudadores, setRecaudadores] = useState<Recaudador[]>([]);
  const [recaudadorEnEdicion, setRecaudadorEnEdicion] = useState<Recaudador | null>(null);

  function removeRecaudador(id: number) {
    setRecaudadores((prev) => prev.filter((x) => x.id !== id));
  }

  function updateEstado(id: number, nuevoEstado: string) {
    setRecaudadores((prev) => {
      const arr = [...prev];
      const index = arr.findIndex((r) => r.id === id);
      if (index >= 0) {
        arr[index] = { ...arr[index], estado: nuevoEstado };
      }
      return arr;
    });
  }

  return (
    <DataContext.Provider
      value={{
        recaudadores,
        removeRecaudador,
        recaudadorEnEdicion,
        setRecaudadorEnEdicion,
        updateEstado,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useDataContext must be used within DataProvider");
  return ctx;
}
