import React, { useState, useEffect } from 'react';
import NewsHeader from './components/NewsHeader';
import MarketTicker from './components/MarketTicker';
import BreakingNewsBar from './components/BreakingNewsBar';
import NewsFooter from './components/NewsFooter';

// Pages
import NewsHomePage from './pages/NewsHomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import CategoryPage from './pages/CategoryPage';
import EditorialPolicyPage from './pages/EditorialPolicyPage';

// Modals
import SearchModal from './components/SearchModal';
import NewsletterModal from './components/NewsletterModal';
import AuthorModal from './components/AuthorModal';

export default function App() {
  const getInitialState = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const articleParam = params.get('article') || params.get('route') || params.get('page');
      if (articleParam) {
        return { route: 'article', articleId: articleParam, category: 'Direct Selling' };
      }
      const catParam = params.get('category');
      if (catParam) {
        return { route: 'category', articleId: null, category: catParam };
      }
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash) {
        if (hash.startsWith('category/')) {
          return { route: 'category', articleId: null, category: hash.replace('category/', '') };
        }
        if (hash === 'editorial-policy') {
          return { route: 'editorial-policy', articleId: null, category: 'Markets' };
        }
        if (hash !== 'home') {
          return { route: 'article', articleId: hash.replace('article/', ''), category: 'Direct Selling' };
        }
      }
    }
    return { route: 'home', articleId: null, category: 'Markets' };
  };

  const initial = getInitialState();
  const [currentRoute, setCurrentRoute] = useState(initial.route);
  const [currentArticleId, setCurrentArticleId] = useState(initial.articleId);
  const [currentCategory, setCurrentCategory] = useState(initial.category);
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const state = getInitialState();
      setCurrentRoute(state.route);
      if (state.articleId) setCurrentArticleId(state.articleId);
      if (state.category) setCurrentCategory(state.category);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handlers
  const handleNavigate = (route) => {
    setCurrentRoute(route);
    if (route === 'home') {
      window.location.hash = '';
    } else if (route === 'editorial-policy') {
      window.location.hash = 'editorial-policy';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (articleId) => {
    setCurrentArticleId(articleId);
    setCurrentRoute('article');
    window.location.hash = articleId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCategory = (category) => {
    setCurrentCategory(category);
    setCurrentRoute('category');
    window.location.hash = `category/${category.toLowerCase()}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAuthor = (authorId) => {
    setSelectedAuthorId(authorId);
    setIsAuthorModalOpen(true);
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-cream, #FAF7F2)' }}>
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

      {/* Main Editorial Content Flow */}
      <main style={{ flexGrow: 1 }}>
        {currentRoute === 'home' && (
          <NewsHomePage 
            onSelectArticle={handleSelectArticle}
            onNavigateCategory={handleNavigateCategory}
            onSelectAuthor={handleSelectAuthor}
            onOpenNewsletter={() => setIsNewsletterOpen(true)}
          />
        )}

        {currentRoute === 'article' && currentArticleId && (
          <ArticleDetailPage 
            articleId={currentArticleId}
            onNavigate={handleNavigate}
            onNavigateCategory={handleNavigateCategory}
            onSelectArticle={handleSelectArticle}
            onSelectAuthor={handleSelectAuthor}
          />
        )}

        {currentRoute === 'category' && (
          <CategoryPage 
            category={currentCategory}
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            onSelectAuthor={handleSelectAuthor}
          />
        )}

        {currentRoute === 'editorial-policy' && (
          <EditorialPolicyPage 
            onNavigate={handleNavigate}
            onSelectAuthor={handleSelectAuthor}
          />
        )}
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
