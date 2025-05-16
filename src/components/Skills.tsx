
import React from 'react';
import { Code, Database, GitBranch, FileCode, Server, Key, Image, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
}

const skills: Skill[] = [
  { name: "ReactJS", icon: Code },
  { name: "NodeJS", icon: Server },
  { name: "TypeScript", icon: FileCode },
  { name: "Docker", icon: Code },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Redux", icon: Code },
  { name: "C++", icon: FileCode },
  { name: "Python", icon: Code },
  { name: "SQL", icon: Database },
  { name: "JWT", icon: Key },
  { name: "Cloudinary", icon: Image },
  { name: "Clerk", icon: User }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 heading-highlight dark:text-white">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Technologies and tools I work with</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 10
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center text-skyBlue mb-3">
                <skill.icon size={36} />
              </div>
              <p className="font-medium text-sm text-center dark:text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
