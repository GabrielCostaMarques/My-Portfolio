
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github as GithubIcon, Send } from 'lucide-react';
import { contactInfo } from '@/data';
import './Contact.css';

const iconComponents = {
  Linkedin: Linkedin,
  Github: GithubIcon,
};

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariantsLeft}
          >
            Contato
          </motion.h2>
          <div className="contact-content-wrapper">
            <motion.div 
              className="contact-info"
              variants={itemVariantsLeft}
            >
              <p className="contact-intro">
                Estou sempre aberto a novas oportunidades, projetos interessantes e colaborações. 
                Se você tem alguma ideia ou apenas quer dizer olá, não hesite em me contatar!
              </p>
              <div className="contact-details">
                <motion.div className="contact-item" whileHover={{x:5}}>
                  <Mail size={22} className="contact-icon" />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </motion.div>
                {contactInfo.phone && (
                  <motion.div className="contact-item" whileHover={{x:5}}>
                    <Phone size={22} className="contact-icon" />
                    <span>{contactInfo.phone}</span>
                  </motion.div>
                )}
              </div>
              <div className="social-links-contact">
                <p>Conecte-se comigo:</p>
                <div className="social-icons-wrapper">
                  {contactInfo.socials.map((social) => {
                    const IconComponent = iconComponents[social.icon];
                    return IconComponent ? (
                      <motion.a 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={social.name}
                        whileHover={{ scale: 1.0, y: -1.5, color: social.name === 'LinkedIn' ? '#0A66C2' : '#C9510C' }}
                        transition={{ type: 'spring', stiffness: 600 }}
                        className="social-icon-link"
                      >
                        <IconComponent size={28} />
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-placeholder"
              variants={itemVariantsRight}
            >
               <img className="contact-image-decorative" src="\perfil_portifolio.png" alt="" />
               <p className="form-placeholder-text">Ou me envie uma mensagem direta!</p>
               <motion.button 
                className="button contact-send-button"
                
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = `mailto:${contactInfo.email}?subject=Contato%20via%20Portfólio`}
               >
                 <Send size={20}/> Enviar E-mail
               </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
  