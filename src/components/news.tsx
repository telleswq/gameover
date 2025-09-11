"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const NewsCard = ({ image, title, description, link }: NewsCardProps) => {
  return (
    <div className="flex flex-col bg-black text-white overflow-hidden rounded-lg shadow-lg w-full">
      {/* Imagem */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover grayscale"
      />

      {/* Conteúdo */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="text-lg font-bold uppercase">{title}</h3>
          <p className="text-sm mt-2 leading-relaxed">{description}</p>
        </div>
        <a
          href={link}
          className="mt-4 inline-flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-6 py-3 text-sm"
        >
          Saiba mais
          <ChevronRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default function NewsSection() {
  const news = [
    {
      image: "/images/give.png",
      title: "Sorteio",
      description:
        "Prepare-se para a vitória! Participe do sorteio da GameOver e concorra a um teclado gamer premium.",
      link: "#",
    },
    {
      image: "/images/academy.png",
      title: "Time Academy",
      description:
        "Nosso time academy recebe a valiosa orientação de veteranos experientes, que os conduzem no caminho do sucesso em suas carreiras.",
      link: "#",
    },
    {
      image: "/images/female.png",
      title: "Time Feminino",
      description:
        "Temos orgulho de anunciar a expansão para as divisões femininas, abrindo caminho para o surgimento de novas campeãs.",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-black flex items-center gap-4">
          News
          <div className="flex sm:hidden gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-red-600 hover:bg-red-700 transition rounded"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-red-600 hover:bg-red-700 transition rounded"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </h2>

        <div className="hidden sm:flex gap-2">
          <button
            onClick={prevSlide}
            className="p-3 bg-red-600 hover:bg-red-700 transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-red-600 hover:bg-red-700 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile → apenas 1 card visível */}
      <div className="sm:hidden">
        <NewsCard {...news[currentIndex]} />
      </div>

      {/* Desktop/Tablet → grid normal intacto */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
