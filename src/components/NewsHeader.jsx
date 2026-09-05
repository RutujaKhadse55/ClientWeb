import React from 'react';
import { Search } from 'lucide-react';

export default function NewsHeader({ 
  currentRoute, 
  currentCategory, 
  onNavigate, 
  onNavigateCategory, 
  onOpenSearch, 
  onOpenNewsletter 
}) {
  const currentDate = "Saturday, September 5, 2026";

  const categories = [
    { id: "all", label: "Home", isHome: true },
    { id: "Markets", label: "Markets & IPOs" },
    { id: "Corporate", label: "Corporate Watch" },
    { id: "Direct Selling", label: "Direct Selling", isSpecialTag: true },
    { id: "Economy", label: "Macro & Economy" },
    { id: "Startups", label: "Tech & Startups" },
    { id: "Banking", label: "Banking & Finance" },
    { id: "Policy", label: "Policy & Regs" },
    { id: "Opinion", label: "Columns & Op-Ed" },
    { id: "Explained", label: "Explained", isSpecial: true }
  ];

  return (
    <header>

      {/* Main Newspaper Masthead */}
      <div className="newspaper-masthead">
        <div className="container masthead-inner">
          <span className="masthead-tagline">JOURNALISM OF INDEPENDENCE & RIGOUR</span>
          
          <h1 
            className="masthead-title"
            onClick={() => onNavigate('home')}
            title="The Indian Business Chronicle"
          >
            THE INDIAN BUSINESS <span>CHRONICLE</span>
          </h1>
          
          <p className="masthead-subline">
            Independent Business Journalism for Corporate India, Markets & the Macroeconomy
          </p>
        </div>
      </div>

      {/* Sticky Category Navigation Bar */}
      <nav className="category-nav-bar">
        <div className="container category-nav-inner">
          <div className="category-links">
            {categories.map((cat) => {
              const isSelected = 
                (cat.isHome && currentRoute === 'home') || 
                (currentRoute === 'category' && currentCategory?.toLowerCase() === cat.id.toLowerCase());

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
