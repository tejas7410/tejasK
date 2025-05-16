
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold name-text">
              tejas<span className="text-skyBlue">K</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer | Business Strategist</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/tejaskangule" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-skyBlue transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/tejaskangule" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-skyBlue transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:tejaskangule@example.com"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-skyBlue transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tejas Kangule. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
