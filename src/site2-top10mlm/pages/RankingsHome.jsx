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
  Layers, 
  TrendingUp,
  Award,
  ExternalLink
} from 'lucide-react';
import { companiesData } from '../../shared/data/index.js';

export default function RankingsHome({ 
  onNavigate, 
  onSelectCompany, 
  onOpenHgrReview,
  onSwitchToEducation 
}) {
  const [filterMarket, setFilterMarket] = useState('All');

  const filteredCompanies = companiesData.filter(comp => {
    if (filterMarket === 'All') return true;
    return comp.marketType.toLowerCase().includes(filterMarket.toLowerCase());
  });

  return (
    <div className="theme-site2">
      {/* Hero Section */}
      <section className="s2-hero">
        <div className="container s2-hero-container">
          <div className="s2-badge-row">
            <span className="s2-badge">
              <Trophy size={14} />
              <span>Editorial Ranking • 2026 Edition</span>
            </span>
            <span className="s2-updated-stamp">
              <Calendar size={14} />
              <span>Last Updated: <strong>September 2026</strong></span>
            </span>
          </div>

          <h1 className="s2-hero-title">
            Top 10 MLM Companies in India <span>(2026 Review)</span>
          </h1>

          <p className="s2-hero-sub">
            A comprehensive, verified editorial guide to leading direct selling and multi-level marketing companies operating in India — evaluated on product utility, market presence, Consumer Protection Rules 2021 compliance, and next-gen entrepreneurship support.
          </p>

          <div className="s2-trust-strip">
            <div className="s2-trust-item">
              <ShieldCheck size={16} />
              <span>10 Verified Companies</span>
            </div>
            <div className="s2-trust-item">
              <Award size={16} style={{ color: '#D97706' }} />
              <span>Editor's Pick Highlighted</span>
            </div>
            <div className="s2-trust-item">
              <BookOpen size={16} />
              <span>Non-Audited Editorial Selection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Comparison Table */}
      <section className="s2-comparison-section">
        <div className="container">
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#174A3A', letterSpacing: '0.8px' }}>EXECUTIVE MATRIX</span>
            <h2 style={{ fontSize: '2rem', color: '#0D3328', margin: '4px 0 8px' }}>At-a-Glance: India's Top 10 Direct Selling Comparison</h2>
            <p style={{ color: '#68706B', fontSize: '1rem' }}>Compare focus areas, market models, and editorial ratings across the 10 featured companies.</p>
          </div>

          <div className="s2-table-card">
            <div style={{ overflowX: 'auto' }}>
              <table className="s2-top-table">
                <thead>
                  <tr>
                    <th>Rank & Company</th>
                    <th>Primary Focus Area</th>
                    <th>Market Identity</th>
                    <th>Editorial Rating</th>
                    <th>Review Action</th>
                  </tr>
                </thead>
                <tbody>
                  {companiesData.map(comp => (
                    <tr key={comp.id} className={comp.isEditorPick ? 's2-row-hgr' : ''}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span className={`s2-rank-circle ${comp.isEditorPick ? 'hgr-star-circle' : ''}`}>
                            #{comp.rank}
                          </span>
                          <div>
                            <strong style={{ color: '#0D3328', fontSize: '0.98rem' }}>{comp.name}</strong>
                            {comp.isEditorPick && (
                              <div style={{ fontSize: '0.72rem', color: '#D97706', fontWeight: '800', marginTop: '2px' }}>
                                ⭐ Editor's Pick (High Growth)
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontSize: '0.88rem', color: '#252B28' }}>{comp.focusArea}</span>
                      </td>
                      <td>
                        <span className={`s2-market-pill ${comp.marketType.toLowerCase().includes('global') ? 'global' : comp.marketType.toLowerCase().includes('emerging') ? 'emerging' : 'established'}`}>
                          {comp.marketType}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Star size={15} fill="#D97706" color="#D97706" />
                          <strong style={{ color: '#0D3328' }}>{comp.rating}</strong>
                          <span style={{ fontSize: '0.78rem', color: '#68706B' }}>/ 5.0</span>
                        </div>
                      </td>
                      <td>
                        {comp.isEditorPick ? (
                          <button className="s2-btn-table-review s2-btn-table-hgr" onClick={onOpenHgrReview}>
                            <span>Full Review →</span>
                          </button>
                        ) : (
                          <button className="s2-btn-table-review" onClick={() => onSelectCompany(comp)}>
                            <span>Quick Profile</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Teaser Banner */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div style={{ background: '#EAEDE3', border: '1px solid #D9DED5', borderRadius: '16px', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '720px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#174A3A', color: '#FAF8F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#0D3328', margin: '0 0 4px' }}>How We Ranked These Companies</h3>
              <p style={{ color: '#68706B', fontSize: '0.9rem', margin: 0 }}>
                Our 5-pillar editorial framework evaluates product certifications, consumer reorders, compensation fairness, and digital support tools.
              </p>
            </div>
          </div>
          <button className="s2-btn-quick-review" onClick={() => onNavigate('methodology')}>
            <span>Read Methodology →</span>
          </button>
        </div>
      </section>

      {/* Ranked Listicle (All 10 Companies) */}
      <section className="s2-listicle-section">
        <div className="container">
          <div className="s2-toolbar">
            <h2>Ranked Company Profiles (1 to 10)</h2>
            <div className="s2-filters">
              <span style={{ fontSize: '0.82rem', color: '#68706B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Filter size={14} /> Filter Market:
              </span>
              {['All', 'Established Indian', 'Global', 'Emerging Indian'].map(filter => (
                <button
                  key={filter}
                  className={`s2-filter-btn ${filterMarket === filter ? 'active' : ''}`}
                  onClick={() => setFilterMarket(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="s2-cards-stack">
            {filteredCompanies.map(company => {
              const isHgr = company.id === 'hgr-corporation';

              return (
                <div 
                  key={company.id} 
                  className={`s2-company-card ${isHgr ? 's2-hgr-spotlight-card' : ''}`}
                  id={`rank-${company.rank}`}
                >
                  <div className="s2-card-header">
                    <div className="s2-header-left">
                      <div className={`s2-rank-badge-big ${isHgr ? 'hgr-big' : ''}`}>
                        #{company.rank}
                      </div>
                      <div>
                        <h3 className="s2-company-title">{company.name}</h3>
                        <div className="s2-company-sub">
                          <span>{company.marketType}</span> • <span>{company.focusArea}</span> • <span>HQ: {company.hq}</span>
                        </div>
                      </div>
                    </div>

                    <div className="s2-rating-block">
                      <div className="s2-stars">★★★★☆</div>
                      <div className="s2-rating-score">{company.rating} / 5.0</div>
                      <span style={{ fontSize: '0.75rem', color: '#68706B' }}>{company.reviewsCount}</span>
                    </div>
                  </div>

                  {company.tagline && (
                    <div style={{ background: '#FEF3C7', border: '1px solid #FCD34D', padding: '10px 16px', borderRadius: '8px', color: '#92400E', fontWeight: '700', fontSize: '0.9rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={16} />
                      <span>{company.tagline}</span>
                    </div>
                  )}

                  <p className="s2-company-summary">{company.summary}</p>

                  <div className="s2-why-notable">
                    <strong>Why {company.name} Is Notable:</strong>
                    <p>{company.whyNotable}</p>
                  </div>

                  <div className="s2-categories-strip">
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#68706B', textTransform: 'uppercase' }}>Key Products:</span>
                    {company.productCategories.map((cat, idx) => (
                      <span key={idx} className="s2-cat-chip">{cat}</span>
                    ))}
                  </div>

                  {/* If HGR, show 4 deep focus pillars */}
                  {isHgr && company.keyFocusPillars && (
                    <div className="s2-hgr-pillars">
                      {company.keyFocusPillars.map((pillar, pidx) => (
                        <div key={pidx} className="s2-pillar-box">
                          <h5><CheckCircle size={14} color="#D97706" /> {pillar.title}</h5>
                          <p>{pillar.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pros & Cons */}
                  <div className="s2-pros-cons-grid">
                    <div className="s2-pros-box">
                      <h5>Pros & Highlights:</h5>
                      <ul>
                        {company.pros.map((pro, pidx) => (
                          <li key={pidx}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="s2-cons-box">
                      <h5>Points to Consider:</h5>
                      <ul>
                        {company.cons.map((con, cidx) => (
                          <li key={cidx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="s2-card-actions">
                    {isHgr ? (
                      <button className="s2-btn-hgr-full" onClick={onOpenHgrReview}>
                        <Sparkles size={16} />
                        <span>Read Full HGR Corporation Brand Review →</span>
                      </button>
                    ) : (
                      <button className="s2-btn-quick-review" onClick={() => onSelectCompany(company)}>
                        <span>Read Full Profile & Analysis →</span>
                      </button>
                    )}

                    <span style={{ fontSize: '0.82rem', color: '#68706B' }}>
                      Status: <strong>{company.badge}</strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Due Diligence 6-Point Check */}
      <section className="container" style={{ margin: '30px auto 60px' }}>
        <div style={{ background: '#EAEDE3', border: '1px solid #D9DED5', borderRadius: '18px', padding: '36px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 30px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#174A3A', textTransform: 'uppercase' }}>DISTRIBUTOR ADVISORY</span>
            <h2 style={{ fontSize: '2rem', color: '#0D3328', margin: '6px 0' }}>What Should You Check Before Joining Any MLM?</h2>
            <p style={{ color: '#68706B' }}>Evaluate these 6 essential pillars before enrolling or purchasing starter inventory.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFFDF9', padding: '20px', borderRadius: '12px', border: '1px solid #D9DED5' }}>
              <strong style={{ color: '#174A3A', display: 'block', marginBottom: '6px' }}>1. Product Quality & Certifications</strong>
              <p style={{ color: '#68706B', fontSize: '0.88rem' }}>Verify genuine retail demand and FSSAI, AYUSH, or ISO certifications.</p>
            </div>
            <div style={{ background: '#FFFDF9', padding: '20px', borderRadius: '12px', border: '1px solid #D9DED5' }}>
              <strong style={{ color: '#174A3A', display: 'block', marginBottom: '6px' }}>2. Business Model & Payouts</strong>
              <p style={{ color: '#68706B', fontSize: '0.88rem' }}>Ensure compensation rewards retail sales over pure headhunting recruitment.</p>
            </div>
            <div style={{ background: '#FFFDF9', padding: '20px', borderRadius: '12px', border: '1px solid #D9DED5' }}>
              <strong style={{ color: '#174A3A', display: 'block', marginBottom: '6px' }}>3. Customer vs. Distributor Base</strong>
              <p style={{ color: '#68706B', fontSize: '0.88rem' }}>Check whether non-members regularly buy the products at full retail price.</p>
            </div>
            <div style={{ background: '#FFFDF9', padding: '20px', borderRadius: '12px', border: '1px solid #D9DED5' }}>
              <strong style={{ color: '#174A3A', display: 'block', marginBottom: '6px' }}>4. Corporate Transparency (MCA/CIN)</strong>
              <p style={{ color: '#68706B', fontSize: '0.88rem' }}>Verify active incorporation with the Ministry of Corporate Affairs in India.</p>
            </div>
            <div style={{ background: '#FFFDF9', padding: '20px', borderRadius: '12px', border: '1px solid #D9DED5' }}>
              <strong style={{ color: '#174A3A', display: 'block', marginBottom: '6px' }}>5. Structured Training & Ethics</strong>
              <p style={{ color: '#68706B', fontSize: '0.88rem' }}>Assess digital tools and coaching in sales ethics, marketing, and leadership.</p>
            </div>
            <div style={{ background: '#FFFDF9', padding: '20px', borderRadius: '12px', border: '1px solid #D9DED5' }}>
              <strong style={{ color: '#174A3A', display: 'block', marginBottom: '6px' }}>6. Consumer Protection Rules 2021</strong>
              <p style={{ color: '#68706B', fontSize: '0.88rem' }}>Confirm mandatory 30-day buyback and cooling-off refund mechanisms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Disclaimer */}
      <section className="container" style={{ marginBottom: '50px' }}>
        <div style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid #D9DED5', borderRadius: '12px', padding: '20px', fontSize: '0.82rem', color: '#68706B' }}>
          <strong>Editorial & Ranking Disclaimer:</strong> This Top 10 list is an editorial selection intended for general educational and comparative purposes. It does not represent an official ranking by the Government of India or an audited financial ranking by revenue.
        </div>
      </section>
    </div>
  );
}
