import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Flame, BookOpen, TrendingUp, BarChart2, ShieldCheck, Zap, Search, Award } from 'lucide-react';
import { newsArticles, getTrendingArticles, getExplainedArticles, getOpinionArticles } from '../data/newsArticles';
import { mlmSeoArticles } from '../data/mlmSeoArticles';
import { getAuthorById } from '../data/authors';
import { macroIndicators } from '../data/marketData';
import ArticleCard from '../components/ArticleCard';

export default function NewsHomePage({
  onSelectArticle,
  onNavigateCategory,
  onSelectAuthor,
  onOpenNewsletter
}) {
  // Benchmark Directory Tabs State
  const [activeBenchmarkTab, setActiveBenchmarkTab] = useState('emerging');
  const [benchmarkSearch, setBenchmarkSearch] = useState('');

  // Benchmark tabs configuration (treats all companies equally with clean editorial naming)
  const benchmarkTabs = [
    {
      id: 'emerging',
      label: 'Emerging MLM Companies',
      articleId: 'india-top-10-emerging-mlm-companies',
      subtitle: 'New-generation companies with modern product models & digital infrastructure'
    },
    {
      id: 'startups',
      label: 'New MLM Startups',
      articleId: 'india-top-10-new-mlm-startups',
      subtitle: 'Post-2021 new direct selling ventures building sustainable consumer ecosystems'
    },
    {
      id: 'new-mlm',
      label: 'New MLM Companies',
      articleId: 'india-top-10-new-mlm-companies',
      subtitle: 'Recently established direct selling ventures with active distributor networks'
    },
    {
      id: 'new-direct-selling',
      label: 'New Direct Selling',
      articleId: 'india-top-10-new-direct-selling-companies',
      subtitle: 'Modern direct-to-consumer and community commerce direct sellers in India'
    }
  ];

  const currentTabConfig = benchmarkTabs.find(t => t.id === activeBenchmarkTab) || benchmarkTabs[0];
  const activeArticleData = mlmSeoArticles.find(a => a.id === currentTabConfig.articleId);
  const rawCompanies = activeArticleData?.companies || [];

  const filteredCompanies = rawCompanies.filter(comp => {
    if (!benchmarkSearch.trim()) return true;
    const query = benchmarkSearch.toLowerCase();
    return (
      comp.name?.toLowerCase().includes(query) ||
      comp.focusArea?.toLowerCase().includes(query) ||
      comp.country?.toLowerCase().includes(query)
    );
  });

  // Lead Story (World Top 10 MLM Companies as requested)
  const leadArticle = newsArticles.find(a => a.id === 'world-top-10-mlm-companies') || newsArticles.find(a => a.isFeaturedLead) || newsArticles[0];
  const leadAuthor = getAuthorById(leadArticle.authorId);

  // Left Column Fast Briefs (Emerging Companies & Direct Selling Focus)
  const leftBriefArticles = [
    newsArticles.find(a => a.id === 'india-top-10-mlm-companies'),
    newsArticles.find(a => a.id === 'india-top-10-new-mlm-companies'),
    newsArticles.find(a => a.id === 'india-top-10-emerging-mlm-companies')
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

  // MLM Companies, Direct Selling & Entrepreneurship Special Reports
  const directSellingArticles = newsArticles.filter(a => 
    a.category === 'MLM Companies & Rankings' || 
    a.category === 'Direct Selling' ||
    (a.category && a.category.toLowerCase().includes('mlm'))
  );

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MLM Insight India",
    "url": "https://mlminsight.org/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mlminsight.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div>
      <Helmet>
        <title>MLM Insight India — MLM Rankings, Reviews, Comparisons &amp; New MLM Startups 2026 | MLMInsight.org</title>
        <meta name="description" content="MLM Insight India — India's #1 independent platform for MLM Rankings, Reviews, Comparisons, New MLM Startups, Business Research &amp; Guides. Trusted intelligence on India's direct selling industry." />
        <meta name="keywords" content="MLM rankings India, MLM reviews India, top MLM companies India 2026, new MLM startups India, direct selling India 2026, MLMInsight.org, MLM Insight India, HGR Corporation" />
        <link rel="canonical" href="https://mlminsight.org/" />
        <meta property="og:title" content="MLM Insight India — MLM Rankings, Reviews &amp; New MLM Startups 2026" />
        <meta property="og:description" content="India's #1 independent platform for MLM Rankings, Reviews, Comparisons, New MLM Startups, Business Research &amp; Guides." />
        <meta property="og:url" content="https://mlminsight.org/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      {/* 1. HERO 3-COLUMN NEWSPAPER ENGINE WITH DIRECT RANKINGS HUB */}
      <section className="hero-news-section">
        <div className="container">
          {/* 2026 Core Benchmark Directories — Institutional Editorial Bar */}
          <div 
            className="rankings-quick-hub" 
            style={{ 
              background: '#F8F6F1', 
              border: '1px solid #E2DBD2', 
              borderLeft: '4px solid var(--accent-burgundy)', 
              padding: '10px 16px', 
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                background: 'var(--accent-burgundy)',
                color: '#FFFFFF',
                borderRadius: '2px',
                fontSize: '0.68rem',
                fontWeight: '800'
              }}>
                §
              </span>
              <span style={{ 
                fontSize: '0.72rem', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                color: '#111827', 
                letterSpacing: '0.8px',
                fontFamily: 'var(--font-sans)'
              }}>
                2026 BENCHMARK INDEX:
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', flex: '1 1 auto' }}>
              {[
                { id: 'world-top-10-mlm-companies', label: 'World Top 10' },
                { id: 'india-top-10-mlm-companies', label: 'India Top 10' },
                { id: 'india-top-10-emerging-mlm-companies', label: 'Top 20 Emerging' },
                { id: 'india-top-10-new-mlm-startups', label: 'Top 20 Startups' },
                { id: 'india-top-20-new-direct-selling-companies', label: 'Top 20 Direct Selling' },
                { id: 'india-top-10-new-mlm-companies', label: 'Top 20 New MLM' },
                { id: 'emerging-indian-direct-selling-hgr-corporation', label: 'Enterprise Due Diligence' }
              ].map(pill => (
                <button
                  key={pill.id}
                  onClick={() => onSelectArticle(pill.id)}
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '600',
                    padding: '5px 12px',
                    background: '#FFFFFF',
                    color: '#262626',
                    border: '1px solid #D5CEBF',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    letterSpacing: '0.2px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#1E293B';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#1E293B';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#262626';
                    e.currentTarget.style.borderColor = '#D5CEBF';
                  }}
                >
                  <span>{pill.label}</span>
                </button>
              ))}
            </div>
          </div>

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
                  <span>Most Read Direct Selling Reports</span>
                </div>
                <div className="trending-list">
                  {trendingArticles.map((art, idx) => (
                    <ArticleCard
                      key={art.id}
                      article={art}
                      variant="trending"
                      rank={idx + 1}
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

      {/* 2. TOP 20 DIRECT SELLING & EMERGING ENTERPRISES BENCHMARK DIRECTORY */}
      <section className="category-section-block" style={{ background: '#FAF7F2', borderTop: '2px solid #C27D38', borderBottom: '1px solid var(--ink-border)' }}>
        <div className="container">
          <div className="section-title-strip" style={{ borderColor: '#C27D38', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: '#C27D38', letterSpacing: '0.8px', display: 'block' }}>
                NATIONAL DIRECT SELLING DIRECTORY • 2026 BENCHMARK
              </span>
              <h2 style={{ color: '#111111', margin: '4px 0 0' }}>
                India Top 20 Emerging &amp; New Direct Selling Companies (2026 Index)
              </h2>
              <p style={{ margin: '4px 0 0', fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>
                {currentTabConfig.subtitle} • Evaluated under Consumer Protection (Direct Selling) Rules, 2021
              </p>
            </div>
            <button
              className="view-all-link"
              onClick={() => onSelectArticle(currentTabConfig.articleId)}
              style={{ color: '#C27D38', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Read Full Top 20 Guide &amp; Due Diligence →</span>
            </button>
          </div>

          {/* Interactive Benchmark Controls: Category Tabs & Instant Search */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', margin: '18px 0 14px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {benchmarkTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveBenchmarkTab(tab.id);
                    setBenchmarkSearch('');
                  }}
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    border: activeBenchmarkTab === tab.id ? '2px solid var(--accent-burgundy)' : '1px solid #D1D5DB',
                    background: activeBenchmarkTab === tab.id ? 'var(--accent-burgundy)' : '#FFFFFF',
                    color: activeBenchmarkTab === tab.id ? '#FFFFFF' : '#374151',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', minWidth: '240px', maxWidth: '320px', flex: '1 1 auto' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
              <input
                type="text"
                placeholder="Filter 20 companies by name or focus..."
                value={benchmarkSearch}
                onChange={(e) => setBenchmarkSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '7px 10px 7px 30px',
                  fontSize: '0.82rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '2px',
                  background: '#FFFFFF',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Helper Cohort Indicator for Normal Readers */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', fontSize: '0.74rem', color: '#6B7280' }}>
            <span>
              💡 <strong>Directory Structure:</strong> Ranks 1–10 (Established Leaders) • Ranks 11–20 (Emerging Challengers &amp; Startups)
            </span>
            <span>Showing 20 of 20 verified enterprises</span>
          </div>

          {/* Top 20 Responsive Benchmark Table — Neutral, Genuine & Equal Display */}
          <div className="mlm-table-wrapper" style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', overflowX: 'auto', marginBottom: '16px', maxHeight: '580px', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
              <thead style={{ position: 'sticky', top: 0, zIndex: 10, background: '#F8FAFC' }}>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid var(--ink-border-dark)' }}>
                  <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', width: '28%' }}>Rank &amp; Company</th>
                  <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', width: '32%' }}>Primary Focus Area</th>
                  <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', width: '22%' }}>Market Classification</th>
                  <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', width: '18%', textAlign: 'right' }}>Editorial Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompanies.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>
                      No companies match "{benchmarkSearch}". Try searching for another term.
                    </td>
                  </tr>
                ) : (
                  filteredCompanies.map((comp) => {
                    const isHgr = comp.name?.toLowerCase().includes('hgr');
                    return (
                      <tr
                        key={comp.rank}
                        style={{
                          borderBottom: '1px solid #E5E7EB',
                          background: comp.rank % 2 === 0 ? '#F9FAFB' : '#FFFFFF',
                          transition: 'background 0.15s ease'
                        }}
                      >
                        <td style={{ padding: '11px 14px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              width: '26px',
                              height: '24px',
                              background: 'var(--accent-burgundy)',
                              color: '#FFFFFF',
                              textAlign: 'center',
                              lineHeight: '24px',
                              fontSize: '0.75rem',
                              fontWeight: '800',
                              marginRight: '8px',
                              borderRadius: '2px'
                            }}
                          >
                            #{comp.rank}
                          </span>
                          <span>
                            {comp.name}
                          </span>
                        </td>
                        <td style={{ padding: '11px 14px', color: 'var(--ink-secondary)', fontSize: '0.84rem' }}>
                          {comp.focusArea}
                        </td>
                        <td style={{ padding: '11px 14px' }}>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: '700',
                              textTransform: 'uppercase',
                              padding: '3px 8px',
                              background: '#F1F5F9',
                              color: '#475569',
                              borderRadius: '2px'
                            }}
                          >
                            {comp.country || 'India'}
                          </span>
                        </td>
                        <td style={{ padding: '11px 14px', textAlign: 'right' }}>
                          <button
                            onClick={() => {
                              if (isHgr) {
                                onSelectArticle('emerging-indian-direct-selling-hgr-corporation');
                              } else {
                                onSelectArticle(currentTabConfig.articleId);
                              }
                            }}
                            style={{
                              fontSize: '0.76rem',
                              fontWeight: '700',
                              color: 'var(--accent-burgundy)',
                              textTransform: 'uppercase',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px'
                            }}
                          >
                            <span>View Profile →</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Objective Industry Due Diligence & Regulatory Benchmark Banner */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderLeft: '4px solid #1E293B',
              padding: '16px 20px',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px'
            }}
          >
            <div style={{ flex: '1 1 540px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ShieldCheck size={16} color="#1E293B" />
                <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: '#1E293B', letterSpacing: '0.6px' }}>
                  2026 EDITORIAL ASSESSMENT FRAMEWORK • CONSUMER PROTECTION RULES 2021
                </span>
              </div>
              <h4 style={{ margin: '0 0 6px', fontSize: '0.98rem', color: '#0F172A', fontFamily: 'var(--font-serif)' }}>
                Objective Verification Standards for India’s Direct Selling Ecosystem
              </h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: '1.5' }}>
                Every enterprise in our 20-company directory is audited under uniform standards: authentic product utility, transparent retail pricing, mandatory grievance redressal, and full compliance with the Consumer Protection (Direct Selling) Rules, 2021. Established market leaders (Ranks 1–10) and emerging challenger ventures (Ranks 11–20) are evaluated on identical criteria to provide impartial intelligence for consumers and distributors.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onSelectArticle(currentTabConfig.articleId)}
                style={{
                  background: 'var(--accent-burgundy)',
                  color: '#FFFFFF',
                  padding: '8px 14px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              >
                Read Full 2026 Guide →
              </button>
              <button
                onClick={() => onNavigateCategory('Explained')}
                style={{
                  background: '#FFFFFF',
                  color: '#1E293B',
                  border: '1px solid #CBD5E1',
                  padding: '8px 14px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              >
                Compliance Standards →
              </button>
            </div>
          </div>

          {/* 3 Featured Guides — Elevated UI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginTop: '16px' }}>
            <div
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E2DBD2', 
                borderTop: '3px solid #C27D38', 
                padding: '20px', 
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => onSelectArticle('emerging-indian-direct-selling-hgr-corporation')}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: '#8C4A52', letterSpacing: '0.6px' }}>
                    INDUSTRY ANALYSIS • 2026
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    <span>8 min read</span>
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', margin: '4px 0 8px', lineHeight: '1.35', color: '#111111' }}>
                  An Emerging Indian Direct Selling Company: Understanding New-Age Models
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: '1.5' }}>
                  How changing consumer behaviour, digital communication, and community-driven commerce are reshaping modern direct selling.
                </p>
              </div>
              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F3F4F6' }}>
                <span style={{ fontSize: '0.78rem', color: '#8C4A52', fontWeight: '800', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>Read Deep Dive</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>

            <div
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E2DBD2', 
                borderTop: '3px solid #1E3A8A', 
                padding: '20px', 
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => onSelectArticle('fastest-growing-mlm-startup-hgr-corporation')}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: '#1E3A8A', letterSpacing: '0.6px' }}>
                    VENTURE RESEARCH • STARTUPS
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    <span>9 min read</span>
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', margin: '4px 0 8px', lineHeight: '1.35', color: '#111111' }}>
                  India’s Fastest-Growing MLM Startup: Beyond the Growth Label
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: '1.5' }}>
                  Evaluating real growth metrics: Customer retention, product utility, digital infrastructure, and sustainable long-term performance.
                </p>
              </div>
              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F3F4F6' }}>
                <span style={{ fontSize: '0.78rem', color: '#1E3A8A', fontWeight: '800', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>Read Report</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>

            <div
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E2DBD2', 
                borderTop: '3px solid #166534', 
                padding: '20px', 
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => onSelectArticle('india-top-10-emerging-mlm-companies')}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: '#166534', letterSpacing: '0.6px' }}>
                    REGULATORY AUDIT • 2021 RULES
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    <span>11 min read</span>
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', margin: '4px 0 8px', lineHeight: '1.35', color: '#111111' }}>
                  What Should You Check Before Joining Any MLM Company?
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: '1.5' }}>
                  6 crucial verification criteria: Product quality, business model clarity, customer demand, training, and 2021 regulatory compliance.
                </p>
              </div>
              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F3F4F6' }}>
                <span style={{ fontSize: '0.78rem', color: '#166534', fontWeight: '800', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>Read Checklist</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE "EXPLAINED" SECTION (EDITORIAL TRADEMARK) */}
      <section className="explained-section">
        <div className="container">
          <div className="explained-header-row">
            <div className="explained-title-wrap">
              <span className="explained-badge">MLM INSIGHT SIGNATURE</span>
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
              <h2 style={{ color: '#111111', margin: 0 }}>MLM Companies &amp; Rankings, Direct Selling &amp; Emerging Startups Guide</h2>
            </div>
            <button
              className="view-all-link"
              onClick={() => onNavigateCategory('MLM Companies & Rankings')}
              style={{ color: '#C27D38', fontWeight: '800' }}
            >
              <span>View All MLM Companies &amp; Rankings</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Fast Jumps to 7 SEO Ranking Articles */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2DBD2', padding: '12px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-burgundy, #7C1D24)', letterSpacing: '0.5px', marginRight: '4px' }}>
              2026 Rankings Index:
            </span>
            {[
              { id: "world-top-10-mlm-companies", label: "World Top 10" },
              { id: "india-top-10-mlm-companies", label: "India Top 10" },
              { id: "india-top-10-new-mlm-companies", label: "Top 10 New MLM" },
              { id: "india-top-10-emerging-mlm-companies", label: "Top 10 Emerging MLM" },
              { id: "india-top-10-new-mlm-startups", label: "Top 10 Startups" },
              { id: "india-top-10-fast-growing-mlm-companies", label: "Fast Growing" },
              { id: "india-top-20-new-direct-selling-companies", label: "New Direct Selling" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => onSelectArticle(item.id)}
                style={{
                  background: '#FAF7F2',
                  border: '1px solid #D5DFDC',
                  color: 'var(--ink-primary, #111111)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  cursor: 'pointer'
                }}
              >
                {item.label} →
              </button>
            ))}
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
