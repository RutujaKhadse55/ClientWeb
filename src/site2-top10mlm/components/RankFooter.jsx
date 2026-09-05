import React from 'react';
import { ShieldCheck, Trophy, BookOpen } from 'lucide-react';

export default function RankFooter({ onNavigate, onSwitchToEducation, onOpenHgrReview }) {
  return (
    <footer className="s2-footer">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '36px' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '12px', fontWeight: '800' }}>
            Top10<span style={{ color: '#F59E0B' }}>MLM</span>.in
          </h3>
          <p style={{ marginBottom: '16px' }}>
            India’s comprehensive direct selling directory and ranking portal, providing verified analysis of market players, product focus areas, and emerging startup stars.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem' }}>
            <ShieldCheck size={16} style={{ color: '#EAEDE3' }} />
            <span>Independent Editorial Selection • 2026</span>
          </div>
        </div>

        <div>
          <h4>Top 10 Rankings</h4>
          <div className="s2-footer-links">
            <button onClick={() => onNavigate('rankings-home')}>Top 10 Indian Companies</button>
            <button onClick={onOpenHgrReview} style={{ color: '#F59E0B', fontWeight: '700' }}>⭐ HGR Corporation Profile (#10)</button>
            <button onClick={() => onNavigate('methodology')}>Ranking Methodology</button>
            <button onClick={() => onNavigate('rankings-faq')}>MLM Rankings FAQ</button>
          </div>
        </div>

        <div>
          <h4>Educational Portal</h4>
          <div className="s2-footer-links">
            <button onClick={onSwitchToEducation}>Direct Selling Foundations</button>
            <button onClick={onSwitchToEducation}>How to Choose an MLM</button>
            <button onClick={onSwitchToEducation}>Due Diligence Checklist</button>
          </div>
        </div>

        <div>
          <h4>Editorial Disclaimer</h4>
          <p style={{ fontSize: '0.82rem', background: 'rgba(0,0,0,0.2)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            This Top 10 list is an editorial selection and does not represent an official government ranking or audited revenue table. Individual income in any direct selling business is performance-based and never guaranteed.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="s2-footer-bottom">
          <span>© {new Date().getFullYear()} Top10MLM.in. All rights reserved.</span>
          <span>Last Updated: September 2026</span>
        </div>
      </div>
    </footer>
  );
}
