// components/ScrollAnimation.js

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust these values to control the animation based on scroll position
      if (scrollY > windowHeight * 0.2) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div animate={controls}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
