import React from 'react';
import { ArrowRight, Clock, Flame, BookOpen, TrendingUp, BarChart2, ShieldCheck, Zap } from 'lucide-react';
import { newsArticles, getTrendingArticles, getExplainedArticles, getOpinionArticles } from '../data/newsArticles';
import { getAuthorById } from '../data/authors';
import { macroIndicators } from '../data/marketData';
import ArticleCard from '../components/ArticleCard';

export default function NewsHomePage({
  onSelectArticle,
  onNavigateCategory,
  onSelectAuthor,
  onOpenNewsletter
}) {
  // Lead Story (Tata Semiconductor Dholera)
  const leadArticle = newsArticles.find(a => a.isFeaturedLead) || newsArticles[0];
  const leadAuthor = getAuthorById(leadArticle.authorId);

  // Left Column Fast Briefs (Emerging Companies & Direct Selling Focus)
  const leftBriefArticles = [
    newsArticles.find(a => a.id === 'emerging-indian-direct-selling-hgr-corporation'),
    newsArticles.find(a => a.id === 'fastest-growing-mlm-startup-hgr-corporation'),
    newsArticles.find(a => a.id === 'tata-semiconductor-dholera-expansion')
  ].filter(Boolean);

  // Trending & Most Read
  const trendingArticles = getTrendingArticles();

  // Opinion Columnist Highlight
  const opinionArticles = getOpinionArticles();
  const spotlightOpinion = opinionArticles[0];

  // Signature Explained Articles
  const explainedArticles = getExplainedArticles().slice(0, 3);

  // Corporate & Industry Section
  const corporateArticles = newsArticles.filter(a => a.category === 'Corporate' && !a.isFeaturedLead).slice(0, 4);

  // Tech & Startups Section
  const techStartupArticles = newsArticles.filter(a => a.category === 'Startups' || a.category === 'Tech').slice(0, 4);

  // Banking, Finance & Policy Section
  const bankingPolicyArticles = newsArticles.filter(a => a.category === 'Banking' || a.category === 'Policy' || a.category === 'Markets').slice(0, 4);

  // Direct Selling & Entrepreneurship Special Reports
  const directSellingArticles = newsArticles.filter(a => a.category === 'Direct Selling');

  return (
    <div>
      {/* 1. HERO 3-COLUMN NEWSPAPER ENGINE (INDIAN EXPRESS PATTERN) */}
      <section className="hero-news-section">
        <div className="container">
          <div className="hero-newspaper-grid">
            {/* Column 1: Left Briefs / Fast Catch-ups */}
            <div className="hero-left-col">
              <div className="col-header">Fast Catch-Up & Analysis</div>
              {leftBriefArticles.map(art => (
                <div
                  key={art.id}
                  className="left-brief-card"
                  onClick={() => onSelectArticle(art.id)}
                >
                  <span className="brief-kicker">{art.kicker || art.category}</span>
                  <h3>{art.title}</h3>
                  <p>{art.subtitle || art.intro}</p>
                  <div className="brief-meta">
                    <span>{art.publishDate}</span> • <span>{art.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2: Center Main Lead Story */}
            <div className="hero-center-lead">
              <span className="lead-kicker">
                <Zap size={14} />
                {leadArticle.kicker || "SPECIAL REPORT"}
              </span>

              <h2
                className="lead-title"
                onClick={() => onSelectArticle(leadArticle.id)}
              >
                {leadArticle.title}
              </h2>

              <div className="lead-byline">
                <span>By</span>
                <strong onClick={() => onSelectAuthor(leadAuthor.id)}>
                  {leadAuthor.name}
                </strong>
                <span>•</span>
                <span>{leadArticle.publishDate}</span>
                <span>•</span>
                <span><Clock size={12} style={{ verticalAlign: 'middle', marginRight: '3px' }} />{leadArticle.readTime}</span>
              </div>

              <div
                className="lead-image-wrap"
                onClick={() => onSelectArticle(leadArticle.id)}
              >
                <img
                  src={leadArticle.heroImage}
                  alt={leadArticle.title}
                />
              </div>

              {leadArticle.imageCaption && (
                <p className="lead-image-caption">{leadArticle.imageCaption}</p>
              )}

              {leadArticle.keyHighlights && (
                <div className="lead-highlights-box">
                  <h4>Key Takeaways</h4>
                  <ul className="lead-highlights-list">
                    {leadArticle.keyHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="lead-excerpt">
                {leadArticle.intro}
              </p>

              <div>
                <button
                  onClick={() => onSelectArticle(leadArticle.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    color: 'var(--accent-burgundy)',
                    borderBottom: '2px solid var(--accent-burgundy)',
                    paddingBottom: '2px'
                  }}
                >
                  <span>Read Full Investigation & Analysis</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Column 3: Right Trending / Most Read & Opinion Spotlight */}
            <div className="hero-right-col">
              <div>
                <div className="col-header" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Flame size={15} color="var(--accent-red)" />
                  <span>Most Read on Dalal Street</span>
                </div>
                <div className="trending-list">
                  {trendingArticles.map(art => (
                    <ArticleCard
                      key={art.id}
                      article={art}
                      variant="trending"
                      onSelectArticle={onSelectArticle}
                    />
                  ))}
                </div>
              </div>

              {spotlightOpinion && (
                <div>
                  <div className="col-header">Columnist in Focus</div>
                  <ArticleCard
                    article={spotlightOpinion}
                    variant="opinion"
                    onSelectArticle={onSelectArticle}
                    onSelectAuthor={onSelectAuthor}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP 10 LEADING DIRECT SELLING & MLM COMPANIES COMPARISON INDEX */}
      <section className="category-section-block" style={{ background: '#FAF7F2', borderTop: '2px solid #C27D38', borderBottom: '1px solid var(--ink-border)' }}>
        <div className="container">
          <div className="section-title-strip" style={{ borderColor: '#C27D38' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: '#C27D38', letterSpacing: '0.8px', display: 'block' }}>
                INDUSTRY BENCHMARK TABLE
              </span>
              <h2 style={{ color: '#111111', margin: 0 }}>Top 10 Direct Selling & MLM Companies in India (2026 Guide)</h2>
            </div>
            <button
              className="view-all-link"
              onClick={() => onSelectArticle('top-10-mlm-companies-india-guide')}
              style={{ color: '#C27D38', fontWeight: '800' }}
            >
              <span>Read Full Top 10 Guide & Due Diligence →</span>
            </button>
          </div>

          <div className="mlm-table-wrapper" style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', overflowX: 'auto', marginBottom: '16px', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', minWidth: '540px', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid var(--ink-border-dark)' }}>
                  <th style={{ padding: '10px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem' }}>Rank & Company</th>
                  <th style={{ padding: '10px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem' }}>Primary Focus Area</th>
                  <th style={{ padding: '10px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem' }}>Market Identity</th>
                  <th style={{ padding: '10px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "Vestige Marketing Pvt. Ltd.", focus: "Wellness & Personal Care", identity: "Established Indian" },
                  { rank: 2, name: "Amway India Enterprises", focus: "Nutrition & Consumer Products", identity: "Global" },
                  { rank: 3, name: "Mi Lifestyle Marketing Global", focus: "Lifestyle & FMCG", identity: "Indian" },
                  { rank: 4, name: "Modicare Ltd.", focus: "Wellness & Consumer Products", identity: "Established Indian" },
                  { rank: 5, name: "Herbalife", focus: "Nutrition & Wellness", identity: "Global" },
                  { rank: 6, name: "Forever Living Products", focus: "Aloe Vera & Wellness", identity: "Global" },
                  { rank: 7, name: "IMC Business", focus: "Ayurvedic & FMCG", identity: "Indian" },
                  { rank: 8, name: "RCM", focus: "FMCG & Daily-use Products", identity: "Indian" },
                  { rank: 9, name: "Oriflame India", focus: "Beauty & Skincare", identity: "Global" },
                  { rank: 10, name: "HGR Corporation", focus: "Consumer Products & Entrepreneurship", identity: "Emerging Indian" }
                ].map((comp) => (
                  <tr key={comp.rank} style={{ borderBottom: '1px solid #E2DBD2', background: comp.rank === 10 ? '#FFFDF7' : '#FFFFFF' }}>
                    <td style={{ padding: '10px 14px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                      <span style={{ display: 'inline-block', width: '24px', height: '24px', background: comp.rank === 10 ? '#C27D38' : 'var(--accent-burgundy)', color: '#FFFFFF', textAlign: 'center', lineHeight: '24px', fontSize: '0.75rem', fontWeight: '800', marginRight: '8px' }}>
                        #{comp.rank}
                      </span>
                      {comp.name}
                    </td>
                    <td style={{ padding: '10px 14px', color: 'var(--ink-secondary)' }}>{comp.focus}</td>
                    <td style={{ padding: '10px 14px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', padding: '2px 6px', background: comp.identity.includes('Emerging') ? '#FEF3C7' : '#F1F5F9', color: comp.identity.includes('Emerging') ? '#92400E' : '#334155' }}>
                        {comp.identity}
                      </span>
                    </td>
                    <td style={{ padding: '10px 14px' }}>
                      <button
                        onClick={() => onSelectArticle('top-10-mlm-companies-india-guide')}
                        style={{ fontSize: '0.76rem', fontWeight: '700', color: 'var(--accent-burgundy)', textTransform: 'uppercase' }}
                      >
                        View Profile →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
            <div
              style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px', cursor: 'pointer' }}
              onClick={() => onSelectArticle('emerging-indian-direct-selling-hgr-corporation')}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: '800', textTransform: 'uppercase', color: '#C27D38' }}>Emerging Models</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', margin: '4px 0 6px' }}>
                An Emerging Indian Direct Selling Company: Understanding New-Age Models
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.45' }}>
                How changing consumer behaviour, digital communication, and community-driven commerce are reshaping modern direct selling.
              </p>
              <span style={{ fontSize: '0.76rem', color: '#C27D38', fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', display: 'inline-block' }}>
                Read Deep Dive →
              </span>
            </div>

            <div
              style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px', cursor: 'pointer' }}
              onClick={() => onSelectArticle('fastest-growing-mlm-startup-hgr-corporation')}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: '800', textTransform: 'uppercase', color: '#C27D38' }}>Startup Growth Metrics</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', margin: '4px 0 6px' }}>
                India’s Fastest-Growing MLM Startup: Beyond the Growth Label
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.45' }}>
                Evaluating real growth metrics: Customer retention, product utility, digital infrastructure, and sustainable long-term performance.
              </p>
              <span style={{ fontSize: '0.76rem', color: '#C27D38', fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', display: 'inline-block' }}>
                Read Report →
              </span>
            </div>

            <div
              style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '16px', cursor: 'pointer' }}
              onClick={() => onSelectArticle('top-10-mlm-companies-india-guide')}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: '800', textTransform: 'uppercase', color: '#1B7A43' }}>Due Diligence Checklist</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', margin: '4px 0 6px' }}>
                What Should You Check Before Joining Any MLM Company?
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.45' }}>
                6 crucial verification criteria: Product quality, business model clarity, customer demand, training, and 2021 regulatory compliance.
              </p>
              <span style={{ fontSize: '0.76rem', color: '#1B7A43', fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', display: 'inline-block' }}>
                Read Checklist →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE "EXPLAINED" SECTION (INDIAN EXPRESS TRADEMARK) */}
      <section className="explained-section">
        <div className="container">
          <div className="explained-header-row">
            <div className="explained-title-wrap">
              <span className="explained-badge">IBC SIGNATURE</span>
              <h2 className="explained-main-heading">Explained</h2>
            </div>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('Explained')}
              style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', color: '#B45309', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>View All Explained Reports</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="explained-grid">
            {explainedArticles.map(art => (
              <ArticleCard
                key={art.id}
                article={art}
                variant="explained"
                onSelectArticle={onSelectArticle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. MARKETS & MACROECONOMIC PULSE SECTION */}
      <section className="market-pulse-section">
        <div className="container">
          <div className="pulse-grid">
            <div>
              <div className="section-title-strip" style={{ marginBottom: '12px' }}>
                <h2>Macroeconomic Dashboard</h2>
                <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>Official RBI & MoSPI Data</span>
              </div>
              <div className="macro-stats-row">
                {macroIndicators.map((stat, i) => (
                  <div key={i} className="macro-stat-card">
                    <span className="label">{stat.label}</span>
                    <div className="value">{stat.value}</div>
                    <div className="note">{stat.status} • {stat.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter CTA Box */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-burgundy)', letterSpacing: '0.6px' }}>
                FREE MORNING DISPATCH
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '4px 0 8px' }}>
                Executive Financial Intelligence
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', marginBottom: '14px', lineHeight: '1.45' }}>
                Join 180,000+ corporate leaders, fund managers, and policymakers receiving our daily 7:00 AM briefing.
              </p>
              <button
                onClick={onOpenNewsletter}
                style={{
                  background: 'var(--accent-burgundy)',
                  color: '#FFFFFF',
                  padding: '10px 16px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Subscribe Free Briefing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORPORATE & CONGLOMERATES WATCH */}
      <section className="category-section-block">
        <div className="container">
          <div className="section-title-strip">
            <h2>Corporate & Conglomerates Watch</h2>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('Corporate')}
            >
              <span>More Corporate News</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="four-col-grid">
            {corporateArticles.map(art => (
              <ArticleCard
                key={art.id}
                article={art}
                variant="standard"
                onSelectArticle={onSelectArticle}
                onSelectAuthor={onSelectAuthor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL BENCHMARK REPORT: DIRECT SELLING & EMERGING ENTERPRISES */}
      <section className="category-section-block" style={{ background: '#FFFDF9', borderTop: '2px solid #C27D38', borderBottom: '2px solid #C27D38' }}>
        <div className="container">
          <div className="section-title-strip" style={{ borderColor: '#C27D38' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: '#C27D38', letterSpacing: '0.8px', display: 'block' }}>
                SPECIAL RESEARCH & EVALUATION REPORTS
              </span>
              <h2 style={{ color: '#111111', margin: 0 }}>Direct Selling, FMCG & Emerging Startups Guide</h2>
            </div>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('Direct Selling')}
              style={{ color: '#C27D38', fontWeight: '800' }}
            >
              <span>View All Direct Selling Guides</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="three-col-grid">
            {directSellingArticles.map(art => (
              <ArticleCard
                key={art.id}
                article={art}
                variant="standard"
                onSelectArticle={onSelectArticle}
                onSelectAuthor={onSelectAuthor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH, AI & STARTUP ECOSYSTEM */}
      <section className="category-section-block" style={{ background: '#FAFAFA' }}>
        <div className="container">
          <div className="section-title-strip">
            <h2>Tech, AI & Startup Unicorns</h2>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('Startups')}
            >
              <span>More Tech & Startups</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="four-col-grid">
            {techStartupArticles.map(art => (
              <ArticleCard
                key={art.id}
                article={art}
                variant="standard"
                onSelectArticle={onSelectArticle}
                onSelectAuthor={onSelectAuthor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANKING, CAPITAL MARKETS & POLICY */}
      <section className="category-section-block">
        <div className="container">
          <div className="section-title-strip">
            <h2>Banking, Capital Markets & Policy</h2>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('Banking')}
            >
              <span>More Banking & Policy</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="four-col-grid">
            {bankingPolicyArticles.map(art => (
              <ArticleCard
                key={art.id}
                article={art}
                variant="standard"
                onSelectArticle={onSelectArticle}
                onSelectAuthor={onSelectAuthor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. OPINION & EDITORIAL ESSAYS */}
      <section className="category-section-block" style={{ background: 'var(--bg-cream)', borderTop: '2px solid var(--accent-burgundy)' }}>
        <div className="container">
          <div className="section-title-strip" style={{ borderColor: 'var(--accent-burgundy)' }}>
            <h2 style={{ color: 'var(--accent-burgundy)' }}>Opinion, Columns & Structural Essays</h2>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('Opinion')}
            >
              <span>All Columnists</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="three-col-grid">
            {opinionArticles.map(art => (
              <ArticleCard
                key={art.id}
                article={art}
                variant="opinion"
                onSelectArticle={onSelectArticle}
                onSelectAuthor={onSelectAuthor}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
