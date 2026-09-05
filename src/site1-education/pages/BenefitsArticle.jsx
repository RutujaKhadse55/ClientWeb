import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, CheckSquare, AlertCircle, Clock, Trophy } from 'lucide-react';
import { articlesData } from '../../shared/data/index.js';

export default function BenefitsArticle({ onNavigate, onOpenChecklist, onSwitchToRankings }) {
  const article = articlesData.find(a => a.id === 'benefits-of-direct-selling');

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

        {/* Section 1 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">1</div>
          <h2>Low Entry Barrier</h2>
          <p>{article.sections[0].summary}</p>
          <div style={{ background: '#F2EAE2', padding: '18px 22px', borderRadius: '12px', border: '1px solid #E3D5CE' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '6px' }}>{article.sections[0].subheading}</h4>
            <p style={{ color: '#756868', fontSize: '0.95rem', margin: 0 }}>{article.sections[0].body}</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">2</div>
          <h2>Flexible Working Hours</h2>
          <p>{article.sections[1].summary}</p>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '10px' }}>Key Considerations:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[1].keyPoints.map((pt, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">3</div>
          <h2>Personal and Professional Development</h2>
          <p>{article.sections[2].summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '14px' }}>
            {article.sections[2].skills.map((skill, idx) => (
              <div key={idx} style={{ background: '#F2EAE2', border: '1px solid #E3D5CE', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', color: '#3D0D18', fontWeight: '600' }}>
                ✓ {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">4</div>
          <h2>Access to a Product-Based Income Model</h2>
          <p>{article.sections[3].summary}</p>
          <div style={{ background: '#F2EAE2', padding: '18px 22px', borderRadius: '12px', border: '1px solid #E3D5CE' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '6px' }}>{article.sections[3].subheading}</h4>
            <p style={{ color: '#756868', fontSize: '0.95rem', margin: 0 }}>{article.sections[3].body}</p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">5</div>
          <h2>Community and Support Network</h2>
          <p>{article.sections[4].summary}</p>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '10px' }}>The Value of Community:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[4].skills.map((skill, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">6</div>
          <h2>Opportunity for Scalable Income</h2>
          <p>{article.sections[5].summary}</p>
          <div className="s1-editorial-note" style={{ background: '#FFFDFC' }}>
            <p><strong>Editorial Note:</strong> {article.sections[5].body}</p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="s1-article-section">
          <div className="s1-sec-badge">7</div>
          <h2>Entrepreneurship Without Full Business Ownership Risk</h2>
          <p>{article.sections[6].summary}</p>
          <div style={{ background: '#FFFDFC', border: '2px solid #5A1825', borderRadius: '14px', padding: '24px' }}>
            <h4 style={{ color: '#3D0D18', marginBottom: '12px' }}>What to Keep in Mind:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.sections[6].keyPoints.map((pt, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#2B2020' }}>
                  <CheckCircle size={16} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Downloadable Checklist Lead Box */}
        <div style={{ background: 'linear-gradient(135deg, #FFFDFC, #F2EAE2)', border: '2px solid #5A1825', borderRadius: '18px', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', margin: '40px 0' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#5A1825', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AUDIT BEFORE JOINING</span>
            <h3 style={{ fontSize: '1.3rem', color: '#3D0D18', margin: '4px 0' }}>Due-Diligence Checklist Before Joining Any MLM</h3>
            <p style={{ fontSize: '0.9rem', color: '#756868' }}>7-point compliance audit checklist based on Indian Direct Selling Rules 2021.</p>
          </div>
          <button className="s1-btn-primary" onClick={onOpenChecklist}>
            <CheckSquare size={16} />
            <span>Open Printable Checklist →</span>
          </button>
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
          <button className="s1-btn-quiz" onClick={() => onNavigate('how-to-choose-mlm-company')}>
            <span>Next Guide: How to Choose an MLM</span>
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
