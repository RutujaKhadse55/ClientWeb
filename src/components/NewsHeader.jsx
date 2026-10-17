import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

export default function NewsHeader({ 
  currentRoute, 
  currentCategory, 
  onNavigate, 
  onNavigateCategory, 
  onSelectArticle,
  onOpenSearch, 
  onOpenNewsletter: _onOpenNewsletter 
}) {
  const currentDate = "Saturday, September 5, 2026";
  const [isDsOpen, setIsDsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dsRef.current && !dsRef.current.contains(event.target)) {
        setIsDsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentRoute, currentCategory]);

  const categories = [
    { id: "all", label: "Home", isHome: true },
    { id: "Markets", label: "Markets & IPOs" },
    { id: "Corporate", label: "Corporate Watch" },
    { id: "MLM Companies & Rankings", label: "MLM & Rankings", isSpecialTag: true, hasDropdown: true },
    { id: "Economy", label: "Economy" },
    { id: "Startups", label: "Tech & Startups" },
    { id: "Banking", label: "Banking" },
    { id: "Policy", label: "Policy" },
    { id: "Explained", label: "Explained", isSpecial: true }
  ];

  const mlmArticles = [
    { id: "world-top-10-mlm-companies", label: "World Top 10 MLM Companies" },
    { id: "india-top-10-mlm-companies", label: "India Top 10 MLM Companies" },
    { id: "india-top-10-new-mlm-companies", label: "India Top 10 New MLM Companies" },
    { id: "india-top-10-emerging-mlm-companies", label: "India Top 10 Emerging MLM Companies" },
    { id: "india-top-10-new-mlm-startups", label: "India Top 10 New MLM Startups" },
    { id: "india-top-10-fast-growing-mlm-companies", label: "India Top 10 Fast Growing MLM" },
    { id: "india-top-20-new-direct-selling-companies", label: "India Top 20 New Direct Selling" }
  ];

  return (
    <header>
      {/* Newspaper Top Publication Strip */}
      <div className="top-pub-strip" style={{ background: '#121212', color: '#D1D5DB', padding: '6px 0', borderBottom: '1px solid #2B3036', fontSize: '0.74rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ background: 'var(--accent-burgundy, #7C1D24)', color: '#FFFFFF', padding: '1px 6px', fontWeight: '800', fontSize: '0.68rem', letterSpacing: '0.5px' }}>
              NATIONAL EDITION
            </span>
            <span>{currentDate}</span>
            <span style={{ color: '#4B5563' }}>•</span>
            <span style={{ color: '#9CA3AF' }} className="hide-on-mobile">New Delhi, Mumbai, Bengaluru, Dholera</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.72rem' }} className="hide-on-mobile">
            <span style={{ color: '#9CA3AF' }}>Consumer Protection (Direct Selling) Rules 2021 Compliant</span>
            <span style={{ color: '#4B5563' }}>•</span>
            <span style={{ color: '#F3ECE4', fontWeight: '600' }}>Journalism of Record</span>
          </div>
        </div>
      </div>

      {/* Main Newspaper Masthead */}
      <div className="newspaper-masthead">
        <div className="container masthead-inner" style={{ position: 'relative' }}>
          <span className="masthead-tagline">INDIA'S INDEPENDENT MLM INTELLIGENCE PLATFORM</span>
          
          <h1 
            className="masthead-title"
            onClick={() => onNavigate('home')}
            title="MLM Insight India — MLMInsight.org"
            style={{ cursor: 'pointer' }}
          >
            MLM INSIGHT <span>INDIA</span>
          </h1>
          
          <p className="masthead-subline">
            MLM Rankings + Reviews + Comparisons + New MLM Startups + Business Research + Guides
          </p>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              display: 'none',
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              background: 'var(--accent-burgundy, #7C1D24)',
              border: 'none',
              color: '#FFFFFF',
              padding: '8px 10px',
              cursor: 'pointer',
              borderRadius: '2px',
              zIndex: 100
            }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Sticky Category Navigation Bar — Desktop */}
      <nav className="category-nav-bar">
        <div className="container category-nav-inner">
          <div className="category-links">
            {categories.map((cat) => {
              const normCurrentCat = (currentCategory || '').toLowerCase().replace(/[^a-z0-9]/g, '');
              const normCatId = cat.id.toLowerCase().replace(/[^a-z0-9]/g, '');
              
              const isSelected = 
                (cat.isHome && currentRoute === 'home') || 
                (currentRoute === 'category' && (
                  normCurrentCat === normCatId ||
                  (cat.hasDropdown && (normCurrentCat.includes('mlm') || normCurrentCat.includes('direct') || normCurrentCat.includes('ranking')))
                ));

              if (cat.hasDropdown) {
                return (
                  <div 
                    key={cat.id} 
                    ref={dsRef}
                    style={{ position: 'relative', display: 'inline-block' }}
                    onMouseEnter={() => setIsDsOpen(true)}
                  >
                    <button
                      className={`cat-nav-item ${isSelected ? 'active' : ''}`}
                      onClick={() => {
                        onNavigateCategory('MLM Companies & Rankings');
                      }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown size={11} style={{ transform: isDsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>

                    {isDsOpen && (
                      <div 
                        onMouseLeave={() => setIsDsOpen(false)}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          width: '320px',
                          background: '#FFFFFF',
                          border: '1px solid var(--ink-border-dark, #111111)',
                          borderTop: '3px solid var(--accent-burgundy, #7C1D24)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                          zIndex: 2500,
                          padding: '8px 0'
                        }}
                      >
                        <div style={{ padding: '6px 14px', fontSize: '0.7rem', fontWeight: '800', color: 'var(--accent-burgundy, #7C1D24)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          2026 SEO Benchmarks &amp; Rankings
                        </div>
                        {mlmArticles.map(item => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setIsDsOpen(false);
                              if (onSelectArticle) {
                                onSelectArticle(item.id);
                              }
                            }}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '7px 14px',
                              fontSize: '0.84rem',
                              color: 'var(--ink-primary, #111111)',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'block'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#FAF7F2'}
                            onMouseLeave={e => e.currentTarget.style.background = 'none'}
                          >
                            {item.label}
                          </button>
                        ))}
                        <div style={{ borderTop: '1px solid #E5E5E5', margin: '6px 0', padding: '6px 14px 2px' }}>
                          <button
                            onClick={() => {
                              setIsDsOpen(false);
                              onNavigateCategory('MLM Companies & Rankings');
                            }}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '4px 0',
                              fontSize: '0.82rem',
                              fontWeight: '800',
                              color: 'var(--accent-burgundy, #7C1D24)',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            Browse All MLM Companies &amp; Rankings →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={cat.id}
                  className={`cat-nav-item ${isSelected ? 'active' : ''} ${cat.isSpecial ? 'highlight-explained' : ''}`}
                  onClick={() => {
                    if (cat.isHome) {
                      onNavigate('home');
                    } else {
                      onNavigateCategory(cat.id);
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <button className="nav-search-btn" onClick={onOpenSearch}>
            <Search size={15} />
            <span>Search</span>
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Down Menu */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 3000,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              background: '#FFFFFF',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: '#121212', color: '#FFFFFF' }}>
              <span style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '0.5px' }}>MLM INSIGHT INDIA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '4px' }}>
                <X size={22} />
              </button>
            </div>

            {/* Search Bar */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #E5E5E5' }}>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenSearch(); }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', background: '#F8F8F8', border: '1px solid #E5E5E5', padding: '10px 14px', borderRadius: '4px', cursor: 'pointer', color: '#666666', fontSize: '0.9rem' }}
              >
                <Search size={16} />
                <span>Search articles...</span>
              </button>
            </div>

            {/* Main Nav Links */}
            <div style={{ padding: '8px 0' }}>
              <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 20px', fontSize: '0.95rem', fontWeight: '700', color: '#111111', background: 'none', border: 'none', borderBottom: '1px solid #F0F0F0', cursor: 'pointer' }}>
                🏠 Home
              </button>
              {categories.filter(c => !c.isHome).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { onNavigateCategory(cat.id); setIsMobileMenuOpen(false); }}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 20px', fontSize: '0.92rem', fontWeight: cat.hasDropdown ? '700' : '500', color: cat.hasDropdown ? 'var(--accent-burgundy, #7C1D24)' : '#333333', background: 'none', border: 'none', borderBottom: '1px solid #F0F0F0', cursor: 'pointer' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* MLM Rankings Quick Links */}
            <div style={{ padding: '12px 16px', background: '#FAF7F2', borderTop: '2px solid #111111' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--accent-burgundy, #7C1D24)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                2026 MLM Rankings
              </div>
              {mlmArticles.map(item => (
                <button
                  key={item.id}
                  onClick={() => { onSelectArticle(item.id); setIsMobileMenuOpen(false); }}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '9px 0', fontSize: '0.88rem', fontWeight: '600', color: '#111111', background: 'none', border: 'none', borderBottom: '1px solid #EEEEEE', cursor: 'pointer' }}
                >
                  → {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Inline responsive styles for mobile hamburger visibility */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle { display: block !important; }
          .category-nav-bar { display: none; }
          .hide-on-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-toggle { display: none !important; }
          .mobile-nav-overlay { display: none !important; }
        }
      `}</style>
    </header>
  );
}
