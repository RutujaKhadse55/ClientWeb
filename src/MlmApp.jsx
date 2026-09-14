import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChecklistModal from './components/ChecklistModal';

// Existing Pages
import HomePage from './pages/HomePage';
import Top10RankingsPage from './pages/Top10RankingsPage';
import EmergingCompanyPage from './pages/EmergingCompanyPage';
import FastestGrowingPage from './pages/FastestGrowingPage';
import BenefitsPage from './pages/BenefitsPage';
import HowToChoosePage from './pages/HowToChoosePage';
import MlmVsJobPage from './pages/MlmVsJobPage';
import MethodologyPage from './pages/MethodologyPage';
import AboutPage from './pages/AboutPage';
import HgrReviewPage from './pages/HgrReviewPage';

// 7 New SEO Articles Pages
import WorldTop10MlmPage from './pages/WorldTop10MlmPage';
import IndiaTop10MlmPage from './pages/IndiaTop10MlmPage';
import IndiaNewMlmPage from './pages/IndiaNewMlmPage';
import IndiaEmergingMlmPage from './pages/IndiaEmergingMlmPage';
import IndiaNewMlmStartupsPage from './pages/IndiaNewMlmStartupsPage';
import IndiaFastGrowingMlmPage from './pages/IndiaFastGrowingMlmPage';
import IndiaNewDirectSellingPage from './pages/IndiaNewDirectSellingPage';

export default function MlmApp({ initialRoute = 'home', onSwitchPortal }) {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const r = params.get('route') || params.get('page') || params.get('article');
      if (r) return r;
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) return hash;
    }
    return initialRoute;
  });
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) setCurrentRoute(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentRoute]);

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.location.hash = route;
    }
  };

  const renderPage = () => {
    switch (currentRoute) {
      // 7 New SEO Articles
      case 'world-top-10-mlm':
        return <WorldTop10MlmPage onNavigate={handleNavigate} />;
      case 'india-top-10-mlm':
        return <IndiaTop10MlmPage onNavigate={handleNavigate} />;
      case 'india-new-mlm-companies':
        return <IndiaNewMlmPage onNavigate={handleNavigate} />;
      case 'india-emerging-mlm-companies':
        return <IndiaEmergingMlmPage onNavigate={handleNavigate} />;
      case 'india-new-mlm-startups':
        return <IndiaNewMlmStartupsPage onNavigate={handleNavigate} />;
      case 'india-fast-growing-mlm-companies':
        return <IndiaFastGrowingMlmPage onNavigate={handleNavigate} />;
      case 'india-new-direct-selling-companies':
        return <IndiaNewDirectSellingPage onNavigate={handleNavigate} />;

      // Existing Pages
      case 'top-10-rankings':
        return <Top10RankingsPage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
      case 'emerging-direct-selling':
        return <EmergingCompanyPage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
      case 'fastest-growing-startup':
        return <FastestGrowingPage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
      case 'benefits-guide':
        return <BenefitsPage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
      case 'how-to-choose':
        return <HowToChoosePage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
      case 'mlm-vs-job':
        return <MlmVsJobPage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
      case 'methodology':
        return <MethodologyPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'hgr-review':
        return <HgrReviewPage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;

      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenChecklist={() => setIsChecklistOpen(true)} />;
    }
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg, #FAF8F5)' }}>
      {/* Primary Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Primary Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Shared Modals */}
      <ChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
}
