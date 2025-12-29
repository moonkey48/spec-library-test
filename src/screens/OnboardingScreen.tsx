import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mountain, Building2, Zap, Coffee, ArrowRight } from 'lucide-react';
import { H1, Body, Caption } from '../components/design-system/Typography';
import { Button } from '../components/design-system/Button';
import { PreferenceCard } from '../components/ui/PreferenceCard';

const preferences = [
  {
    id: 'nature',
    icon: <Mountain className="w-6 h-6" />,
    title: '자연 속의 여유',
    description: '조용한 숲길과 푸른 바다를 선호해요'
  },
  {
    id: 'urban',
    icon: <Building2 className="w-6 h-6" />,
    title: '도심의 활기',
    description: '복잡한 거리와 핫플레이스를 좋아해요'
  },
  {
    id: 'fast',
    icon: <Zap className="w-6 h-6" />,
    title: '빠른 템포',
    description: '많은 곳을 빠르게 돌아다니고 싶어요'
  },
  {
    id: 'slow',
    icon: <Coffee className="w-6 h-6" />,
    title: '느긋한 템포',
    description: '한 곳에서 오래 머물며 깊이 즐기고 싶어요'
  }
];

export const OnboardingScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const togglePreference = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    navigate('/group');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto pt-12"
      >
        <H1 className="mb-3">당신만의 여행 페르소나를 만들어요</H1>
        <Body className="text-gray-600 mb-8">
          선호하는 여행 스타일을 선택하면 AI가 당신의 취향을 이해해요
        </Body>

        <div className="space-y-personal mb-8">
          {preferences.map((pref, index) => (
            <motion.div
              key={pref.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PreferenceCard
                icon={pref.icon}
                title={pref.title}
                description={pref.description}
                isSelected={selected.includes(pref.id)}
                onClick={() => togglePreference(pref.id)}
              />
            </motion.div>
          ))}
        </div>

        <Caption className="text-center mb-4">
          {selected.length}개 선택됨
        </Caption>

        <Button
          fullWidth
          onClick={handleContinue}
          className="flex items-center justify-center gap-2"
        >
          다음 단계로
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};
