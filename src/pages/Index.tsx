
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const Index = ({children}) => {
  return (
    <div className="overflow-hidden w-full h-cover">
      <Preloader />
      <Navbar />
       <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
