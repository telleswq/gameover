"use client";
import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function History() {
  return (
    <section
      id="sobre"
      className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-0 scroll-mt-[100px] mb-16 lg:mb-24"
    >
      <div className="flex flex-col w-full lg:w-auto">
        <div className="bg-black text-white w-full lg:w-[384px] h-auto lg:h-[406px] p-8 flex items-center justify-center text-center">
          <p
            className={`${anton.className} text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-[140%] uppercase`}
          >
            Bem-vindo à <br />
            Game Over: <br />
            Casa de 150 troféus <br />e um legado de vitória.
          </p>
        </div>

        <div className="bg-red-600 text-white w-full lg:w-[384px] h-auto lg:h-[452px] p-8 flex flex-col items-center justify-center">
          <Image
            src="/trofeus.png"
            alt="Jogador com headset"
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="font-extrabold text-6xl sm:text-7xl lg:text-[50px] leading-none">
            150
          </p>
          <p className="uppercase font-bold text-2xl sm:text-3xl lg:text-[30px] mt-2">
            Troféus
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[336px] h-[400px] sm:h-[600px] lg:h-[858px]">
        <img
          src="/history.png"
          alt="Jogador com headset"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="flex flex-col w-full lg:w-auto">
        <div className="bg-red-600 text-white w-full lg:w-[495px] h-auto lg:h-[269px] p-8 flex flex-col justify-center items-center text-center">
          <p className="font-extrabold text-6xl sm:text-8xl md:text-[120px] lg:text-[187px] leading-none">
            6+
          </p>
          <p className="uppercase text-lg sm:text-xl md:text-2xl lg:text-[20px] font-extrabold mt-2">
            Anos de Sucesso
          </p>
        </div>

        <div className="bg-black text-white w-full lg:w-[495px] h-auto lg:h-[589px] p-8 flex items-center">
          <p className="font-akira text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-tight font-extrabold uppercase text-left">
            Nossa missão é <br />
            <span className="text-red-600">vencer</span>, e apenas{" "}
            <span className="text-red-600">vencer</span>. <br />
            Isso é o que fazemos.
          </p>
        </div>
      </div>
    </section>
  );
}
