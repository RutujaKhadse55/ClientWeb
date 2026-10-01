import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

// Layout & Global Components
import NewsHeader from './components/NewsHeader';
import MarketTicker from './components/MarketTicker';
import BreakingNewsBar from './components/BreakingNewsBar';
import NewsFooter from './components/NewsFooter';

// Core Pages
import NewsHomePage from './pages/NewsHomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import CategoryPage from './pages/CategoryPage';
import EditorialPolicyPage from './pages/EditorialPolicyPage';

// MLM & Direct Selling Rankings & Education Pages
import HgrReviewPage from './pages/HgrReviewPage';
import Top10RankingsPage from './pages/Top10RankingsPage';
import EmergingCompanyPage from './pages/EmergingCompanyPage';
import FastestGrowingPage from './pages/FastestGrowingPage';
import BenefitsPage from './pages/BenefitsPage';
import HowToChoosePage from './pages/HowToChoosePage';
import MlmVsJobPage from './pages/MlmVsJobPage';
import MethodologyPage from './pages/MethodologyPage';
import AboutPage from './pages/AboutPage';

// 7 SEO Articles Pages
import WorldTop10MlmPage from './pages/WorldTop10MlmPage';
import IndiaTop10MlmPage from './pages/IndiaTop10MlmPage';
import IndiaNewMlmPage from './pages/IndiaNewMlmPage';
import IndiaEmergingMlmPage from './pages/IndiaEmergingMlmPage';
import IndiaNewMlmStartupsPage from './pages/IndiaNewMlmStartupsPage';
import IndiaFastGrowingMlmPage from './pages/IndiaFastGrowingMlmPage';
import IndiaNewDirectSellingPage from './pages/IndiaNewDirectSellingPage';

// Interactive Modals
import SearchModal from './components/SearchModal';
import NewsletterModal from './components/NewsletterModal';
import AuthorModal from './components/AuthorModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedAuthorId, setSelectedAuthorId] = useState(null);

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  // Hash & Query backward compatibility handler
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check old hash routes e.g. #india-top-10-emerging-mlm-companies
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (hash) {
      if (hash.startsWith('category/')) {
        const cat = hash.replace('category/', '');
        navigate(`/category/${cat}`, { replace: true });
      } else if (hash === 'editorial-policy') {
        navigate('/editorial-policy', { replace: true });
      } else if (hash === 'hgr-review' || hash === 'hgr-corporation-review') {
        navigate('/hgr-review', { replace: true });
      } else if (hash === 'emerging-direct-selling') {
        navigate('/emerging-direct-selling', { replace: true });
      } else if (hash === 'fastest-growing-startup') {
        navigate('/fastest-growing-startup', { replace: true });
      } else if (hash === 'top-10-rankings') {
        navigate('/top-10-rankings', { replace: true });
      } else if (hash !== 'home') {
        const artId = hash.replace('article/', '');
        navigate(`/article/${artId}`, { replace: true });
      }
    }

    // Check query params e.g. ?article=... or ?route=...
    const params = new URLSearchParams(window.location.search);
    const artParam = params.get('article') || params.get('route') || params.get('page');
    if (artParam) {
      navigate(`/article/${artParam}`, { replace: true });
    }
    const catParam = params.get('category');
    if (catParam) {
      const slug = catParam.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      navigate(`/category/${slug}`, { replace: true });
    }
  }, [navigate]);

  // Derived current route for header active highlighting
  const path = location.pathname;
  let currentRoute = 'home';
  let currentCategory = 'Markets';

  if (path.startsWith('/article')) {
    currentRoute = 'article';
    currentCategory = 'MLM Companies & Rankings';
  } else if (path.startsWith('/category')) {
    currentRoute = 'category';
    const sub = path.replace('/category/', '');
    currentCategory = sub ? sub.replace(/-/g, ' ').replace(/\band\b/g, '&') : 'Markets';
  } else if (path === '/editorial-policy') {
    currentRoute = 'editorial-policy';
  } else if (path.includes('mlm') || path.includes('rank') || path.includes('hgr') || path.includes('direct-selling')) {
    currentCategory = 'MLM Companies & Rankings';
  }

  // Navigation handlers for child components
  const handleNavigate = (route) => {
    if (!route || route === 'home' || route === '/') {
      navigate('/');
    } else if (route.startsWith('/')) {
      navigate(route);
    } else {
      navigate(`/${route}`);
    }
  };

  const handleSelectArticle = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const handleNavigateCategory = (category) => {
    const norm = (category || '').toLowerCase();
    const finalCategory = (norm.includes('mlm') || norm.includes('direct') || norm.includes('rank')) 
      ? 'mlm-companies-and-rankings' 
      : category.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    navigate(`/category/${finalCategory}`);
  };

  const handleSelectAuthor = (authorId) => {
    setSelectedAuthorId(authorId);
    setIsAuthorModalOpen(true);
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-cream, #FAF7F2)' }}>
      <ScrollToTop />

      {/* Newspaper Top Header with Category Navigation */}
      <NewsHeader 
        currentRoute={currentRoute}
        currentCategory={currentCategory}
        onNavigate={handleNavigate}
        onNavigateCategory={handleNavigateCategory}
        onSelectArticle={handleSelectArticle}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      {/* Live Dalal Street & Global Market Ticker Strip */}
      <MarketTicker />

      {/* Breaking News Flash Strip */}
      <BreakingNewsBar 
        onSelectHeadline={() => {
          handleSelectArticle('tata-semiconductor-dholera-expansion');
        }} 
      />

      {/* Main Editorial Content Flow with Real Routes */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <NewsHomePage 
                onSelectArticle={handleSelectArticle}
                onNavigateCategory={handleNavigateCategory}
                onSelectAuthor={handleSelectAuthor}
                onOpenNewsletter={() => setIsNewsletterOpen(true)}
              />
            } 
          />

          {/* Dynamic Article Detail Route */}
          <Route 
            path="/article/:articleId" 
            element={
              <ArticleDetailPage 
                onNavigate={handleNavigate}
                onNavigateCategory={handleNavigateCategory}
                onSelectArticle={handleSelectArticle}
                onSelectAuthor={handleSelectAuthor}
              />
            } 
          />

          {/* Dynamic Category Route */}
          <Route 
            path="/category/:categorySlug" 
            element={
              <CategoryPage 
                onNavigate={handleNavigate}
                onSelectArticle={handleSelectArticle}
                onSelectAuthor={handleSelectAuthor}
              />
            } 
          />

          {/* Editorial Policy & Standards */}
          <Route 
            path="/editorial-policy" 
            element={
              <EditorialPolicyPage 
                onNavigate={handleNavigate}
                onSelectAuthor={handleSelectAuthor}
              />
            } 
          />

          {/* Dedicated HGR Review Route for Google Ranking */}
          <Route 
            path="/hgr-review" 
            element={
              <HgrReviewPage 
                onNavigate={handleNavigate}
              />
            } 
          />
          <Route 
            path="/hgr-corporation-review" 
            element={<Navigate to="/hgr-review" replace />} 
          />
          <Route 
            path="/article/hgr-corporation-review" 
            element={<Navigate to="/hgr-review" replace />} 
          />

          {/* High-Intent SEO Rankings Pages */}
          <Route 
            path="/top-10-rankings" 
            element={<Top10RankingsPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings" 
            element={<Top10RankingsPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/top-10-mlm-companies-india" 
            element={<IndiaTop10MlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/emerging-mlm-companies-india" 
            element={<IndiaEmergingMlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/fastest-growing-mlm-companies-india" 
            element={<IndiaFastGrowingMlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/new-direct-selling-companies-india" 
            element={<IndiaNewDirectSellingPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/new-mlm-startups-india" 
            element={<IndiaNewMlmStartupsPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/new-mlm-companies-india" 
            element={<IndiaNewMlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/rankings/world-top-10-mlm-companies" 
            element={<WorldTop10MlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/emerging-direct-selling" 
            element={<EmergingCompanyPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/fastest-growing-startup" 
            element={<FastestGrowingPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/benefits-guide" 
            element={<BenefitsPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/how-to-choose" 
            element={<HowToChoosePage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/mlm-vs-job" 
            element={<MlmVsJobPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/methodology" 
            element={<MethodologyPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onNavigate={handleNavigate} />} 
          />

          {/* Direct 7 SEO Ranking Article Routes */}
          <Route 
            path="/world-top-10-mlm" 
            element={<WorldTop10MlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/india-top-10-mlm" 
            element={<IndiaTop10MlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/india-new-mlm-companies" 
            element={<IndiaNewMlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/india-emerging-mlm-companies" 
            element={<IndiaEmergingMlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/india-new-mlm-startups" 
            element={<IndiaNewMlmStartupsPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/india-fast-growing-mlm-companies" 
            element={<IndiaFastGrowingMlmPage onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/india-new-direct-selling-companies" 
            element={<IndiaNewDirectSellingPage onNavigate={handleNavigate} />} 
          />

          {/* 404 Catch-All -> redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Multi-Column Newspaper Footer */}
      <NewsFooter 
        onNavigate={handleNavigate}
        onNavigateCategory={handleNavigateCategory}
        onSelectArticle={handleSelectArticle}
      />

      {/* Interactive Modals */}
      {isSearchOpen && (
        <SearchModal 
          onClose={() => setIsSearchOpen(false)}
          onSelectArticle={handleSelectArticle}
        />
      )}

      {isNewsletterOpen && (
        <NewsletterModal 
          onClose={() => setIsNewsletterOpen(false)}
        />
      )}

      {isAuthorModalOpen && selectedAuthorId && (
        <AuthorModal 
          authorId={selectedAuthorId}
          onClose={() => {
            setIsAuthorModalOpen(false);
            setSelectedAuthorId(null);
          }}
          onSelectArticle={handleSelectArticle}
        />
      )}
    </div>
  );
}
