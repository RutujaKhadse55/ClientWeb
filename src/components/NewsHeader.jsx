import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

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

  const categories = [
    { id: "all", label: "Home", isHome: true },
    { id: "Markets", label: "Markets & IPOs" },
    { id: "Corporate", label: "Corporate Watch" },
    { id: "MLM Companies & Rankings", label: "MLM Companies & Rankings", isSpecialTag: true, hasDropdown: true },
    { id: "Economy", label: "Macro & Economy" },
    { id: "Startups", label: "Tech & Startups" },
    { id: "Banking", label: "Banking & Finance" },
    { id: "Policy", label: "Policy & Regs" },
    { id: "Opinion", label: "Columns & Op-Ed" },
    { id: "Explained", label: "Explained", isSpecial: true }
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
            <span style={{ color: '#9CA3AF' }}>New Delhi, Mumbai, Bengaluru, Dholera</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.72rem' }}>
            <span style={{ color: '#9CA3AF' }}>Consumer Protection (Direct Selling) Rules 2021 Compliant</span>
            <span style={{ color: '#4B5563' }}>•</span>
            <span style={{ color: '#F3ECE4', fontWeight: '600' }}>Journalism of Record</span>
          </div>
        </div>
      </div>

      {/* Main Newspaper Masthead */}
      <div className="newspaper-masthead">
        <div className="container masthead-inner">
          <span className="masthead-tagline">JOURNALISM OF INDEPENDENCE &amp; RIGOUR</span>
          
          <h1 
            className="masthead-title"
            onClick={() => onNavigate('home')}
            title="The Indian Business Chronicle"
            style={{ cursor: 'pointer' }}
          >
            THE INDIAN BUSINESS <span>CHRONICLE</span>
          </h1>
          
          <p className="masthead-subline">
            Independent Business Journalism for Corporate India, Markets &amp; the Macroeconomy
          </p>
        </div>
      </div>

      {/* Sticky Category Navigation Bar */}
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
                        {[
                          { id: "world-top-10-mlm-companies", label: "World Top 10 MLM Companies" },
                          { id: "india-top-10-mlm-companies", label: "India Top 10 MLM Companies" },
                          { id: "india-top-10-new-mlm-companies", label: "India Top 10 New MLM Companies" },
                          { id: "india-top-10-emerging-mlm-companies", label: "India Top 10 Emerging MLM Companies" },
                          { id: "india-top-10-new-mlm-startups", label: "India Top 10 New MLM Startups" },
                          { id: "india-top-10-fast-growing-mlm-companies", label: "India Top 10 Fast Growing MLM" },
                          { id: "india-top-10-new-direct-selling-companies", label: "India Top 10 New Direct Selling" }
                        ].map(item => (
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
    </header>
  );
}
