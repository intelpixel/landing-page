import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import HealthcarePartners from './pages/HealthcarePartners.tsx';
import AIResearchers from './pages/AIResearchers.tsx';
import About from './pages/About.tsx';
import Pricing from './pages/Pricing.tsx';
import FAQ from './pages/FAQ.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import HIPAACompliance from './pages/HIPAACompliance.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/healthcare-partners',
    element: <HealthcarePartners />,
  },
  {
    path: '/ai-researchers',
    element: <AIResearchers />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/hipaa-compliance',
    element: <HIPAACompliance />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
