import { FC } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";


const JoinFamily: FC = () => {
  return (
    <div id="redes" className="flex items-center justify-center">
      <section className="w-full md:h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg">
        <div className="bg-red-600 flex flex-col justify-center items-start text-left p-8 md:p-12 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            JUNTE-SE À <br /> FAMÍLIA <br /> GAME OVER
          </h1>

          <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
            <a
              href="https://www.instagram.com/goesportsbr/"
              className="bg-white text-black p-3 rounded-md hover:scale-105 transition"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://x.com/goesportsbr"
              className="bg-white text-black p-3 rounded-md hover:scale-105 transition"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.tiktok.com/@goesportsbr"
              className="bg-white text-black p-3 rounded-md hover:scale-105 transition"
            >
              <FaTiktok size={28} />
            </a>
            <a
              href="#"
              className="bg-white text-black p-3 rounded-md hover:scale-105 transition"
            >
              <FaYoutube size={28} />
            </a>
            <a
              href="https://discord.gg/goesportsbr"
              className="bg-white text-black p-3 rounded-md hover:scale-105 transition"
            >
              <FaDiscord size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/goesportsbr/"
              className="bg-white text-black p-3 rounded-md hover:scale-105 transition"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 md:h-auto">
          <Image
            src="/footer.png"
            alt="Team playing"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>
    </div>
  );
};

export default JoinFamily;
