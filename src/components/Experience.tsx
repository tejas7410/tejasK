
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Research Intern",
    company: "ABV-IIITM Gwalior",
    period: "May 2023 - June 2023",
    description: "Developed a Next-Word Prediction Model leveraging LSTM neural networks in Keras, trained on a custom word-level tokenized corpus to simulate autocomplete functionality Built a scalable data preprocessing pipeline using NLTK for text cleaning, tokenization, and sequence encoding, ensuring efficient model training.",
    technologies: ["Python", "LSTM", "NLTK"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 h-[80vh]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 heading-highlight dark:text-white">Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">My professional journey and internships</p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-skyBlue hover:shadow-md transition-shadow duration-300 dark:bg-gray-800"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="dark:text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-sky-100 dark:bg-sky-900 text-gray-800 dark:text-gray-100 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
