
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
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
  