"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-black/40">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo2.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-8 uppercase font-semibold tracking-wide text-white">
        <li>
          <Link href="#" className="hover:text-red-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="#times" className="hover:text-red-500 transition">
            Times
          </Link>
        </li>
        <li>
          <Link href="#news" className="hover:text-red-500 transition">
            News
          </Link>
        </li>
        <li>
          <Link href="#sobre" className="hover:text-red-500 transition">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="#redes" className="hover:text-red-500 transition">
            Redes Sociais
          </Link>
        </li>
      </ul>

      {/* Botão Shop (desktop) */}
      <button className="hidden md:block px-5 py-2 border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-black transition">
        SHOP
      </button>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/95 flex flex-col items-center justify-center gap-8 uppercase font-semibold text-white text-lg overflow-hidden">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500 transition"
          >
            Home
          </Link>
          <Link
            href="#times"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500 transition"
          >
            Times
          </Link>
          <Link
            href="#news"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500 transition"
          >
            News
          </Link>
          <Link
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500 transition"
          >
            Sobre
          </Link>
          <Link
            href="#redes"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500 transition"
          >
            Redes Sociais
          </Link>

          {/* Botão Shop (mobile) */}
          <button className="px-5 py-2 border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-black transition">
            SHOP
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
