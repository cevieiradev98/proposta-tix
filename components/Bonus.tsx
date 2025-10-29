
import React from 'react';

const Bonus: React.FC = () => {
  return (
    <section id="bonus" className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Bônus (Cortesia)</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">O Futuro da Identidade 🤖</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Como diferencial, incluímos gratuitamente a experimentação com IA para acelerar e enriquecer o projeto:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">🖤 Photoshoot Profissional com IA</h3>
            <p className="text-slate-300 mb-4">
              Criação de fotos institucionais de alta qualidade para os sócios e colaboradores da TIX. Ideal para o site, LinkedIn e materiais de imprensa.
            </p>
            <p className="text-sm text-slate-400 italic">
              (Validado no teste que fizemos para o Fabiano, garantindo agilidade e qualidade).
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-orange-400 mb-3">🧡 Recursos Visuais Sob Demanda</h3>
            <p className="text-slate-300">
              Criação de imagens e grafismos customizados para o blog ou posts, garantindo uma identidade única sem custos de banco de imagem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
