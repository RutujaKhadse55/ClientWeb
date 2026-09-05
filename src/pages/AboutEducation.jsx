import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle, FileText, AlertCircle, Trophy } from 'lucide-react';

export default function AboutEducation({ onNavigate }) {
  return (
    <div className="page-wrapper about-page">
      <header className="article-hero-header">
        <div className="container article-container">
          <button className="back-link-btn" onClick={() => onNavigate('edu-home')}>
            <ArrowLeft size={16} />
            <span>Back to Education Portal</span>
          </button>

          <div className="article-meta-tags">
            <span className="tag-pill tag-green">🛡️ Transparency & Ethics</span>
          </div>

          <h1 className="article-main-title">Is DirectSellingGuide.in Sponsored?</h1>
          <p className="article-lead-subtitle">
            Our mission, editorial independence policy, and why we believe in objective education for Indian entrepreneurs.
          </p>
        </div>
      </header>

      <div className="article-body-wrapper">
        <div className="container article-container">
          <section className="article-content-section">
            <h2>Our Core Mission</h2>
            <p>
              Direct selling and multi-level marketing in India have suffered from widespread misinformation, aggressive recruitment hype, and unregulated money-circulation schemes disguised as legitimate businesses.
            </p>
            <p>
              <strong>DirectSellingGuide.in</strong> was established to provide an objective, neutral, and data-backed educational portal. We believe that when prospective distributors understand the legal protections, compensation realities, and due diligence checks, they can make informed, safe career decisions.
            </p>
          </section>

          <section className="article-content-section">
            <h2>100% Editorial Independence</h2>
            <div className="ethics-card-grid">
              <div className="ethics-card">
                <CheckCircle size={20} className="text-green" />
                <h4>No Paid Placements for Rankings</h4>
                <p>We do not accept payments or sponsorships to rank companies or alter our editorial conclusions.</p>
              </div>

              <div className="ethics-card">
                <CheckCircle size={20} className="text-green" />
                <h4>Consumer Protection (Rules 2021)</h4>
                <p>All evaluation criteria align strictly with the Government of India Direct Selling Rules, 2021.</p>
              </div>

              <div className="ethics-card">
                <CheckCircle size={20} className="text-green" />
                <h4>Highlighting Both Pros & Cons</h4>
                <p>Every profile highlights real challenges, operational realities, and saturation factors alongside company strengths.</p>
              </div>
            </div>
          </section>

          <section className="article-content-section">
            <h2>How This Portal Works With Top10MLM.in</h2>
            <p>
              Our ecosystem is divided into two distinct portals:
            </p>
            <ul>
              <li><strong>Site 1 (DirectSellingGuide.in):</strong> Pure neutral educational guides, checklists, comparison matrices, and regulatory explanations.</li>
              <li><strong>Site 2 (Top10MLM.in):</strong> Editorial rankings of the top 10 companies in India, featuring established players alongside our Editor's Pick (HGR Corporation).</li>
            </ul>
          </section>

          <div className="article-bottom-nav">
            <button 
              className="btn-next-article"
              onClick={() => onNavigate('edu-home')}
            >
              <span>Back to Education Home</span>
              <ArrowLeft size={16} />
            </button>
            <button 
              className="btn-see-top10"
              onClick={() => onNavigate('rankings-home')}
            >
              <Trophy size={16} />
              <span>See Top 10 MLM Rankings →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
