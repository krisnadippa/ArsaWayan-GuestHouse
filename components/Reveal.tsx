'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay = 0.25 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
