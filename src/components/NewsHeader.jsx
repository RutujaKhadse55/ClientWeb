import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, ShieldCheck, TrendingUp, BookOpen, Layers } from 'lucide-react';

export default function NewsHeader({ 
  currentRoute, 
  currentCategory, 
  onNavigate, 
  onNavigateCategory, 
  onSelectArticle,
  onOpenSearch, 
  onOpenNewsletter: _onOpenNewsletter 
}) {
  const [isDsOpen, setIsDsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dsRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dsRef.current && !dsRef.current.contains(event.target)) {
        setIsDsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on route/category navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentRoute, currentCategory]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = [
    { id: "all", label: "Home", isHome: true },
    { id: "MLM Companies & Rankings", label: "MLM & Rankings", isSpecialTag: true, hasDropdown: true },
    { id: "Markets", label: "Markets & IPOs" },
    { id: "Corporate", label: "Corporate Watch" },
    { id: "Startups", label: "Tech & Startups" },
    { id: "Economy", label: "Economy" },
    { id: "Explained", label: "Explained", isSpecial: true },
    { id: "Policy", label: "Policy" },
  ];

  const mlmArticles = [
    { id: "world-top-10-mlm-companies", label: "World Top 10 MLM Companies", badge: "Global" },
    { id: "india-top-10-mlm-companies", label: "India Top 10 MLM Companies", badge: "National" },
    { id: "india-top-10-new-mlm-companies", label: "India Top 20 New MLM Companies", badge: "2026 Index" },
    { id: "india-top-10-emerging-mlm-companies", label: "India Top 20 Emerging MLM Companies", badge: "2026 Index" },
    { id: "india-top-10-new-mlm-startups", label: "India Top 20 New MLM Startups", badge: "2026 Index" },
    { id: "india-top-10-fast-growing-mlm-companies", label: "India Top 20 Fast Growing MLM", badge: "2026 Index" },
    { id: "india-top-20-new-direct-selling-companies", label: "India Top 20 New Direct Selling", badge: "2026 Index" }
  ];

  return (
    <header className="site-header">
      {/* Main Masthead Branding (Clean & Uncluttered) */}
      <div className="newspaper-masthead">
        <div className="container masthead-inner">
          <span className="masthead-tagline">INDIA'S INDEPENDENT MLM INTELLIGENCE PLATFORM</span>
          
          <h1 
            className="masthead-title"
            onClick={() => onNavigate('home')}
            title="MLM Insight India — MLMInsight.org"
          >
            MLM INSIGHT <span>INDIA</span>
          </h1>
          
          <p className="masthead-subline">
            MLM Rankings + Reviews + Comparisons + New MLM Startups + Business Research + Guides
          </p>
        </div>
      </div>

      {/* Sticky Responsive Navigation Bar */}
      <nav className="category-nav-bar">
        <div className="container category-nav-inner">
          {/* Left: 3-Line Hamburger Menu Button (Three-line Bar) */}
          <button
            className="hamburger-nav-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation drawer"
            title="Open navigation menu"
          >
            <Menu size={18} strokeWidth={2.5} />
            <span className="hamburger-btn-text">Sections</span>
          </button>

          {/* Center-Left Brand Badge for Mobile/Sticky Scrolled View */}
          <div 
            className="nav-mobile-brand"
            onClick={() => onNavigate('home')}
          >
            MLM INSIGHT <span>INDIA</span>
          </div>

          {/* Desktop Horizontal Category Links */}
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
                      onClick={() => onNavigateCategory('MLM Companies & Rankings')}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown size={12} style={{ transform: isDsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>

                    {/* Desktop Rankings Dropdown */}
                    {isDsOpen && (
                      <div 
                        onMouseLeave={() => setIsDsOpen(false)}
                        className="nav-desktop-dropdown"
                      >
                        <div className="dropdown-header">
                          <Layers size={13} style={{ marginRight: '6px' }} />
                          2026 Core Rankings &amp; Directories
                        </div>
                        {mlmArticles.map(item => (
                          <button
                            key={item.id}
                            className="dropdown-item"
                            onClick={() => {
                              setIsDsOpen(false);
                              if (onSelectArticle) {
                                onSelectArticle(item.id);
                              }
                            }}
                          >
                            <span>{item.label}</span>
                            <span className="dropdown-pill">{item.badge}</span>
                          </button>
                        ))}
                        <div className="dropdown-footer">
                          <button
                            onClick={() => {
                              setIsDsOpen(false);
                              onNavigateCategory('MLM Companies & Rankings');
                            }}
                            className="dropdown-all-btn"
                          >
                            Browse All 2026 Direct Selling Reports →
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

          {/* Right Actions: Search Button */}
          <div className="nav-right-actions">
            <button className="nav-search-btn" onClick={onOpenSearch} aria-label="Search articles">
              <Search size={15} />
              <span className="search-btn-label">Search</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Fast Responsive 3-Line Slide-out Drawer */}
      {isMobileMenuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="drawer-panel"
            onClick={e => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="drawer-header">
              <div className="drawer-brand" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}>
                MLM INSIGHT <span>INDIA</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="drawer-close-btn"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Search Button */}
            <div className="drawer-search-wrap">
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenSearch(); }}
                className="drawer-search-btn"
              >
                <Search size={15} color="#6B7280" />
                <span>Search articles, rankings &amp; companies...</span>
              </button>
            </div>

            {/* Drawer Content Scroll Area */}
            <div className="drawer-body">
              {/* Section 1: 2026 Core Rankings */}
              <div className="drawer-section">
                <div className="drawer-section-title">
                  <TrendingUp size={13} style={{ marginRight: '6px' }} />
                  2026 Core MLM &amp; Direct Selling Rankings
                </div>
                {mlmArticles.map(item => (
                  <button
                    key={item.id}
                    className="drawer-ranking-item"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (onSelectArticle) {
                        onSelectArticle(item.id);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="drawer-pill">{item.badge}</span>
                  </button>
                ))}
              </div>

              {/* Section 2: Main News Categories */}
              <div className="drawer-section">
                <div className="drawer-section-title">
                  <BookOpen size={13} style={{ marginRight: '6px' }} />
                  Editorial Desks &amp; Categories
                </div>
                <button
                  className="drawer-cat-item"
                  onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
                >
                  <span>Home Edition</span>
                  <ArrowRight size={13} color="#9CA3AF" />
                </button>
                {categories.filter(c => !c.isHome).map(cat => (
                  <button
                    key={cat.id}
                    className="drawer-cat-item"
                    onClick={() => { onNavigateCategory(cat.id); setIsMobileMenuOpen(false); }}
                  >
                    <span>{cat.label}</span>
                    <ArrowRight size={13} color="#9CA3AF" />
                  </button>
                ))}
              </div>

              {/* Section 3: Institutional Standards */}
              <div className="drawer-section">
                <div className="drawer-section-title">
                  <ShieldCheck size={13} style={{ marginRight: '6px' }} />
                  Editorial Standards &amp; Policies
                </div>
                <button
                  className="drawer-sub-link"
                  onClick={() => { onNavigate('editorial-policy'); setIsMobileMenuOpen(false); }}
                >
                  Editorial Policy &amp; Ethics Charter →
                </button>
                <button
                  className="drawer-sub-link"
                  onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
                >
                  About MLM Insight India →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ultra-Fast Responsive CSS for Navbar & 3-Line Drawer */}
      <style>{`
        /* Masthead sizing */
        .site-header {
          background: #FFFFFF;
        }

        .newspaper-masthead {
          padding: 18px 0 14px;
          text-align: center;
          border-bottom: 1px solid var(--ink-border, #E5E7EB);
          background: #FFFFFF;
        }

        .masthead-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .masthead-tagline {
          font-size: 0.68rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--accent-burgundy, #7C1D24);
          margin-bottom: 4px;
        }

        .masthead-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #111111;
          text-transform: uppercase;
          line-height: 1.05;
          cursor: pointer;
          margin: 0;
        }

        .masthead-title span {
          color: var(--accent-burgundy, #7C1D24);
          font-style: italic;
        }

        .masthead-subline {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: 0.86rem;
          color: #4B5563;
          margin: 4px 0 0;
          letter-spacing: 0.2px;
        }

        /* Sticky Navigation Bar */
        .category-nav-bar {
          background: #FFFFFF;
          border-top: 1px solid #111111;
          border-bottom: 2px solid #111111;
          position: sticky;
          top: 0;
          z-index: 1500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .category-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          min-height: 44px;
        }

        /* 3-Line Hamburger Button */
        .hamburger-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #FFFFFF;
          background: var(--accent-burgundy, #7C1D24);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.15s ease;
          flex-shrink: 0;
        }

        .hamburger-nav-btn:hover {
          background: #5E161B;
        }

        /* Mobile Brand in sticky bar */
        .nav-mobile-brand {
          display: none;
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1rem;
          font-weight: 800;
          color: #111111;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: -0.3px;
        }

        .nav-mobile-brand span {
          color: var(--accent-burgundy, #7C1D24);
          font-style: italic;
        }

        /* Desktop Category Links */
        .category-links {
          display: flex;
          align-items: center;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
        }

        .category-links::-webkit-scrollbar {
          display: none;
        }

        .cat-nav-item {
          display: inline-block;
          padding: 11px 12px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          color: #111111;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .cat-nav-item:hover {
          color: var(--accent-burgundy, #7C1D24);
          background: #FAF7F2;
        }

        .cat-nav-item.active {
          color: var(--accent-burgundy, #7C1D24);
          border-bottom-color: var(--accent-burgundy, #7C1D24);
          background: #FAF7F2;
        }

        .cat-nav-item.highlight-explained {
          color: #B45309;
          font-weight: 800;
        }

        /* Desktop Dropdown */
        .nav-desktop-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 320px;
          background: #FFFFFF;
          border: 1px solid #111111;
          border-top: 3px solid var(--accent-burgundy, #7C1D24);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          z-index: 2500;
          padding: 8px 0;
        }

        .dropdown-header {
          padding: 8px 16px;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-burgundy, #7C1D24);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #F3F4F6;
        }

        .dropdown-item {
          width: 100%;
          text-align: left;
          padding: 8px 16px;
          font-size: 0.82rem;
          color: #111111;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.12s ease;
        }

        .dropdown-item:hover {
          background: #FAF7F2;
          color: var(--accent-burgundy, #7C1D24);
        }

        .dropdown-pill {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 6px;
          background: #EFF6FF;
          color: #1E40AF;
          border-radius: 2px;
          text-transform: uppercase;
        }

        .dropdown-footer {
          border-top: 1px solid #E5E7EB;
          margin-top: 6px;
          padding: 8px 16px 2px;
        }

        .dropdown-all-btn {
          width: 100%;
          text-align: left;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--accent-burgundy, #7C1D24);
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px 0;
        }

        /* Nav Right Actions */
        .nav-right-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .nav-search-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #374151;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .nav-search-btn:hover {
          background: #E5E7EB;
          color: #111111;
        }

        /* 3-Line Fast Slide Drawer */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(2px);
          z-index: 3000;
          animation: fadeIn 0.18s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .drawer-panel {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 340px;
          max-width: 88vw;
          background: #FFFFFF;
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          animation: slideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          background: #111111;
          color: #FFFFFF;
          border-bottom: 2px solid var(--accent-burgundy, #7C1D24);
        }

        .drawer-brand {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: -0.2px;
          cursor: pointer;
        }

        .drawer-brand span {
          color: #E5A93B;
          font-style: italic;
        }

        .drawer-close-btn {
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .drawer-search-wrap {
          padding: 12px 16px;
          border-bottom: 1px solid #E5E7EB;
          background: #F9FAFB;
        }

        .drawer-search-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #D1D5DB;
          padding: 9px 12px;
          border-radius: 4px;
          cursor: pointer;
          color: #6B7280;
          font-size: 0.82rem;
          text-align: left;
        }

        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0 24px;
          -webkit-overflow-scrolling: touch;
        }

        .drawer-section {
          padding: 10px 16px 14px;
          border-bottom: 1px solid #F3F4F6;
        }

        .drawer-section-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-burgundy, #7C1D24);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
        }

        .drawer-ranking-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-align: left;
          padding: 8px 10px;
          margin-bottom: 2px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1F2937;
          background: #F9FAFB;
          border: 1px solid #F3F4F6;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.12s ease;
        }

        .drawer-ranking-item:hover {
          background: #FAF7F2;
          color: var(--accent-burgundy, #7C1D24);
          border-color: #E5E7EB;
        }

        .drawer-pill {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 6px;
          background: #EFF6FF;
          color: #1E40AF;
          border-radius: 2px;
          text-transform: uppercase;
        }

        .drawer-cat-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-align: left;
          padding: 10px 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #111111;
          background: none;
          border: none;
          border-bottom: 1px solid #F3F4F6;
          cursor: pointer;
        }

        .drawer-cat-item:hover {
          color: var(--accent-burgundy, #7C1D24);
        }

        .drawer-sub-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 6px 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #4B5563;
          background: none;
          border: none;
          cursor: pointer;
        }

        .drawer-sub-link:hover {
          color: var(--accent-burgundy, #7C1D24);
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .category-links {
            display: none;
          }
          .nav-mobile-brand {
            display: block;
          }
          .masthead-title {
            font-size: 2rem;
          }
          .masthead-subline {
            font-size: 0.78rem;
          }
          .hamburger-btn-text {
            display: none;
          }
          .search-btn-label {
            display: none;
          }
        }

        @media (max-width: 540px) {
          .newspaper-masthead {
            padding: 12px 0 10px;
          }
          .masthead-tagline {
            font-size: 0.62rem;
            letter-spacing: 1.5px;
          }
          .masthead-title {
            font-size: 1.65rem;
          }
          .masthead-subline {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
