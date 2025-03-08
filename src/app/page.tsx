"use client";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent"; 

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <div className="ml-64 pt-16">
        <Header />
        <main className="p-6">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
