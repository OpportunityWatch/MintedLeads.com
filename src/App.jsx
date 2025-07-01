import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import FreeTools from './components/FreeTools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <FreeTools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;