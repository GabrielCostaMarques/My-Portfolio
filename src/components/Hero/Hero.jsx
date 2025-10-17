
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 70;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
     if (aboutSection) {
      const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 70;
      const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const title = "Olá, eu sou Gabriel Marques";
  const subtitleText = "Desenvolvedor Full Stack";

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 }}}}
        >
          <motion.h1 variants={titleVariants}>
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} style={{display: 'inline-block'}}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: title.length * 0.05 + 0.2 }}
          >
            {subtitleText}
          </motion.p>
          <motion.p 
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: title.length * 0.05 + 0.4 }}
          >
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: title.length * 0.05 + 0.6 }}
          >
            <motion.button 
              className="button" 
              onClick={scrollToContact}
            >
              Entre em Contato
            </motion.button>
            <motion.a 
              href="Gabriel_Costa_Marques_CV.pdf" 
              className="button button-outline" 
              download
            >
              Baixar CV
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
        >
          <img  className="hero-image" alt="Gabriel Marques - Desenvolvedor sorrindo" src="img-hero.jpg" />
        </motion.div>
      </div>
      <motion.div 
        className="scroll-down-indicator" 
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
  