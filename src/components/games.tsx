"use client";

import { useState } from "react";
import Image from "next/image";

interface Player {
  name: string;
  role: string;
  image: string;
}

interface Game {
  id: string;
  name: string;
  logo: string;
  players: Player[];
}

const games: Game[] = [
  {
    id: "freefire",
    name: "Free Fire Mobile",
    logo: "/logos/ff.png",
    players: [], // EM BREVE
  },
  {
    id: "valorant",
    name: "Valorant",
    logo: "/logos/valorant.png",
    players: [], // EM BREVE
  },
  {
    id: "battlefive",
    name: "Battle Five ",
    logo: "/logos/fivem.png",
    players: [], // EM BREVE
  },
  {
    id: "tft",
    name: "Teamfight Tactics",
    logo: "/logos/ttf.png",
    players: [], // EM BREVE
  },
];

export default function GamesSection() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const toggleGame = (id: string) => {
    setActiveGame(activeGame === id ? null : id);
  };

  const selectedGame = games.find((g) => g.id === activeGame);

  return (
    <section id="times" className="w-full max-w-7xl mx-auto px-4 py-4">
      <h2 className="text-lg text-white mb-6 uppercase text-center">Jogos</h2>

      {/* Cards dos jogos */}
      <div className="flex flex-wrap justify-center gap-8">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => toggleGame(game.id)}
            className="relative w-[224px] h-[140px] flex items-center justify-center 
             border-2 rounded-lg overflow-hidden
             transition-colors duration-300
             hover:border-red-600 bg-gray-50 "
          >
            <Image src={game.logo} alt={game.name} width={80} height={80} />
          </button>
        ))}
      </div>

      {/* Sessão de players ou EM BREVE */}
      {selectedGame && (
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#e7000b] uppercase text-center">
            {selectedGame.name}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {selectedGame.players.length === 0 ? (
              <p className="col-span-full text-2xl font-bold text-red-600 uppercase">
                EM BREVE
              </p>
            ) : (
              selectedGame.players.map((player, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-black p-4 rounded-lg"
                >
                  <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-full">
                    <Image
                      src={player.image}
                      alt={player.name}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="font-bold text-white">{player.name}</p>
                  <p className="text-sm text-gray-400">{player.role}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
}
