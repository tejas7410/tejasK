
import React from 'react';
import {SocialIcon} from "react-social-icons"

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-black dark:text-white bg-white dark:bg-gray-900 border-t-4 border-gray-200 dark:border-gray-800">
      <div className="md:px-8 container px-4 mx-auto">
        <div className="md:flex-row flex flex-col items-center justify-between">
          <div className="md:mb-0 mb-4">
            <p className="name-text text-xl font-bold">
              tejas<span className=" text-skyBlue">K</span>
            </p>
            <p className="mt-1 text-sm text-gray-700">Full Stack Developer | Tech Enthusiast</p>
          </div>
          
          <div className="flex items-center gap-4">
              <SocialIcon url='https://github.com'   />
            
              <SocialIcon url='https://linkedin.com' />
            
            
              <SocialIcon url='https://email.google.com' />
          </div>
        </div>
        
        <div className="pt-6 mt-6 text-sm text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Tejas Kangule. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
