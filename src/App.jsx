import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Team from './components/Team';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Team /> */}
    </main>
  )
}

export default App