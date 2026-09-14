import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Globe, Clock, ChevronDown, ChevronUp, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';
import { mlmSeoArticles } from '../data/mlmSeoArticles';

const article = mlmSeoArticles.find(a => a.id === 'india-top-10-fast-growing-mlm-companies');

export default function IndiaFastGrowingMlmPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="container" style={{ padding: '40px 24px 80px', maxWidth: '1180px' }}>

      {/* Immersive Header */}
      <div className="article-immersive-header">
        <button onClick={() => onNavigate('home')} className="article-back-nav">
          <ArrowLeft size={14} />
          <span>Direct Selling Journal &bull; Fast Growing MLM Companies India</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800' }}>FAST GROWING</span>
          <span className="notice-badge" style={{ background: '#C27D38', color: '#FFFFFF', fontWeight: '800' }}>HIGH MOMENTUM 2026</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          {article.h1}
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.18rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          Fast growing MLM companies in India are showing strong momentum across network expansion, product adoption, geographic reach, and digital infrastructure. This guide identifies the top 10 fast growing MLM companies in India based on observable growth indicators.
        </p>

        <div className="article-byline">
          <span>By Growth &amp; Market Analysis Desk</span>
          <span>&bull;</span>
          <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{article.readTime}</span>
          <span>&bull;</span>
          <span>Published: {article.publishedAt}</span>
          <span>&bull;</span>
          <span>Updated: {article.updatedAt}</span>
        </div>
      </div>

      {/* Feature Image */}
      <div style={{ margin: '0 0 32px', border: '1px solid #1D2321', background: '#FFFFFF' }}>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80"
          alt="Fast Growing MLM Companies in India — Top 10 High-Momentum Direct Selling Enterprises"
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig: Fast growing MLM companies in India demonstrate measurable expansion across distributor networks, product categories, and digital infrastructure.</span>
          <span>Source: Direct Selling Journal Growth Monitor</span>
        </div>
      </div>

      {/* Keyword Variants Strip */}
      <div style={{ background: '#F3ECE4', border: '1px solid #E2DBD2', padding: '12px 18px', marginBottom: '24px', fontSize: '0.82rem', color: '#5C6662' }}>
        <strong style={{ color: '#1A3C34' }}>Also searched as: </strong>
        {article.keywordVariants.join(' • ')}
      </div>

      {/* Introduction */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px', marginBottom: '28px', fontSize: '1.08rem', lineHeight: '1.75', color: '#1D2321' }}>
        <p>{article.intro}</p>
        <div style={{ marginTop: '16px', background: '#F3ECE4', border: '1px solid #E2DBD2', padding: '14px 18px', fontSize: '0.9rem', color: '#5C6662' }}>
          <strong>Editorial Note:</strong> This list does not rely on audited financial revenue data. Growth is evaluated across observable market indicators. This is not an official government ranking or AI-certified list.
        </div>
      </div>

      {/* 5 Growth Indicators */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <BarChart3 size={20} color="#C27D38" />
          <h2 style={{ fontSize: '1.2rem', color: '#1A3C34', margin: 0, fontWeight: '800' }}>5 Growth Dimensions We Evaluate</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {['Distributor network growth', 'Geographic expansion (Tier-2, 3)', 'Product portfolio growth (SKU count)', 'Digital infrastructure investment', 'Genuine retail consumer adoption'].map((item, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '10px 14px', fontSize: '0.87rem', fontWeight: '600', color: '#1A3C34' }}>
              0{idx + 1}. {item}
            </div>
          ))}
        </div>
      </div>

      {/* Top 10 List */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ borderBottom: '3px solid #1D2321', paddingBottom: '12px', marginBottom: '24px' }}>
          <h2 className="serif-headline" style={{ fontSize: '1.9rem', color: '#1A3C34', margin: 0 }}>
            Top 10 Fast Growing MLM Companies in India: 2026 Editorial Rankings
          </h2>
        </div>

        {article.companies.map((company) => {
          const isHgr = company.name === 'HGR Corporation';
          return (
            <div
              key={company.rank}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2DBD2',
                marginBottom: '20px',
                padding: '24px 28px',
                borderLeft: '5px solid #8C4A52'
              }}
              id={`fast-growing-company-${company.rank}`}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: '#8C4A52', color: '#FFFFFF', fontWeight: '900', fontSize: '1.1rem', padding: '6px 14px', flexShrink: 0 }}>
                  #{company.rank}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.35rem', color: '#1D2321', margin: '0 0 4px', fontWeight: '800' }}>{company.name}</h3>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '0.82rem', color: '#5C6662' }}>
                    <span><Globe size={12} style={{ verticalAlign: 'middle', marginRight: '3px' }} />{company.country}</span>
                    <span>Founded: {company.founded}</span>
                    <span style={{ background: '#F3ECE4', padding: '2px 8px', fontWeight: '600', color: '#8C4A52' }}>{company.focusArea}</span>
                  </div>
                </div>
              </div>

              <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '12px' }}>{company.overview}</p>

              <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '12px 16px', marginBottom: '12px' }}>
                <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#8C4A52', display: 'block', marginBottom: '4px' }}>Why {company.name} Is Included:</strong>
                <p style={{ fontSize: '0.9rem', color: '#1D2321', margin: 0, lineHeight: '1.5' }}>{company.whyIncluded}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {company.keyFacts.map((fact, idx) => (
                  <span key={idx} style={{ background: '#F3ECE4', border: '1px solid #E2DBD2', fontSize: '0.8rem', padding: '4px 12px', fontWeight: '600', color: '#1A3C34' }}>
                    ✓ {fact}
                  </span>
                ))}
              </div>

              {isHgr && (
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #E2DBD2', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={() => onNavigate('fastest-growing-startup')} style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1A3C34', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Read: India's Fastest-Growing MLM Startup Analysis →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Methodology */}
      <div style={{ background: '#F8F5F0', border: '2px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <ShieldCheck size={22} color="#C27D38" />
          <h2 className="serif-headline" style={{ fontSize: '1.6rem', color: '#1A3C34', margin: 0 }}>
            Methodology: How 'Fast Growing' Is Defined and Evaluated
          </h2>
        </div>
        <p style={{ lineHeight: '1.7', color: '#3D4643', margin: 0 }}>{article.methodology}</p>
      </div>

      {/* FAQ */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.6rem', color: '#1A3C34', margin: '0 0 20px' }}>
          Frequently Asked Questions: Fast Growing MLM Companies in India
        </h2>
        {article.faqs.map((faq, idx) => (
          <div key={idx} style={{ borderBottom: idx < article.faqs.length - 1 ? '1px solid #E2DBD2' : 'none', paddingBottom: '16px', marginBottom: '16px' }}>
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <strong style={{ fontSize: '1.02rem', color: '#1D2321', lineHeight: '1.4', paddingRight: '12px' }}>{faq.question}</strong>
              {openFaq === idx ? <ChevronUp size={18} color="#1A3C34" /> : <ChevronDown size={18} color="#5C6662" />}
            </button>
            {openFaq === idx && (
              <p style={{ marginTop: '10px', fontSize: '0.93rem', color: '#3D4643', lineHeight: '1.65', marginBottom: 0 }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px 24px', fontSize: '0.85rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
          <ShieldCheck size={16} color="#8C4A52" />
          <span>Editorial Disclaimer</span>
        </div>
        This list of fast growing MLM companies in India is an editorial selection for informational purposes. Growth indicators used are qualitative and editorial in nature — they are not based on audited revenue, government statistics, or certified industry rankings. HGR Corporation's inclusion at position #7 reflects its editorial positioning as a fast-growing new-generation Indian startup, not an independently verified financial growth ranking. No placement constitutes an investment recommendation.
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #1D2321', paddingTop: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <button
          className="btn-card-action"
          onClick={() => onNavigate('india-new-direct-selling-companies')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: '#1A3C34', color: '#FFFFFF' }}
        >
          <span>Read Next: India Top 10 New Direct Selling Companies →</span>
          <ArrowRight size={15} />
        </button>
        <button
          className="btn-card-action"
          onClick={() => onNavigate('india-new-mlm-startups')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: 'transparent', color: '#1A3C34', border: '1px solid #1A3C34' }}
        >
          <span>New MLM Startups India</span>
        </button>
      </div>
    </div>
  );
}
