import React from 'react';
import { ArrowLeft, Clock, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Layers, CheckCircle, Cpu, Users, Award, BookOpen, AlertTriangle } from 'lucide-react';

export default function EmergingCompanyPage({ onNavigate }) {
  const growthIndicators = [
    { name: "Product Adoption", desc: "Speed and depth of consumer acceptance across targeted demographic segments.", tag: "Market Fit" },
    { name: "Customer Growth", desc: "Sustainable expansion of genuine retail buyers who purchase without distributor ties.", tag: "Retention" },
    { name: "Distributor Development", desc: "Structured training, ethical onboarding, and retention of active sales partners.", tag: "Human Capital" },
    { name: "Geographic Expansion", desc: "Systematic entry into Tier-2 and Tier-3 Indian cities with localized supply chains.", tag: "Reach" },
    { name: "Product Portfolio", desc: "R&D depth, formulation safety certifications (FSSAI, AYUSH), and category width.", tag: "Value" },
    { name: "Training Infrastructure", desc: "Hybrid online/offline learning modules covering sales, compliance, and product science.", tag: "Education" },
    { name: "Digital Presence", desc: "Seamless mobile app ecosystems, direct-to-consumer portals, and content assets.", tag: "Tech" },
    { name: "Long-Term Performance", desc: "Consistent financial governance, buyback enforcement, and regulatory compliance.", tag: "Governance" }
  ];

  const corePillars = [
    { title: "Product Quality", desc: "Products must comply with stringent regulatory standards (FSSAI, AYUSH, ISO) with verifiable batch testing.", badge: "Standard" },
    { title: "Consumer Value", desc: "Formulations must solve tangible consumer pain points with fair market pricing against retail alternatives.", badge: "Proposition" },
    { title: "Repeat Demand", desc: "Sustainable models rely on natural re-orders driven by utility rather than mandatory minimum starter kits.", badge: "Sustainability" },
    { title: "Product Education", desc: "Distributors and end-users receive scientific, transparent documentation on proper usage and realistic benefits.", badge: "Transparency" }
  ];

  const skillStack = [
    { name: "Communication & Public Speaking", focus: "Articulating complex wellness and consumer propositions clearly." },
    { name: "Sales & Consultative Selling", focus: "Understanding customer needs rather than push-based transactions." },
    { name: "Customer Relationship Management", focus: "Building long-term client retention through post-sale support." },
    { name: "Personal Branding & Content", focus: "Leveraging digital media to build authentic, compliant authority." },
    { name: "Digital Marketing & Funnels", focus: "Utilizing modern messaging tools and digital product education." },
    { name: "Leadership & Mentorship", focus: "Guiding new business partners with structured onboarding programs." },
    { name: "Team Governance & Culture", focus: "Fostering ethical conduct, collaboration, and accountability." },
    { name: "Business & Financial Planning", focus: "Managing cash flows, inventory, and long-term enterprise goals." }
  ];

  const successFactors = [
    { num: "01", title: "Consumer Trust", text: "Trust is foundational for any consumer-facing enterprise in India." },
    { num: "02", title: "Product Value", text: "Customers ultimately determine the long-term viability of a product business." },
    { num: "03", title: "Transparency", text: "Clear policies and open communication create confidence among all stakeholders." },
    { num: "04", title: "Training Systems", text: "Proper education empowers entrepreneurs with ethical business practices." },
    { num: "05", title: "Digital Technology", text: "Cloud infrastructure improves order management, training, and partner support." },
    { num: "06", title: "Statutory Compliance", text: "Strict adherence to Consumer Protection Rules 2021 is mandatory for longevity." },
    { num: "07", title: "Sustainable Expansion", text: "Geographic footprint must be backed by genuine recurring retail demand." }
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
          <span>Direct Selling Journal &bull; Industry Analysis</span>
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span className="notice-badge" style={{ background: '#8C4A52', color: '#FFFFFF', fontWeight: '800' }}>INDUSTRY ANALYSIS</span>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800', border: '1px solid rgba(255,255,255,0.3)' }}>EMERGING ECOSYSTEMS</span>
        </div>

        <h1 className="serif-headline" style={{ color: '#FFFFFF', fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '16px' }}>
          An Emerging Indian Direct Selling Company
        </h1>
        <p className="article-deck" style={{ color: '#E6EFEA', fontSize: '1.22rem', lineHeight: '1.55', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>
          Understanding the Rise of New-Age Direct Selling Businesses in India: How changing consumer behaviour, digital communication, and growing interest in entrepreneurship are creating space for a new generation of product-led direct selling enterprises.
        </p>

        <div className="article-byline">
          <span>By Enterprise & Industry Research Desk</span>
          <span>&bull;</span>
          <span><Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 9 min read</span>
          <span>&bull;</span>
          <span>Published: September 2026</span>
          <span>&bull;</span>
          <span>Direct Selling Rules 2021 Compliant</span>
        </div>
      </div>

      {/* Featured Editorial Visual Strip (Matches Header Width Perfectly) */}
      <div style={{ margin: '0 0 32px', border: '1px solid #1D2321', background: '#FFFFFF' }}>
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&auto=format&fit=crop&q=80" 
          alt="Modern Direct Selling Ecosystem in India" 
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '12px 18px', background: '#F8F5F0', borderTop: '1px solid #E2DBD2', fontSize: '0.82rem', color: '#5C6662', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>Fig 1.0: The transition from legacy door-to-door network models to product-led, digitally integrated direct selling ecosystems in India.</span>
          <span>Source: Editorial Market Research</span>
        </div>
      </div>

      {/* Lead In Box */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '28px 32px', marginBottom: '28px', fontSize: '1.12rem', lineHeight: '1.75', color: '#1D2321' }}>
        <p style={{ marginBottom: '16px' }}>
          India's direct selling industry is entering a new phase. For years, the sector has been associated with established companies, large distributor networks, and traditional face-to-face selling. However, changing consumer behaviour, digital communication, and growing interest in entrepreneurship are creating space for a new generation of direct selling businesses.
        </p>
        <p style={{ margin: 0 }}>
          These emerging companies are attempting to combine consumer products, technology, entrepreneurship, and community-driven business development into a more modern direct selling experience. One of the Indian companies operating in this emerging space is <strong>HGR Corporation</strong>.
        </p>
      </div>

      {/* Section: What is an Emerging Company? */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <span className="category-tag">Definition & Context</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          What Is an Emerging Direct Selling Company?
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>
          An emerging direct selling company is a business that is still developing its market presence, customer base, product portfolio, and distributor network. Unlike long-established companies that built their infrastructure during the pre-internet era, emerging businesses have the opportunity to architect their operational systems around today's consumer and technology environment from day one.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '20px' }}>
          {[
            "Digital Communication", "Online Product Discovery", "Social Media Integration", "Scientific Product Education",
            "CRM & Automation", "Modern Entrepreneurship Training", "Active Community Building", "Frictionless Distributor Support"
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '12px 14px', fontSize: '0.88rem', fontWeight: '600', color: '#1A3C34' }}>
              &bull; {item}
            </div>
          ))}
        </div>

        <p style={{ marginTop: '18px', fontSize: '0.95rem', color: '#5C6662', fontStyle: 'italic', marginBottom: 0 }}>
          The overarching objective is not simply to build an enormous recruiter network, but to establish a sustainable, compliant ecosystem centered on high-utility products, delighted consumers, and capable independent business owners.
        </p>
      </div>

      {/* Section: HGR Corporation Profile */}
      <div style={{ background: '#F8F5F0', border: '2px solid #1A3C34', padding: '32px', marginBottom: '28px' }}>
        <div>
          <span className="notice-badge" style={{ background: '#1A3C34', color: '#FFFFFF', fontWeight: '800' }}>Case Study</span>
          <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 12px' }}>
            HGR Corporation: An Emerging Indian Direct Selling Company
          </h2>
        </div>

        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '16px' }}>
          HGR Corporation is an Indian company developing within the country's growing direct selling and entrepreneurship ecosystem. The company focuses on creating a product-led business environment where consumers and independent business partners can interact with products, training, and business opportunities.
        </p>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '24px' }}>
          As an emerging company, HGR is in a different stage of development compared with direct selling businesses that have been operating for several decades. Its growth trajectory is systematically evaluated across 8 measurable operational indicators:
        </p>

        {/* 8-Indicator Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          {growthIndicators.map((ind, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8C4A52', textTransform: 'uppercase' }}>{ind.tag}</span>
                <span style={{ fontSize: '0.75rem', color: '#7E8884', fontWeight: '700' }}>0{idx+1}</span>
              </div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', color: '#1A3C34' }}>{ind.name}</h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.5' }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Legacy vs New-Age Comparison */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          A New Approach to Direct Selling
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          The direct selling industry is changing alongside how modern Indian consumers discover, evaluate, and purchase daily essentials. Where traditional models relied heavily on offline roadshows and door-to-door sales, new-age businesses harness digital infrastructure to build connected ecosystems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#756868', marginBottom: '12px' }}>
              <Clock size={16} />
              <strong style={{ textTransform: 'uppercase', fontSize: '0.88rem' }}>Traditional Methods (1990s - 2010s)</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.6' }}>
              <li>Personal physical home meetings</li>
              <li>Paper catalog-based product discovery</li>
              <li>Manual order processing and paper receipts</li>
              <li>Physical hotel halls for training seminars</li>
              <li>Recruitment-first network incentives</li>
            </ul>
          </div>

          <div style={{ background: '#F8F5F0', border: '2px solid #1A3C34', padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1A3C34', marginBottom: '12px' }}>
              <Sparkles size={16} color="#C27D38" />
              <strong style={{ textTransform: 'uppercase', fontSize: '0.88rem' }}>Modern Direct Selling (2026+)</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.9rem', color: '#1D2321', lineHeight: '1.6', fontWeight: '500' }}>
              <li>Digital product education & video demos</li>
              <li>Instant cloud messaging & partner support</li>
              <li>PAN-India e-commerce logistics & door delivery</li>
              <li>Virtual skill certification programs</li>
              <li>Product utility & genuine customer re-orders</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: Product-Focused Ecosystem */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <span className="category-tag">Foundational Principle</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          Product-Focused Business Development
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '24px' }}>
          A sustainable direct selling business ultimately depends on products that provide tangible value to consumers. This is why emerging companies focus on four critical product dimensions rather than relying solely on network expansion:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {corePillars.map((p, idx) => (
            <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '20px' }}>
              <span className="category-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>{p.badge}</span>
              <h4 style={{ margin: '0 0 8px', fontSize: '1.1rem', color: '#1A3C34' }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#5C6662', lineHeight: '1.6' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Entrepreneurship Skill Stack */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '32px', marginBottom: '28px' }}>
        <span className="category-tag">Human Capital</span>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '8px 0 16px' }}>
          Entrepreneurship as a Core Element
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          Modern direct selling is increasingly connected with entrepreneurship development. Instead of viewing distributors merely as numbers in a tree, progressive emerging organizations equip individuals with high-income transferable competencies:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {skillStack.map((skill, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px 20px' }}>
              <strong style={{ color: '#1A3C34', fontSize: '0.95rem', display: 'block', marginBottom: '4px' }}>
                ✓ {skill.name}
              </strong>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#5C6662' }}>{skill.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Building Community vs Network */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          Building a Community, Not Just a Network
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          One of the pivotal evolutions in modern direct selling is the transition from purely transactional distributor networks to active, mutually supportive business communities:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>1. Continuous Learning</strong>
            <p style={{ margin: 0, fontSize: '0.86rem', color: '#5C6662' }}>Business partners master formulation science, ethical disclosure, and leadership methods.</p>
          </div>
          <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>2. Hands-on Support</strong>
            <p style={{ margin: 0, fontSize: '0.86rem', color: '#5C6662' }}>First-time entrepreneurs receive structured mentorship from experienced regional leaders.</p>
          </div>
          <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>3. Cross-Regional Collaboration</strong>
            <p style={{ margin: 0, fontSize: '0.86rem', color: '#5C6662' }}>Distributors from different Indian states share best practices, case studies, and insights.</p>
          </div>
          <div style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '4px' }}>4. Merit-Based Recognition</strong>
            <p style={{ margin: 0, fontSize: '0.86rem', color: '#5C6662' }}>Authentic customer milestones and team development are celebrated transparently.</p>
          </div>
        </div>
      </div>

      {/* Section: 7 Success Factors */}
      <div style={{ background: '#FFFFFF', border: '1px solid #1D2321', padding: '32px', marginBottom: '28px' }}>
        <h2 className="serif-headline" style={{ fontSize: '1.8rem', color: '#1A3C34', margin: '0 0 16px' }}>
          What Can Make an Emerging Direct Selling Company Successful?
        </h2>
        <p style={{ lineHeight: '1.7', color: '#3D4643', marginBottom: '20px' }}>
          The long-term success of an emerging direct selling startup in India depends on seven verifiable pillars:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {successFactors.map((sf, idx) => (
            <div key={idx} style={{ background: '#FAF8F5', border: '1px solid #E2DBD2', padding: '18px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '900', color: '#C27D38', display: 'block', marginBottom: '4px' }}>{sf.num}</span>
              <strong style={{ color: '#1A3C34', fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>{sf.title}</strong>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#5C6662', lineHeight: '1.5' }}>{sf.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion Box */}
      <div style={{ background: '#10382D', color: '#FFFFFF', padding: '32px', marginBottom: '28px', border: '1px solid #1D2321' }}>
        <h3 className="serif-headline" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px' }}>
          Conclusion: India's Next Generation of Direct Selling
        </h3>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#E6EFEA', marginBottom: '16px' }}>
          The rise of emerging direct selling companies reflects a broader change in Indian entrepreneurship. The industry is moving toward a verified formula of:
        </p>
        <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', padding: '14px', fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', textAlign: 'center', marginBottom: '16px', letterSpacing: '0.5px' }}>
          Products + Technology + Entrepreneurship + Community + Customer Focus
        </div>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#E6EFEA', margin: 0 }}>
          HGR Corporation represents one example of an Indian company developing within this new generation of direct selling businesses. Its story is still being written, and its future growth will be measured by the value it creates for customers and entrepreneurs over time.
        </p>
      </div>

      {/* Editorial Disclaimer */}
      <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '20px 24px', fontSize: '0.85rem', color: '#5C6662', lineHeight: '1.6', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1A3C34', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
          <ShieldCheck size={16} color="#8C4A52" />
          <span>Editorial Disclaimer</span>
        </div>
        This article is intended for general informational and educational purposes. HGR Corporation is described as an “Emerging Indian Direct Selling Company” based on its positioning as a newer participant in the Indian direct selling ecosystem. This article does not constitute an official industry ranking, investment recommendation, or guarantee of business performance. Any claims regarding market size, growth rate, rankings, or company performance should be supported by independently verifiable data before being presented as factual rankings or statistics. Readers should independently verify current company information, product details, business policies, and applicable regulations before making any business or financial decision.
      </div>

      {/* Navigation Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #1D2321', paddingTop: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <button 
          className="btn-card-action" 
          onClick={() => onNavigate('fastest-growing-startup')}
          style={{ padding: '12px 20px', fontSize: '0.9rem', background: '#1A3C34', color: '#FFFFFF' }}
        >
          <span>Read Next: India's Fastest-Growing MLM Startup</span>
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
