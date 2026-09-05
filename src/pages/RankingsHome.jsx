import React, { useState } from 'react';
import { 
  Trophy, 
  Star, 
  Calendar, 
  ShieldCheck, 
  Filter, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  BookOpen, 
  ChevronRight, 
  Layers, 
  TrendingUp,
  Award,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { companiesData } from '../data/companies';

export default function RankingsHome({ 
  onNavigate, 
  onSelectCompany, 
  onOpenHgrReview,
  onOpenChecklist 
}) {
  const [filterMarket, setFilterMarket] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companiesData.filter(comp => {
    const matchesFilter = filterMarket === 'All' || comp.marketType.toLowerCase().includes(filterMarket.toLowerCase());
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          comp.focusArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          comp.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-wrapper rankings-home-page">
      {/* Header / Pillar Hero */}
      <section className="rankings-hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="hero-badge badge-amber">
                <Trophy size={14} />
                <span>Editorial Ranking • 2026 Edition</span>
              </span>
              <span className="last-updated-stamp">
                <Calendar size={14} />
                <span>Last Updated: <strong>September 2026</strong></span>
              </span>
            </div>

            <h1 className="hero-title">
              Top 10 MLM Companies in India <span className="highlight-text-amber">(2026 Review)</span>
            </h1>

            <p className="hero-subtitle">
              A comprehensive editorial guide to leading direct selling and MLM companies operating in India — evaluated on product credibility, market presence, compliance with Direct Selling Rules 2021, and new-age entrepreneurship support.
            </p>

            <div className="editorial-trust-strip">
              <div className="e-trust-item">
                <ShieldCheck size={16} className="text-green" />
                <span>10 Verified Companies</span>
              </div>
              <div className="e-trust-item">
                <Award size={16} className="text-amber" />
                <span>Editor's Pick Highlighted</span>
              </div>
              <div className="e-trust-item">
                <BookOpen size={16} className="text-blue" />
                <span>Non-Audited Editorial Selection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link Back to Site 1 Education */}
      <section className="edu-bridge-strip">
        <div className="container bridge-container">
          <div className="bridge-text">
            <BookOpen size={18} className="text-green" />
            <span><strong>New to Direct Selling?</strong> Read our neutral Due-Diligence Guide & Red Flags Checklist first before investing.</span>
          </div>
          <button className="btn-bridge-edu" onClick={() => onNavigate('edu-home')}>
            <span>Open Education Portal →</span>
          </button>
        </div>
      </section>

      {/* Comparison Table at Top */}
      <section className="top-comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">QUICK COMPARISON</span>
            <h2 className="section-title">At-a-Glance: India's Top 10 Direct Selling Matrix</h2>
            <p className="section-desc">
              Compare focus areas, market models, and ratings across the 10 featured companies.
            </p>
          </div>

          <div className="table-responsive-card">
            <table className="top-comparison-table">
              <thead>
                <tr>
                  <th>Rank & Company</th>
                  <th>Primary Focus Area</th>
                  <th>Market Identity</th>
                  <th>Editorial Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {companiesData.map(comp => (
                  <tr key={comp.id} className={comp.isEditorPick ? 'row-editor-pick' : ''}>
                    <td className="td-company-name">
                      <div className="company-rank-tag">
                        <span className={`rank-num-circle ${comp.isEditorPick ? 'rank-star' : ''}`}>
                          #{comp.rank}
                        </span>
                        <div>
                          <strong>{comp.name}</strong>
                          {comp.isEditorPick && (
                            <span className="editor-table-badge">⭐ Editor's Pick</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="focus-pill">{comp.focusArea}</span>
                    </td>
                    <td>
                      <span className={`market-pill ${comp.marketType.toLowerCase().replace(/\s+/g, '-')}`}>
                        {comp.marketType}
                      </span>
                    </td>
                    <td>
                      <div className="rating-flex">
                        <Star size={14} className="star-filled" />
                        <strong>{comp.rating}</strong>
                        <span className="sub-rating">/ 5.0</span>
                      </div>
                    </td>
                    <td>
                      {comp.isEditorPick ? (
                        <button 
                          className="btn-table-review btn-table-hgr"
                          onClick={onOpenHgrReview}
                        >
                          <span>Full Review →</span>
                        </button>
                      ) : (
                        <button 
                          className="btn-table-review"
                          onClick={() => onSelectCompany(comp)}
                        >
                          <span>Quick Review</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Methodology Section Teaser */}
      <section className="methodology-banner-section">
        <div className="container">
          <div className="methodology-card">
            <div className="meth-left">
              <ShieldCheck size={28} className="text-amber" />
              <div>
                <h3>How We Ranked These Companies</h3>
                <p>
                  Our rankings reflect market presence, product portfolio diversity, regulatory compliance under Indian Direct Selling Rules 2021, and modern digital/training infrastructure.
                </p>
              </div>
            </div>
            <button 
              className="btn-meth-more"
              onClick={() => onNavigate('methodology')}
            >
              <span>Read Full Methodology →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Ranked Listicle (All 10 Companies) */}
      <section className="ranked-listicle-section">
        <div className="container">
          <div className="listicle-toolbar">
            <div className="toolbar-left">
              <h2>Ranked Company Profiles (1 to 10)</h2>
              <span className="count-badge">{filteredCompanies.length} Companies Displayed</span>
            </div>

            {/* Filter Pills */}
            <div className="filter-pill-group">
              <span className="filter-label"><Filter size={14} /> Filter Market:</span>
              {['All', 'Established Indian', 'Global', 'Emerging Indian'].map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${filterMarket === filter ? 'active' : ''}`}
                  onClick={() => setFilterMarket(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="companies-listicle-stack">
            {filteredCompanies.map(company => {
              const isHgr = company.id === 'hgr-corporation';

              return (
                <div 
                  key={company.id} 
                  className={`company-ranked-card ${isHgr ? 'card-hgr-highlight' : ''}`}
                  id={`rank-${company.rank}`}
                >
                  {/* Top Bar */}
                  <div className="card-top-bar">
                    <div className="rank-and-name">
                      <span className={`rank-badge-large ${isHgr ? 'rank-badge-hgr' : ''}`}>
                        #{company.rank}
                      </span>
                      <div>
                        <div className="title-row">
                          <h3 className="company-heading">{company.name}</h3>
                          {company.badge && (
                            <span className={`badge-pill-header ${isHgr ? 'badge-hgr-glow' : ''}`}>
                              {company.badge}
                            </span>
                          )}
                        </div>
                        <div className="meta-subline">
                          <span className="meta-sub-item">{company.marketType}</span>
                          <span className="meta-dot">•</span>
                          <span className="meta-sub-item">{company.focusArea}</span>
                          <span className="meta-dot">•</span>
                          <span className="meta-sub-item">HQ: {company.hq}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-rating-box">
                      <div className="stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(company.rating) ? 'star-filled' : 'star-half'} 
                          />
                        ))}
                      </div>
                      <span className="rating-score">
                        <strong>{company.rating}</strong> / 5.0
                      </span>
                      <span className="reviews-sub-count">{company.reviewsCount}</span>
                    </div>
                  </div>

                  {/* Summary & Tagline */}
                  {company.tagline && (
                    <div className="hgr-tagline-callout">
                      <Sparkles size={16} className="text-amber" />
                      <span>{company.tagline}</span>
                    </div>
                  )}

                  <p className="company-summary-p">{company.summary}</p>

                  {/* Why Notable Section */}
                  <div className="why-notable-card">
                    <strong>Why {company.name} Is Notable:</strong>
                    <p>{company.whyNotable}</p>
                  </div>

                  {/* Product Categories */}
                  <div className="card-categories-row">
                    <span className="cat-label">Key Product Categories:</span>
                    <div className="cat-tags-wrap">
                      {company.productCategories.map((cat, idx) => (
                        <span key={idx} className="category-chip">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* If HGR, show deeper pillars */}
                  {isHgr && company.keyFocusPillars && (
                    <div className="hgr-deep-pillars-grid">
                      {company.keyFocusPillars.map((pillar, pidx) => (
                        <div key={pidx} className="hgr-pillar-mini-card">
                          <h4>
                            <CheckCircle size={15} className="text-amber" />
                            {pillar.title}
                          </h4>
                          <p>{pillar.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pros & Cons Box */}
                  <div className="quick-pros-cons-grid">
                    <div className="pros-box">
                      <h4>
                        <CheckCircle size={15} className="text-green" />
                        Pros & Highlights
                      </h4>
                      <ul>
                        {company.pros.map((pro, pidx) => (
                          <li key={pidx}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="cons-box">
                      <h4>
                        <AlertTriangle size={15} className="text-amber" />
                        Points to Consider
                      </h4>
                      <ul>
                        {company.cons.map((con, cidx) => (
                          <li key={cidx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTA Bottom */}
                  <div className="card-action-bottom">
                    {isHgr ? (
                      <button 
                        className="btn-card-primary btn-hgr-glow"
                        onClick={onOpenHgrReview}
                      >
                        <Sparkles size={16} />
                        <span>Read Full HGR Corporation Brand Review →</span>
                      </button>
                    ) : (
                      <button 
                        className="btn-card-secondary"
                        onClick={() => onSelectCompany(company)}
                      >
                        <span>Read Quick Profile & Analysis →</span>
                      </button>
                    )}

                    <button 
                      className="btn-card-checklist"
                      onClick={onOpenChecklist}
                    >
                      <ShieldCheck size={15} />
                      <span>Audit with Checklist</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Check Before Joining Section */}
      <section className="due-diligence-pillar-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">DISTRIBUTOR ADVISORY</span>
            <h2 className="section-title">What Should You Check Before Joining Any MLM Company?</h2>
            <p className="section-desc">
              Choosing an MLM company should not be based solely on rankings or charismatic upline promises. Conduct these 6 essential checks.
            </p>
          </div>

          <div className="checks-grid-6">
            <div className="check-card">
              <div className="check-icon-num">1</div>
              <h4>Product Quality & Demand</h4>
              <p>Understand what products the company sells and whether real consumers purchase them repeatedly without compensation incentives.</p>
            </div>
            <div className="check-card">
              <div className="check-icon-num">2</div>
              <h4>Business Model & Plan</h4>
              <p>Read the documented compensation plan and verify that income stems from product margins, not recruitment fees.</p>
            </div>
            <div className="check-card">
              <div className="check-icon-num">3</div>
              <h4>Customer vs. Distributor Base</h4>
              <p>Verify that there is a genuine retail customer base rather than internal distributor inventory stockpiling.</p>
            </div>
            <div className="check-card">
              <div className="check-icon-num">4</div>
              <h4>Company Transparency</h4>
              <p>Review Ministry of Corporate Affairs (MCA) registration, leadership identity, PAN/GST, and public return policies.</p>
            </div>
            <div className="check-card">
              <div className="check-icon-num">5</div>
              <h4>Training & Support Systems</h4>
              <p>Evaluate whether the company provides structured sales training, digital tools, and ethical business education.</p>
            </div>
            <div className="check-card">
              <div className="check-icon-num">6</div>
              <h4>Regulatory Compliance</h4>
              <p>Check adherence to the Consumer Protection (Direct Selling) Rules, 2021 notified by the Government of India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of MLM & Direct Selling in India */}
      <section className="future-trends-section">
        <div className="container">
          <div className="future-card-box">
            <div className="section-header">
              <span className="section-eyebrow">INDUSTRY OUTLOOK</span>
              <h2 className="section-title">The Future of MLM & Direct Selling in India</h2>
              <p className="section-desc">
                The direct selling industry is transitioning from legacy 90s models to a modern, digitally connected era.
              </p>
            </div>

            <div className="future-trends-grid">
              <div className="trend-item">
                <TrendingUp size={20} className="text-amber" />
                <div>
                  <strong>Digital Communication & Social Commerce</strong>
                  <p>Distributors engage through WhatsApp, Instagram, and virtual webinars rather than mandatory physical travel.</p>
                </div>
              </div>
              <div className="trend-item">
                <TrendingUp size={20} className="text-amber" />
                <div>
                  <strong>E-commerce & App-First Ordering</strong>
                  <p>Instant consumer checkout links, digital product catalogs, and direct home deliveries.</p>
                </div>
              </div>
              <div className="trend-item">
                <TrendingUp size={20} className="text-amber" />
                <div>
                  <strong>Product Education Over Hype</strong>
                  <p>Informed Indian consumers demand clean ingredients, FSSAI/AYUSH certifications, and authentic results.</p>
                </div>
              </div>
              <div className="trend-item">
                <TrendingUp size={20} className="text-amber" />
                <div>
                  <strong>Next-Gen Indian Ventures</strong>
                  <p>Emerging ventures like HGR Corporation introduce modern tech infrastructure to build sustainable entrepreneurial ecosystems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Disclaimer Box */}
      <section className="editorial-disclaimer-section">
        <div className="container">
          <div className="disclaimer-alert-card">
            <h4>Editorial & Ranking Disclaimer</h4>
            <p>
              This Top 10 list is an editorial selection intended for general educational and comparative purposes. It does not represent an official ranking by the Government of India, the Ministry of Consumer Affairs, or an audited financial ranking by revenue. Company information, product lines, and business policies evolve over time. Any description of HGR Corporation as an "Emerging Indian Direct Selling Company" is editorial positioning based on its developmental stage. Readers must independently verify all corporate information before making financial or business commitments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
