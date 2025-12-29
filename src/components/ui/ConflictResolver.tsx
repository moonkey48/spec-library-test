import { motion } from 'framer-motion';
import { ArrowRight, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { GlassPanel } from '../design-system/GlassPanel';
import { Body, Caption, AIVoice } from '../design-system/Typography';
import { Button } from '../design-system/Button';

interface Alternative {
  id: string;
  title: string;
  description: string;
  votes?: number;
}

interface ConflictResolverProps {
  alternatives: Alternative[];
  onResolve: (selectedId: string) => void;
}

export const ConflictResolver = ({ alternatives, onResolve }: ConflictResolverProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4"
    >
      <GlassPanel>
        <AIVoice className="text-gray-700 mb-4">
          두 분의 취향이 조금 다르네요! 어떤 선택지가 더 좋을까요?
        </AIVoice>
      </GlassPanel>

      <div className="space-y-consensus">
        {alternatives.map((alt, index) => (
          <motion.div
            key={alt.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassPanel
              className={`border-2 ${
                selected === alt.id
                  ? 'border-sync-teal bg-blue-50'
                  : 'border-transparent'
              }`}
              onClick={() => setSelected(alt.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Body className="font-bold mb-2">{alt.title}</Body>
                  <Caption>{alt.description}</Caption>
                </div>
                {selected === alt.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-3"
                  >
                    <ThumbsUp className="w-6 h-6 text-sync-teal" />
                  </motion.div>
                )}
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            fullWidth
            onClick={() => onResolve(selected)}
            className="flex items-center justify-center gap-2"
          >
            이 선택으로 진행하기
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};
