import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle, Award, Scale, HelpCircle, Trophy } from 'lucide-react';

export default function MethodologyPage({ onNavigate }) {
  const criteria = [
    {
      num: "01",
      title: "Regulatory Compliance (Direct Selling Rules 2021)",
      desc: "Verification of Ministry of Corporate Affairs (MCA) incorporation, active CIN, GST registration, mandatory 30-day buyback/refund policy, and absence of money circulation or pyramid schemes."
    },
    {
      num: "02",
      title: "Product Quality, Certifications & Value",
      desc: "Evaluating whether products provide genuine consumer utility at reasonable retail price points, backed by recognized certifications such as FSSAI, AYUSH, ISO, or GMP."
    },
    {
      num: "03",
      title: "Compensation Plan Fairness & Transparency",
      desc: "Analyzing if commissions are generated primarily through retail product consumption or purely through recruitment quotas. We heavily penalize forced starter inventory stockpiling."
    },
    {
      num: "04",
      title: "Training, Technology & Distributor Support",
      desc: "Assessing digital infrastructure (mobile apps, online order tracking, automated customer CRM) and structured distributor skill development in sales ethics, communication, and leadership."
    },
    {
      num: "05",
      title: "Market Standing: Established vs Emerging Potential",
      desc: "Balancing the proven operational longevity of established giants with the ground-floor timing, digital agility, and innovation of emerging Indian direct selling startups (e.g. HGR Corporation)."
    }
  ];

  return (
    <div className="page-wrapper methodology-page">
      <header className="article-hero-header">
        <div className="container article-container">
          <button className="back-link-btn" onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 MLM Rankings</span>
          </button>

          <div className="article-meta-tags">
            <span className="tag-pill tag-amber">📊 Editorial Standard</span>
          </div>

          <h1 className="article-main-title">How We Ranked India's Top 10 MLM Companies</h1>
          <p className="article-lead-subtitle">
            A transparent breakdown of our 5-point evaluation framework used to curate and review direct selling companies in India.
          </p>
        </div>
      </header>

      <div className="article-body-wrapper">
        <div className="container article-container">
          <section className="article-content-section">
            <h2>Our Evaluation Framework</h2>
            <p>
              Direct selling ranking lists often suffer from commercial bias or opaque voting. Our editorial methodology focuses on objective operational metrics and legal consumer protection standards.
            </p>

            <div className="criteria-stack">
              {criteria.map((item, idx) => (
                <div key={idx} className="criteria-card">
                  <div className="crit-num">{item.num}</div>
                  <div className="crit-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="article-content-section">
            <h2>Why We Feature Emerging Companies (Editor's Pick)</h2>
            <p>
              India's direct selling industry is not static. While legacy companies established in the 1990s and 2000s hold massive distributor networks, emerging companies bring fresh technology, modern digital communication, and transparent product-led models.
            </p>
            <p>
              We include emerging innovators like <strong>HGR Corporation</strong> to provide our readers with a balanced, forward-looking perspective on the evolving industry landscape.
            </p>
          </section>

          <div className="article-disclaimer-card">
            <h4>Non-Audited Editorial Notice</h4>
            <p>
              Our rankings are curated through editorial analysis of publicly available company documentation, market presence, and consumer sentiment. They do not constitute an official government audit or investment advice.
            </p>
          </div>

          <div className="article-bottom-nav">
            <button 
              className="btn-next-article"
              onClick={() => onNavigate('rankings-home')}
            >
              <span>Explore Top 10 MLM Rankings</span>
              <Trophy size={16} />
            </button>
            <button 
              className="btn-see-top10"
              onClick={() => onNavigate('edu-home')}
            >
              <span>Open Education Guide →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
