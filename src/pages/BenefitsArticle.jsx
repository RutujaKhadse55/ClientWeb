import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  CheckSquare, 
  AlertCircle, 
  Download, 
  Printer, 
  ShieldCheck, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Users, 
  Layers 
} from 'lucide-react';
import { articlesData } from '../data/articles';

export default function BenefitsArticle({ onNavigate, onOpenChecklist }) {
  const article = articlesData.find(a => a.id === 'benefits-of-direct-selling');

  return (
    <article className="page-wrapper article-detail-page">
      {/* Article Header */}
      <header className="article-hero-header">
        <div className="container article-container">
          <button className="back-link-btn" onClick={() => onNavigate('edu-home')}>
            <ArrowLeft size={16} />
            <span>Back to Education Portal</span>
          </button>

          <div className="article-meta-tags">
            <span className="tag-pill tag-green">{article.tag}</span>
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

      {/* Article Body Content */}
      <div className="article-body-wrapper">
        <div className="container article-container">
          <div className="article-intro-block">
            <p className="lead-paragraph">{article.intro}</p>
          </div>

          {/* Section 1: Low Entry Barrier */}
          <section className="article-content-section">
            <div className="section-num-badge">1</div>
            <h2>Low Entry Barrier</h2>
            <p>{article.sections[0].summary}</p>
            <div className="sub-highlight-card">
              <h4>{article.sections[0].subheading}</h4>
              <p>{article.sections[0].body}</p>
            </div>
          </section>

          {/* Section 2: Flexible Hours */}
          <section className="article-content-section">
            <div className="section-num-badge">2</div>
            <h2>Flexible Working Hours</h2>
            <p>{article.sections[1].summary}</p>
            <div className="key-considerations-box">
              <h4>Key Considerations</h4>
              <ul>
                {article.sections[1].keyPoints.map((pt, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} className="text-green" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3: Personal & Professional Dev */}
          <section className="article-content-section">
            <div className="section-num-badge">3</div>
            <h2>Personal and Professional Development</h2>
            <p>{article.sections[2].summary}</p>
            <div className="skills-grid">
              <h4>Skills Commonly Developed</h4>
              <div className="skills-list">
                {article.sections[2].skills.map((skill, idx) => (
                  <div key={idx} className="skill-chip">
                    <TrendingUp size={16} className="text-blue" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Product-Based Model */}
          <section className="article-content-section">
            <div className="section-num-badge">4</div>
            <h2>Access to a Product-Based Income Model</h2>
            <p>{article.sections[3].summary}</p>
            <div className="sub-highlight-card">
              <h4>{article.sections[3].subheading}</h4>
              <p>{article.sections[3].body}</p>
            </div>
          </section>

          {/* Section 5: Community & Support */}
          <section className="article-content-section">
            <div className="section-num-badge">5</div>
            <h2>Community and Support Network</h2>
            <p>{article.sections[4].summary}</p>
            <div className="skills-grid">
              <h4>The Value of Community</h4>
              <div className="skills-list">
                {article.sections[4].skills.map((skill, idx) => (
                  <div key={idx} className="skill-chip">
                    <Users size={16} className="text-purple" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Scalable Income */}
          <section className="article-content-section">
            <div className="section-num-badge">6</div>
            <h2>Opportunity for Scalable Income</h2>
            <p>{article.sections[5].summary}</p>
            <div className="editorial-callout-box bg-subtle">
              <AlertCircle size={18} className="text-amber" />
              <p><strong>Editorial Note:</strong> {article.sections[5].body}</p>
            </div>
          </section>

          {/* Section 7: Risk Profile & What to Keep in Mind */}
          <section className="article-content-section">
            <div className="section-num-badge">7</div>
            <h2>Entrepreneurship Without Full Business Ownership Risk</h2>
            <p>{article.sections[6].summary}</p>
            <div className="mindful-checklist-card">
              <h4>What to Keep in Mind Before Joining</h4>
              <ul>
                {article.sections[6].keyPoints.map((pt, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="text-amber" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Visual Downloadable / Printable Due Diligence Box */}
          <div className="lead-magnet-callout-box">
            <div className="box-left">
              <div className="box-icon-wrap">
                <CheckSquare size={28} />
              </div>
              <div>
                <span className="lead-tag">DUE DILIGENCE TOOL</span>
                <h3>Free Downloadable Due-Diligence Checklist</h3>
                <p>
                  Print or review our 7-point audit checklist based on Government of India Direct Selling Rules 2021 before making any commitment.
                </p>
              </div>
            </div>
            <button className="btn-checklist-trigger" onClick={onOpenChecklist}>
              <Printer size={16} />
              <span>Open Printable Checklist →</span>
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

          {/* Bottom Next/Prev Article Navigation */}
          <div className="article-bottom-nav">
            <button 
              className="btn-next-article"
              onClick={() => onNavigate('how-to-choose-mlm-company')}
            >
              <span>Next Guide: How to Choose the Right MLM Company</span>
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
