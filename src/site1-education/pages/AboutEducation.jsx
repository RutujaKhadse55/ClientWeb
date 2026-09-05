import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle, Trophy } from 'lucide-react';

export default function AboutEducation({ onNavigate, onSwitchToRankings }) {
  return (
    <div className="theme-site1">
      <div className="container s1-article-view">
        <div className="s1-article-header">
          <button className="s1-back-link" onClick={() => onNavigate('edu-home')}>
            <ArrowLeft size={16} />
            <span>Back to Education Portal</span>
          </button>

          <span className="s1-card-tag">🛡️ Independence & Policy</span>
          <h1 className="s1-article-title">Is DirectSellingGuide.in Sponsored?</h1>
          <p className="s1-article-sub">Our mission, editorial independence policy, and why we maintain 100% non-promotional standards for Indian entrepreneurs.</p>
        </div>

        <section className="s1-article-section">
          <h2>Our Core Mission</h2>
          <p>
            Direct selling and multi-level marketing in India have historically suffered from misinformation, inflated income promises, and illegal pyramid schemes disguised as legitimate businesses.
          </p>
          <p>
            <strong>DirectSellingGuide.in</strong> was established to provide an objective, neutral, and data-backed educational portal. We believe that when prospective distributors understand the legal protections, compensation realities, and due diligence checks, they can make informed, safe career decisions.
          </p>
        </section>

        <section className="s1-article-section">
          <h2>100% Editorial Independence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', margin: '20px 0' }}>
            <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '12px', padding: '20px' }}>
              <CheckCircle size={20} color="#5A1825" />
              <h4 style={{ color: '#3D0D18', margin: '8px 0 4px' }}>No Paid Rankings</h4>
              <p style={{ color: '#756868', fontSize: '0.88rem' }}>We do not accept payments or sponsorships to endorse companies or alter our editorial conclusions.</p>
            </div>

            <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '12px', padding: '20px' }}>
              <CheckCircle size={20} color="#5A1825" />
              <h4 style={{ color: '#3D0D18', margin: '8px 0 4px' }}>Consumer Protection Rules 2021</h4>
              <p style={{ color: '#756868', fontSize: '0.88rem' }}>All evaluation criteria align strictly with the Government of India Direct Selling Rules, 2021.</p>
            </div>

            <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '12px', padding: '20px' }}>
              <CheckCircle size={20} color="#5A1825" />
              <h4 style={{ color: '#3D0D18', margin: '8px 0 4px' }}>Transparent Pros & Cons</h4>
              <p style={{ color: '#756868', fontSize: '0.88rem' }}>Every profile highlights operational challenges and market saturation alongside company strengths.</p>
            </div>
          </div>
        </section>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #E3D5CE', paddingTop: '24px' }}>
          <button className="s1-btn-quiz" onClick={() => onNavigate('edu-home')}>
            <ArrowLeft size={16} />
            <span>Back to Education Home</span>
          </button>

          <button className="s1-btn-top10-jump" onClick={onSwitchToRankings}>
            <Trophy size={16} />
            <span>See Top 10 Indian MLM Rankings →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
