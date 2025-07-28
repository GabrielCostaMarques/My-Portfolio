
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Users, Database, Code, Wrench as Tool, Briefcase,Cloud } from 'lucide-react';
import { hardSkills, softSkills } from '@/data';
import './Skills.css';

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  const categoryGroupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
  };
  
  const categoryCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 150,
        damping: 15
      },
    }),
  };

  const hardSkillCategories = [
    { title: 'Backend', skills: hardSkills.backend, icon: <Code size={24} className="category-icon-title"/> },
    { title: 'Frontend', skills: hardSkills.frontend, icon: <Code size={24} className="category-icon-title"/> },
    { title: 'Bancos de Dados', skills: hardSkills.database, icon: <Database size={24} className="category-icon-title"/> },
    { title: 'CMS & Low Code', skills: hardSkills.cmsLowCode, icon: <Briefcase size={24} className="category-icon-title"/> },
    { title: 'Cloud', skills: hardSkills.nuvem, icon: <Cloud size={24} className="category-icon-title"/> },
    { title: 'Ferramentas & Outros', skills: hardSkills.tools, icon: <Tool size={24} className="category-icon-title"/> },
  ];

  const softSkillCategories = {
    'Colaboração': softSkills.filter(s => s.area === 'Colaboração'),
    'Analítico': softSkills.filter(s => s.area === 'Analítico'),
    'Pessoal': softSkills.filter(s => s.area === 'Pessoal'),
    'Organização': softSkills.filter(s => s.area === 'Organização'),
  };


  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Habilidades
          </motion.h2>

          <motion.div 
            className="skills-group"
            variants={categoryGroupVariants}
          >
            <div className="skills-group-title-container">
                <Brain size={32} className="skills-group-icon hard-skills-icon" />
                <h3 className="skills-group-title">Hard Skills</h3>
            </div>
            <div className="skills-category-grid">
              {hardSkillCategories.map((category) => (
                <motion.div 
                  key={category.title}
                  className="skills-category-card hard-skills-card"
                  variants={categoryCardVariants}
                >
                  <h4>{category.icon}{category.title}</h4>
                  <ul>
                    {category.skills.map((skill, index) => (
                      <motion.li 
                        key={skill}
                        custom={index}
                        variants={skillItemVariants}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.8 }} 
                      >
                        <CheckCircle size={18} className="skill-icon" /> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skills-group"
            variants={categoryGroupVariants}
          >
            <div className="skills-group-title-container">
                <Users size={32} className="skills-group-icon soft-skills-icon" />
                <h3 className="skills-group-title">Soft Skills</h3>
            </div>
            <div className="skills-category-grid soft-skills-grid">
              {Object.entries(softSkillCategories).map(([area, skills]) => (
                 skills.length > 0 && (
                    <motion.div 
                    key={area}
                    className="skills-category-card soft-skills-card"
                    variants={categoryCardVariants}
                    >
                    <h4>{area}</h4>
                    <ul>
                        {skills.map((skill, index) => (
                        <motion.li 
                            key={skill.name}
                            custom={index}
                            variants={skillItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <CheckCircle size={18} className="skill-icon" /> {skill.name}
                        </motion.li>
                        ))}
                    </ul>
                    </motion.div>
                )
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
  