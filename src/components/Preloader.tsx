
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // If loading is complete, don't render the preloader
  if (!loading) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="name-text text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          tejas<span className="text-skyBlue">K</span>
        </motion.div>
        
        <motion.div 
          className="w-48 h-1 bg-gray-200 mx-auto overflow-hidden rounded-full"
          initial={{ width: "0%" }}
        >
          <motion.div 
            className="h-full bg-skyBlue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.8, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
