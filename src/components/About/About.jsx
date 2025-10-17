
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, type: "spring", stiffness: 100 } }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Sobre Mim
          </motion.h2>
          <div className="about-content">
            <motion.div 
              className="about-image-container"
              variants={imageVariants}
            >
              <img  className="about-image" alt="Gabriel Marques trabalhando em um projeto de codificação" src="beca.jpg" />
            </motion.div>
            <motion.div 
              className="about-text"
              variants={itemVariants}
            >
              <p>
                Sou desenvolvedor formado pela FIAP com bolsa integral e, atualmente, curso uma Pós-Graduação em Arquitetura de Sistemas .NET. Nos últimos anos, venho me dedicando ao aprimoramento contínuo das minhas habilidades técnicas e ao desenvolvimento do meu inglês visando acompanhar melhor conteúdos técnicos e colaborar em ambientes diversos.
                Tenho experiência em desenvolvimento Front-End com React.js e conhecimento no ecossistema .NET, sempre buscando entregar soluções eficientes e bem estruturadas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
  