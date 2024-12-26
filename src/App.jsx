import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <About />
      <Team />
      <Footer />
    </main>
  )
}

export default App