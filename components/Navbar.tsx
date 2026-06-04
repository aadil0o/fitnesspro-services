"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold gold-text">
          FitnessPro Services
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#equipment">Equipment</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black p-4 flex flex-col gap-4">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#equipment">Equipment</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}