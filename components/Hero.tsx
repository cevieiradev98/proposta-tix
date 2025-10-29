
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
          Telescoope Studio
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Proposta de Branding e Desenvolvimento Web
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Para: <span className="font-bold text-white">TIX</span> (Representante Oficial HFM no Brasil)
        </p>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
