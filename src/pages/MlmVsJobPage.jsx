import React from 'react';
import { ArrowLeft, Clock, ArrowRight, ShieldCheck, Briefcase, Building, Users, CheckCircle, Scale, Target } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function MlmVsJobPage({ onNavigate }) {
  const article = articlesData.find(a => a.id === 'mlm-vs-job-vs-business');

  return (
    <div className="container" style={{ padding: '40px 24px 80px', maxWidth: '1180px' }}>
      {/* Immersive High-Contrast Header */}
      <div className="article-immersive-header">
        <button 
          onClick={() => onNavigate('home')}
          className="article-back-nav"
        >
          <ArrowLeft size={14} />
          <span>Direct Selling Journal &bull; Economic Models</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800', border: '1px solid rgba(255,255,255,0.3)' }}>COMPARATIVE ANALYSIS</span>
          <span className="notice-badge" style={{ background: '#C27D38', color: '#FFFFFF', fontWeight: '800' }}>CAREER STRATEGY</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          {article.title}
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.22rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          {article.subtitle}
        </p>

        <div className="article-byline">
          <span>By Enterprise Economics Desk</span>
          <span>&bull;</span>
          <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 9 min read</span>
          <span>&bull;</span>
          <span>Published: September 2026</span>
          <span>&bull;</span>
          <span>Comparative Market Study</span>
        </div>
      </div>

      {/* Featured Visual Banner (Matches Header Width Perfectly) */}
      <div style={{ margin: '0 0 32px', border: '1px solid #1D2321', background: '#FFFFFF' }}>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&auto=format&fit=crop&q=80" 
          alt="MLM vs Traditional Job vs Traditional Business" 
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig 5.0: Comparing capital requirements, income ceilings, risk profiles, and time autonomy across three primary work pathways.</span>
          <span>Source: Direct Selling Journal Economic Models</span>
        </div>
      </div>

      {/* Intro Box */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px', marginBottom: '28px', fontSize: '1.12rem', lineHeight: '1.75', color: '#1D2321' }}>
        <p style={{ margin: 0 }}>{article.intro}</p>
      </div>

      {/* Editorial Note */}
      <div className="editorial-callout-sharp" style={{ margin: '0 0 28px' }}>
        <strong>Editorial Note:</strong> {article.editorialNote}
      </div>

      {/* Master 3-Way Comparative Matrix */}
      <div style={{ marginBottom: '32px' }}>
        <span className="category-tag">Benchmark Matrix</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          Side-by-Side 3-Way Comparison
        </h2>

        <div className="table-editorial-wrapper" style={{ margin: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="editorial-rankings-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Economic Dimension</th>
                  <th style={{ width: '25%' }}>Traditional 9-to-5 Job</th>
                  <th style={{ width: '25%' }}>Traditional Business</th>
                  <th style={{ width: '25%', background: '#0F2721', color: '#FFFFFF' }}>Direct Selling / MLM</th>
                </tr>
              </thead>
              <tbody>
                {article.dimensions.map((dim, idx) => (
                  <tr key={idx}>
                    <td><strong style={{ color: '#1A3C34' }}>{idx + 1}. {dim.name}</strong></td>
                    <td>{dim.job}</td>
                    <td>{dim.business}</td>
                    <td style={{ fontWeight: '600', color: '#1A3C34', background: '#FAF8F5' }}>{dim.mlm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Dimension Breakdown Cards */}
      <div style={{ marginBottom: '32px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          In-Depth Dimension Breakdown
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {article.dimensions.map((dim, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '24px 28px' }}>
              <span className="category-tag" style={{ marginBottom: '6px', display: 'inline-block' }}>Dimension 0{idx+1}</span>
              <h3 className="serif-headline" style={{ margin: '0 0 14px', fontSize: '1.3rem', color: '#1A3C34' }}>
                {dim.name}
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', marginBottom: '6px' }}>
                    <Briefcase size={15} />
                    <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Traditional Job</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.5' }}>{dim.job}</p>
                </div>

                <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8C4A52', marginBottom: '6px' }}>
                    <Building size={15} />
                    <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Traditional Business</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.5' }}>{dim.business}</p>
                </div>

                <div style={{ background: '#FAF8F5', border: '2px solid #1A3C34', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', marginBottom: '6px' }}>
                    <Users size={15} />
                    <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Direct Selling / MLM</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#1D2321', fontWeight: '500', lineHeight: '1.5' }}>{dim.mlm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Snapshot Quick Highlights */}
      <div style={{ background: '#F8F5F0', border: '2px solid #1A3C34', padding: '28px 32px', marginBottom: '32px' }}>
        <h3 className="serif-headline" style={{ margin: '0 0 14px', fontSize: '1.4rem', color: '#1A3C34' }}>
          Side-by-Side Snapshot & Takeaways
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px 20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px', fontSize: '0.95rem' }}>Lowest Financial Risk</strong>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662' }}>Traditional Job (Fixed compensation with no upfront capital investment).</p>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px 20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px', fontSize: '0.95rem' }}>Lowest Cost to Business Ownership</strong>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662' }}>Direct Selling / MLM (Established products, logistics, and billing provided).</p>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px 20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px', fontSize: '0.95rem' }}>Highest Control & Maximum Upside</strong>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662' }}>Traditional Business (Total equity ownership with full strategic autonomy).</p>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px 20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px', fontSize: '0.95rem' }}>Structured Skill-Building Ecosystem</strong>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662' }}>Direct Selling / MLM (Extensive mentorship and peer training networks).</p>
          </div>
        </div>
      </div>

      {/* Archetype Selector */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '32px' }}>
        <span className="category-tag">Self-Assessment</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          Which Path Is Right for You?
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          The optimal model depends on your financial runway, risk tolerance, available weekly hours, and career aspirations:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {article.archetypes.map((arch, idx) => (
            <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Target size={18} color="#C27D38" />
                <h4 style={{ color: '#1A3C34', fontSize: '1.1rem', margin: 0 }}>{arch.title}</h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', listStyle: 'disc', fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.6' }}>
                {arch.points.map((pt, pidx) => (
                  <li key={pidx} style={{ marginBottom: '6px' }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion Box */}
      <div style={{ background: '#10382D', color: '#FFFFFF', padding: '32px', marginBottom: '28px', border: '1px solid #1D2321' }}>
        <h3 className="serif-headline" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px' }}>
          Conclusion: Finding the Right Economic Balance
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
          onClick={() => onNavigate('top-10-rankings')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: '#1A3C34', color: '#FFFFFF' }}
        >
          <span>View Top 10 Indian MLM Rankings</span>
          <ArrowRight size={15} />
        </button>
        
        <button 
          className="btn-card-action" 
          onClick={() => onNavigate('benefits-guide')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: 'transparent', color: '#1A3C34', border: '1px solid #1A3C34' }}
        >
          <span>Read: Benefits of Direct Selling</span>
        </button>
      </div>

    </div>
  );
}
