import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Clock, MapPin, Volume2 } from 'lucide-react';
import { H1, Body, Caption } from '../components/design-system/Typography';
import { GlassPanel } from '../components/design-system/GlassPanel';
import { JITRecommendation } from '../components/ui/JITRecommendation';
import { Button } from '../components/design-system/Button';

export const JourneyScreen = () => {
  const [showJIT, setShowJIT] = useState(false);

  // Simulate JIT recommendation after 3 seconds
  setTimeout(() => {
    if (!showJIT) setShowJIT(true);
  }, 3000);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-driving">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto pt-12"
      >
        {/* Driving Mode - Large spacing for safety */}
        <div className="text-center mb-driving">
          <Caption className="text-gray-400 mb-2">현재 목적지</Caption>
          <H1 className="text-white mb-4">청산도 슬로길</H1>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-sync-teal" />
              <Body className="text-gray-300">3.2 km 남음</Body>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-sync-teal" />
              <Body className="text-gray-300">약 8분</Body>
            </div>
          </div>
        </div>

        {/* Large touch-friendly controls */}
        <div className="space-y-driving mb-driving">
          <GlassPanel className="bg-gray-800/80">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full gradient-discovery flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-900" />
              </div>
              <div className="flex-1">
                <Body className="text-white font-bold mb-1">경로 안내 중</Body>
                <Caption className="text-gray-400">500m 전방에서 우회전</Caption>
              </div>
              <Volume2 className="w-6 h-6 text-gray-400" />
            </div>
          </GlassPanel>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <GlassPanel className="bg-gray-800/80">
              <Caption className="text-gray-400 mb-2">다음 목적지</Caption>
              <Body className="text-white">해변가 브런치 카페</Body>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Emergency controls - very large touch targets */}
        <div className="grid grid-cols-2 gap-driving">
          <Button variant="ghost" className="h-20 text-lg">
            일시정지
          </Button>
          <Button variant="secondary" className="h-20 text-lg">
            목적지 변경
          </Button>
        </div>
      </motion.div>

      {/* JIT Recommendation Popup */}
      <JITRecommendation
        isVisible={showJIT}
        onClose={() => setShowJIT(false)}
        title="시원한 아이스크림 가게"
        reason="날씨가 많이 더워졌어요. 근처에 유명한 수제 아이스크림 가게가 있는데 들러보실래요?"
        distance="현재 위치에서 300m"
        estimatedTime="도보 4분"
        onAccept={() => {
          setShowJIT(false);
          alert('길 안내를 시작합니다!');
        }}
      />
    </div>
  );
};
