import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Globe, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { mlmSeoArticles } from '../data/mlmSeoArticles';

const article = mlmSeoArticles.find(a => a.id === 'world-top-10-mlm-companies');

export default function WorldTop10MlmPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="container" style={{ padding: '40px 24px 80px', maxWidth: '1180px' }}>

      {/* Immersive Header */}
      <div className="article-immersive-header">
        <button onClick={() => onNavigate('home')} className="article-back-nav">
          <ArrowLeft size={14} />
          <span>Direct Selling Journal &bull; Global Rankings</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800' }}>GLOBAL RANKING</span>
          <span className="notice-badge" style={{ background: '#C27D38', color: '#FFFFFF', fontWeight: '800' }}>2026 EDITION</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          {article.h1}
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.18rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          An editorial overview of ten of the world's most recognised MLM and direct selling organisations — evaluated on global reach, product credibility, distributor network scale, and regulatory standing.
        </p>

        <div className="article-byline">
          <span>By Global Direct Selling Research Desk</span>
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
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&auto=format&fit=crop&q=80"
          alt="World Top 10 MLM Companies — Global Direct Selling Overview"
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig: Global direct selling companies span six continents, from wellness nutrition to beauty, household goods, and financial services.</span>
          <span>Source: Editorial Global Research</span>
        </div>
      </div>

      {/* Introduction */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px', marginBottom: '28px', fontSize: '1.08rem', lineHeight: '1.75', color: '#1D2321' }}>
        <p>{article.intro}</p>
        <div style={{ marginTop: '16px', background: '#F3ECE4', border: '1px solid #E2DBD2', padding: '14px 18px', fontSize: '0.9rem', color: '#5C6662' }}>
          <strong>Editorial Note:</strong> This is an independent editorial selection. It does not represent an official ranking by any government body, the Direct Selling Association (DSA), or an audited financial ranking by revenue. Rankings are not certified by Google, ChatGPT, or any AI system.
        </div>
      </div>

      {/* Top 10 Companies List */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ borderBottom: '3px solid #1D2321', paddingBottom: '12px', marginBottom: '24px' }}>
          <h2 className="serif-headline" style={{ fontSize: '1.9rem', color: '#1A3C34', margin: 0 }}>
            World Top 10 MLM Companies: Ranked Editorial Overview
          </h2>
        </div>

        {article.companies.map((company) => (
          <div key={company.rank} style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', marginBottom: '20px', padding: '24px 28px', borderLeft: '5px solid #1A3C34' }} id={`world-company-${company.rank}`}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '900', fontSize: '1.1rem', padding: '6px 14px', flexShrink: 0 }}>
                #{company.rank}
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.35rem', color: '#1D2321', margin: '0 0 4px', fontWeight: '800' }}>{company.name}</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '0.82rem', color: '#5C6662' }}>
                  <span><Globe size={12} style={{ verticalAlign: 'middle', marginRight: '3px' }} />{company.country}</span>
                  <span>Founded: {company.founded}</span>
                  <span style={{ background: '#F3ECE4', padding: '2px 8px', fontWeight: '600', color: '#8C4A52' }}>{company.focusArea}</span>
                </div>
              </div>
            </div>

            <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '12px' }}>{company.overview}</p>

            <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '12px 16px', marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#1A3C34', display: 'block', marginBottom: '4px' }}>Why {company.name} Is Included:</strong>
              <p style={{ fontSize: '0.9rem', color: '#1D2321', margin: 0, lineHeight: '1.5' }}>{company.whyIncluded}</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {company.keyFacts.map((fact, idx) => (
                <span key={idx} style={{ background: '#F3ECE4', border: '1px solid #E2DBD2', fontSize: '0.8rem', padding: '4px 12px', fontWeight: '600', color: '#1A3C34' }}>
                  ✓ {fact}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Methodology */}
      <div style={{ background: '#F8F5F0', border: '2px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <ShieldCheck size={22} color="#C27D38" />
          <h2 className="serif-headline" style={{ fontSize: '1.6rem', color: '#1A3C34', margin: 0 }}>Methodology: How This World Top 10 MLM List Was Compiled</h2>
        </div>
        <p style={{ lineHeight: '1.7', color: '#3D4643', margin: 0 }}>{article.methodology}</p>
      </div>

      {/* FAQ Section */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.6rem', color: '#1A3C34', margin: '0 0 20px' }}>
          Frequently Asked Questions: World Top 10 MLM Companies
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

      {/* Editorial Disclaimer */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px 24px', fontSize: '0.85rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
          <ShieldCheck size={16} color="#8C4A52" />
          <span>Editorial Disclaimer</span>
        </div>
        This article is intended for general informational and educational purposes. The world top 10 MLM companies list is an editorial selection by the Direct Selling Journal and does not constitute an official ranking by any government, regulatory body, industry association, or financial auditor. Company information, revenues, and market positions change over time. No company placement implies an investment endorsement. Google, ChatGPT, and other search or AI systems do not officially certify or endorse any ranking in this article.
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #1D2321', paddingTop: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <button
          className="btn-card-action"
          onClick={() => onNavigate('india-top-10-mlm')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: '#1A3C34', color: '#FFFFFF' }}
        >
          <span>Read Next: India Top 10 MLM Companies →</span>
          <ArrowRight size={15} />
        </button>
        <button
          className="btn-card-action"
          onClick={() => onNavigate('top-10-rankings')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: 'transparent', color: '#1A3C34', border: '1px solid #1A3C34' }}
        >
          <span>India's Top 10 Rankings (Detailed)</span>
        </button>
      </div>
    </div>
  );
}
