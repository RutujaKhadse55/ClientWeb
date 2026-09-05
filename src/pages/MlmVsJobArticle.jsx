import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  Building, 
  Users, 
  AlertCircle, 
  Clock, 
  Trophy, 
  Sparkles, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { articlesData } from '../data/articles';

export default function MlmVsJobArticle({ onNavigate, onOpenQuiz }) {
  const article = articlesData.find(a => a.id === 'mlm-vs-job-vs-business');
  const [highlightFilter, setHighlightFilter] = useState('all');

  return (
    <article className="page-wrapper article-detail-page">
      {/* Header */}
      <header className="article-hero-header">
        <div className="container article-container">
          <button className="back-link-btn" onClick={() => onNavigate('edu-home')}>
            <ArrowLeft size={16} />
            <span>Back to Education Portal</span>
          </button>

          <div className="article-meta-tags">
            <span className="tag-pill tag-purple">{article.tag}</span>
            <span className="meta-time">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="article-main-title">{article.title}</h1>
          <p className="article-lead-subtitle">{article.subtitle}</p>

          <div className="editorial-callout-box">
            <AlertCircle size={18} className="text-amber" />
            <p><strong>Editorial Note:</strong> {article.editorialNote}</p>
          </div>
        </div>
      </header>

      <div className="article-body-wrapper">
        <div className="container article-container">
          <div className="article-intro-block">
            <p className="lead-paragraph">{article.intro}</p>
          </div>

          {/* Side-by-Side Visual Comparison Table */}
          <div className="comparison-table-wrapper">
            <div className="table-header-flex">
              <div>
                <h3>Side-by-Side 3-Way Matrix</h3>
                <p className="table-sub">A direct comparison of the three major economic models in India</p>
              </div>
            </div>

            <div className="table-responsive-box">
              <table className="interactive-matrix-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th className="th-job">
                      <div className="th-icon-flex">
                        <Briefcase size={16} />
                        <span>Traditional Job</span>
                      </div>
                    </th>
                    <th className="th-biz">
                      <div className="th-icon-flex">
                        <Building size={16} />
                        <span>Traditional Business</span>
                      </div>
                    </th>
                    <th className="th-mlm">
                      <div className="th-icon-flex">
                        <Users size={16} />
                        <span>Direct Selling / MLM</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {article.dimensions.map((dim, idx) => (
                    <tr key={idx}>
                      <td className="td-dimension-title">
                        <strong>{idx + 1}. {dim.name}</strong>
                      </td>
                      <td className="td-job-content">{dim.job}</td>
                      <td className="td-biz-content">{dim.business}</td>
                      <td className="td-mlm-content">{dim.mlm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Dimensional Breakdown */}
          {article.dimensions.map((dim, idx) => (
            <section key={idx} className="article-content-section">
              <div className="section-num-badge">{idx + 1}</div>
              <h2>{dim.name}</h2>
              <div className="dimension-cards-grid">
                <div className="dim-card card-job">
                  <div className="dim-card-header">
                    <Briefcase size={16} />
                    <span>Traditional Job</span>
                  </div>
                  <p>{dim.job}</p>
                </div>

                <div className="dim-card card-biz">
                  <div className="dim-card-header">
                    <Building size={16} />
                    <span>Traditional Business</span>
                  </div>
                  <p>{dim.business}</p>
                </div>

                <div className="dim-card card-mlm">
                  <div className="dim-card-header">
                    <Users size={16} />
                    <span>Direct Selling / MLM</span>
                  </div>
                  <p>{dim.mlm}</p>
                </div>
              </div>
            </section>
          ))}

          {/* Side-by-Side Snapshot Summary */}
          <div className="snapshot-box">
            <h3>A Side-by-Side Snapshot</h3>
            <div className="snapshot-grid">
              <div className="snap-item">
                <span className="snap-label">Lowest Financial Risk:</span>
                <strong className="snap-val text-blue">Traditional Job</strong>
              </div>
              <div className="snap-item">
                <span className="snap-label">Lowest Entry Cost + Ownership:</span>
                <strong className="snap-val text-amber">Direct Selling / MLM</strong>
              </div>
              <div className="snap-item">
                <span className="snap-label">Highest Potential Control & Upside:</span>
                <strong className="snap-val text-purple">Traditional Business</strong>
              </div>
              <div className="snap-item">
                <span className="snap-label">Most Structured Skill-Building:</span>
                <strong className="snap-val text-green">Direct Selling / MLM</strong>
              </div>
              <div className="snap-item">
                <span className="snap-label">Most Predictable Monthly Cashflow:</span>
                <strong className="snap-val text-blue">Traditional Job</strong>
              </div>
            </div>
          </div>

          {/* Archetypes: Which Path Suits You? */}
          <div className="archetypes-section">
            <h3 className="archetypes-title">Which Path Is Right for You?</h3>
            <div className="archetypes-grid">
              {article.archetypes.map((arch, idx) => (
                <div key={idx} className="archetype-card">
                  <h4>{arch.title}</h4>
                  <ul>
                    {arch.points.map((pt, pidx) => (
                      <li key={pidx}>
                        <CheckCircle size={15} className="text-green" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz CTA Banner */}
          <div className="quiz-embed-banner">
            <div className="quiz-banner-content">
              <Sparkles size={24} className="text-amber" />
              <div>
                <h3>Unsure Which Path Matches Your Personality?</h3>
                <p>Take our 60-second interactive assessment for personalized guidance.</p>
              </div>
            </div>
            <button className="btn-take-quiz-banner" onClick={onOpenQuiz}>
              <span>Take the Interactive Quiz →</span>
            </button>
          </div>

          {/* Conclusion */}
          <div className="article-conclusion-block">
            <h3>Conclusion</h3>
            <p>{article.conclusion}</p>
          </div>

          {/* Disclaimer */}
          <div className="article-disclaimer-card">
            <h4>Editorial Disclaimer</h4>
            <p>{article.disclaimer}</p>
          </div>

          {/* Bottom Navigation */}
          <div className="article-bottom-nav">
            <button 
              className="btn-next-article"
              onClick={() => onNavigate('benefits-of-direct-selling')}
            >
              <span>Back to Benefits Guide</span>
              <ArrowLeft size={16} />
            </button>
            <button 
              className="btn-see-top10"
              onClick={() => onNavigate('rankings-home')}
            >
              <Trophy size={16} />
              <span>Explore Top 10 Indian MLM Rankings →</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
