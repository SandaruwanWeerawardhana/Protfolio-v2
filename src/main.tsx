import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import SpeedInsightsProvider from './components/providers/SpeedInsightsProvider';
import './styles/index.css';

// Analytics script is injected once for the whole app.
inject();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <SpeedInsightsProvider>
        <App />
      </SpeedInsightsProvider>
    </HelmetProvider>
  </StrictMode>,
);
