import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns-grid">
          <div className="footer-col">
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '12px', fontWeight: '800' }}>
              DIRECT SELLING JOURNAL
            </h3>
            <p>
              An independent Indian publication providing objective market research, due diligence frameworks, and comprehensive company analyses across the direct selling and multi-level marketing sectors.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#A8B3AF', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} color="#C27D38" />
              <span>100% Non-Sponsored Editorial Integrity</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Rankings & Industry</h4>
            <div className="footer-links-list">
              <button onClick={() => onNavigate('top-10-rankings')}>Top 10 MLM Companies</button>
              <button onClick={() => onNavigate('emerging-direct-selling')}>Emerging Indian Direct Selling</button>
              <button onClick={() => onNavigate('fastest-growing-startup')}>Fastest-Growing MLM Startups</button>
            </div>
          </div>

          <div className="footer-col">
            <h4>Educational Guides</h4>
            <div className="footer-links-list">
              <button onClick={() => onNavigate('benefits-guide')}>Benefits of Direct Selling</button>
              <button onClick={() => onNavigate('how-to-choose')}>How to Choose an MLM</button>
              <button onClick={() => onNavigate('mlm-vs-job')}>MLM vs Traditional Job</button>
              <button onClick={() => onNavigate('about')}>Editorial Policy & Notice</button>
            </div>
          </div>

          <div className="footer-col">
            <h4>Regulatory Standards</h4>
            <p style={{ fontSize: '0.82rem', background: 'rgba(0,0,0,0.3)', padding: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              All direct selling entities operating in India are governed by the <strong>Consumer Protection (Direct Selling) Rules, 2021</strong>. Always verify MCA incorporation, 30-day buyback policies, and FSSAI/AYUSH certifications.
            </p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} Direct Selling Journal India. All rights reserved.</span>
          <span>General Informational Publication • Not Investment Advice</span>
        </div>
      </div>
    </footer>
  );
}
