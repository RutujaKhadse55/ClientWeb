import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  CheckSquare, 
  ShieldCheck, 
  Sparkles, 
  Trophy, 
  ChevronDown, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Award,
  Clock
} from 'lucide-react';
import { articlesData } from '../../shared/data/index.js';
import { directSellingFaqs } from '../../shared/data/index.js';

export default function EducationHome({ onNavigate, onOpenQuiz, onOpenChecklist, onSwitchToRankings }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="theme-site1">
      {/* Hero Section */}
      <section className="s1-hero">
        <div className="container s1-hero-container">
          <div className="s1-badge">
            <ShieldCheck size={16} />
            <span>Independent Indian Education Portal • Non-Promotional</span>
          </div>

          <h1 className="s1-hero-title">
            Thinking About Joining a Direct Selling Company? <span>Start Here.</span>
          </h1>

          <p className="s1-hero-sub">
            Your neutral, step-by-step educational guide to understanding the Indian direct selling ecosystem, evaluating risk profiles, checking Consumer Protection Rules 2021, and avoiding predatory recruitment traps.
          </p>

          <div className="s1-hero-actions">
            <button 
              className="s1-btn-primary"
              onClick={() => onNavigate('benefits-of-direct-selling')}
            >
              <span>Explore Foundations Guide</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="s1-btn-quiz"
              onClick={onOpenQuiz}
            >
              <Sparkles size={18} style={{ color: '#9B5C68' }} />
              <span>Take 60-Sec Fit Quiz</span>
            </button>
          </div>

          <div className="s1-hero-stats">
            <div className="s1-stat-pill">
              <CheckCircle size={16} style={{ color: '#5A1825' }} />
              <span>Zero Sponsored Endorsements</span>
            </div>
            <div className="s1-stat-pill">
              <CheckCircle size={16} style={{ color: '#5A1825' }} />
              <span>Aligned with Direct Selling Rules 2021</span>
            </div>
            <div className="s1-stat-pill">
              <CheckCircle size={16} style={{ color: '#5A1825' }} />
              <span>3 Core Decision Pillars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Donut Visual Indicators */}
      <section className="donut-stats-section">
        <div className="container">
          <div className="donut-stats-grid">
            <div className="donut-card">
              <div className="donut-visual" style={{ '--percent': 85 }}>
                <div className="donut-inner">85%</div>
              </div>
              <div className="donut-info">
                <h4>Product-Led Viability</h4>
                <p>Top factor for sustainable MLM income is genuine repeat customer reorders.</p>
              </div>
            </div>

            <div className="donut-card">
              <div className="donut-visual" style={{ '--percent': 100 }}>
                <div className="donut-inner">100%</div>
              </div>
              <div className="donut-info">
                <h4>Legal Buyback Mandate</h4>
                <p>30-day cooling off and inventory buyback mandated under Indian Law 2021.</p>
              </div>
            </div>

            <div className="donut-card">
              <div className="donut-visual" style={{ '--percent': 90 }}>
                <div className="donut-inner">0₹</div>
              </div>
              <div className="donut-info">
                <h4>Zero Forced Joining Fee</h4>
                <p>Legitimate direct selling companies never charge mandatory enrollment fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Site Bridge Banner to Site 2 */}
      <section className="container">
        <div className="s1-bridge-card">
          <div className="s1-bridge-left">
            <div className="s1-bridge-icon">
              <Trophy size={30} />
            </div>
            <div className="s1-bridge-text">
              <span>LOOKING FOR RANKINGS & REVIEWS?</span>
              <h3>Curious which direct selling companies are leading in India?</h3>
              <p>
                Explore our partner verified 2026 editorial ranking of India's Top 10 MLM companies with star ratings, product focus areas, and the Editor's Pick emerging star.
              </p>
            </div>
          </div>
          <button className="s1-btn-top10-jump" onClick={onSwitchToRankings}>
            <span>See Top 10 MLM Companies →</span>
          </button>
        </div>
      </section>

      {/* Three Core Featured Articles Cards */}
      <section className="s1-articles-section">
        <div className="container">
          <div className="s1-sec-header">
            <span>FOUNDATIONAL KNOWLEDGE</span>
            <h2>The Three Pillars of Direct Selling Due Diligence</h2>
            <p>
              Before attending any recruitment seminar or investing your capital, read these three comprehensive breakdowns.
            </p>
          </div>

          <div className="s1-cards-grid">
            {/* Card 1: Benefits */}
            <div className="s1-article-card">
              <div className="s1-card-meta">
                <span className="s1-card-tag">🟢 Pillar 1 • Foundations</span>
                <span className="s1-card-time"><Clock size={14} style={{ verticalAlign: 'middle' }} /> 7 min read</span>
              </div>
              <h3 className="s1-card-title">
                Benefits of Joining Direct Selling / MLM in India
              </h3>
              <p className="s1-card-desc">
                Understand what direct selling actually offers: low entry barriers, flexible hours, skill development in sales and communication, and product-based business models.
              </p>
              <div className="s1-card-bullets">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li>Low capital entry without commercial overhead</li>
                  <li>Real-world sales and communication training</li>
                  <li>Reality check on performance-based earnings</li>
                </ul>
              </div>
              <button 
                className="s1-btn-read"
                onClick={() => onNavigate('benefits-of-direct-selling')}
              >
                <span>Read Full Article</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 2: How to Choose */}
            <div className="s1-article-card">
              <div className="s1-card-meta">
                <span className="s1-card-tag">🔍 Pillar 2 • Due Diligence</span>
                <span className="s1-card-time"><Clock size={14} style={{ verticalAlign: 'middle' }} /> 8 min read</span>
              </div>
              <h3 className="s1-card-title">
                How to Choose the Right MLM Company in India
              </h3>
              <p className="s1-card-desc">
                A 7-pillar practical checklist to evaluate product quality, fair compensation plans, Indian regulatory compliance (Rules 2021), and warning red flags.
              </p>
              <div className="s1-card-bullets">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li>Red flags: pure recruitment vs retail sales</li>
                  <li>Verifying MCA registration and 30-day buybacks</li>
                  <li>Evaluating genuine customer demand</li>
                </ul>
              </div>
              <button 
                className="s1-btn-read"
                onClick={() => onNavigate('how-to-choose-mlm-company')}
              >
                <span>Read Full Article</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 3: MLM vs Job vs Business */}
            <div className="s1-article-card">
              <div className="s1-card-meta">
                <span className="s1-card-tag">⚖️ Pillar 3 • Comparison</span>
                <span className="s1-card-time"><Clock size={14} style={{ verticalAlign: 'middle' }} /> 9 min read</span>
              </div>
              <h3 className="s1-card-title">
                MLM vs Traditional Business or Job: Which Is Right for You?
              </h3>
              <p className="s1-card-desc">
                A side-by-side dimensional comparison across risk profiles, capital needs, schedule autonomy, income ceilings, and skill building.
              </p>
              <div className="s1-card-bullets">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li>Fixed salary predictability vs scalable leverage</li>
                  <li>Capital risk: ₹0 (Job) vs ₹10L+ (Biz) vs ₹5k (MLM)</li>
                  <li>Finding your personal career archetype</li>
                </ul>
              </div>
              <button 
                className="s1-btn-read"
                onClick={() => onNavigate('mlm-vs-job-vs-business')}
              >
                <span>Read Full Article</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Boxes: Quiz + Printable Checklist */}
      <section className="container" style={{ margin: '20px auto 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '18px', padding: '32px', boxShadow: '0 4px 14px rgba(90,24,37,0.05)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(90,24,37,0.1)', color: '#5A1825', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Sparkles size={24} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#9B5C68', textTransform: 'uppercase', letterSpacing: '0.5px' }}>60-Second Assessment</span>
            <h3 style={{ fontSize: '1.4rem', color: '#3D0D18', margin: '6px 0 10px' }}>Which Career & Income Path Fits You?</h3>
            <p style={{ fontSize: '0.92rem', color: '#756868', lineHeight: '1.6', marginBottom: '20px' }}>
              Answer 4 questions to evaluate whether a Traditional Job, Independent Business, or Direct Selling aligns best with your capital and time commitments.
            </p>
            <button className="s1-btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '12px 20px' }} onClick={onOpenQuiz}>
              <span>Launch Interactive Quiz →</span>
            </button>
          </div>

          <div style={{ background: '#FFFDFC', border: '1px solid #E3D5CE', borderRadius: '18px', padding: '32px', boxShadow: '0 4px 14px rgba(90,24,37,0.05)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(90,24,37,0.1)', color: '#5A1825', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <CheckSquare size={24} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#9B5C68', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Free Downloadable Checklist</span>
            <h3 style={{ fontSize: '1.4rem', color: '#3D0D18', margin: '6px 0 10px' }}>Due-Diligence Checklist Before Joining</h3>
            <p style={{ fontSize: '0.92rem', color: '#756868', lineHeight: '1.6', marginBottom: '20px' }}>
              A practical 7-point audit checklist based on Government of India Direct Selling Rules 2021. Check off criteria and print or save as PDF.
            </p>
            <button className="s1-btn-quiz" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '12px 20px' }} onClick={onOpenChecklist}>
              <span>Open & Print Checklist (Free) →</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container" style={{ margin: '40px auto 70px', maxWidth: '840px' }}>
        <div className="s1-sec-header">
          <span>COMMON DOUBTS ANSWERED</span>
          <h2>Direct Selling Frequently Asked Questions</h2>
          <p>Clear, honest answers to common questions about direct selling in India.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {directSellingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  background: '#FFFDFC', 
                  border: '1px solid #E3D5CE', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(90,24,37,0.03)'
                }}
              >
                <button 
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '20px 24px', 
                    textAlign: 'left',
                    color: '#3D0D18',
                    fontWeight: '700',
                    fontSize: '1.05rem'
                  }} 
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#5A1825' }} />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: '#756868', fontSize: '0.96rem', lineHeight: '1.65', borderTop: '1px solid #F2EAE2', paddingTop: '14px' }}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
