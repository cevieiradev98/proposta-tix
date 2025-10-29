
import React from 'react';

const steps = [
  "Escolha do pacote e alinhamento de escopo.",
  "Assinatura do contrato e pagamento da entrada.",
  "Agendamento da Reunião de Kick-off (Briefing Estratégico).",
  "Início imediato do projeto."
];

const NextSteps: React.FC = () => {
  return (
    <section id="proximos-passos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Vamos Começar?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Próximos Passos</p>
        </div>
        <div className="flow-root">
          <ul className="-mb-8">
            {steps.map((step, stepIdx) => (
              <li key={step}>
                <div className="relative pb-8">
                  {stepIdx !== steps.length - 1 ? (
                    <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-slate-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex items-start space-x-4">
                    <div>
                      <span className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-white">
                        <span className="font-bold text-white">{stepIdx + 1}</span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-lg text-slate-700">
                        <p>{step}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
