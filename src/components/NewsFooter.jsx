import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export default function NewsFooter({ onNavigate, onNavigateCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="news-site-footer">
      <div className="container">
        {/* Top Masthead & Back to Top */}
        <div className="footer-top-row">
          <div>
            <div className="footer-brand-title">
              THE INDIAN BUSINESS <span>CHRONICLE</span>
            </div>
            <p style={{ color: '#888888', fontSize: '0.82rem', marginTop: '4px' }}>
              Independent Business Journalism for Corporate India, Markets & the Economy
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CCCCCC', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', background: '#222222', padding: '8px 14px', border: '1px solid #333333' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Multi-Column Sitemap Grid */}
        <div className="footer-columns-grid">
          <div className="footer-col">
            <h4 style={{ color: '#E2A03F' }}>About The Chronicle</h4>
            <p style={{ color: '#AAAAAA', fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '14px' }}>
              The Indian Business Chronicle (IBC) is an independent financial and economic newsroom founded to provide rigorous, unbiased reporting on India's industrial transformation, capital markets, public policy, and technology frontiers.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E2A03F', fontSize: '0.76rem', fontWeight: '700' }}>
              <ShieldCheck size={16} />
              <span>100% Independent Non-Sponsored Journalism</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>News Channels</h4>
            <div className="footer-links-list">
              <button onClick={() => onNavigateCategory('Markets')}>Markets & Derivatives</button>
              <button onClick={() => onNavigateCategory('Corporate')}>Corporate & Conglomerates</button>
              <button onClick={() => onNavigateCategory('Economy')}>Macro & Economy</button>
              <button onClick={() => onNavigateCategory('Startups')}>Tech & Startups</button>
              <button onClick={() => onNavigateCategory('Banking')}>Banking & Credit</button>
              <button onClick={() => onNavigateCategory('Policy')}>Policy & Regulations</button>
            </div>
          </div>

          <div className="footer-col">
            <h4>Features & Analysis</h4>
            <div className="footer-links-list">
              <button onClick={() => onNavigateCategory('Explained')}>The IBC Explained Series</button>
              <button onClick={() => onNavigateCategory('Opinion')}>Op-Eds & Columns</button>
              <button onClick={() => onNavigateCategory('Markets')}>Primary Market IPOs</button>
              <button onClick={() => onNavigateCategory('Corporate')}>Clean Energy & EV</button>
              <button onClick={() => onNavigateCategory('Tech')}>Artificial Intelligence</button>
            </div>
          </div>

          <div className="footer-col">
            <h4>Newsroom & Standards</h4>
            <div className="footer-links-list">
              <button onClick={() => onNavigate('editorial-policy')}>Editorial Charter & Ethics</button>
              <button onClick={() => onNavigate('editorial-policy')}>Corrections Policy</button>
              <button onClick={() => onNavigate('editorial-policy')}>Ombudsman & Grievances</button>
              <button onClick={() => onNavigate('editorial-policy')}>Code of Conduct</button>
              <button onClick={() => onNavigate('editorial-policy')}>Masthead & Bureau</button>
            </div>
          </div>

          <div className="footer-col">
            <h4>Editions & Syndication</h4>
            <div className="footer-links-list">
              <button onClick={() => onNavigate('home')}>India National Edition</button>
              <button onClick={() => onNavigate('home')}>Global Business Edition</button>
              <button onClick={() => onNavigate('home')}>Morning Dispatch Newsletter</button>
              <button onClick={() => onNavigate('home')}>e-Paper Digital Archive</button>
              <button onClick={() => onNavigate('home')}>RSS Newsfeeds</button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-legal">
          <span>
            © {new Date().getFullYear()} The Indian Business Chronicle (IBC Media Group). All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('editorial-policy')}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('editorial-policy')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('editorial-policy')}>Cookie Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('editorial-policy')}>Contact Newsroom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
