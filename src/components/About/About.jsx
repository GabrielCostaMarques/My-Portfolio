
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
              <img  className="about-image" alt="Gabriel Marques trabalhando em um projeto de codificação" src="https://images.unsplash.com/photo-1505975297569-3e017ea9436d" />
            </motion.div>
            <motion.div 
              className="about-text"
              variants={itemVariants}
            >
              <p>
                Olá! Sou Gabriel Marques, um desenvolvedor apaixonado por criar soluções tecnológicas que impactam positivamente. Com experiência em desenvolvimento Full Stack, meu foco é construir aplicações robustas, escaláveis e com interfaces intuitivas.
              </p>
              <p>
                Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por trás das telas, e rapidamente se tornou uma paixão. Tenho um forte background em tecnologias .NET para o backend e React para o frontend, mas estou sempre explorando novas ferramentas e frameworks para aprimorar minhas habilidades.
              </p>
              <p>
                Acredito que a colaboração e a comunicação são chaves para o sucesso de qualquer projeto. Gosto de trabalhar em equipe, compartilhar conhecimento e enfrentar desafios complexos que me permitam crescer profissionalmente e pessoalmente.
              </p>
              <p>
                Fora do código, gosto de explorar novas tecnologias, ler sobre inteligência artificial e praticar esportes ao ar livre.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
  