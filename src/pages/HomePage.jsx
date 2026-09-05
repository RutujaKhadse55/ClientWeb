import React from 'react';
import { ArrowRight, Clock, ShieldCheck, CheckSquare, Trophy, TrendingUp, Layers, CheckCircle } from 'lucide-react';
import { companiesData } from '../data/companies';

export default function HomePage({ onNavigate, onOpenChecklist }) {
  return (
    <div>
      {/* Magazine Hero Section */}
      <section className="hero-editorial-section">
        <div className="container">
          <div className="hero-editorial-grid">
            {/* Main Lead Story */}
            <div className="hero-main-article">
              <span className="category-tag">Featured Industry Guide</span>
              <h1 className="hero-title serif-headline">
                Top 10 MLM Companies in India: Market Leadership, Categories & Emerging Trends
              </h1>
              
              <div className="hero-meta-row">
                <span>By Industry Research Desk</span>
                <span>•</span>
                <span>Updated: September 2026</span>
                <span>•</span>
                <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 10 min read</span>
              </div>

              <div className="hero-image-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80" 
                  alt="Top 10 MLM Companies in India" 
                />
              </div>

              <p className="hero-excerpt">
                India's direct selling sector has developed into a diverse multi-category ecosystem spanning wellness, nutrition, beauty, and daily FMCG goods. This comprehensive market overview examines 10 notable companies shaping the Indian landscape, from legacy pioneers like Vestige, Amway, and Modicare to emerging digital-first innovators.
              </p>

              <div>
                <button 
                  className="btn-card-action"
                  onClick={() => onNavigate('top-10-rankings')}
                  style={{ background: '#1A3C34', color: '#FFFFFF' }}
                >
                  <span>Read Full Top 10 Rankings & Analysis</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Side Column: Emerging & Fast-Growing Analyses */}
            <div className="hero-side-column">
              <div style={{ borderBottom: '2px solid #1D2321', paddingBottom: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#1A3C34' }}>
                  Industry Spotlights & Analysis
                </h3>
              </div>

              {/* Story 1: Emerging Indian Direct Selling */}
              <div className="side-article-card" onClick={() => onNavigate('emerging-direct-selling')}>
                <span className="category-tag" style={{ background: '#8C4A52' }}>Market Evolution</span>
                <h4>An Emerging Indian Direct Selling Company: Understanding New-Age Models</h4>
                <p>
                  How changing consumer behaviour, digital communication, and community-driven commerce are creating space for modern direct selling startups in India.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#8C4A52', fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', display: 'inline-block' }}>
                  Read Analysis →
                </span>
              </div>

              {/* Story 2: Fastest-Growing MLM Startup */}
              <div className="side-article-card" onClick={() => onNavigate('fastest-growing-startup')}>
                <span className="category-tag" style={{ background: '#C27D38' }}>Startup Growth</span>
                <h4>India’s Fastest-Growing MLM Startup: Beyond the Growth Label</h4>
                <p>
                  Evaluating measurable growth indicators—product utility, distributor training, digital infrastructure, and sustainable long-term performance.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#C27D38', fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', display: 'inline-block' }}>
                  Read Report →
                </span>
              </div>

              {/* Story 3: Due Diligence Guide */}
              <div className="side-article-card" onClick={() => onNavigate('how-to-choose')}>
                <span className="category-tag" style={{ background: '#1A3C34' }}>Due Diligence</span>
                <h4>How to Choose the Right MLM Company in India: 7 Evaluation Pillars</h4>
                <p>
                  A practical framework to evaluate product quality, fair compensation plans, and compliance with Consumer Protection Rules 2021.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#1A3C34', fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', display: 'inline-block' }}>
                  Read Guide →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Comparison Table Preview */}
      <section className="section-wrapper" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="section-title-bar">
            <h2 className="section-heading">India’s 10 Leading Direct Selling Companies (2026 Index)</h2>
            <button className="btn-view-all" onClick={() => onNavigate('top-10-rankings')}>
              View Complete Detailed Profiles →
            </button>
          </div>

          <div className="table-editorial-wrapper">
            <div style={{ overflowX: 'auto' }}>
              <table className="editorial-rankings-table">
                <thead>
                  <tr>
                    <th>Rank & Company</th>
                    <th>Market Segment</th>
                    <th>Primary Product Focus</th>
                    <th>Operating Model</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {companiesData.map(comp => (
                    <tr key={comp.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="rank-index-box">#{comp.rank}</span>
                          <strong style={{ color: '#0F2721', fontSize: '0.96rem' }}>{comp.name}</strong>
                        </div>
                      </td>
                      <td>
                        <span className="type-badge-sharp">{comp.marketType}</span>
                      </td>
                      <td>
                        <span style={{ color: '#1D2321', fontSize: '0.88rem' }}>{comp.focusArea}</span>
                      </td>
                      <td>
                        <span style={{ color: '#5C6662', fontSize: '0.85rem' }}>HQ: {comp.hq}</span>
                      </td>
                      <td>
                        <button 
                          className="btn-view-all"
                          onClick={() => onNavigate('top-10-rankings')}
                          style={{ fontSize: '0.8rem' }}
                        >
                          View Profile →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Educational Articles Grid */}
      <section className="section-wrapper" style={{ background: '#FFFFFF', borderTop: '1px solid #E2DBD2' }}>
        <div className="container">
          <div className="section-title-bar">
            <h2 className="section-heading">Foundational Direct Selling Guides</h2>
            <span style={{ fontSize: '0.85rem', color: '#5C6662' }}>Independent Research & Due Diligence</span>
          </div>

          <div className="three-cards-grid">
            {/* Card 1: Benefits */}
            <div className="editorial-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" 
                  alt="Benefits of Direct Selling" 
                />
              </div>
              <span className="category-tag">Foundations</span>
              <h3>Benefits of Joining Direct Selling / MLM in India</h3>
              <p>
                An objective look at low entry barriers, flexible hours, sales skill acquisition, product-focused revenue models, and realistic income expectations.
              </p>
              <button className="btn-card-action" onClick={() => onNavigate('benefits-guide')}>
                <span>Read Full Article</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card 2: How to Choose */}
            <div className="editorial-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80" 
                  alt="How to Choose the Right MLM" 
                />
              </div>
              <span className="category-tag" style={{ background: '#8C4A52' }}>Evaluation</span>
              <h3>How to Choose the Right MLM Company in India</h3>
              <p>
                A rigorous 7-pillar evaluation guide analyzing product certifications, compensation transparency, retail customer demand, and red flags to avoid.
              </p>
              <button className="btn-card-action" onClick={() => onNavigate('how-to-choose')}>
                <span>Read Full Article</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card 3: MLM vs Job */}
            <div className="editorial-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80" 
                  alt="MLM vs Traditional Business or Job" 
                />
              </div>
              <span className="category-tag" style={{ background: '#C27D38' }}>Comparative Study</span>
              <h3>MLM vs Traditional Business or Job: Which Is Right for You?</h3>
              <p>
                Comparing capital requirements, risk profiles, schedule autonomy, and growth scalability across traditional employment, independent business, and direct selling.
              </p>
              <button className="btn-card-action" onClick={() => onNavigate('mlm-vs-job')}>
                <span>Read Full Article</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Callout Banner */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <div style={{ background: '#F3ECE4', border: '2px solid #1D2321', padding: '36px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '720px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#1A3C34', letterSpacing: '0.8px' }}>
              CONSUMER PROTECTION & EVALUATION
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#0F2721', margin: '4px 0 8px' }}>
              How to Evaluate Any Direct Selling Opportunity
            </h3>
            <p style={{ color: '#5C6662', fontSize: '0.98rem' }}>
              Before investing time or capital with any direct selling company, verify legal MCA registration, mandatory 30-day buyback policies, and genuine consumer demand.
            </p>
          </div>
          <button 
            className="btn-card-action"
            onClick={() => onNavigate('how-to-choose')}
            style={{ background: '#1A3C34', color: '#FFFFFF', padding: '14px 28px', fontSize: '0.92rem' }}
          >
            <span>Read 7-Pillar Guide</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
