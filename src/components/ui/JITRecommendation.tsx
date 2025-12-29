import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock } from 'lucide-react';
import { GlassPanel } from '../design-system/GlassPanel';
import { Body, Caption, AIVoice } from '../design-system/Typography';
import { Button } from '../design-system/Button';

interface JITRecommendationProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  reason: string;
  distance: string;
  estimatedTime: string;
  onAccept: () => void;
}

export const JITRecommendation = ({
  isVisible,
  onClose,
  title,
  reason,
  distance,
  estimatedTime,
  onAccept
}: JITRecommendationProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-50"
        >
          <GlassPanel className="gradient-discovery relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white/80"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <Caption className="text-xs uppercase tracking-wide mb-2">
                적시 추천 (Just-in-Time)
              </Caption>
              <Body className="font-bold mb-3">{title}</Body>
              <AIVoice className="text-gray-800">{reason}</AIVoice>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <Caption>{distance}</Caption>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <Caption>{estimatedTime}</Caption>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" onClick={onClose} className="flex-1">
                다음에
              </Button>
              <Button onClick={onAccept} className="flex-1">
                길 안내 시작
              </Button>
            </div>
          </GlassPanel>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
