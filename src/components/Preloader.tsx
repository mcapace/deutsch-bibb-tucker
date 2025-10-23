'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-deep-black via-oak-brown/20 to-deep-black flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/assets/images/wood-texture.jpg')] opacity-5 bg-cover bg-center" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-amber-600/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-brown-600/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            type: 'spring',
            bounce: 0.4,
          }}
          className="mb-12"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-white font-bold text-3xl">D</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Deutsch Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-bourbon-amber text-sm font-medium tracking-widest uppercase"
          >
            The Bourbon Hub
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-8">
          <div className="bg-gray-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-amber-600/20">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-amber-300 text-sm mt-3 font-medium"
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-2"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-amber-200 text-lg font-medium"
          >
            Discovering Your Pour...
          </motion.p>
          <motion.p
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="text-amber-300/70 text-sm"
          >
            Where innovation meets heritage
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center space-x-2 mt-8"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
              className="w-2 h-2 bg-amber-500 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
