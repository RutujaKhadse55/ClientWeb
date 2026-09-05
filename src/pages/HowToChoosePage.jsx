import React from 'react';
import { ArrowLeft, Clock, ArrowRight, ShieldCheck, AlertTriangle, XCircle, CheckCircle, FileText, Scale, Search, Users, HelpCircle } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function HowToChoosePage({ onNavigate }) {
  const article = articlesData.find(a => a.id === 'how-to-choose-mlm-company');

  return (
    <div className="container" style={{ padding: '40px 24px 80px', maxWidth: '1180px' }}>
      {/* Immersive High-Contrast Header */}
      <div className="article-immersive-header">
        <button 
          onClick={() => onNavigate('home')}
          className="article-back-nav"
        >
          <ArrowLeft size={14} />
          <span>Direct Selling Journal &bull; Due Diligence Framework</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#8C4A52', color: '#FFFFFF', fontWeight: '800' }}>EVALUATION MATRIX</span>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800', border: '1px solid rgba(255,255,255,0.3)' }}>CONSUMER PROTECTION</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          {article.title}
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.22rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          {article.subtitle}
        </p>

        <div className="article-byline">
          <span>By Compliance & Due Diligence Desk</span>
          <span>&bull;</span>
          <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 8 min read</span>
          <span>&bull;</span>
          <span>Published: September 2026</span>
          <span>&bull;</span>
          <span>Direct Selling Rules 2021 Reference</span>
        </div>
      </div>

      {/* Featured Visual Banner (Matches Header Width Perfectly) */}
      <div style={{ margin: '0 0 32px', border: '1px solid #1D2321', background: '#FFFFFF' }}>
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&auto=format&fit=crop&q=80" 
          alt="How to Choose the Right MLM Company in India" 
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig 4.0: Systematic evaluation of corporate governance, product efficacy, compensation transparency, and legal compliance.</span>
          <span>Source: Direct Selling Due Diligence Framework</span>
        </div>
      </div>

      {/* Intro Lead Paragraph */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px', marginBottom: '28px', fontSize: '1.12rem', lineHeight: '1.75', color: '#1D2321' }}>
        <p style={{ margin: 0 }}>{article.intro}</p>
      </div>

      {/* Editorial Note */}
      <div className="editorial-callout-sharp" style={{ margin: '0 0 28px' }}>
        <strong>Editorial Note:</strong> {article.editorialNote}
      </div>

      {/* High-Contrast Red Flags Box (Aligned with Container) */}
      <div className="red-flags-box-sharp" style={{ margin: '0 0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <AlertTriangle size={22} color="#DC2626" />
          <h3 style={{ margin: 0, color: '#7F1D1D', fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Direct Selling Red Flags to Watch Out For
          </h3>
        </div>
        <p style={{ color: '#7F1D1D', fontSize: '0.96rem', marginBottom: '16px', lineHeight: '1.5' }}>
          If a company or promoter demonstrates any of the following characteristics, exercise extreme caution before committing capital or signing distributor agreements:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
          {article.redFlags.map((flag, idx) => (
            <div key={idx} className="red-flag-entry">
              <XCircle size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.94rem', color: '#7F1D1D', fontWeight: '500' }}>{flag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Step Detailed Analysis Grids */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '32px' }}>

        {/* Step 1: Product Portfolio */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 01</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            1. Evaluate the Product Portfolio
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[0].summary}</p>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '10px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              Key Questions to Ask:
            </strong>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyle: 'disc' }}>
              {article.sections[0].skills.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '6px', fontSize: '0.92rem', color: '#3D4643' }}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 2: Compensation Plan */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 02</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            2. Understand the Compensation Plan
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[1].summary}</p>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '10px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              What to Look For:
            </strong>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyle: 'disc' }}>
              {article.sections[1].skills.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '6px', fontSize: '0.92rem', color: '#3D4643' }}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 3: Transparency & Registration */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 03</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            3. Check Company Transparency & Legal Registration
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[2].summary}</p>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '10px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              Documents Worth Reviewing on MCA & Public Portals:
            </strong>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyle: 'disc' }}>
              {article.sections[2].skills.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '6px', fontSize: '0.92rem', color: '#3D4643' }}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 4: Genuine Demand */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 04</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            4. Look for Genuine Customer Demand
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '12px' }}>{article.sections[3].summary}</p>
          <div style={{ background: '#FAF8F5', borderLeft: '4px solid #1A3C34', padding: '18px 22px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#1D2321', lineHeight: '1.65' }}>{article.sections[3].body}</p>
          </div>
        </div>

        {/* Step 5: Training Systems */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 05</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            5. Assess Training and Support Systems
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[4].summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
            {article.sections[4].skills.map((q, idx) => (
              <div key={idx} style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '14px', fontSize: '0.9rem', color: '#1D2321', fontWeight: '500' }}>
                ✓ {q}
              </div>
            ))}
          </div>
        </div>

        {/* Step 6: Established vs Emerging */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 06</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            6. Consider the Company's Market Standing (Established vs. Emerging)
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[5].summary}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px' }}>
              <strong style={{ color: '#1A3C34', fontSize: '1.05rem', display: 'block', marginBottom: '6px' }}>
                Established Companies
              </strong>
              <p style={{ fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.6', margin: 0 }}>
                {article.sections[5].comparison.established}
              </p>
            </div>

            <div style={{ background: '#FAF8F5', border: '2px solid #1A3C34', padding: '20px' }}>
              <strong style={{ color: '#1A3C34', fontSize: '1.05rem', display: 'block', marginBottom: '6px' }}>
                Emerging Startups
              </strong>
              <p style={{ fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.6', margin: 0 }}>
                {article.sections[5].comparison.emerging}
              </p>
            </div>
          </div>
        </div>

        {/* Step 7: Legal Compliance */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Pillar 07</span>
          <h2 className="serif-headline" style={{ fontSize: '1.5rem', color: '#1A3C34', margin: '0 0 12px' }}>
            7. Check Regulatory Compliance (Consumer Protection Rules 2021)
          </h2>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '12px' }}>{article.sections[6].summary}</p>
          <div style={{ background: '#FAF8F5', borderLeft: '4px solid #8C4A52', padding: '18px 22px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#1D2321', lineHeight: '1.65' }}>{article.sections[6].body}</p>
          </div>
        </div>

      </div>

      {/* 6-Point Evaluation Summary Checklist */}
      <div style={{ background: '#F8F5F0', border: '2px solid #1A3C34', padding: '28px 32px', marginBottom: '32px' }}>
        <h3 className="serif-headline" style={{ margin: '0 0 14px', fontSize: '1.4rem', color: '#1A3C34' }}>
          Actionable Evaluation Checklist
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {article.checklist.map((item, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '14px 18px', fontSize: '0.92rem', color: '#1D2321', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={17} color="#1A3C34" style={{ flexShrink: 0 }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div style={{ background: '#10382D', color: '#FFFFFF', padding: '32px', marginBottom: '32px', border: '1px solid #1D2321' }}>
        <h3 className="serif-headline" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px' }}>
          Conclusion: Making an Informed Career Decision
        </h3>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#E6EFEA', margin: 0 }}>
          {article.conclusion}
        </p>
      </div>

      {/* Editorial Disclaimer */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px 24px', fontSize: '0.85rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
          <ShieldCheck size={16} color="#8C4A52" />
          <span>Editorial Disclaimer</span>
        </div>
        {article.disclaimer}
      </div>

      {/* Navigation Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #1D2321', paddingTop: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <button 
          className="btn-card-action" 
          onClick={() => onNavigate('mlm-vs-job')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: '#1A3C34', color: '#FFFFFF' }}
        >
          <span>Read Next Guide: MLM vs Job vs Traditional Business</span>
          <ArrowRight size={15} />
        </button>
        
        <button 
          className="btn-card-action" 
          onClick={() => onNavigate('top-10-rankings')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: 'transparent', color: '#1A3C34', border: '1px solid #1A3C34' }}
        >
          <span>View Top 10 Indian MLM Rankings</span>
        </button>
      </div>

    </div>
  );
}
