import React, { useState, useRef, useEffect } from 'react';
import { Trophy, ChevronDown } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate }) {
  const [isRankingsOpen, setIsRankingsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRankingsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isRankingsActive = [
    'top-10-rankings',
    'world-top-10-mlm',
    'india-top-10-mlm',
    'india-new-mlm-companies',
    'india-emerging-mlm-companies',
    'india-new-mlm-startups',
    'india-fast-growing-mlm-companies',
    'india-new-direct-selling-companies'
  ].includes(currentRoute);

  return (
    <>
      {/* Top Publication Notice Bar */}
      <div className="top-notice-bar">
        <div className="container top-notice-flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="notice-badge">Special Report</span>
            <span>Indian Direct Selling &amp; Multi-Level Marketing Industry Research • 2026 Edition</span>
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
            <span className="brand-subtitle">India Independent Business &amp; MLM Index</span>
          </div>

          {/* Nav Links */}
          <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
            <button 
              className={`nav-link-btn ${currentRoute === 'home' ? 'active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              Home
            </button>

            {/* Rankings Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                className={`nav-link-btn ${isRankingsActive ? 'active' : ''}`}
                onClick={() => setIsRankingsOpen(!isRankingsOpen)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Rankings Index</span>
                <ChevronDown size={13} style={{ transform: isRankingsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {isRankingsOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '280px',
                  background: '#FFFFFF',
                  border: '1px solid #1D2321',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  zIndex: 1000,
                  padding: '8px 0',
                  marginTop: '4px'
                }}>
                  <div style={{ padding: '6px 14px', fontSize: '0.72rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Broad Top 10 Guides
                  </div>
                  <button
                    onClick={() => { onNavigate('world-top-10-mlm'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    World Top 10 MLM Companies
                  </button>
                  <button
                    onClick={() => { onNavigate('india-top-10-mlm'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    India Top 10 MLM Companies
                  </button>
                  <button
                    onClick={() => { onNavigate('top-10-rankings'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    India 10 Leading Index (Profiles)
                  </button>

                  <div style={{ borderTop: '1px solid #E2DBD2', margin: '6px 0', padding: '6px 14px 2px', fontSize: '0.72rem', fontWeight: '800', color: '#1A3C34', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    India New &amp; Emerging Categories
                  </div>
                  <button
                    onClick={() => { onNavigate('india-new-mlm-companies'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    Top 10 New MLM Companies
                  </button>
                  <button
                    onClick={() => { onNavigate('india-emerging-mlm-companies'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    Top 10 Emerging MLM Companies
                  </button>
                  <button
                    onClick={() => { onNavigate('india-new-mlm-startups'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    Top 10 New MLM Startups
                  </button>
                  <button
                    onClick={() => { onNavigate('india-fast-growing-mlm-companies'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    Top 10 Fast Growing MLM Companies
                  </button>
                  <button
                    onClick={() => { onNavigate('india-new-direct-selling-companies'); setIsRankingsOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 14px', fontSize: '0.85rem', color: '#1D2321', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    Top 10 New Direct Selling Companies
                  </button>
                </div>
              )}
            </div>

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
              onClick={() => onNavigate('india-top-10-mlm')}
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

