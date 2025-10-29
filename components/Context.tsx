
import React from 'react';

const Context: React.FC = () => {
  return (
    <section id="contexto" className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Contexto</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">O Desafio Atual</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">O Problema</h3>
            <p className="text-slate-600 mb-6 text-lg">
              A TIX nasce com a responsabilidade de representar a HFM, mas ainda não possui uma marca institucional consolidada.
            </p>
            <h4 className="font-semibold text-slate-700 mb-3">Os Riscos Imediatos:</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-red-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <span>Comunicação visual inconsistente.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-red-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <span>Falta de padronização nos materiais.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-red-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <span>Ausência de uma identidade profissional.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg shadow-2xl">
              <h4 className="font-semibold text-slate-300 mb-4 text-lg">O Ponto Crítico:</h4>
              <blockquote className="border-l-4 border-blue-400 pl-6">
                <p className="text-xl md:text-2xl italic text-white">
                  "No setor financeiro, parecer amador é sinônimo de parecer golpe. A credibilidade não é um bônus, é o alicerce."
                </p>
              </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;
