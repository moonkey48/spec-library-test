import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { H1, Body, Caption } from '../components/design-system/Typography';
import { Button } from '../components/design-system/Button';
import { DecisionCard } from '../components/ui/DecisionCard';

const routeStops = [
  {
    id: '1',
    title: '청산도 슬로길',
    reasoning: '두 분 모두 자연을 좋아하시면서 적당한 활동을 원하시네요. 이 코스는 완벽한 균형이에요!',
    confidence: 92,
    imageSrc: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80'
  },
  {
    id: '2',
    title: '해변가 브런치 카페',
    reasoning: '오전 활동 후 여유로운 식사 시간을 가져보세요. 친구님이 좋아하실 활기찬 분위기예요.',
    confidence: 85,
    imageSrc: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80'
  },
  {
    id: '3',
    title: '선셋 전망대',
    reasoning: '하루를 마무리하기 좋은 조용한 공간이에요. 두 분의 피로도를 고려한 선택이에요.',
    confidence: 88,
    imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  }
];

export const RouteScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto pt-12"
      >
        <H1 className="mb-3">맞춤 여행 코스가 완성됐어요</H1>
        <Body className="text-gray-600 mb-2">
          AI가 두 분의 취향을 6:4 비율로 조율했어요
        </Body>
        <Caption className="flex items-center gap-2 mb-8">
          <Star className="w-4 h-4 text-yellow-500" />
          평균 신뢰도 88.3%
        </Caption>

        <div className="space-y-4 mb-20">
          {routeStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sync-teal text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < routeStops.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 my-2" />
                  )}
                </div>
                <div className="flex-1">
                  <DecisionCard {...stop} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-lg border-t border-gray-200"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <Button
            fullWidth
            onClick={() => navigate('/journey')}
            className="flex items-center justify-center gap-2"
          >
            여행 시작하기
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
