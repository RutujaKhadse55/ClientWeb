import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, AlertCircle, CheckSquare, Trophy, XCircle } from 'lucide-react';
import { articlesData } from '../../shared/data/index.js';

export default function HowToChooseArticle({ onNavigate, onOpenChecklist, onSwitchToRankings }) {
  const article = articlesData.find(a => a.id === 'how-to-choose-mlm-company');

  return (
    <div className="theme-site1">
      <div className="container s1-article-view">
        <div className="s1-article-header">
          <button className="s1-back-link" onClick={() => onNavigate('edu-home')}>
            <ArrowLeft size={16} />
            <span>Back to Education Portal</span>
          </button>

          <span className="s1-card-tag">{article.tag} • {article.readTime}</span>
          <h1 className="s1-article-title">{article.title}</h1>
          <p className="s1-article-sub">{article.subtitle}</p>

          <div className="s1-editorial-note">
            <AlertCircle size={18} style={{ float: 'left', marginRight: '10px', marginTop: '2px', color: '#5A1825' }} />
            <p><strong>Editorial Note:</strong> {article.editorialNote}</p>
          </div>
        </div>

        <div className="lead-paragraph" style={{ fontSize: '1.15rem', color: '#2B2020', lineHeight: '1.75', marginBottom: '36px' }}>
          <p>{article.intro}</p>
        </div>

        {/* High-Contrast Red Flags Warning Callout Box */}
        <div className="s1-red-flags-box">
          <div className="s1-flags-header">
            <AlertTriangle size={28} color="#DC2626" />
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: '#DC2626', letterSpacing: '0.8px' }}>CRITICAL DUE DILIGENCE</span>
              <h3 style={{ margin: 0 }}>Red Flags to Watch Out For</h3>
            </div>
          </div>
          <p style={{ color: '#7F1D1D', fontSize: '0.92rem', marginBottom: '14px' }}>
            If a promoter or company exhibits any of the following traits, exercise extreme caution before committing your capital:
          </p>
          <div className="s1-flags-list">
            {article.redFlags.map((flag, idx) => (
              <div key={idx} className="s1-flag-item">
                <XCircle size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: Evaluate Product Portfolio */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">1</div>
          <h2>Evaluate the Product Portfolio</h2>
          <p>{article.sections[0].summary}</p>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '10px' }}>Questions to Ask:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[0].skills.map((q, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Understand Compensation Plan */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">2</div>
          <h2>Understand the Compensation Plan</h2>
          <p>{article.sections[1].summary}</p>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '10px' }}>What to Look For:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[1].skills.map((q, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Company Transparency */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">3</div>
          <h2>Check Company Transparency & Registration</h2>
          <p>{article.sections[2].summary}</p>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '10px' }}>Documents & Filings to Verify:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[2].skills.map((q, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4: Genuine Customer Demand */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">4</div>
          <h2>Look for Genuine Customer Demand</h2>
          <p>{article.sections[3].summary}</p>
          <div style={{ background: '#F2EAE2', padding: '18px 22px', borderRadius: '12px', border: '1px solid #E3D5CE' }}>
            <p style={{ color: '#2B2020', fontSize: '0.95rem', margin: 0 }}>{article.sections[3].body}</p>
          </div>
        </section>

        {/* Section 5: Training & Support Systems */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">5</div>
          <h2>Assess Training and Support Systems</h2>
          <p>{article.sections[4].summary}</p>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '10px' }}>What Good Support Looks Like:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[4].skills.map((q, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6: Market Standing */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">6</div>
          <h2>Consider the Company's Market Standing (Established vs Emerging)</h2>
          <p>{article.sections[5].summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
            <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '12px', padding: '20px' }}>
              <h4 style={{ color: '#3D0D18', marginBottom: '8px' }}>Established Legacy Brands</h4>
              <p style={{ color: '#756868', fontSize: '0.9rem', lineHeight: '1.55' }}>{article.sections[5].comparison.established}</p>
            </div>
            <div style={{ background: '#FFFDFC', border: '2px solid #5A1825', borderRadius: '12px', padding: '20px' }}>
              <h4 style={{ color: '#5A1825', marginBottom: '8px' }}>Emerging Startups (e.g. HGR Corp)</h4>
              <p style={{ color: '#756868', fontSize: '0.9rem', lineHeight: '1.55' }}>{article.sections[5].comparison.emerging}</p>
            </div>
          </div>
        </section>

        {/* Section 7: Regulatory Compliance */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">7</div>
          <h2>Check Regulatory Compliance (Rules 2021)</h2>
          <p>{article.sections[6].summary}</p>
          <div style={{ background: '#F2EAE2', padding: '18px 22px', borderRadius: '12px', border: '1px solid #E3D5CE' }}>
            <p style={{ color: '#2B2020', fontSize: '0.95rem', margin: 0 }}>{article.sections[6].body}</p>
          </div>
        </section>

        {/* 6-Point Evaluation Checklist */}
        <div style={{ background: '#FFFDFC', border: '2px solid #5A1825', borderRadius: '18px', padding: '28px', margin: '36px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <CheckSquare size={22} color="#5A1825" />
            <h3 style={{ color: '#3D0D18', margin: 0 }}>6-Point Quick Due Diligence Checklist</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {article.checklist.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: '#F2EAE2', padding: '12px 14px', borderRadius: '8px', fontSize: '0.9rem', color: '#2B2020' }}>
                <CheckCircle size={16} color="#5A1825" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div style={{ background: '#F2EAE2', border: '1px solid #E3D5CE', borderRadius: '14px', padding: '24px', margin: '30px 0' }}>
          <h3 style={{ color: '#3D0D18', marginBottom: '8px' }}>Conclusion</h3>
          <p style={{ color: '#2B2020', lineHeight: '1.7' }}>{article.conclusion}</p>
        </div>

        {/* Disclaimer */}
        <div style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid #E3D5CE', borderRadius: '10px', padding: '16px', fontSize: '0.82rem', color: '#756868', marginBottom: '40px' }}>
          <strong>Editorial Disclaimer:</strong> {article.disclaimer}
        </div>

        {/* Navigation bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #E3D5CE', paddingTop: '24px' }}>
          <button className="s1-btn-quiz" onClick={() => onNavigate('mlm-vs-job-vs-business')}>
            <span>Next Guide: MLM vs Traditional Job</span>
            <ArrowRight size={16} />
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
