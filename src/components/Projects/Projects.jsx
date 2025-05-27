
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import { projectsData } from '@/data';
import './Projects.css';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projetos
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.5)"}}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="project-image-container">
                <img  className="project-image" alt={project.title} src={`${project.imageUrl}`} />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overlay-content">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="overlay-button" title="Ver ao vivo">
                        <Eye size={28} /> <span>Ver Online</span>
                      </a>
                    )}
                     {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-button" title="Ver no GitHub">
                        <Github size={28} /> <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
  