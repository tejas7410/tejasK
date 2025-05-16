
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 heading-highlight dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Get to know my background and journey</p>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-skyBlue dark:border-sky-600 shadow-md">
                  <img 
                    src="https://placehold.co/300x300/skyblue/white?text=Your+Photo+Here"
                    alt="Your Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  I'm a <span className="font-medium text-skyBlue">B.Tech + MBA</span> student currently pursuing my academic journey at <span className="font-medium">IIIT Gwalior</span>. My educational background has provided me with a unique combination of technical knowledge and business acumen.
                </p>
                
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  I'm passionate about building innovative tech solutions that solve real-world problems. By merging my technical skills in full stack development with my understanding of business strategy, I strive to create products that are not only technologically sound but also commercially viable.
                </p>
              </div>
            </div>
            
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              My goal is to leverage my diverse skill set to drive technological innovation while ensuring business growth. I'm particularly interested in how emerging technologies can transform industries and create new opportunities for businesses to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
