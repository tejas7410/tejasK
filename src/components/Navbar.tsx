
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white dark:bg-gray-900 bg-opacity-95 shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#"
            className="text-xl md:text-2xl font-bold name-text dark:text-white"
          >
            tejas<span className="text-skyBlue">K</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/about')}
              className="font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              Projects
            </button>
            <button 
              onClick={() => navigate('/skills')}
              className="font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              Skills
            </button>
            <button 
              onClick={() => navigate('/experience')}
              className="font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              Experience
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary"
            >
              Contact Me
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col space-y-1.5"
            >
              <span className={cn(
                "block h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300",
                mobileMenuOpen && "transform rotate-45 translate-y-2"
              )}></span>
              <span className={cn(
                "block h-0.5 w-6 bg-black dark:bg-white transition-opacity duration-300",
                mobileMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "block h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300",
                mobileMenuOpen && "transform -rotate-45 -translate-y-2"
              )}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-95 shadow-md overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-80" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => navigate('/about')}
              className="py-2 font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="py-2 font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              Projects
            </button>
            <button 
              onClick={() => navigate('/skills')}
              className="py-2 font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              Skills
            </button>
            <button 
              onClick={() => navigate('/experience')}
              className="py-2 font-medium hover:text-skyBlue transition-colors dark:text-gray-200"
            >
              Experience
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary self-start"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
