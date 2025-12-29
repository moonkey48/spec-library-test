import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { H1, Body, AIVoice } from '../components/design-system/Typography';
import { Button } from '../components/design-system/Button';
import { GlassPanel } from '../components/design-system/GlassPanel';
import { PersonaAvatar } from '../components/ui/PersonaAvatar';

const mockMembers = [
  { name: '나', persona: '느긋한 탐험가', color: '#1275FF' },
  { name: '친구', persona: '활동적인 탐험가', color: '#36FCDE' }
];

export const GroupScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto pt-12"
      >
        <H1 className="mb-3">함께 떠날 동승자를 초대해요</H1>
        <Body className="text-gray-600 mb-8">
          여행 메이트를 추가하면 AI가 취향을 조율해드릴게요
        </Body>

        <GlassPanel className="mb-6">
          <AIVoice className="text-gray-700">
            두 분의 취향이 교차하는 지점을 찾아볼게요!
          </AIVoice>
        </GlassPanel>

        <div className="flex justify-around mb-8">
          {mockMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.2, type: 'spring' }}
            >
              <PersonaAvatar {...member} size="lg" />
            </motion.div>
          ))}
        </div>

        <Button
          fullWidth
          variant="secondary"
          className="mb-4 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          동승자 추가하기
        </Button>

        <Button
          fullWidth
          onClick={() => navigate('/coordination')}
          className="flex items-center justify-center gap-2"
        >
          취향 조율 시작하기
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};
