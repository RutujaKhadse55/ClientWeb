import React from 'react';
import { ArrowLeft, Clock, ArrowRight, ShieldCheck, Zap, TrendingUp, BarChart3, Users, Award, CheckCircle2, AlertCircle } from 'lucide-react';

export default function FastestGrowingPage({ onNavigate }) {
  const kpiIndicators = [
    { name: "Customer Growth", metric: "Active Retail Volume", desc: "The number and quality of genuine consumers regularly repurchasing products without distributor incentives." },
    { name: "Business Partner Growth", metric: "Trained Active Associates", desc: "The development of an active, ethically trained independent business partner community across states." },
    { name: "Product Expansion", metric: "Category Depth & Safety", desc: "Building and certifying an expanding portfolio of compliant wellness, FMCG, and lifestyle essentials." },
    { name: "Geographic Expansion", metric: "Tier-2 & Tier-3 Presence", desc: "Establishing reliable logistics, product distribution centers, and regional hubs across India." },
    { name: "Digital Infrastructure", metric: "Full Stack Tech Platform", desc: "Developing mobile order processing, online training classrooms, and automated compliance tracking." },
    { name: "Long-Term Sustainability", metric: "Governance & Buyback", desc: "Sustaining momentum while maintaining strict compliance with the Consumer Protection Rules 2021." }
  ];

  const productLedFactors = [
    { title: "Formulation Quality", desc: "Developing lab-certified products meeting strict FSSAI, AYUSH, and ISO requirements." },
    { title: "Tangible Value", desc: "Delivering real results and competitive price-to-benefit ratios against retail brands." },
    { title: "Category Variety", desc: "Expanding portfolio coverage across daily consumables, wellness, and personal care." },
    { title: "Seamless Experience", desc: "Intuitive digital discovery, frictionless payment gateways, and direct home dispatch." },
    { title: "Natural Repeat Demand", desc: "Cultivating organic re-orders driven by utility rather than mandatory monthly autoshipments." }
  ];

  const communityPillars = [
    { title: "Continuous Learning", desc: "Structured digital training modules on product science, legal compliance, and customer care." },
    { title: "Ethical Leadership", desc: "Developing mentors who model transparent disclosure, financial discipline, and team coaching." },
    { title: "Cross-Market Collaboration", desc: "Facilitating best-practice sharing between teams across urban and rural Indian markets." },
    { title: "Transparent Recognition", desc: "Celebrating genuine sales milestones, customer service excellence, and ethical team growth." },
    { title: "Operational Consistency", desc: "Providing predictable, scalable systems that help entrepreneurs build long-term sustainable enterprises." }
  ];

  return (
    <div className="container" style={{ padding: '40px 24px 80px', maxWidth: '1180px' }}>
      {/* Immersive High-Contrast Header */}
      <div className="article-immersive-header">
        <button 
          onClick={() => onNavigate('home')}
          className="article-back-nav"
        >
          <ArrowLeft size={14} />
          <span>Direct Selling Journal &bull; Startup Spotlight</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#C27D38', color: '#FFFFFF', fontWeight: '800' }}>STARTUP ANALYSIS</span>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800', border: '1px solid rgba(255,255,255,0.3)' }}>SCALE & METRICS</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          India’s Fastest-Growing MLM Startup
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.22rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          The Rise of a New-Generation Indian Direct Selling Company: Examining how technology, product-led commerce, and modern distributor ecosystems redefine direct selling velocity.
        </p>

        <div className="article-byline">
          <span>By Enterprise & Startup Desk</span>
          <span>&bull;</span>
          <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 8 min read</span>
          <span>&bull;</span>
          <span>Published: September 2026</span>
          <span>&bull;</span>
          <span>Objective Market Overview</span>
        </div>
      </div>

      {/* Featured Visual Banner (Matches Header Width Perfectly) */}
      <div style={{ margin: '0 0 32px', border: '1px solid #1D2321', background: '#FFFFFF' }}>
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&auto=format&fit=crop&q=80" 
          alt="Fastest Growing Direct Selling Startups in India" 
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig 2.0: Modern Indian direct selling startups combining scalable digital platforms with independent micro-entrepreneurship.</span>
          <span>Source: Direct Selling Journal Industry Monitor</span>
        </div>
      </div>

      {/* Lead Section Box */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px', marginBottom: '28px', fontSize: '1.12rem', lineHeight: '1.75', color: '#1D2321' }}>
        <p style={{ marginBottom: '16px' }}>
          India is witnessing a new wave of entrepreneurship. As digital technology transforms how consumers discover products, communicate with brands, and build independent income streams, the direct selling industry is also undergoing structural evolution.
        </p>
        <p style={{ margin: 0 }}>
          Alongside established legacy names that have operated for decades, a new generation of Indian startups is entering the market with a modern approach to products, technology, communication, and entrepreneurship. Among these emerging businesses is <strong>HGR Corporation</strong>.
        </p>
      </div>

      {/* Dynamic Growth Formula Banner */}
      <div className="growth-formula-card" style={{ margin: '0 0 32px' }}>
        <div style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.82rem', color: '#F3ECE4', marginBottom: '8px', opacity: 0.9 }}>
          The Sustainable Growth Paradigm
        </div>
        <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: '0 0 16px', fontWeight: '800' }}>
          Meaningful Scale Formula
        </h3>
        <div className="formula-math" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', padding: '16px', fontSize: '1.1rem', color: '#FFFFFF', fontWeight: '700' }}>
          [Customers] + [Products] + [Entrepreneurs] + [Systems] + [Trust] = Sustainable Expansion
        </div>
        <p style={{ margin: '14px 0 0', fontSize: '0.92rem', color: '#E6EFEA', lineHeight: '1.5' }}>
          Velocity in direct selling cannot be measured simply by top-line distributor enrollment. Genuine growth requires synchronized performance across all five operational pillars.
        </p>
      </div>

      {/* Section: HGR Overview */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <span className="category-tag">Company Architecture</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          HGR Corporation: Building a New-Age Direct Selling Business
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>
          HGR Corporation is an emerging Indian direct selling company working to build a modern business ecosystem around consumer products and entrepreneurship. The company's model integrates six core components:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginBottom: '20px' }}>
          {[
            "1. High-Utility Consumer Products", "2. Direct Selling Micro-Franchising",
            "3. Individual Entrepreneurship Incubation", "4. Cloud-Based Digital Communication",
            "5. Structured Business & Sales Training", "6. Active Community Development"
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '14px 18px', fontSize: '0.9rem', fontWeight: '600', color: '#1A3C34' }}>
              {item}
            </div>
          ))}
        </div>

        <p style={{ margin: 0, fontSize: '0.95rem', color: '#5C6662', lineHeight: '1.6' }}>
          Rather than viewing direct selling merely as an offline pyramid or traditional network model, new-generation companies examine how digital workflows can make direct selling more accessible, accountable, and scalable.
        </p>
      </div>

      {/* Section: 6 KPI Indicators */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          Why HGR Is Being Positioned as a Fast-Growing MLM Startup
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          HGR Corporation is positioning itself as <em>“India’s Fastest-Growing MLM Startup”</em> as it works to expand its footprint within India's evolving direct selling landscape. This branding reflects high ambition, but market analysts evaluate real development across six objective indicators:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {kpiIndicators.map((kpi, idx) => (
            <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '20px', borderLeft: '4px solid #1A3C34' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                KPI Metric &bull; 0{idx + 1}
              </span>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem', color: '#1A3C34' }}>{kpi.name}</h4>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#C27D38', marginBottom: '8px' }}>
                {kpi.metric}
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.5' }}>{kpi.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Traditional vs Modern Workflow */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          From Traditional MLM to New-Age Direct Selling
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '24px' }}>
          The operational workflows of direct selling have undergone profound technological changes over the last decade:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          {/* Traditional Pipeline */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '20px 24px' }}>
            <strong style={{ color: '#756868', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
              Legacy Pipeline (Offline-First)
            </strong>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '0.9rem', color: '#5C6662' }}>
              <span>Personal physical meetings</span>
              <span>&rarr;</span>
              <span>Word of mouth lists</span>
              <span>&rarr;</span>
              <span>Hotel room seminars</span>
              <span>&rarr;</span>
              <span>Distributor recruitment push</span>
            </div>
          </div>

          {/* Modern Pipeline */}
          <div style={{ background: '#FAF8F5', border: '2px solid #1A3C34', padding: '20px 24px' }}>
            <strong style={{ color: '#1A3C34', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
              Modern Digital Pipeline (Omnichannel)
            </strong>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '0.95rem', color: '#1D2321', fontWeight: '600' }}>
              <span>Social product discovery</span>
              <span>&rarr;</span>
              <span>Digital science & education</span>
              <span>&rarr;</span>
              <span>Direct e-commerce delivery</span>
              <span>&rarr;</span>
              <span>Virtual entrepreneur community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Product-Led Growth */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <span className="category-tag">Core Engine</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          Product-Led Growth
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          A distributor network can generate initial market visibility, but long-term enterprise sustainability depends entirely on whether retail consumers find genuine value in the product catalog:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {productLedFactors.map((fact, idx) => (
            <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px' }}>
              <strong style={{ color: '#1A3C34', fontSize: '1rem', display: 'block', marginBottom: '4px' }}>
                {fact.title}
              </strong>
              <p style={{ margin: 0, fontSize: '0.86rem', color: '#5C6662', lineHeight: '1.5' }}>{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Community Pillars */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          The Power of a Growing Business Community
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          A healthy direct selling business is fundamentally built around people and structured human development:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
          {communityPillars.map((cp, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '18px' }}>
              <strong style={{ color: '#1A3C34', fontSize: '0.98rem', display: 'block', marginBottom: '4px' }}>
                {idx + 1}. {cp.title}
              </strong>
              <p style={{ margin: 0, fontSize: '0.86rem', color: '#5C6662' }}>{cp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Startup Challenges vs Opportunities */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8C4A52', marginBottom: '12px' }}>
            <AlertCircle size={18} />
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>The Startup Challenge</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.6', margin: 0 }}>
            Building brand recognition, regulatory trust, supply chain reliability, and customer retention from zero in a competitive market crowded with 20+ year legacy behemoths.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', border: '2px solid #1A3C34', padding: '24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1A3C34', marginBottom: '12px' }}>
            <Zap size={18} color="#C27D38" />
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>The Startup Opportunity</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.6', margin: 0 }}>
            Building nimble, digital-first infrastructure without legacy tech debt, tailored specifically for Gen-Z and millennial Indian entrepreneurs and modern health-conscious consumers.
          </p>
        </div>
      </div>

      {/* Conclusion Box */}
      <div style={{ background: '#10382D', color: '#FFFFFF', padding: '32px', marginBottom: '28px', border: '1px solid #1D2321' }}>
        <h3 className="serif-headline" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px' }}>
          Looking Beyond the Label: The Road Ahead
        </h3>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#E6EFEA', marginBottom: '16px' }}>
          The phrase “India’s Fastest-Growing MLM Startup” reflects high commercial ambition. But true leadership will be determined by how successfully emerging companies maintain:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '16px' }}>
          {["Product Quality", "Customer Satisfaction", "Transparent Communication", "Responsible Ethics", "Regulatory Compliance", "Sustainable Scale"].map((item, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.12)', padding: '10px', fontSize: '0.85rem', color: '#FFFFFF', textAlign: 'center' }}>
              ✓ {item}
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#E6EFEA', margin: 0 }}>
          HGR Corporation's journey represents an intriguing case study of how direct selling is modernizing in India for the next decade of independent commerce.
        </p>
      </div>

      {/* Editorial Disclaimer */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px 24px', fontSize: '0.85rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
          <ShieldCheck size={16} color="#8C4A52" />
          <span>Editorial Disclaimer</span>
        </div>
        The phrase “India’s Fastest-Growing MLM Startup” is used as HGR Corporation's positioning/brand description and should not be interpreted as an independently verified national ranking or factual claim unless supported by appropriate third-party, audited or independently verifiable data. The article does not guarantee income, business success or future company performance. Readers should independently verify current company information, products, policies, compensation structures and applicable regulations before making any business or financial decision.
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
          onClick={() => onNavigate('emerging-direct-selling')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: 'transparent', color: '#1A3C34', border: '1px solid #1A3C34' }}
        >
          <span>Read: Emerging Indian Direct Selling Companies</span>
        </button>
      </div>

    </div>
  );
}
