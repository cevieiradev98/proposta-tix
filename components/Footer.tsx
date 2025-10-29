
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Telescoope Studio. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Proposta confidencial para TIX.</p>
      </div>
    </footer>
  );
};

export default Footer;
