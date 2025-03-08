
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export function downloadExcel(recaudadores: any[]) {

  const worksheet = XLSX.utils.json_to_sheet(recaudadores);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Recaudadores");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "recaudadores.xlsx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


export function downloadPDF(recaudadores: any[]) {

  const doc = new jsPDF("p", "pt");

  const columns = [
    { header: "ID", dataKey: "id" },
    { header: "Fecha", dataKey: "fecha" },
    { header: "NIT", dataKey: "nit" },
    { header: "Razón Social", dataKey: "razonSocial" },
    { header: "Naturaleza", dataKey: "naturaleza" },
    { header: "Tipo Empresa", dataKey: "tipoEmpresa" },
    { header: "Correo", dataKey: "correo" },
    { header: "Celular", dataKey: "celular" },
    { header: "Representante", dataKey: "representante" },
    { header: "Estado", dataKey: "estado" },
  ];

  autoTable(doc, {
    columns,
    body: recaudadores,
    margin: { top: 50 },
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [44, 62, 80] },
  });

  doc.save("recaudadores.pdf");
}
