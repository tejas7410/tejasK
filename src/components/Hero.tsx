
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Laptop, Terminal, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p className="text-skyBlue font-medium mb-2">Hello, I'm</p>
              <h1 className="name-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white">
                Tejas Kangule
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Developer | Business Strategist | Tech Innovator
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                A tech enthusiast with a passion for creating innovative solutions,
                blending technical expertise with business acumen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-skyBlue hover:bg-sky-600 text-white transition-colors"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  View Resume
                </Button>
                <Button 
                  variant="outline"
                  className="border-skyBlue text-skyBlue hover:bg-sky-50 dark:hover:bg-sky-900 dark:text-skyBlue"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }}
            >
              <div className="w-80 h-80 rounded-lg bg-white dark:bg-gray-800 shadow-xl p-6 relative overflow-hidden">
                {/* Professional Developer SVG Illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 z-0"></div>
                
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-10 z-10 pattern-circuit"></div>
                
                {/* Code elements */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center">
                  <div className="w-full max-w-[250px] bg-slate-100 dark:bg-slate-800 rounded-md p-3 mb-4 shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-left font-mono text-xs text-gray-700 dark:text-gray-300">
                      <div><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}</div>
                      <div className="pl-4"><span className="text-blue-600 dark:text-blue-400">name</span>: <span className="text-green-600 dark:text-green-400">'Tejas'</span>,</div>
                      <div className="pl-4"><span className="text-blue-600 dark:text-blue-400">role</span>: <span className="text-green-600 dark:text-green-400">'Full Stack'</span></div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mb-4">
                    <Terminal size={40} className="text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
                    <Code size={40} className="text-skyBlue" strokeWidth={1.5} />
                    <Laptop size={40} className="text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 w-40 rounded-full"></div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-softYellow dark:bg-yellow-700 rounded-full w-24 h-24 flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <span className="font-bold text-sm text-gray-800 dark:text-white">B.Tech + MBA</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
