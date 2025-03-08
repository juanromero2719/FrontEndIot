import React, { useState } from "react";
import Title from "./Title";
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

// Opciones para los selects
const personaOptions = [
  { value: "", label: "Tipo de persona: *" },
  { value: "natural", label: "Natural" },
  { value: "juridica", label: "Jurídica" },
];

const documentoOptions = [
  { value: "", label: "Tipo de documento: * NIT" },
  { value: "CC", label: "Cédula de Ciudadanía" },
  { value: "RC", label: "Registro Civil" },
  { value: "TI", label: "Tarjeta de Identidad" },
];

interface FormData {
  tipoPersona: string;
  tipoDocumento: string;
  numeroDocumento: string;
}

const BuscarUsuario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    tipoPersona: "",
    tipoDocumento: "",
    numeroDocumento: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBuscar = () => {
    console.log("Buscar usuario con datos:", formData);
  };

  return (
    <section className="mb-6 ml-10 rounded-md overflow-hidden">
      <Title text="Identificación de usuarios recaudadores" alignment="left" />

      <div className="p-4 grid grid-cols-3 gap-12">
        <div className="flex flex-col">
          <CustomSelect
            id="tipoPersona"
            options={personaOptions}
            value={formData.tipoPersona}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <CustomSelect
            id="tipoDocumento"
            options={documentoOptions}
            value={formData.tipoDocumento}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <CustomInput
            id="numeroDocumento"
            placeholder="Número de documento: *"
            value={formData.numeroDocumento}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-end justify-end">
        <CustomButton text="Buscar" onClick={handleBuscar} />
      </div>
    </section>
  );
};

export default BuscarUsuario;
