
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Thread",
    description: "A social discussion platform for engaging conversations and community building",
    techStack: ["Next.js", "Clerk", "MongoDB"],
    githubUrl: "https://github.com/tejaskangule/thread"
  },
  {
    title: "PriceTrackr",
    description: "A price-tracking tool that uses web scraping to monitor product prices across e-commerce platforms",
    techStack: ["Next.js", "Bright Data", "MongoDB"],
    githubUrl: "https://github.com/tejaskangule/pricetrackr"
  },
  {
    title: "LiveWrite",
    description: "Real-time collaborative writing tool allowing multiple users to edit documents simultaneously",
    techStack: ["Next.js", "TypeScript", "Liveblocks"],
    githubUrl: "https://github.com/tejaskangule/livewrite"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 h-[80vh]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 heading-highlight dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Key projects that showcase my technical skills</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
            >
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
                <CardDescription className="dark:text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-sky-100 dark:bg-sky-900 text-gray-800 dark:text-gray-100 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline"
                  className="w-full flex items-center gap-2 border-skyBlue text-skyBlue hover:bg-sky-50 dark:hover:bg-sky-900"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={18} />
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
