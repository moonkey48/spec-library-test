import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassPanel = ({ children, className = '', onClick }: GlassPanelProps) => {
  return (
    <motion.div
      className={`glass-surface rounded-main p-6 ${onClick ? 'touch-feedback cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
};
