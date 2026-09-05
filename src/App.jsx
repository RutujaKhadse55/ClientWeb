import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import Top10RankingsPage from './pages/Top10RankingsPage';
import EmergingCompanyPage from './pages/EmergingCompanyPage';
import FastestGrowingPage from './pages/FastestGrowingPage';
import BenefitsPage from './pages/BenefitsPage';
import HowToChoosePage from './pages/HowToChoosePage';
import MlmVsJobPage from './pages/MlmVsJobPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      {/* Unified Sharp Navigation */}
      <Navbar 
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content Flow */}
      <main>
        {currentRoute === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'top-10-rankings' && (
          <Top10RankingsPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'emerging-direct-selling' && (
          <EmergingCompanyPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'fastest-growing-startup' && (
          <FastestGrowingPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'benefits-guide' && (
          <BenefitsPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'how-to-choose' && (
          <HowToChoosePage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'mlm-vs-job' && (
          <MlmVsJobPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Unified Sharp Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
