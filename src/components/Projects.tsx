import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
// Your Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Github imports...

type Project = {
  name: string;
  description: string;
  html_url: string;
  topics?: string[];     // Optional, if you want to display GitHub 
  homepage?: string;     // Optional, if you want to display project
};

const allowed = ["utube_backend", "unilib", "avenyx", "pricetck", "ecommerce-business-analytics","bloggers"]; // Lowercase, as in repo names

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/tejas7410/repos")
      .then((res) => res.json())
      .then((data) => {
        setProjects(
          data.filter((p: any) => allowed.includes(p.name.toLowerCase()))
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
   <section id="projects" className="py-20 bg-white dark:bg-gray-900 min-h-[80vh]">
  <div className="container mx-auto px-4 md:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-highlight dark:text-white text-center">
      Projects
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center">
      Key projects that showcase my technical skills
    </p>

    {loading ? (
      <p className="text-center text-gray-500 dark:text-gray-400">Loading projects...</p>
    ) : (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
            style={{ minHeight: 380 }}
          >
            {/* GitHub logo at top center */}
            <div className="flex justify-center mt-6">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="h-10 w-10 rounded-full bg-white shadow-md"
              />
            </div>
            <CardHeader className="px-6 pt-4 pb-2">
              <CardTitle className="text-xl dark:text-white text-center font-semibold">
                {project.name}
              </CardTitle>
              <CardDescription className="dark:text-gray-300 mt-2 text-center text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-6 pb-2">
              {/* Tags centered with spacing */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.topics?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-sky-100 dark:bg-sky-900 text-gray-800 dark:text-gray-100 text-xs font-medium px-3 py-1 rounded-full select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-6 pt-2 pb-6 mt-auto flex flex-col gap-2">
  {/* Show Website button if available */}
  {project.homepage && project.homepage.trim() !== "" && (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-2 border-emerald-400 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900 font-semibold shadow"
      onClick={() => window.open(project.homepage, "_blank")}
    >
      {/* Globe SVG icon */}
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M2 12h20" stroke="currentColor" strokeWidth={2} />
        <path d="M12 2c2.21 3.788 2.21 15.434 0 19.222M12 2C9.79 5.788 9.79 17.434 12 21.222" stroke="currentColor" strokeWidth={2} />
      </svg>
      Visit Website
    </Button>
  )}

  {/* Always show GitHub button */}
  <Button
    variant="outline"
    className="w-full flex items-center justify-center gap-2 border-sky-400 text-sky-600 hover:bg-sky-50 dark:border-sky-700 dark:text-sky-300 dark:hover:bg-sky-900 font-semibold shadow"
    onClick={() => window.open(project.html_url, "_blank")}
  >
    {/* GitHub icon SVG */}
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205
           11.387.6.111.82-.258.82-.577 0-.286-.011-1.234-.017
           -2.237-3.338.728-4.042-1.608-4.042-1.608-.546-1.387
           -1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
           1.205.085 1.84 1.248 1.84 1.248 1.07 1.835 2.809 1.305
           3.495.998.109-.775.418-1.305.762-1.605-2.665-.304-5.467
           -1.335-5.467-5.93 0-1.309.467-2.382 1.235-3.221-.124-.303
           -.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0
           013.003-.404c1.018.004 2.045.138 3.004.404 2.291-1.552
           3.297-1.23 3.297-1.23.653 1.654.242 2.873.119 3.176.77.839
           1.233 1.912 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921
           .43.372.823 1.102.823 2.222 0 1.606-.014 2.899-.014 3.293
           0 .32.218.694.825.576C20.565 21.796 24 17.299 24 12
           24 5.373 18.627 0 12 0z"
      />
    </svg>
    View on GitHub
  </Button>
</CardFooter>

          </Card>
        ))}
      </div>
    )}
  </div>
</section>

  );
};

export default Projects;
