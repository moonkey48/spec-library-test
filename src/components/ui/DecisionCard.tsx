import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GlassPanel } from '../design-system/GlassPanel';
import { Body, Caption, AIVoice } from '../design-system/Typography';

interface DecisionCardProps {
  title: string;
  reasoning: string;
  confidence: number;
  imageSrc?: string;
  onClick?: () => void;
}

export const DecisionCard = ({
  title,
  reasoning,
  confidence,
  imageSrc,
  onClick
}: DecisionCardProps) => {
  const isHighConfidence = confidence >= 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <GlassPanel className="relative overflow-hidden">
        {imageSrc && (
          <div className="h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-main">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-start gap-3 mb-3">
          <div className={`p-2 rounded-inner ${isHighConfidence ? 'bg-sync-teal' : 'bg-gray-300'}`}>
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <Body className="font-bold mb-1">{title}</Body>
            <Caption className="flex items-center gap-2">
              AI Confidence: {confidence}%
              <span
                className={`px-2 py-1 rounded text-xs ${
                  isHighConfidence ? 'bg-success-green text-white' : 'bg-gray-200'
                }`}
              >
                {isHighConfidence ? 'High' : 'Low'}
              </span>
            </Caption>
          </div>
        </div>

        <AIVoice className="text-gray-700 mt-4">
          {reasoning}
        </AIVoice>
      </GlassPanel>
    </motion.div>
  );
};
