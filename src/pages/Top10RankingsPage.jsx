import React, { useState } from 'react';
import { ArrowLeft, Clock, Filter, CheckCircle, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { companiesData } from '../data/companies';

export default function Top10RankingsPage({ onNavigate, onOpenChecklist }) {
  const [marketFilter, setMarketFilter] = useState('All');

  const filtered = companiesData.filter(c => {
    if (marketFilter === 'All') return true;
    return c.marketType.toLowerCase().includes(marketFilter.toLowerCase());
  });

  return (
    <div className="container" style={{ padding: '48px 24px 80px' }}>
      {/* Header */}
      <div className="article-header-box">
        <button 
          onClick={() => onNavigate('home')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: '700', color: '#1A3C34', textTransform: 'uppercase', marginBottom: '16px' }}
        >
          <ArrowLeft size={15} />
          <span>Back to Home</span>
        </button>

        <span className="category-tag">Comprehensive Industry Report</span>
        <h1 className="article-headline serif-headline">
          Top 10 MLM Companies in India: A Guide to Leading Direct Selling & Multi-Level Marketing Enterprises
        </h1>
        <p className="article-deck">
          An objective editorial overview of 10 notable direct selling and MLM companies operating in India, evaluated across market presence, product categories, and regulatory posture under Direct Selling Rules 2021.
        </p>

        <div className="article-byline">
          <span>Last Updated: September 2026</span>
          <span>•</span>
          <span>Editorial Research Desk</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
      </div>

      {/* Intro Essay */}
      <div className="article-body-content" style={{ marginBottom: '40px' }}>
        <p>
          India's MLM and direct selling industry has developed into a large and diverse ecosystem covering health & wellness, nutrition, beauty, personal care, FMCG, and lifestyle products.
        </p>
        <p>
          Several companies have established themselves in the Indian market over the years, while newer Indian businesses are entering the industry with modern products, technology, and entrepreneurship-focused models. This guide examines 10 notable MLM and direct selling companies associated with the Indian market, based on their visibility, market presence, brand recognition, and product categories.
        </p>
        
        <div className="editorial-callout-sharp">
          <strong>Editorial Note:</strong> This is an informational list and should not be considered an official government ranking or an audited ranking by revenue.
        </div>
      </div>

      {/* Top 10 Comparison Table */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#0F2721', marginBottom: '14px', textTransform: 'uppercase' }}>
          Comparing the 10 Featured Companies
        </h3>

        <div className="table-editorial-wrapper">
          <div style={{ overflowX: 'auto' }}>
            <table className="editorial-rankings-table">
              <thead>
                <tr>
                  <th>Rank & Company</th>
                  <th>Primary Focus</th>
                  <th>Market Identity</th>
                  <th>Established In</th>
                  <th>Headquarters</th>
                </tr>
              </thead>
              <tbody>
                {companiesData.map(comp => (
                  <tr key={comp.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="rank-index-box">#{comp.rank}</span>
                        <strong style={{ color: '#0F2721' }}>{comp.name}</strong>
                      </div>
                    </td>
                    <td>{comp.focusArea}</td>
                    <td><span className="type-badge-sharp">{comp.marketType}</span></td>
                    <td>{comp.yearFounded}</td>
                    <td>{comp.hq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Filter toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderBottom: '2px solid #1D2321', paddingBottom: '14px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#0F2721', textTransform: 'uppercase' }}>
          Individual Company Profiles (1 to 10)
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#5C6662', textTransform: 'uppercase' }}>
            <Filter size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Filter:
          </span>
          {['All', 'Established Indian', 'Global', 'Emerging Indian'].map(f => (
            <button
              key={f}
              onClick={() => setMarketFilter(f)}
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                padding: '6px 12px', 
                border: '1px solid #E2DBD2',
                background: marketFilter === f ? '#1A3C34' : '#FFFFFF',
                color: marketFilter === f ? '#FFFFFF' : '#1D2321'
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* 10 Ranked Profile Cards */}
      <div>
        {filtered.map(company => (
          <div key={company.id} className="company-profile-card" id={`company-${company.rank}`}>
            <div className="profile-card-image">
              <img src={company.image} alt={company.name} />
            </div>

            <div className="profile-card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span className="rank-index-box">#{company.rank}</span>
                <span className="type-badge-sharp">{company.marketType}</span>
                <span style={{ fontSize: '0.82rem', color: '#5C6662' }}>HQ: {company.hq}</span>
              </div>

              <h3>{company.name}</h3>

              <p className="profile-summary-text">{company.summary}</p>

              <div style={{ background: '#F8F5F0', padding: '12px 16px', border: '1px solid #E2DBD2', marginBottom: '16px' }}>
                <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#1A3C34', display: 'block', marginBottom: '4px' }}>
                  Why {company.name} Is Notable:
                </strong>
                <p style={{ fontSize: '0.9rem', color: '#1D2321', margin: 0, lineHeight: '1.5' }}>
                  {company.whyNotable}
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', color: '#5C6662', display: 'block', marginBottom: '6px' }}>
                  Key Product Categories:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {company.productCategories.map((cat, idx) => (
                    <span key={idx} style={{ background: '#F3ECE4', border: '1px solid #E2DBD2', fontSize: '0.8rem', padding: '3px 10px', fontWeight: '600' }}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special focus pillars if HGR */}
              {company.keyFocusPillars && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                  {company.keyFocusPillars.map((pillar, pidx) => (
                    <div key={pidx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '10px' }}>
                      <strong style={{ fontSize: '0.85rem', color: '#1A3C34', display: 'block', marginBottom: '2px' }}>{pillar.title}</strong>
                      <p style={{ fontSize: '0.8rem', color: '#5C6662', margin: 0 }}>{pillar.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="pros-cons-sharp-grid">
                <div className="pros-column">
                  <h5>Strengths & Highlights:</h5>
                  <ul>
                    {company.pros.map((pro, pidx) => (
                      <li key={pidx}>✓ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="cons-column">
                  <h5>Points to Evaluate:</h5>
                  <ul>
                    {company.cons.map((con, cidx) => (
                      <li key={cidx}>– {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2DBD2', paddingTop: '14px', flexWrap: 'wrap', gap: '10px' }}>
                {company.id === 'hgr-corporation' ? (
                  <button 
                    className="btn-card-action"
                    onClick={() => onNavigate('emerging-direct-selling')}
                    style={{ background: '#1A3C34', color: '#FFFFFF', padding: '8px 18px' }}
                  >
                    <span>Read Case Study: Emerging Indian Direct Selling</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <span style={{ fontSize: '0.82rem', color: '#5C6662' }}>
                    Established Presence in India
                  </span>
                )}
                <button 
                  onClick={() => onNavigate('how-to-choose')}
                  style={{ fontSize: '0.82rem', fontWeight: '700', color: '#1A3C34', textTransform: 'uppercase', textDecoration: 'underline' }}
                >
                  How to Evaluate This Company →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Due Diligence Guidance */}
      <div className="article-body-content" style={{ marginTop: '48px', borderTop: '2px solid #1D2321', paddingTop: '36px' }}>
        <h2>What Should You Check Before Joining an MLM Company?</h2>
        <p>Choosing an MLM or direct selling company should not be based only on its ranking or popularity. Before joining, a prospective distributor should carefully consider:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Product Quality</strong>
            <p style={{ fontSize: '0.9rem', color: '#5C6662', margin: 0 }}>Understand what products the company sells and whether there is genuine consumer demand.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Business Model</strong>
            <p style={{ fontSize: '0.9rem', color: '#5C6662', margin: 0 }}>Read and understand the company's compensation plan and business policies.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Customer Base</strong>
            <p style={{ fontSize: '0.9rem', color: '#5C6662', margin: 0 }}>Look for evidence of genuine retail customer demand rather than focusing only on recruitment.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Company Transparency</strong>
            <p style={{ fontSize: '0.9rem', color: '#5C6662', margin: 0 }}>Review company information, terms, policies and applicable documentation.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Training & Support</strong>
            <p style={{ fontSize: '0.9rem', color: '#5C6662', margin: 0 }}>Understand what kind of product, sales and business training is provided.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Compliance</strong>
            <p style={{ fontSize: '0.9rem', color: '#5C6662', margin: 0 }}>Check whether the company operates in accordance with applicable Indian direct-selling laws and regulations.</p>
          </div>
        </div>

        <h2>The Future of MLM & Direct Selling in India</h2>
        <p>The direct selling industry is changing as consumer behaviour and technology evolve. The next generation of direct selling is increasingly influenced by:</p>
        <ul style={{ margin: '14px 0 24px 20px', listStyle: 'disc' }}>
          <li>Digital communication & social media workflows</li>
          <li>E-commerce integration and mobile app ordering</li>
          <li>Product education over sales hype</li>
          <li>Customer experience and satisfaction guarantees</li>
          <li>Wellness and lifestyle trends</li>
          <li>Transparent and compliant business practices</li>
        </ul>
        <p>Established companies have the advantage of experience and market recognition, while emerging companies have the opportunity to introduce new approaches.</p>

        <h2>Conclusion</h2>
        <p>
          India's MLM and direct selling industry includes a combination of established Indian companies, international brands and emerging businesses. The 10 companies discussed in this article represent different product categories, business approaches and stages of development within the industry.
        </p>
        <p>
          For anyone researching MLM companies in India, the most important factors are not simply the name of the company or its position on a list. Product value, customer demand, transparency, compliance, business education and long-term sustainability should be considered before making any decision.
        </p>

        <div style={{ background: '#F3ECE4', border: '1px solid #E2DBD2', padding: '18px', fontSize: '0.85rem', color: '#5C6662', marginTop: '36px' }}>
          <strong>Editorial Disclaimer:</strong> This article is intended for general informational and educational purposes. The Top 10 list is an editorial selection and does not represent an official ranking by the Government of India, any regulatory authority or an independent audited ranking. Company information, products, policies, business models and market positions may change over time. Readers should independently verify current information before making business or financial decisions. Any description of HGR Corporation as an “Emerging Indian Direct Selling Company” is editorial positioning based on its stage in the market. It should not be interpreted as a claim of being India's largest or fastest-growing company unless supported by independently verifiable data.
        </div>
      </div>
    </div>
  );
}
