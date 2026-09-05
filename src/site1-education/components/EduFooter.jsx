import React from 'react';
import { ShieldCheck, BookOpen, Trophy } from 'lucide-react';

export default function EduFooter({ onNavigate, onSwitchToRankings }) {
  return (
    <footer className="s1-footer">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '36px' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '12px', fontWeight: '800' }}>
            DirectSelling<span style={{ color: '#E3D5CE' }}>Guide</span>.in
          </h3>
          <p style={{ marginBottom: '16px' }}>
            India’s dedicated educational platform offering neutral research, due-diligence checklists, and risk assessments for prospective direct selling entrepreneurs.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem' }}>
            <ShieldCheck size={16} style={{ color: '#F2EAE2' }} />
            <span>100% Non-Sponsored Educational Content</span>
          </div>
        </div>

        <div>
          <h4>Core Guides</h4>
          <div className="s1-footer-links">
            <button onClick={() => onNavigate('edu-home')}>Start Here Overview</button>
            <button onClick={() => onNavigate('benefits-of-direct-selling')}>Benefits of Direct Selling</button>
            <button onClick={() => onNavigate('how-to-choose-mlm-company')}>How to Choose an MLM</button>
            <button onClick={() => onNavigate('mlm-vs-job-vs-business')}>MLM vs Job vs Business</button>
          </div>
        </div>

        <div>
          <h4>Partner Rankings</h4>
          <div className="s1-footer-links">
            <button onClick={onSwitchToRankings}>Top 10 MLM Companies in India</button>
            <button onClick={onSwitchToRankings}>⭐ HGR Corporation Review (#10)</button>
            <button onClick={() => onNavigate('about-education')}>Is This Site Sponsored?</button>
          </div>
        </div>

        <div>
          <h4>Consumer Protection Notice</h4>
          <p style={{ fontSize: '0.85rem', background: 'rgba(0,0,0,0.2)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            Direct selling operations in India are regulated under the <strong>Consumer Protection (Direct Selling) Rules, 2021</strong>. Always verify buyback policies and company registration before enrolling.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="s1-footer-bottom">
          <span>© {new Date().getFullYear()} DirectSellingGuide.in. Educational portal.</span>
          <span>Aligned with Indian Direct Selling Regulations 2021</span>
        </div>
      </div>
    </footer>
  );
}
