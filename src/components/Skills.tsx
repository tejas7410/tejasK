
import React from 'react';
import {
  SiSpringboot,
  SiDocker,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiElasticsearch,
  SiGit,
  SiNodedotjs,
  SiFastapi,
  SiTailwindcss,
  SiRedux,
  SiKubernetes,
  SiNginx,
  SiPostman,
  SiSwagger,
  SiJira
  
} from "react-icons/si";
import { Server, Key } from "lucide-react";
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: SiSpringboot },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: Server },
      { name: "JWT", icon: Key },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases & Messaging",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Nginx", icon: SiNginx },
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "Jira", icon: SiJira },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 heading-highlight dark:text-white">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Technologies and tools I work with</p>
        
        <div className="space-y-10">
  {skillCategories.map((category, categoryIndex) => (
    <div key={category.title}>
      <h3 className="text-2xl font-semibold text-skyBlue mb-5">
        {category.title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: (categoryIndex * 0.1) + (index * 0.05),
            }}
            viewport={{ once: true }}
          >
            <div className="text-5xl text-skyBlue mb-4">
              <skill.icon />
            </div>

            <p className="font-medium text-center dark:text-white">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  ))}
</div>
      </div>    
    </section>
  );
};

export default Skills;
