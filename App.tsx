
import React from 'react';
import Hero from './components/Hero';
import Context from './components/Context';
import Packages from './components/Packages';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Bonus from './components/Bonus';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased">
      <main>
        <Hero />
        <Context />
        <Packages />
        <About />
        <WhyUs />
        <Bonus />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default App;
