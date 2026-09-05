import React from 'react';
import { ArrowLeft, Clock, ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, TrendingUp, Users, HeartHandshake, Briefcase } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function BenefitsPage({ onNavigate }) {
  const article = articlesData.find(a => a.id === 'benefits-of-direct-selling');

  return (
    <div className="container" style={{ padding: '40px 24px 80px', maxWidth: '1180px' }}>
      {/* Immersive High-Contrast Header */}
      <div className="article-immersive-header">
        <button 
          onClick={() => onNavigate('home')}
          className="article-back-nav"
        >
          <ArrowLeft size={14} />
          <span>Direct Selling Journal &bull; Career & Economic Guide</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800', border: '1px solid rgba(255,255,255,0.3)' }}>FOUNDATIONAL GUIDE</span>
          <span className="notice-badge" style={{ background: '#8C4A52', color: '#FFFFFF', fontWeight: '800' }}>CAREER EXPLORATION</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          {article.title}
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.22rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          {article.subtitle}
        </p>

        <div className="article-byline">
          <span>By Career & Industry Research Desk</span>
          <span>&bull;</span>
          <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 7 min read</span>
          <span>&bull;</span>
          <span>Published: September 2026</span>
          <span>&bull;</span>
          <span>Consumer Protection Rules 2021 Compliant</span>
        </div>
      </div>

      {/* Visual Featured Image (Matches Header Width Perfectly) */}
      <div style={{ margin: '0 0 32px', border: '1px solid #1D2321', background: '#FFFFFF' }}>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&auto=format&fit=crop&q=80" 
          alt="Benefits of Direct Selling" 
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig 3.0: Direct selling provides accessible micro-entrepreneurship, skill training, and flexible work opportunities across India.</span>
          <span>Source: Editorial Research</span>
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

      {/* 7 Key Benefits Master List (Matches Header Width Perfectly) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Benefit 1 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={22} color="#C27D38" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 01</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>1. Low Entry Barrier & Minimal Capital Investment</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[0].summary}</p>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px 20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>{article.sections[0].subheading}</strong>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#5C6662', lineHeight: '1.6' }}>{article.sections[0].body}</p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={22} color="#1A3C34" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 02</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>2. Flexible Working Hours & Autonomous Schedule</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[1].summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {article.sections[1].keyPoints.map((pt, i) => (
              <div key={i} style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '14px', fontSize: '0.9rem', color: '#1D2321', fontWeight: '500' }}>
                &bull; {pt}
              </div>
            ))}
          </div>
        </div>

        {/* Benefit 3 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={22} color="#8C4A52" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 03</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>3. Personal and Professional Skill Development</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[2].summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {article.sections[2].skills.map((skill, idx) => (
              <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '12px 16px', fontSize: '0.9rem', fontWeight: '600', color: '#1A3C34' }}>
                ✓ {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Benefit 4 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={22} color="#1A3C34" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 04</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>4. Access to a Product-Based Income Model</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[3].summary}</p>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px 20px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>{article.sections[3].subheading}</strong>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#5C6662', lineHeight: '1.6' }}>{article.sections[3].body}</p>
          </div>
        </div>

        {/* Benefit 5 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartHandshake size={22} color="#C27D38" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 05</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>5. Community and Collaborative Support Network</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[4].summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {article.sections[4].skills.map((s, idx) => (
              <div key={idx} style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '12px 16px', fontSize: '0.9rem', color: '#1D2321', fontWeight: '500' }}>
                &bull; {s}
              </div>
            ))}
          </div>
        </div>

        {/* Benefit 6 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={22} color="#8C4A52" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 06</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>6. Opportunity for Scalable Income</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[5].summary}</p>
          <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px 20px', borderLeft: '4px solid #8C4A52' }}>
            <strong style={{ color: '#8C4A52', display: 'block', marginBottom: '4px' }}>Realistic Performance Context</strong>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#5C6662', lineHeight: '1.6' }}>{article.sections[5].body}</p>
          </div>
        </div>

        {/* Benefit 7 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={22} color="#1A3C34" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>Pillar 07</span>
              <h2 className="serif-headline" style={{ fontSize: '1.4rem', color: '#1A3C34', margin: 0 }}>7. Entrepreneurship Without Full Business Ownership Overhead</h2>
            </div>
          </div>
          <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>{article.sections[6].summary}</p>
          <div style={{ background: '#F8F5F0', border: '2px solid #1A3C34', padding: '20px 24px' }}>
            <strong style={{ color: '#1A3C34', fontSize: '1.05rem', display: 'block', marginBottom: '10px' }}>What to Keep in Mind:</strong>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyle: 'disc' }}>
              {article.sections[6].keyPoints.map((pt, idx) => (
                <li key={idx} style={{ marginBottom: '6px', fontSize: '0.92rem', color: '#3D4643' }}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Conclusion Box */}
      <div style={{ background: '#10382D', color: '#FFFFFF', padding: '32px', marginBottom: '28px', border: '1px solid #1D2321' }}>
        <h3 className="serif-headline" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px' }}>
          Summary: Is Direct Selling Right for You?
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
          onClick={() => onNavigate('how-to-choose')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: '#1A3C34', color: '#FFFFFF' }}
        >
          <span>Read Next Guide: How to Choose an MLM</span>
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
