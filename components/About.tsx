
import React from 'react';
import fotoLuisa from '../assets/Foto-Luisa.jpg';
import fotoCadu from '../assets/Foto-Cadu.jpg';

const ProfileCard: React.FC<{
  name: string;
  role: string;
  imageUrl: string;
  bio: string[];
  focus: string;
}> = ({ name, role, imageUrl, bio, focus }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center md:text-left">
    <div className="md:flex md:items-start md:space-x-8">
      <img className="w-32 h-32 rounded-full mx-auto md:mx-0 flex-shrink-0" src={imageUrl} alt={name} />
      <div className="mt-6 md:mt-0">
        <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
        <p className="text-blue-600 font-semibold">{role}</p>
        <div className="mt-4 text-slate-600 space-y-4">
          {bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-slate-800"><span className="font-semibold">Foco:</span> {focus}</p>
        </div>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Sobre Nós</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Os Especialistas por Trás do Projeto</p>
        </div>
        <div className="space-y-12">
          <ProfileCard
            name="Luísa Macedo"
            role="Direção de Arte & Branding"
            imageUrl={fotoLuisa}
            bio={[
              "Designer há mais de sete anos, já atuei em diferentes áreas do design, passando por identidade visual, social media e direção de arte. Tive a oportunidade de trabalhar em projetos para marcas grandes, como Beleza Natural e Firjan, participando de processos de rebranding e definição de identidade institucional.",
              "Nos últimos anos, venho me aprofundando em UX, UI e pesquisa de usuário, para alinhar minha experiência em estética e design com uma visão mais estratégica e centrada nas pessoas. Também tenho explorado o uso de inteligência artificial como ferramenta de apoio ao processo criativo."
            ]}
            focus="Guiado pela busca constante por otimização de processos e excelência criativa, equilibrando sensibilidade estética com resultados práticos e consistentes."
          />
          <ProfileCard
            name="Carlos Eduardo Vieira"
            role="Desenvolvimento & Arquitetura Web"
            imageUrl={fotoCadu}
            bio={[
              "Desenvolvedor de software há mais de sete anos, com experiência em aplicações web, backend, frontend, mobile e desktop. Já atuei em empresas nacionais e multinacionais, desenvolvendo principalmente softwares financeiros e de gestão.",
              "Trabalhei na Deloitte, uma das Big Four globais de auditoria financeira, com foco em inovação e chatbots corporativos, e atualmente atuo em uma fintech que movimenta mais de um milhão de reais por dia. Tenho sólida experiência em arquitetura de sistemas e automação, e venho me aprofundando cada vez mais no uso de IA aplicada ao desenvolvimento."
            ]}
            focus="Unir robustez técnica e clareza estrutural, criando soluções escaláveis, seguras e eficientes."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
