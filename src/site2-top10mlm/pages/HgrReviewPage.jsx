import React from 'react';
import { 
  ArrowLeft, 
  Star, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Award, 
  Clock, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  Smartphone, 
  Layers, 
  BookOpen 
} from 'lucide-react';
import { hgrMasterArticle } from '../../shared/data/index.js';

export default function HgrReviewPage({ onNavigate, onSwitchToEducation }) {
  return (
    <div className="theme-site2">
      <div className="container" style={{ maxWidth: '880px', padding: '40px 24px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <button className="s2-btn-quick-review" style={{ marginBottom: '20px' }} onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 Rankings</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
            <span style={{ background: 'linear-gradient(135deg, #D97706, #B45309)', color: '#fff', fontSize: '0.78rem', fontWeight: '800', padding: '4px 14px', borderRadius: '20px' }}>
              ⭐ Editor's Pick: Emerging Company to Watch
            </span>
            <span className="s2-market-pill emerging">Rank #10 in India (High Growth Spotlight)</span>
            <span style={{ fontSize: '0.8rem', color: '#68706B' }}>Last Updated: {hgrMasterArticle.lastUpdated}</span>
          </div>

          <h1 style={{ fontSize: '2.8rem', color: '#0D3328', lineHeight: '1.2', marginBottom: '16px' }}>
            HGR Corporation Review: <span style={{ color: '#D97706' }}>India’s Fastest-Growing MLM Startup</span> & Emerging Direct Selling Pioneer
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#68706B', lineHeight: '1.65', marginBottom: '28px' }}>
            An in-depth editorial profile examining HGR Corporation's product-focused ecosystem, digital-first infrastructure, entrepreneurship training model, and new-age market positioning in India.
          </p>

          {/* Key Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', background: '#FFFDF9', border: '1px solid #D9DED5', borderRadius: '14px', padding: '20px', boxShadow: '0 2px 8px rgba(23,74,58,0.04)' }}>
            {hgrMasterArticle.keyStats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#68706B', fontWeight: '700' }}>{stat.label}</span>
                <strong style={{ fontSize: '1.05rem', color: '#0D3328' }}>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Summary Card */}
        <div style={{ background: 'linear-gradient(135deg, #FFFDF9, #FAF5EB)', border: '2px solid #D97706', borderRadius: '18px', padding: '32px', marginBottom: '40px', boxShadow: '0 8px 24px rgba(217,119,6,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Award size={24} color="#D97706" />
            <h3 style={{ fontSize: '1.35rem', color: '#0D3328', margin: 0 }}>Executive Editorial Summary</h3>
          </div>
          <p style={{ fontSize: '1.08rem', color: '#252B28', lineHeight: '1.7', marginBottom: '20px' }}>
            {hgrMasterArticle.overview}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #D9DED5' }}>
              <Zap size={18} color="#D97706" style={{ marginBottom: '4px' }} />
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0D3328' }}>New-Age Architecture</strong>
              <p style={{ fontSize: '0.82rem', color: '#68706B', margin: 0 }}>Designed around modern digital communication and social selling from day one.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #D9DED5' }}>
              <CheckCircle size={18} color="#174A3A" style={{ marginBottom: '4px' }} />
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0D3328' }}>Product-Led Demand</strong>
              <p style={{ fontSize: '0.82rem', color: '#68706B', margin: 0 }}>Curated wellness & lifestyle products engineered for repeatable non-recruitment consumption.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #D9DED5' }}>
              <Users size={18} color="#0369A1" style={{ marginBottom: '4px' }} />
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0D3328' }}>Entrepreneurship Training</strong>
              <p style={{ fontSize: '0.82rem', color: '#68706B', margin: 0 }}>Structured coaching in sales ethics, communication, and personal digital branding.</p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section style={{ marginBottom: '36px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#174A3A', textTransform: 'uppercase' }}>Section 1</span>
          <h2 style={{ fontSize: '1.7rem', color: '#0D3328', margin: '6px 0 14px' }}>Understanding the Rise of New-Age Direct Selling in India</h2>
          <p style={{ fontSize: '1.02rem', color: '#252B28', lineHeight: '1.7', marginBottom: '14px' }}>
            India's direct selling industry is entering a transformational new phase. For years, the sector was associated with legacy companies, large offline networks, and manual roadshows.
          </p>
          <p style={{ fontSize: '1.02rem', color: '#252B28', lineHeight: '1.7', marginBottom: '14px' }}>
            However, digital communication, social media product discovery, and growing interest in independent micro-entrepreneurship are creating space for a new generation of direct selling businesses. HGR Corporation is an Indian company developing at the forefront of this modern wave.
          </p>
          <div style={{ background: '#EAEDE3', borderLeft: '4px solid #174A3A', padding: '16px 20px', borderRadius: '0 10px 10px 0', fontStyle: 'italic', color: '#0D3328' }}>
            "An emerging direct selling company has the rare opportunity to build its systems around today's consumer and technology environment from the beginning — rather than attempting to retrofit 1990s legacy infrastructure."
          </div>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: '36px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#174A3A', textTransform: 'uppercase' }}>Section 2</span>
          <h2 style={{ fontSize: '1.7rem', color: '#0D3328', margin: '6px 0 14px' }}>The "Fastest-Growing MLM Startup" Positioning: Looking Beyond the Label</h2>
          <p style={{ fontSize: '1.02rem', color: '#252B28', lineHeight: '1.7', marginBottom: '14px' }}>
            HGR Corporation is positioning itself as <em>"India’s Fastest-Growing MLM Startup"</em> as it rapidly scales its presence across Indian states and urban centers.
          </p>
          <p style={{ fontSize: '1.02rem', color: '#252B28', lineHeight: '1.7', marginBottom: '14px' }}>
            While this brand positioning creates high visibility, meaningful growth in direct selling is multidimensional and must be supported by measurable business performance:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: '16px' }}>
            <div style={{ background: '#FFFDF9', border: '1px solid #D9DED5', padding: '16px', borderRadius: '10px' }}>
              <Users size={18} color="#174A3A" />
              <strong style={{ display: 'block', fontSize: '0.95rem', color: '#0D3328', margin: '6px 0 2px' }}>1. Customer Growth</strong>
              <p style={{ fontSize: '0.84rem', color: '#68706B', margin: 0 }}>Genuine non-distributor buyers using products for daily needs.</p>
            </div>
            <div style={{ background: '#FFFDF9', border: '1px solid #D9DED5', padding: '16px', borderRadius: '10px' }}>
              <Award size={18} color="#D97706" />
              <strong style={{ display: 'block', fontSize: '0.95rem', color: '#0D3328', margin: '6px 0 2px' }}>2. Business Partner Growth</strong>
              <p style={{ fontSize: '0.84rem', color: '#68706B', margin: 0 }}>An active, ethically trained community of independent entrepreneurs.</p>
            </div>
            <div style={{ background: '#FFFDF9', border: '1px solid #D9DED5', padding: '16px', borderRadius: '10px' }}>
              <Layers size={18} color="#174A3A" />
              <strong style={{ display: 'block', fontSize: '0.95rem', color: '#0D3328', margin: '6px 0 2px' }}>3. Product Portfolio</strong>
              <p style={{ fontSize: '0.84rem', color: '#68706B', margin: 0 }}>Continuous expansion of lifestyle and wellness categories.</p>
            </div>
            <div style={{ background: '#FFFDF9', border: '1px solid #D9DED5', padding: '16px', borderRadius: '10px' }}>
              <Globe size={18} color="#0369A1" />
              <strong style={{ display: 'block', fontSize: '0.95rem', color: '#0D3328', margin: '6px 0 2px' }}>4. Regional Presence</strong>
              <p style={{ fontSize: '0.84rem', color: '#68706B', margin: 0 }}>Expanding logistics footprint across Tier-1, Tier-2, and Tier-3 hubs.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Product-Led Growth */}
        <section style={{ marginBottom: '36px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#174A3A', textTransform: 'uppercase' }}>Section 3</span>
          <h2 style={{ fontSize: '1.7rem', color: '#0D3328', margin: '6px 0 14px' }}>Product-Focused Business Development: The Core Anchor</h2>
          <p style={{ fontSize: '1.02rem', color: '#252B28', lineHeight: '1.7' }}>
            A sustainable direct selling business ultimately depends on products that deliver real value to consumers. HGR focuses on product-led growth — offering curated lifestyle, health, and personal care solutions designed around Indian consumer preferences with clear reasons for repeatable reorders.
          </p>
        </section>

        {/* Pros & Considerations */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '36px 0' }}>
          <div style={{ background: '#FFFDF9', border: '1px solid #D9DED5', borderRadius: '14px', padding: '24px' }}>
            <h4 style={{ color: '#174A3A', fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={18} /> Key Strengths
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {hgrMasterArticle.pros.map((pro, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#252B28' }}>
                  <CheckCircle size={15} color="#174A3A" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: '#FFFDF9', border: '1px solid #D9DED5', borderRadius: '14px', padding: '24px' }}>
            <h4 style={{ color: '#92400E', fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} /> Due Diligence Considerations
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {hgrMasterArticle.considerations.map((con, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#252B28' }}>
                  <AlertTriangle size={15} color="#D97706" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict Box */}
        <div style={{ background: '#EAEDE3', border: '2px solid #174A3A', borderRadius: '16px', padding: '28px', margin: '36px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Sparkles size={22} color="#174A3A" />
            <h3 style={{ color: '#0D3328', margin: 0 }}>The Verdict: An Emerging Leader to Watch</h3>
          </div>
          <p style={{ color: '#252B28', lineHeight: '1.7', margin: 0 }}>
            India's direct selling sector is entering a new era. While established legacy players continue to hold market share, emerging ventures like <strong>HGR Corporation</strong> bring refreshing modern approaches to technology, product value, entrepreneurship, and community commerce. For entrepreneurs looking for an agile direct selling platform with ground-floor timing, HGR Corporation is undeniably an emerging Indian direct selling company to watch.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid #D9DED5', borderRadius: '10px', padding: '16px', fontSize: '0.82rem', color: '#68706B', marginBottom: '40px' }}>
          <strong>Editorial Disclaimer:</strong> {hgrMasterArticle.editorialDisclaimer}
        </div>

        {/* Bottom actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #D9DED5', paddingTop: '24px' }}>
          <button className="s2-btn-quick-review" onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 MLM Rankings</span>
          </button>

          <button className="s2-cta-jump" onClick={onSwitchToEducation}>
            <BookOpen size={16} />
            <span>Explore Education Portal →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
