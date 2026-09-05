import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle, 
  CheckSquare, 
  Clock, 
  ShieldCheck, 
  Trophy, 
  FileText,
  XCircle
} from 'lucide-react';
import { articlesData } from '../data/articles';

export default function HowToChooseArticle({ onNavigate, onOpenChecklist }) {
  const article = articlesData.find(a => a.id === 'how-to-choose-mlm-company');

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
            <span className="tag-pill tag-blue">{article.tag}</span>
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

          {/* High-Contrast Red Flags Warning Callout Box */}
          <div className="red-flags-warning-box">
            <div className="warning-header">
              <AlertTriangle size={24} className="text-red" />
              <div>
                <span className="warning-badge">CRITICAL WARNING</span>
                <h3>Direct Selling Red Flags to Watch Out For</h3>
              </div>
            </div>
            <p className="warning-intro">
              If a company or promoter exhibits any of the following symptoms, exercise extreme caution before committing:
            </p>
            <div className="red-flags-list">
              {article.redFlags.map((flag, idx) => (
                <div key={idx} className="red-flag-item">
                  <XCircle size={18} className="flag-icon" />
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Evaluate Product Portfolio */}
          <section className="article-content-section">
            <div className="section-num-badge">1</div>
            <h2>Evaluate the Product Portfolio</h2>
            <p>{article.sections[0].summary}</p>
            <div className="questions-box">
              <h4>Questions to Ask</h4>
              <ul>
                {article.sections[0].skills.map((q, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} className="text-blue" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 2: Compensation Plan */}
          <section className="article-content-section">
            <div className="section-num-badge">2</div>
            <h2>Understand the Compensation Plan</h2>
            <p>{article.sections[1].summary}</p>
            <div className="questions-box">
              <h4>What to Look For</h4>
              <ul>
                {article.sections[1].skills.map((q, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} className="text-blue" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3: Company Transparency */}
          <section className="article-content-section">
            <div className="section-num-badge">3</div>
            <h2>Check Company Transparency</h2>
            <p>{article.sections[2].summary}</p>
            <div className="questions-box">
              <h4>Documents and Information Worth Reviewing</h4>
              <ul>
                {article.sections[2].skills.map((q, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} className="text-blue" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4: Genuine Customer Demand */}
          <section className="article-content-section">
            <div className="section-num-badge">4</div>
            <h2>Look for Genuine Customer Demand</h2>
            <p>{article.sections[3].summary}</p>
            <div className="sub-highlight-card">
              <p>{article.sections[3].body}</p>
            </div>
          </section>

          {/* Section 5: Training & Support */}
          <section className="article-content-section">
            <div className="section-num-badge">5</div>
            <h2>Assess Training and Support Systems</h2>
            <p>{article.sections[4].summary}</p>
            <div className="questions-box">
              <h4>What Good Support Looks Like</h4>
              <ul>
                {article.sections[4].skills.map((q, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} className="text-blue" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6: Market Standing */}
          <section className="article-content-section">
            <div className="section-num-badge">6</div>
            <h2>Consider the Company's Market Standing</h2>
            <p>{article.sections[5].summary}</p>
            <div className="comparison-side-cards">
              <div className="market-card established-card">
                <h4>Established Legacy Companies</h4>
                <p>{article.sections[5].comparison.established}</p>
              </div>
              <div className="market-card emerging-card">
                <div className="card-badge-emerge">New Generation</div>
                <h4>Emerging Indian Startups</h4>
                <p>{article.sections[5].comparison.emerging}</p>
              </div>
            </div>
          </section>

          {/* Section 7: Regulatory Compliance */}
          <section className="article-content-section">
            <div className="section-num-badge">7</div>
            <h2>Check Regulatory Compliance</h2>
            <p>{article.sections[6].summary}</p>
            <div className="sub-highlight-card">
              <p>{article.sections[6].body}</p>
            </div>
          </section>

          {/* 6-Point Evaluation Checklist Box */}
          <div className="checklist-card-box">
            <div className="ch-header">
              <CheckSquare size={22} className="text-green" />
              <h3>A Simple Evaluation Checklist</h3>
            </div>
            <div className="ch-grid">
              {article.checklist.map((item, idx) => (
                <div key={idx} className="ch-item">
                  <CheckCircle size={16} className="text-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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

          {/* Bottom Next/Prev Navigation */}
          <div className="article-bottom-nav">
            <button 
              className="btn-next-article"
              onClick={() => onNavigate('mlm-vs-job-vs-business')}
            >
              <span>Next Guide: MLM vs Job vs Traditional Business</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="btn-see-top10"
              onClick={() => onNavigate('rankings-home')}
            >
              <Trophy size={16} />
              <span>See Top 10 Indian MLM Rankings →</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
