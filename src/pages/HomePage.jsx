import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companiesData } from '../data/companies';

export default function HomePage({ onNavigate, onOpenChecklist: _onOpenChecklist }) {
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

      {/* 2026 Targeted MLM & Direct Selling Category Guides */}
      <section className="section-wrapper" style={{ background: '#F8F5F0', borderTop: '2px solid #1D2321', borderBottom: '1px solid #E2DBD2' }}>
        <div className="container">
          <div className="section-title-bar">
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#8C4A52', letterSpacing: '0.8px' }}>
                EDITORIAL MARKET GUIDES &bull; 2026 EDITION
              </span>
              <h2 className="section-heading" style={{ margin: '4px 0 0' }}>
                Targeted MLM &amp; Direct Selling Category Guides
              </h2>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#5C6662' }}>7 Comprehensive Market Analysis Articles</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '24px' }}>
            {/* Card 1: World Top 10 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #1A3C34' }}>
              <div>
                <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontSize: '0.72rem' }}>GLOBAL BENCHMARK</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  World Top 10 MLM Companies
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  Global leaders evaluated on multi-continent distributor reach, revenue scale, and product credibility (Amway, Herbalife, Vorwerk).
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('world-top-10-mlm')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#1A3C34', color: '#FFFFFF' }}
              >
                <span>Read World Top 10 →</span>
              </button>
            </div>

            {/* Card 2: India Top 10 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #8C4A52' }}>
              <div>
                <span className="notice-badge" style={{ background: '#8C4A52', color: '#FFFFFF', fontSize: '0.72rem' }}>NATIONAL LEADERS</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  India Top 10 MLM Companies
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  Established market giants operating across India with proven longevity, deep product lines, and legal compliance.
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('india-top-10-mlm')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#8C4A52', color: '#FFFFFF' }}
              >
                <span>Read India Top 10 →</span>
              </button>
            </div>

            {/* Card 3: India New MLM Companies */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #1A3C34' }}>
              <div>
                <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontSize: '0.72rem' }}>NEW ENTRANTS</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  India Top 10 New MLM Companies
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  Newer market entrants founded in the post-digital era, emphasizing product utility and digital distributor training.
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('india-new-mlm-companies')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#1A3C34', color: '#FFFFFF' }}
              >
                <span>Explore New MLM →</span>
              </button>
            </div>

            {/* Card 4: India Emerging MLM */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #8C4A52' }}>
              <div>
                <span className="notice-badge" style={{ background: '#8C4A52', color: '#FFFFFF', fontSize: '0.72rem' }}>EMERGING PLAYERS</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  India Top 10 Emerging MLM Companies
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  Companies transitioning from early growth into established presence with expanding catalogs and geographic reach.
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('india-emerging-mlm-companies')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#8C4A52', color: '#FFFFFF' }}
              >
                <span>View Emerging MLM →</span>
              </button>
            </div>

            {/* Card 5: India New MLM Startups */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #C27D38' }}>
              <div>
                <span className="notice-badge" style={{ background: '#C27D38', color: '#FFFFFF', fontSize: '0.72rem' }}>AGILE STARTUPS</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  India Top 10 New MLM Startups
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  High-agility ventures combining lean operations, WhatsApp commerce, and entrepreneur-first partnership structures.
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('india-new-mlm-startups')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#C27D38', color: '#FFFFFF' }}
              >
                <span>View MLM Startups →</span>
              </button>
            </div>

            {/* Card 6: India Fast Growing MLM */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #1A3C34' }}>
              <div>
                <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontSize: '0.72rem' }}>HIGH MOMENTUM</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  India Top 10 Fast Growing MLM Companies
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  Enterprises showing measurable growth across distributor onboarding, tier-2/3 expansion, and repeat consumer adoption.
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('india-fast-growing-mlm-companies')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#1A3C34', color: '#FFFFFF' }}
              >
                <span>View Fast Growing →</span>
              </button>
            </div>

            {/* Card 7: India New Direct Selling */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #8C4A52' }}>
              <div>
                <span className="notice-badge" style={{ background: '#8C4A52', color: '#FFFFFF', fontSize: '0.72rem' }}>DIRECT SALES 2021</span>
                <h3 style={{ fontSize: '1.22rem', color: '#1D2321', margin: '10px 0 8px', fontWeight: '800' }}>
                  India Top 10 New Direct Selling Companies
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '14px' }}>
                  Newer enterprises operating under the Consumer Protection (Direct Selling) Rules, 2021 with genuine product utility.
                </p>
              </div>
              <button
                className="btn-card-action"
                onClick={() => onNavigate('india-new-direct-selling-companies')}
                style={{ padding: '8px 14px', fontSize: '0.82rem', background: '#8C4A52', color: '#FFFFFF' }}
              >
                <span>View Direct Selling →</span>
              </button>
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
