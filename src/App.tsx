import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { GroupScreen } from './screens/GroupScreen';
import { CoordinationScreen } from './screens/CoordinationScreen';
import { RouteScreen } from './screens/RouteScreen';
import { JourneyScreen } from './screens/JourneyScreen';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/group" element={<GroupScreen />} />
          <Route path="/coordination" element={<CoordinationScreen />} />
          <Route path="/route" element={<RouteScreen />} />
          <Route path="/journey" element={<JourneyScreen />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
