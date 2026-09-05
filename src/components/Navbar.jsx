import React from 'react';
import { BookOpen, Search, Trophy, TrendingUp, Layers, HelpCircle, Compass } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate }) {
  return (
    <>
      {/* Top Publication Notice Bar */}
      <div className="top-notice-bar">
        <div className="container top-notice-flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="notice-badge">Special Report</span>
            <span>Indian Direct Selling & Multi-Level Marketing Industry Research • 2026 Edition</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Compliant with Direct Selling Rules 2021</span>
            <span style={{ color: '#D5DFDC' }}>|</span>
            <span style={{ color: '#F3ECE4', fontWeight: '500' }}>Independent Editorial Analysis</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="site-navbar">
        <div className="container nav-inner">
          {/* Brand */}
          <div className="brand-header" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <span className="brand-title">DirectSelling<span>Journal</span></span>
            <span className="brand-subtitle">India Independent Business & MLM Index</span>
          </div>

          {/* Nav Links */}
          <nav className="nav-links">
            <button 
              className={`nav-link-btn ${currentRoute === 'home' ? 'active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link-btn ${currentRoute === 'top-10-rankings' ? 'active' : ''}`}
              onClick={() => onNavigate('top-10-rankings')}
            >
              Top 10 Companies
            </button>
            <button 
              className={`nav-link-btn ${currentRoute === 'emerging-direct-selling' ? 'active' : ''}`}
              onClick={() => onNavigate('emerging-direct-selling')}
            >
              Emerging Companies
            </button>
            <button 
              className={`nav-link-btn ${currentRoute === 'fastest-growing-startup' ? 'active' : ''}`}
              onClick={() => onNavigate('fastest-growing-startup')}
            >
              Fastest-Growing Startups
            </button>
            <button 
              className={`nav-link-btn ${currentRoute === 'benefits-guide' ? 'active' : ''}`}
              onClick={() => onNavigate('benefits-guide')}
            >
              Benefits
            </button>
            <button 
              className={`nav-link-btn ${currentRoute === 'how-to-choose' ? 'active' : ''}`}
              onClick={() => onNavigate('how-to-choose')}
            >
              How to Choose
            </button>
            <button 
              className={`nav-link-btn ${currentRoute === 'mlm-vs-job' ? 'active' : ''}`}
              onClick={() => onNavigate('mlm-vs-job')}
            >
              MLM vs Job
            </button>
          </nav>

          {/* Action CTA */}
          <div>
            <button 
              className="btn-card-action" 
              onClick={() => onNavigate('top-10-rankings')}
              style={{ padding: '8px 16px', fontSize: '0.82rem', background: '#1A3C34', color: '#FFFFFF', border: '1px solid #1A3C34' }}
            >
              <Trophy size={14} />
              <span>2026 Rankings</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
