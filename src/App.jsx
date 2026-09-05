import React, { useState } from 'react';
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
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home', 'article', 'category', 'editorial-policy'
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('Markets');
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  // Navigation handlers
  const handleNavigate = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (articleId) => {
    setCurrentArticleId(articleId);
    setCurrentRoute('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCategory = (category) => {
    setCurrentCategory(category);
    setCurrentRoute('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAuthor = (authorId) => {
    setSelectedAuthorId(authorId);
    setIsAuthorModalOpen(true);
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Newspaper Top Header */}
      <NewsHeader 
        currentRoute={currentRoute}
        currentCategory={currentCategory}
        onNavigate={handleNavigate}
        onNavigateCategory={handleNavigateCategory}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      {/* Live Market Ticker Strip */}
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
