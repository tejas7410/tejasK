
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-cream dark:bg-gray-900 py-20">
      <div className="md:px-8 container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="md:text-4xl heading-highlight dark:text-white mb-2 text-3xl font-bold">About Me</h2>
          <p className="dark:text-gray-400 mb-8 text-gray-600">Get to know my background and journey</p>
          
          <div className="dark:bg-gray-800 rounded-xl md:p-8 p-6 bg-white shadow-md">
            <div className="md:grid-cols-3 grid items-center gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="border-skyBlue dark:border-sky-600 w-48 h-48 mx-auto overflow-hidden border-4 rounded-full shadow-md">
                  <img 
                    src="https://placehold.co/300x300/skyblue/white?text=Your+Photo+Here"
                    alt="Your Photo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <p className="dark:text-gray-200 mb-4 leading-relaxed text-gray-800">
                  I'm a <span className="text-skyBlue font-medium">B.Tech + MBA</span> student currently pursuing my academic journey at <span className="font-medium">IIIT Gwalior</span>. My educational background has provided me with a unique combination of technical knowledge and business acumen.
                </p>
                
                <p className="dark:text-gray-200 leading-relaxed text-gray-800">
                  I'm passionate about full stack development and enjoy building scalable, practical applications that solve real-world challenges. My focus is on creating tech that not only works, but also delivers value in a business context.
                </p>
              </div>
            </div>
            
            <p className="dark:text-gray-200 leading-relaxed text-gray-800">
             Driven by curiosity and innovation, I'm especially interested in how emerging technologies can reshape industries and unlock new avenues for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
