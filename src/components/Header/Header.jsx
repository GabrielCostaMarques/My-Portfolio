
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    let currentSection = 'hero';
    navLinks.forEach(link => {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 70) - 50;
        if (window.scrollY >= sectionTop) {
          currentSection = link.id;
        }
      }
    });
    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
    setIsOpen(false); 
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const navItemVariants = {
    hover: { color: "var(--secondary-color)", originX: 0 },
    tap: { scale: 0.95 }
  };
  
  const logoText = "Gabriel Marques";

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open-bg' : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          onClick={() => scrollToSection('hero')}
          style={{cursor: 'pointer'}}
        >
          {logoText.split("").map((char, index) => (
            <motion.span 
              key={index}
              initial={{ opacity:0, y: -10 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              style={{display: 'inline-block'}}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <motion.li 
                key={link.id}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a 
                  onClick={() => scrollToSection(link.id)} 
                  href={`#${link.id}`}
                  className={activeLink === link.id ? 'active' : ''}
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={32} strokeWidth={2.5}/> : <Menu size={32} strokeWidth={2.5}/>}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
  