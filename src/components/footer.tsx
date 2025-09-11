import { FC } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="border-t border-red-600 max-w-7xl mx-auto"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <p className="uppercase text-xs">Copyright © All Rights Reserved.</p>
          <a href="#" className="font-bold text-sm mt-1">
            Política de Privacidade
          </a>
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-0">
          <p className="uppercase text-xs">contato@goesports.com.br</p>
          <a href="#" className="font-bold text-sm mt-1">
            Política de Frete
          </a>

          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 object-contain mt-4"
          />
        </div>

        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <p className="uppercase text-xs">imprensa@goesports.com.br</p>
          <a className="font-bold text-sm mt-1">Política de Reembolso</a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end gap-4 text-xl max-w-7xl mx-auto mt-8 flex-wrap">
        <a href="https://www.instagram.com/goesportsbr/">
          <FaInstagram className="hover:text-red-600 cursor-pointer" />
        </a>
        <a href="https://x.com/goesportsbr">
          <FaXTwitter className="hover:text-red-600 cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@goesportsbr">
          <FaTiktok className="hover:text-red-600 cursor-pointer" />
        </a>
        <a>
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
        </a>
        <a href="https://discord.gg/goesportsbr">
          <FaDiscord className="hover:text-red-600 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/company/goesportsbr/">
          <FaLinkedin className="hover:text-red-600 cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
