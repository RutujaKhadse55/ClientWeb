import React from 'react';
import { ArrowLeft, ArrowRight, Briefcase, Building, Users, AlertCircle, Sparkles, CheckCircle, Trophy } from 'lucide-react';
import { articlesData } from '../../shared/data/index.js';

export default function MlmVsJobArticle({ onNavigate, onOpenQuiz, onSwitchToRankings }) {
  const article = articlesData.find(a => a.id === 'mlm-vs-job-vs-business');

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

        {/* Side-by-Side Visual Comparison Table */}
        <div className="s1-matrix-wrapper">
          <div style={{ padding: '20px 24px', background: '#F2EAE2', borderBottom: '1px solid #E3D5CE' }}>
            <h3 style={{ color: '#3D0D18', margin: 0 }}>Side-by-Side 3-Way Comparative Matrix</h3>
            <p style={{ color: '#756868', fontSize: '0.88rem', margin: '4px 0 0' }}>Job vs Independent Business vs Direct Selling across 7 practical dimensions</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="s1-matrix-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th><Briefcase size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Traditional Job</th>
                  <th><Building size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Traditional Business</th>
                  <th><Users size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Direct Selling / MLM</th>
                </tr>
              </thead>
              <tbody>
                {article.dimensions.map((dim, idx) => (
                  <tr key={idx}>
                    <td className="s1-td-dim">{idx + 1}. {dim.name}</td>
                    <td>{dim.job}</td>
                    <td>{dim.business}</td>
                    <td>{dim.mlm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Archetypes: Which Path Fits You? */}
        <div style={{ margin: '40px 0' }}>
          <h3 style={{ color: '#3D0D18', fontSize: '1.6rem', marginBottom: '20px' }}>Which Path Is Right for You?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {article.archetypes.map((arch, idx) => (
              <div key={idx} style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 8px rgba(90,24,37,0.04)' }}>
                <h4 style={{ color: '#5A1825', fontSize: '1.1rem', marginBottom: '12px' }}>{arch.title}</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {arch.points.map((pt, pidx) => (
                    <li key={pidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#2B2020' }}>
                      <CheckCircle size={15} style={{ color: '#5A1825', marginTop: '3px', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz CTA Banner */}
        <div style={{ background: '#F2EAE2', border: '2px solid #5A1825', borderRadius: '16px', padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', margin: '36px 0' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#5A1825', textTransform: 'uppercase' }}>UNBIASED ASSESSMENT</span>
            <h3 style={{ color: '#3D0D18', margin: '4px 0' }}>Unsure Which Path Fits Your Profile?</h3>
            <p style={{ color: '#756868', fontSize: '0.92rem' }}>Take our 60-second interactive assessment for personalized guidance.</p>
          </div>
          <button className="s1-btn-primary" onClick={onOpenQuiz}>
            <Sparkles size={16} />
            <span>Launch Fit Quiz →</span>
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
          <button className="s1-btn-quiz" onClick={() => onNavigate('benefits-of-direct-selling')}>
            <ArrowLeft size={16} />
            <span>Back to Benefits Guide</span>
          </button>

          <button className="s1-btn-top10-jump" onClick={onSwitchToRankings}>
            <Trophy size={16} />
            <span>Explore Top 10 Indian MLM Rankings →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
