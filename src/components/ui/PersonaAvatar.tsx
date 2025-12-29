import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Caption } from '../design-system/Typography';

interface PersonaAvatarProps {
  name: string;
  persona: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PersonaAvatar = ({
  name,
  persona,
  color,
  size = 'md'
}: PersonaAvatarProps) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10'
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className={`${sizes[size]} rounded-full flex items-center justify-center`}
        style={{ background: color }}
      >
        <User className={`${iconSizes[size]} text-white`} />
      </div>
      <div className="text-center">
        <Caption className="font-bold text-gray-900">{name}</Caption>
        <Caption className="text-xs">{persona}</Caption>
      </div>
    </motion.div>
  );
};
