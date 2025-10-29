import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`flex-shrink-0 h-6 w-6 text-emerald-500 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PackageCard: React.FC<{
  title: string;
  price: string;
  timeline: string;
  revisions: string;
  services: { title: string; price: string; items: string[] }[];
  importantNotes?: string[];
  notIncluded?: string[];
  isFeatured?: boolean;
}> = ({ title, price, timeline, revisions, services, importantNotes, notIncluded, isFeatured }) => {
  const cardClasses = isFeatured
    ? 'border-2 border-blue-600 ring-2 ring-blue-600 ring-offset-2'
    : 'border border-slate-200';

  return (
    <div className={`bg-white p-8 rounded-2xl shadow-lg flex flex-col ${cardClasses}`}>
      {isFeatured && (
        <div className="text-center mb-4">
          <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider">Recomendado</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-center text-slate-900">{title}</h3>
      
      <div className="text-center my-8">
        <span className="text-5xl font-extrabold text-slate-900">{price}</span>
      </div>

      <div className="flex justify-center space-x-6 text-slate-600 mb-8 border-t border-b border-slate-200 py-4">
        <div className="text-center">
          <p className="font-semibold">Prazo</p>
          <p>{timeline}</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Revisões</p>
          <p>{revisions}</p>
        </div>
      </div>
      
      <div className="flex-grow">
        <p className="font-bold text-slate-800 mb-4 text-center">O QUE ESTÁ INCLUSO:</p>
        <div className="space-y-6">
          {services.map(service => (
            <div key={service.title}>
              <h4 className="font-semibold text-blue-700">{service.title} <span className="text-slate-500 font-normal">{service.price}</span></h4>
              <ul className="mt-3 space-y-2">
                {service.items.map(item => (
                  <li key={item} className="flex items-start text-slate-600">
                    <CheckIcon className="mr-3 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {importantNotes && (
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h4 className="font-semibold text-slate-700 mb-3">IMPORTANTE SABER:</h4>
          <ul className="text-sm text-slate-500 space-y-2">
            {importantNotes.map(note => <li key={note}>- {note}</li>)}
          </ul>
        </div>
      )}
      
      {notIncluded && (
        <div className="mt-4">
          <h4 className="font-semibold text-slate-700 mb-3">NÃO INCLUSO:</h4>
          <p className="text-sm text-slate-500">{notIncluded.join(', ')}.</p>
        </div>
      )}
    </div>
  );
};

const institutionalPackage = {
    title: "Pacote Institucional",
    price: "R$ 8.500",
    timeline: "45-60 dias úteis",
    revisions: "2 rodadas por fase",
    services: [
        { title: "IDENTIDADE VISUAL COMPLETA", price: "(R$ 2.000)", items: ["Refinamento e Variações do Logotipo", "Paleta de Cores e Tipografia", "Aplicações Essenciais (Cartão, Papel Timbrado, etc.)", "Padrões para Redes Sociais", "Mockups Realistas", "Template de Apresentação (15 slides)", "Manual de Identidade Visual (15-20 págs)"] },
        { title: "SITE PROFISSIONAL - DESIGN", price: "(R$ 3.000)", items: ["Arquitetura de Informação (Até 6 páginas)", "Wireframes + Design UI Responsivo", "Layout para Desktop, Tablet e Mobile", "Protótipo Navegável no Figma"] },
        { title: "DESENVOLVIMENTO WEB", price: "(R$ 3.000)", items: ["Desenvolvimento Front-end em Vue.js", "Site Responsivo, Veloz e Moderno", "Código Limpo e Documentado", "Formulário de Contato com Anti-spam", "Otimização de Performance (Google PageSpeed 90+)", "Configuração Básica de SEO", "Integração com Google Analytics"] },
        { title: "GESTÃO & SUPORTE", price: "(R$ 500)", items: ["Acompanhamento do Projeto", "Documentação Técnica", "Entrega de Arquivos Editáveis", "45 dias de Suporte Pós-lançamento"] }
    ],
    importantNotes: [
        "O cliente fornece: Textos e conteúdos das páginas",
        "Podemos auxiliar com: Sugestões de estrutura, banco de imagens, experimentações com IA, orientações de tom de voz"
    ],
    notIncluded: ["Hospedagem", "registro de domínio", "integrações avançadas (CRM/ERP/Pagamento)"]
};

const professionalPackage = {
    title: "Pacote Profissional",
    price: "R$ 12.500",
    timeline: "75-90 dias úteis",
    revisions: "3 rodadas por fase",
    services: [
        { title: "TUDO DO PACOTE INSTITUCIONAL", price: "", items: ["Fundação Profissional Completa"] },
        { title: "BRANDING ESTRATÉGICO (PESQUISA)", price: "(+R$ 2.000)", items: ["Workshop de Descoberta e Posicionamento", "Análise de Mercado e Concorrentes", "Definição de Personas e Jornada do Usuário", "Definição de Propósito, Missão, Valores e Tom de Voz", "Brand Book Estratégico (25-30 págs)"] },
        { title: "TECNOLOGIA & AUTOMAÇÃO", price: "(+R$ 2.000)", items: ["Identificação de processo-chave para otimizar", "Implementação de 1 workflow de automação (n8n)", "Ex: Automação de Leads, Qualificação de Contato"] },
        { title: "SUPORTE EXPANDIDO", price: "", items: ["60 dias de Suporte Pós-lançamento", "Treinamento de 1h para uso do workflow"] }
    ],
    isFeatured: true
};

const Packages: React.FC = () => {
  return (
    <>
      <section id="pacote-institucional" className="py-20 lg:py-32 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Proposta de Valor</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pacote Institucional</p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              A fundação que sua marca precisa para estabelecer uma presença digital sólida e profissional.
            </p>
          </div>
          <PackageCard {...institutionalPackage} />
        </div>
      </section>

      <section id="pacote-profissional" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Proposta Avançada</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pacote Profissional</p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Para empresas que buscam não apenas uma presença, mas uma vantagem competitiva através de estratégia e eficiência.
            </p>
          </div>
          <PackageCard {...professionalPackage} />
        </div>
      </section>
    </>
  );
};

export default Packages;