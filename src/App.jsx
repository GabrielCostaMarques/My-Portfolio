
import React, { useEffect } from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import '@/App.css';

function App() {
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const cursorFollower = document.getElementById('cursor-follower');
  //     if (cursorFollower) {
  //       cursorFollower.style.left = e.clientX + 'px';
  //       cursorFollower.style.top = e.clientY + 'px';
  //     }
  //   };
  //   document.addEventListener('mousemove', handleMouseMove);
  //   return () => document.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  return (
    <>
      {/* <div id="cursor-follower"></div> */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
  