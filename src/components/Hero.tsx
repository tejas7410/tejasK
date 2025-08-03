
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Laptop, Terminal, Code, Underline, Subscript } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 flex items-center h-[80vh] pt-16 overflow-hidden">
      <div className="md:px-8 container px-4 mx-auto">
        <div className="md:grid-cols-2 md:gap-12 grid items-center gap-8">
          <motion.div 
            className="md:order-1 order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p className="text-skyBlue mb-2 font-medium">Hello, I'm</p>
              <h1 className="name-text md:text-5xl lg:text-6xl dark:text-white mb-4 text-4xl font-bold">
                Tejas Kangule
              </h1>
              <h2 className="md:text-2xl dark:text-gray-300 text-xl text-gray-700">
                Backend Developer | Data Analyst | 
              </h2> <h2 className="md:text-2xl dark:text-gray-300 mb-6 text-xl text-gray-700">
               Business Analyst
              </h2>
              
              {/* <p className="dark:text-gray-400 max-w-lg mb-8 text-gray-600">
                A dedicated developer passionate about crafting efficient, scalable web solutions and solving complex problems through clean code and continuous learning.
              </p> */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-skyBlue hover:bg-sky-600 text-white transition-colors"
                  onClick={() => window.open('https://drive.google.com/file/d/1yRkS0uk-Kopxt5CsHFQ6BG6TBNdz0jXx/view?usp=sharing', '_blank')}
                >
                  View Resume
                </Button>
                <Button 
                  variant="outline"
                  className="border-skyBlue text-skyBlue hover:bg-sky-50 dark:hover:bg-sky-900 dark:text-skyBlue"
                  onClick={() => {
                    navigate('/contact', { replace: true });
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>
          
          <div className="md:order-2 md:justify-end flex justify-center order-1">
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
              <div className="w-80 h-80 dark:bg-gray-800 relative p-6 overflow-hidden bg-white rounded-lg shadow-xl">
                {/* Professional Developer SVG Illustration */}
                <div className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 absolute inset-0 z-0"></div>
                
                {/* Circuit pattern overlay */}
                <div className="opacity-10 pattern-circuit absolute inset-0 z-10"></div>
                
                {/* Code elements */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full">
                  <div className="w-full max-w-[290px] bg-slate-100 dark:bg-slate-800 rounded-md p-5 mb-4 shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 mr-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="dark:text-gray-300 font-mono text-xs text-left text-gray-700">
                      <div><span className="dark:text-purple-400 text-purple-600">const</span> <span className="dark:text-blue-400 text-blue-600">developer</span> = {'{'}</div>
                      <div className="pl-4"><span className="dark:text-blue-400 text-blue-600">alias</span>: <span className="dark:text-green-400 text-green-600">'Tejas.exe'</span>,</div>
                      <div className="pl-4"><span className="dark:text-blue-400 text-blue-600">motto</span>: <span className="dark:text-green-400 text-green-600">'Build. Break. Fix. Repeat.'</span></div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4 space-x-4">
                    <Terminal size={40} className="dark:text-indigo-400 text-indigo-600" strokeWidth={1.5} />
                    <Code size={40} className="text-skyBlue" strokeWidth={1.5} />
                    <Laptop size={40} className="dark:text-purple-400 text-purple-600" strokeWidth={1.5} />
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-40 h-2 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
