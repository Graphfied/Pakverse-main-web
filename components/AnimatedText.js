// components/AnimatedText.js

import { motion } from 'framer-motion';

const AnimatedText = ({ children }) => {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut"
    }
  };

  return (
    <motion.div initial={{ y: -10 }} animate={{ y: 10 }} transition={bounceTransition}>
      {children}
    </motion.div>
  );
};

export default AnimatedText;
