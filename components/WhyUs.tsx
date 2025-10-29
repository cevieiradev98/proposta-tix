
import React from 'react';

const TargetIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const CodeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const UsersIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const PackageIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4A2 2 0 0 1 2 16.76V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/><polyline points="2,8 12,13 22,8"/><line x1="12" y1="22.76" x2="12" y2="13"/></svg>
);

const differentiators = [
  {
    icon: <TargetIcon />,
    title: "Estratégia Antes da Estética",
    description: "Não fazemos 'apenas design'. Cada decisão visual é baseada em estratégia para o mercado financeiro."
  },
  {
    icon: <CodeIcon />,
    title: "Código de Excelência",
    description: "Garantia de um site rápido (PageSpeed 90+), seguro e 100% responsivo, desenvolvido por especialistas."
  },
  {
    icon: <UsersIcon />,
    title: "Processo Transparente (Sem Burocracia)",
    description: "Comunicação direta entre designer e desenvolvedor. Aprovações claras em cada fase, sem camadas de gerência."
  },
  {
    icon: <PackageIcon />,
    title: "Entrega Completa e Organizada",
    description: "Entregamos todos os arquivos (Figma, AI, etc.) e manuais para que a TIX tenha autonomia e a marca tenha longevidade."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Por que Trabalhar Conosco</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Nossos Diferenciais</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
