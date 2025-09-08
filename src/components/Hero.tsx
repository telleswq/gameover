const Hero = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center bg-[url('/bg-header.png')] bg-cover bg-center relative">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl px-4">
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          ONDE <span className="text-red-600">VENCER</span> É A ÚNICA OPÇÃO
        </h1>
        <button className="mt-8 bg-red-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
          Nossa Missão
        </button>
      </div>
    </header>
  );
};

export default Hero;
