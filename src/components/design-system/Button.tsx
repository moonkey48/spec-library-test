import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  className = '',
  style
}: ButtonProps) => {
  const baseStyles = 'rounded-inner px-6 py-3 font-medium touch-feedback';

  const variantStyles = {
    primary: 'bg-sync-teal text-white',
    secondary: 'gradient-discovery text-gray-900',
    ghost: 'bg-transparent border-2 border-gray-300 text-gray-900'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      style={style}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};
