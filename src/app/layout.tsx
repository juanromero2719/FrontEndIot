import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { DataProvider } from "./context/DataContext";

export const metadata: Metadata = {
  title: "Prueba Tecnica",
  description: "Demo layout Next.js 13",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
