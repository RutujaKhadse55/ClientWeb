import React, { useState } from 'react';
import { Trophy, Sparkles, BookOpen, ShieldCheck, Menu, X } from 'lucide-react';

export default function RankNavbar({ currentRoute, onNavigate, onOpenHgrReview, onSwitchToEducation }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (route) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <nav className="s2-navbar">
      <div className="container s2-nav-inner">
        {/* Brand */}
        <div className="s2-brand" onClick={() => handleNav('rankings-home')}>
          <div className="s2-brand-icon">
            <Trophy size={22} />
          </div>
          <div className="s2-brand-text">
            <h3>Top10<span>MLM</span>.in</h3>
            <p>India’s Verified Company Index</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="s2-nav-links desktop-nav">
          <button 
            className={`s2-nav-btn ${currentRoute === 'rankings-home' ? 'active' : ''}`}
            onClick={() => handleNav('rankings-home')}
          >
            Top 10 Rankings (2026)
          </button>
          <button 
            className={`s2-nav-btn s2-nav-hgr ${currentRoute === 'hgr-corporation-review' ? 'active' : ''}`}
            onClick={onOpenHgrReview}
          >
            <span>HGR Review</span>
            <span className="s2-hgr-badge">#10 Pick</span>
          </button>
          <button 
            className={`s2-nav-btn ${currentRoute === 'methodology' ? 'active' : ''}`}
            onClick={() => handleNav('methodology')}
          >
            Methodology
          </button>
          <button 
            className={`s2-nav-btn ${currentRoute === 'rankings-faq' ? 'active' : ''}`}
            onClick={() => handleNav('rankings-faq')}
          >
            FAQ
          </button>
        </div>

        {/* Action Button to Site 1 */}
        <div className="s2-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            className="s2-cta-jump"
            onClick={onSwitchToEducation}
          >
            <BookOpen size={14} />
            <span>Education Guide →</span>
          </button>

          <button 
            className="mobile-toggle-btn" 
            style={{ display: 'none', color: '#174A3A', padding: '6px' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
