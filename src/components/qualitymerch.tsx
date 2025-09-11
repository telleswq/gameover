// components/QualityMerch.tsx
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
export default function QualityMerch() {
  return (
    <div className="bg-white text-black flex items-center justify-center px-12 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div>
          <Image
            src="/etiqueta.png" // substitua pela sua imagem
            alt="Etiqueta em tecido"
            width={600}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Texto + Botão */}
        <div className="flex flex-col gap-6">
          {/* Ícone vermelho */}
          <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          {/* Título */}
          <h2
            className={`${anton.className} font-anton text-4xl md:text-5xl leading-tight`}>
            TOP–RATED <br /> QUALITY <br /> MERCH
          </h2>

          {/* Botão */}
          <button className="bg-red-600 text-white font-anton text-sm px-6 py-3 w-fit hover:bg-red-700 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
