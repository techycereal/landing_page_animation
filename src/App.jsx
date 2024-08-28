import React from 'react';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <Hero />
      <WhyUs />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
