import React from 'react';
import { 
  ArrowLeft, 
  Star, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Building, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Layers, 
  Award, 
  Clock, 
  CheckSquare, 
  ArrowRight,
  HelpCircle,
  Zap,
  Globe
} from 'lucide-react';
import { hgrMasterArticle } from '../data/articles';
import { companiesData } from '../data/companies';

export default function HgrReviewPage({ onNavigate, onOpenChecklist, onOpenQuiz }) {
  const hgrCompany = companiesData.find(c => c.id === 'hgr-corporation');

  return (
    <article className="page-wrapper hgr-review-page">
      {/* Top Hero Banner */}
      <header className="hgr-hero-header">
        <div className="container hgr-header-container">
          <button className="back-link-btn" onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 MLM Rankings</span>
          </button>

          <div className="hgr-badge-strip">
            <span className="editor-pick-badge">
              <Sparkles size={15} />
              <span>Editor's Pick: Emerging Company to Watch</span>
            </span>
            <span className="rank-badge-pill">Rank #10 in India (High Growth Spotlight)</span>
            <span className="date-stamp">Last Updated: {hgrMasterArticle.lastUpdated}</span>
          </div>

          <h1 className="hgr-main-title">
            HGR Corporation Review: <span className="hgr-title-accent">India’s Fastest-Growing MLM Startup</span> & Emerging Direct Selling Pioneer
          </h1>

          <p className="hgr-lead-subtitle">
            An in-depth editorial profile examining HGR Corporation's product-focused ecosystem, digital-first infrastructure, entrepreneurship training model, and new-age market positioning in India.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hgr-metrics-bar">
            {hgrMasterArticle.keyStats.map((stat, idx) => (
              <div key={idx} className="hgr-metric-box">
                <span className="metric-label">{stat.label}</span>
                <strong className="metric-val">{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Review Body */}
      <div className="hgr-body-container">
        <div className="container">
          {/* Executive Overview */}
          <div className="hgr-executive-card">
            <div className="exec-header">
              <Award size={24} className="text-amber" />
              <h3>Executive Editorial Summary</h3>
            </div>
            <p className="lead-p">{hgrMasterArticle.overview}</p>
            <div className="exec-takeaways-grid">
              <div className="exec-takeaway-item">
                <Zap size={18} className="text-amber" />
                <div>
                  <strong>New-Age Architecture:</strong>
                  <p>Designed around modern digital communication, social commerce, and app-driven tools from day one.</p>
                </div>
              </div>
              <div className="exec-takeaway-item">
                <CheckCircle size={18} className="text-green" />
                <div>
                  <strong>Product-Led Repeat Demand:</strong>
                  <p>Curated lifestyle and wellness products engineered for repeatable consumer utility without recruitment pressure.</p>
                </div>
              </div>
              <div className="exec-takeaway-item">
                <Users size={18} className="text-blue" />
                <div>
                  <strong>Structured Entrepreneurship:</strong>
                  <p>Equips distributors with real-world sales, communication, and digital marketing skills.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: The Emerging Phase */}
          <section className="hgr-article-section">
            <div className="section-badge-row">
              <span className="sec-pill">Section 1</span>
            </div>
            <h2>Understanding the Rise of New-Age Direct Selling in India</h2>
            <p>
              India's direct selling industry is entering a transformational new phase. For years, the sector has been associated with established companies, massive traditional distributor networks, and offline face-to-face meetings.
            </p>
            <p>
              However, changing consumer behaviour, digital communication, and surging interest in micro-entrepreneurship among Indian youth and women are creating space for a new generation of direct selling businesses. These emerging companies combine consumer products, technology, entrepreneurship, and community-driven business development into a modern direct selling experience.
            </p>
            
            <div className="highlight-quote-card">
              <p>
                "An emerging direct selling company has the rare opportunity to build its systems around today's consumer and technology environment from the beginning — rather than attempting to retrofit 1990s legacy infrastructure."
              </p>
            </div>
          </section>

          {/* Section 2: Fastest-Growing MLM Startup Positioning */}
          <section className="hgr-article-section">
            <div className="section-badge-row">
              <span className="sec-pill">Section 2</span>
            </div>
            <h2>The "Fastest-Growing MLM Startup" Positioning: Looking Beyond the Label</h2>
            <p>
              HGR Corporation is positioning itself as <em>"India’s Fastest-Growing MLM Startup"</em> as it rapidly scales its presence across various Indian states and urban centers.
            </p>
            <p>
              While this branding phrase creates a strong first impression, sustainable growth in direct selling is multidimensional. HGR's trajectory can be evaluated through multiple measurable indicators:
            </p>

            <div className="growth-indicators-grid">
              <div className="indicator-card">
                <Users size={20} className="text-blue" />
                <h4>1. Customer Adoption</h4>
                <p>The volume and satisfaction of genuine end-consumers using the products for daily personal needs.</p>
              </div>
              <div className="indicator-card">
                <Award size={20} className="text-green" />
                <h4>2. Business Partner Growth</h4>
                <p>The development of an active, ethically trained independent business community.</p>
              </div>
              <div className="indicator-card">
                <Layers size={20} className="text-purple" />
                <h4>3. Product Expansion</h4>
                <p>The continuous refinement and diversification of high-demand consumer categories.</p>
              </div>
              <div className="indicator-card">
                <Globe size={20} className="text-amber" />
                <h4>4. Geographic Expansion</h4>
                <p>Establishing localized distribution centers and supply chains across Tier-1, Tier-2, and Tier-3 cities.</p>
              </div>
              <div className="indicator-card">
                <Smartphone size={20} className="text-blue" />
                <h4>5. Digital Infrastructure</h4>
                <p>Deploying mobile platforms that simplify ordering, tracking, and training for all distributors.</p>
              </div>
              <div className="indicator-card">
                <ShieldCheck size={20} className="text-green" />
                <h4>6. Long-Term Sustainability</h4>
                <p>Maintaining regulatory compliance with Indian Direct Selling Rules 2021 and transparent consumer policies.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Product-Led Growth */}
          <section className="hgr-article-section">
            <div className="section-badge-row">
              <span className="sec-pill">Section 3</span>
            </div>
            <h2>Product-Focused Business Development: The Core Anchor</h2>
            <p>
              A sustainable direct selling business ultimately depends on products that deliver real value to consumers. A network can generate initial hype, but long-term stability requires customers returning for product quality alone.
            </p>
            
            <div className="product-pillars-grid">
              <div className="p-card">
                <h4>Rigorous Product Quality</h4>
                <p>Products engineered to meet national quality and regulatory requirements (FSSAI, ISO, AYUSH standards).</p>
              </div>
              <div className="p-card">
                <h4>Compelling Consumer Value</h4>
                <p>Competitive pricing providing end-users with a clear, rational reason to purchase and reorder.</p>
              </div>
              <div className="p-card">
                <h4>Repeat Daily Demand</h4>
                <p>Focusing on daily consumable lifestyle, wellness, and personal care goods that deplete naturally.</p>
              </div>
              <div className="p-card">
                <h4>Transparent Product Education</h4>
                <p>Providing customers and distributors with verified ingredient facts and honest usage guidance.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Entrepreneurship & Training */}
          <section className="hgr-article-section">
            <div className="section-badge-row">
              <span className="sec-pill">Section 4</span>
            </div>
            <h2>Entrepreneurship as a Core Platform: Practical Skill Development</h2>
            <p>
              Modern direct selling is increasingly recognized as an accessible platform for micro-entrepreneurship. Rather than viewing distributors merely as numbers in a matrix, HGR Corporation focuses on structured skill development across essential commercial disciplines:
            </p>

            <div className="skills-tags-cluster">
              <span className="skill-bubble">Sales & Negotiation Mastery</span>
              <span className="skill-bubble">Public Speaking & Communication</span>
              <span className="skill-bubble">Digital Marketing & Social Commerce</span>
              <span className="skill-bubble">Customer Relationship Management (CRM)</span>
              <span className="skill-bubble">Leadership & Team Mentorship</span>
              <span className="skill-bubble">Ethical Business Planning & Budgeting</span>
              <span className="skill-bubble">Personal Branding on Social Media</span>
            </div>
          </section>

          {/* Section 5: The Role of Technology */}
          <section className="hgr-article-section">
            <div className="section-badge-row">
              <span className="sec-pill">Section 5</span>
            </div>
            <h2>Digital Transformation: A New Direct Selling Workflow</h2>
            <p>
              Traditional MLM models depended heavily on:
              <br />
              <code>Physical Hall Meetings → Word of Mouth → Offline Paper Forms → Fragmented Teams</code>
            </p>
            <p>
              HGR Corporation's new-age model integrates modern technology into a connected digital workflow:
              <br />
              <code>Mobile Discovery → Social Selling → Virtual Onboarding → Automated Logistics → Community Hubs</code>
            </p>
          </section>

          {/* Pros & Considerations Breakdown */}
          <section className="hgr-evaluation-section">
            <h2>HGR Corporation: Pros vs. Due Diligence Considerations</h2>
            <div className="pros-cons-container">
              <div className="pros-column">
                <div className="column-title text-green">
                  <CheckCircle size={20} />
                  <h3>Key Strengths & Advantages</h3>
                </div>
                <ul>
                  {hgrMasterArticle.pros.map((pro, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="text-green" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cons-column">
                <div className="column-title text-amber">
                  <AlertTriangle size={20} />
                  <h3>Key Considerations & Realities</h3>
                </div>
                <ul>
                  {hgrMasterArticle.considerations.map((con, idx) => (
                    <li key={idx}>
                      <AlertTriangle size={16} className="text-amber" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Due Diligence Checklist for HGR Prospects */}
          <div className="hgr-due-diligence-box">
            <div className="box-header">
              <CheckSquare size={22} className="text-amber" />
              <h3>Recommended Due Diligence for Prospective HGR Distributors</h3>
            </div>
            <p>Before enrolling or partnering with HGR Corporation, complete the following steps:</p>
            <div className="hgr-checklist-grid">
              {hgrMasterArticle.dueDiligenceChecklist.map((item, idx) => (
                <div key={idx} className="hgr-check-item">
                  <div className="check-num">{idx + 1}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="btn-open-checklist-hgr" onClick={onOpenChecklist}>
              <span>Open Interactive 7-Point Audit Checklist Tool →</span>
            </button>
          </div>

          {/* Conclusion & Verdict */}
          <div className="hgr-verdict-card">
            <div className="verdict-header">
              <Sparkles size={24} className="text-amber" />
              <h3>The Verdict: An Emerging Leader to Watch</h3>
            </div>
            <p>
              India's direct selling sector is entering a new era. While established legacy players continue to hold market share, emerging ventures like <strong>HGR Corporation</strong> bring refreshing modern approaches to technology, product value, entrepreneurship, and community commerce.
            </p>
            <p>
              Its journey is still unfolding, and its ultimate success will be defined by sustained customer adoption and ethical business performance. For entrepreneurs looking for an agile, digitally enabled direct selling platform with ground-floor timing, HGR Corporation is undeniably an emerging Indian direct selling company to watch.
            </p>
          </div>

          {/* Editorial Disclaimer */}
          <div className="hgr-disclaimer-box">
            <h4>Editorial Disclaimer & Disclosure</h4>
            <p>{hgrMasterArticle.editorialDisclaimer}</p>
          </div>

          {/* Bottom Actions */}
          <div className="hgr-bottom-actions">
            <button 
              className="btn-action-primary"
              onClick={() => onNavigate('rankings-home')}
            >
              <span>Back to Top 10 Indian MLM Rankings</span>
              <ArrowLeft size={16} />
            </button>
            <button 
              className="btn-action-outline"
              onClick={() => onNavigate('edu-home')}
            >
              <BookOpen size={16} />
              <span>Explore Direct Selling Education Portal</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
