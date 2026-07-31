
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-cream dark:bg-gray-900 py-20 min-h-screen">
      <div className="md:px-8 container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="md:text-4xl heading-highlight dark:text-white mb-2 text-3xl font-bold">About Me</h2>
          <p className="dark:text-gray-400 mb-8 text-gray-600">Journey from a Student to a developer</p>
          
          <div className="dark:bg-gray-800 rounded-xl md:p-8 p-6 bg-white shadow-md">
            <div className="md:grid-cols-3 grid items-center gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="border-skyBlue dark:border-sky-600 w-48 h-48 mx-auto overflow-hidden border-4 rounded-full shadow-md">
                  <img 
                    src="/Profile2.jpg"
                    alt="Your Photo"
                    className="object-cover"
                    
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <p className="dark:text-gray-200 mb-4 leading-relaxed text-gray-800">
  Hi, I'm <span className="text-skyBlue font-semibold">Tejas Kangule</span>, a
  Software Engineer with an integrated <span className="font-medium">B.Tech + MBA</span>
  degree from <span className="font-medium">ABV-IIITM Gwalior</span>. My academic
  journey gave me a strong foundation in both technology and business, but I
  discovered my passion lies in building software and solving real-world
  problems through code.
</p>

<p className="dark:text-gray-200 mb-4 leading-relaxed text-gray-800">
  Recently, I worked as a
  <span className="font-medium"> Technical Program Management Intern at MSCI</span>,
  where I collaborated across engineering teams, worked with Agile workflows,
  and gained hands-on experience in software delivery, technical documentation,
  project coordination, and stakeholder communication. The experience helped me
  understand how large-scale software products are planned, built, and shipped.
</p>

<p className="dark:text-gray-200 mb-4 leading-relaxed text-gray-800">
  Outside of work, I'm passionate about backend and full-stack development. I
  enjoy designing scalable systems, building REST APIs, working with
  microservices, databases, Docker, and cloud-native technologies, while
  continuously exploring AI-powered applications and automation.
</p>
              </div>
            </div>
            
            <p className="dark:text-gray-200 leading-relaxed text-gray-800">
             Driven by curiosity and continuous learning, I'm particularly interested in backend engineering, distributed systems, AI-powered applications, and emerging technologies that can transform the way people work and interact with software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
