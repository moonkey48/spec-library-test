import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { H1, Body } from '../components/design-system/Typography';
import { ConflictResolver } from '../components/ui/ConflictResolver';

const alternatives = [
  {
    id: 'option1',
    title: '한적한 숲속 액티비티',
    description: '조용한 분위기에서 즐기는 트레킹과 집라인 (두 분의 취향 교집합)'
  },
  {
    id: 'option2',
    title: '해변가 서핑 스팟',
    description: '활동적인 경험 중심의 선택 (친구님 선호도 우선)'
  },
  {
    id: 'option3',
    title: '전망 좋은 카페 투어',
    description: '여유로운 휴식 중심의 선택 (나의 선호도 우선)'
  }
];

export const CoordinationScreen = () => {
  const navigate = useNavigate();

  const handleResolve = () => {
    setTimeout(() => {
      navigate('/route');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto pt-12"
      >
        <H1 className="mb-3">AI가 취향을 조율하고 있어요</H1>
        <Body className="text-gray-600 mb-8">
          여러분의 선호도가 조금 다르네요. 어떤 방향으로 갈까요?
        </Body>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ConflictResolver
            alternatives={alternatives}
            onResolve={handleResolve}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
