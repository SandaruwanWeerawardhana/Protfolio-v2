import { SpeedInsights } from '@vercel/speed-insights/react';
import { MotionConfig } from 'framer-motion';
import Layout from './components/layout/Layout';
import AnalyticsProvider from './components/providers/AnalyticsProvider';
import SEOHead from './components/seo/SEOHead';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AnalyticsProvider>
      {/* reducedMotion="user" makes every Framer animation honour the OS setting. */}
      <MotionConfig reducedMotion="user">
        <SEOHead />
        <Layout>
          <HomePage />
        </Layout>
        <SpeedInsights />
      </MotionConfig>
    </AnalyticsProvider>
  );
}

export default App;
