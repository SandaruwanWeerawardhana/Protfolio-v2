'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import AnalyticsProvider from './AnalyticsProvider';
import SpeedInsightsProvider from './SpeedInsightsProvider';

interface AppProvidersProps {
  children: ReactNode;
}

/** Client-side providers shared by every App Router page. */
export function AppProviders({ children }: Readonly<AppProvidersProps>) {
  return (
    <SpeedInsightsProvider>
      <AnalyticsProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </AnalyticsProvider>
    </SpeedInsightsProvider>
  );
}

export default AppProviders;
