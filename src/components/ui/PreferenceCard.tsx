import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GlassPanel } from '../design-system/GlassPanel';
import { Body, Caption } from '../design-system/Typography';

interface PreferenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export const PreferenceCard = ({
  icon,
  title,
  description,
  isSelected,
  onClick
}: PreferenceCardProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <GlassPanel
        className={`relative border-2 transition-all ${
          isSelected
            ? 'border-sync-teal bg-blue-50'
            : 'border-gray-200'
        }`}
      >
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 bg-sync-teal rounded-full p-1"
          >
            <Check className="w-4 h-4 text-white" />
          </motion.div>
        )}

        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-inner ${isSelected ? 'bg-sync-teal text-white' : 'bg-gray-100'}`}>
            {icon}
          </div>
          <div className="flex-1">
            <Body className="font-bold mb-1">{title}</Body>
            <Caption>{description}</Caption>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
};
