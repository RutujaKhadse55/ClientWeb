import React from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  CheckSquare, 
  ShieldCheck, 
  Sparkles, 
  Trophy, 
  HelpCircle, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Award,
  ChevronDown
} from 'lucide-react';
import { articlesData } from '../data/articles';
import { directSellingFaqs } from '../data/faqs';

export default function EducationHome({ 
  onNavigate, 
  onOpenQuiz, 
  onOpenChecklist 
}) {
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="page-wrapper edu-home-page">
      {/* Hero Section */}
      <section className="edu-hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} />
              <span>Independent Educational Resource • Non-Promotional</span>
            </div>
            
            <h1 className="hero-title">
              Thinking About Joining a Direct Selling Company? <span className="highlight-text">Start Here.</span>
            </h1>

            <p className="hero-subtitle">
              Your unbiased, step-by-step guide to evaluating MLM opportunities, understanding the legal framework in India, checking real risk profiles, and making an educated decision.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn-primary-large"
                onClick={() => onNavigate('benefits-of-direct-selling')}
              >
                <span>Read the Core Education Guide</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn-quiz-hero"
                onClick={onOpenQuiz}
              >
                <Sparkles size={18} />
                <span>Take 60-Sec Fit Quiz</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="hero-trust-metrics">
              <div className="metric-pill">
                <CheckCircle size={15} className="text-green" />
                <span>Zero Sponsored Reviews</span>
              </div>
              <div className="metric-pill">
                <CheckCircle size={15} className="text-green" />
                <span>Aligned with Direct Selling Rules 2021</span>
              </div>
              <div className="metric-pill">
                <CheckCircle size={15} className="text-green" />
                <span>3 Essential Decision Pillars</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Site Bridge CTA Banner */}
      <section className="cross-site-banner-section">
        <div className="container">
          <div className="cross-site-card">
            <div className="cross-site-left">
              <div className="trophy-icon-wrap">
                <Trophy size={28} className="trophy-gold" />
              </div>
              <div>
                <span className="cross-label">LOOKING FOR RANKINGS & REVIEWS?</span>
                <h3 className="cross-title">Curious which direct selling companies are leading in India?</h3>
                <p className="cross-desc">
                  Explore our verified 2026 editorial ranking of India's Top 10 MLM companies with star ratings, product focus areas, and our featured Editor's Pick.
                </p>
              </div>
            </div>
            <button 
              className="btn-see-rankings"
              onClick={() => onNavigate('rankings-home')}
            >
              <span>See Top 10 MLM Companies →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Three Core Featured Articles Cards */}
      <section className="featured-articles-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">FOUNDATIONAL KNOWLEDGE</span>
            <h2 className="section-title">The Three Pillars of Direct Selling Due Diligence</h2>
            <p className="section-desc">
              Before attending any recruitment seminar or investing your capital, read these three comprehensive breakdowns.
            </p>
          </div>

          <div className="articles-grid">
            {/* Card 1: Benefits */}
            <div className="article-card card-green">
              <div className="card-top-tag">
                <span className="tag-pill tag-green">🟢 Pillar 1 • Foundations</span>
                <span className="read-time">7 min read</span>
              </div>
              <h3 className="article-card-title">
                Benefits of Joining Direct Selling / MLM in India
              </h3>
              <p className="article-card-desc">
                Understand what direct selling actually offers: low entry barriers, flexible hours, skill development in sales and communication, and product-based business models.
              </p>
              <div className="card-takeaways">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li>Low capital entry without office leases</li>
                  <li>Hands-on communication and sales training</li>
                  <li>Reality check on performance-based income</li>
                </ul>
              </div>
              <div className="card-footer">
                <button 
                  className="btn-read-article"
                  onClick={() => onNavigate('benefits-of-direct-selling')}
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Card 2: How to Choose */}
            <div className="article-card card-blue">
              <div className="card-top-tag">
                <span className="tag-pill tag-blue">🔍 Pillar 2 • Due Diligence</span>
                <span className="read-time">8 min read</span>
              </div>
              <h3 className="article-card-title">
                How to Choose the Right MLM Company in India
              </h3>
              <p className="article-card-desc">
                A 7-pillar practical checklist to evaluate product quality, fair compensation plans, Indian regulatory compliance (Rules 2021), and warning red flags.
              </p>
              <div className="card-takeaways">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li>Red flags: recruitment emphasis vs product sales</li>
                  <li>Verifying MCA registration and 30-day buybacks</li>
                  <li>Evaluating genuine customer demand</li>
                </ul>
              </div>
              <div className="card-footer">
                <button 
                  className="btn-read-article"
                  onClick={() => onNavigate('how-to-choose-mlm-company')}
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Card 3: MLM vs Job vs Business */}
            <div className="article-card card-purple">
              <div className="card-top-tag">
                <span className="tag-pill tag-purple">⚖️ Pillar 3 • Comparison</span>
                <span className="read-time">9 min read</span>
              </div>
              <h3 className="article-card-title">
                MLM vs Traditional Business or Job: Which Is Right for You?
              </h3>
              <p className="article-card-desc">
                A side-by-side dimensional comparison across risk profiles, capital needs, schedule autonomy, income ceilings, and skill building.
              </p>
              <div className="card-takeaways">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li>Salary predictability vs. scalable performance income</li>
                  <li>Capital risk: ₹0 (Job) vs ₹10L+ (Business) vs ₹5k (MLM)</li>
                  <li>Finding your ideal career archetype</li>
                </ul>
              </div>
              <div className="card-footer">
                <button 
                  className="btn-read-article"
                  onClick={() => onNavigate('mlm-vs-job-vs-business')}
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Teasers: Quiz + Printable Checklist */}
      <section className="interactive-tools-section">
        <div className="container">
          <div className="tools-grid">
            {/* Tool 1: Quiz */}
            <div className="tool-card tool-quiz">
              <div className="tool-icon-wrap">
                <Sparkles size={24} />
              </div>
              <span className="tool-tag">Interactive Self-Assessment</span>
              <h3 className="tool-title">Which Career & Income Path Fits You?</h3>
              <p className="tool-desc">
                Take our quick 4-question assessment to see whether a Traditional Job, Independent Business, or Direct Selling aligns best with your capital, risk tolerance, and time availability.
              </p>
              <button className="btn-tool" onClick={onOpenQuiz}>
                <span>Launch Interactive Quiz (60 Sec) →</span>
              </button>
            </div>

            {/* Tool 2: Checklist */}
            <div className="tool-card tool-checklist">
              <div className="tool-icon-wrap checklist-wrap">
                <CheckSquare size={24} />
              </div>
              <span className="tool-tag">Downloadable Lead Magnet</span>
              <h3 className="tool-title">Due-Diligence Checklist Before Joining Any MLM</h3>
              <p className="tool-desc">
                A practical 7-point audit checklist based on Government of India Direct Selling Rules 2021. Check off criteria or download/print for your research.
              </p>
              <button className="btn-tool" onClick={onOpenChecklist}>
                <span>Open & Print Checklist (Free) →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency / Is This Site Sponsored? */}
      <section className="trust-education-section">
        <div className="container">
          <div className="trust-card-box">
            <div className="trust-icon-badge">
              <ShieldCheck size={32} className="text-amber" />
            </div>
            <h2 className="trust-heading">Is This Site Sponsored or Affiliated?</h2>
            <p className="trust-body">
              <strong>DirectSellingGuide.in</strong> is an independent educational initiative. We do not accept payment to promote illegal schemes or write biased reviews. Our goal is to promote transparency, consumer protection, and responsible entrepreneurship across India.
            </p>
            <div className="trust-points-row">
              <div className="t-point">
                <CheckCircle size={16} className="text-green" />
                <span>Objective Evaluation Standards</span>
              </div>
              <div className="t-point">
                <CheckCircle size={16} className="text-green" />
                <span>Highlighting Red Flags & Risks</span>
              </div>
              <div className="t-point">
                <CheckCircle size={16} className="text-green" />
                <span>Consumer Protection Focused</span>
              </div>
            </div>
            <button 
              className="btn-trust-about"
              onClick={() => onNavigate('about-education')}
            >
              <span>Read Our Full Editorial Policy & Standards →</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">COMMON DOUBTS ANSWERED</span>
            <h2 className="section-title">Direct Selling & MLM Frequently Asked Questions</h2>
            <p className="section-desc">
              Clear, honest answers to the most common questions about the direct selling industry in India.
            </p>
          </div>

          <div className="faq-accordion-wrap">
            {directSellingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
