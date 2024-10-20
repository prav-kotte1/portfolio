import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  languages: ['Python', 'C/C++', 'MySQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  frameworks: ['Bootstrap', 'Node.js', 'Express.js', 'Angular.js', 'React.js'],
  devops: ['Git', 'Azure DevOps'],
  cloud: ['SQL Server', 'Google Cloud']
};

function Skills() {
  return (
    <div className="skills-page">
      {Object.keys(skills).map((category) => (
        <div className="skill-category" key={category}>
          <h2>{category}</h2>
          <div className="skills-container">
            {skills[category].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.9 } }}
                className="skill-item"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
