"use client";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "./Components/MainContent";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-64 pt-16">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
