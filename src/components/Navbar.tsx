"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 uppercase font-semibold tracking-wide text-white">
        <li>
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/news" className="hover:text-red-500 transition">
            News
          </Link>
        </li>
        <li>
          <Link href="/mission" className="hover:text-red-500 transition">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/matches" className="hover:text-red-500 transition">
            Times
          </Link>
        </li>
        <li>
          <Link href="/socials" className="hover:text-red-500 transition">
            Redes Sociais
          </Link>
        </li>
      </ul>

      {/* Botão Shop */}
      <button className="px-5 py-2 border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-black transition">
        SHOP
      </button>
    </nav>
  );
};

export default Navbar;
