import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BourbonHub from '@/components/BourbonHub';
import Timeline from '@/components/Timeline';
import WhereToBuy from '@/components/WhereToBuy';
import Preloader from '@/components/Preloader';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <Hero />
        <BourbonHub />
        <Timeline />
        <WhereToBuy />
      </motion.div>
    </div>
  );
}
