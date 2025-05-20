
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container footer-content">
        <p>&copy; {currentYear} Gabriel Marques. Todos os direitos reservados.</p>
        <p>
          Feito com <motion.span whileHover={{ scale: 1.5, rotate: [0, 15, -15, 0], color: "var(--secondary-color)" }} style={{display: 'inline-block', cursor:'default'}}>❤️</motion.span> usando Vite.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
  