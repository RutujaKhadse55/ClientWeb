import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { getArticlesByCategory, newsArticles } from '../data/newsArticles';
import ArticleCard from '../components/ArticleCard';

export default function CategoryPage({ 
  category, 
  onNavigate, 
  onSelectArticle, 
  onSelectAuthor 
}) {
  const [selectedSubcat, setSelectedSubcat] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categoryDescriptions = {
    Markets: "Real-time coverage of Dalal Street equity indices, derivative regulations, foreign institutional flows, currency valuations, and primary market IPO listings.",
    Corporate: "In-depth investigative reports on India's largest conglomerates, executive strategy, industrial capacity additions, clean energy transitions, and boardroom governance.",
    Economy: "Macroeconomic indicators, GDP growth projections, fiscal policy, GST Council deliberations, and Reserve Bank of India monetary policy analysis.",
    Startups: "Venture capital deal flows, SaaS scaling, quick-commerce infrastructure, generative AI enterprise deployments, and founder governance across Indian startups.",
    Banking: "The commercial banking system, non-banking financial companies (NBFCs), credit expansion cycles, digital public infrastructure, and UPI payment innovations.",
    Policy: "Legislative reforms, SEBI consultative papers, Insolvency and Bankruptcy Code proceedings, trade agreements, and Union Ministry regulatory developments.",
    Opinion: "Authoritative structural analysis and column essays by leading economists, industry veterans, and specialized editorial bureau chiefs.",
    Explained: "The Indian Business Chronicle's signature explainer series—deconstructing the complex regulatory, technological, and economic events shaping India."
  };

  const rawArticles = useMemo(() => {
    return getArticlesByCategory(category);
  }, [category]);

  // Extract unique subcategories
  const subcategories = useMemo(() => {
    const subs = new Set();
    rawArticles.forEach(a => {
      if (a.subcategory) subs.add(a.subcategory);
    });
    return ['all', ...Array.from(subs)];
  }, [rawArticles]);

  // Filter & Sort
  const filteredArticles = useMemo(() => {
    let list = rawArticles;
    if (selectedSubcat !== 'all') {
      list = list.filter(a => a.subcategory === selectedSubcat);
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishDate) - new Date(a.publishDate);
      }
      if (sortBy === 'oldest') {
        return new Date(a.publishDate) - new Date(b.publishDate);
      }
      return 0;
    });
  }, [rawArticles, selectedSubcat, sortBy]);

  return (
    <div style={{ padding: '24px 0 60px', background: '#FFFFFF' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div className="article-breadcrumbs">
          <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Home</span>
          <span>/</span>
          <span className="curr">{category}</span>
        </div>

        {/* Category Header */}
        <header className="category-page-header">
          <h1 className="category-page-title">
            {category} Channel
          </h1>
          <p className="category-page-subline">
            {categoryDescriptions[category] || `Comprehensive reporting and investigative coverage on ${category}.`}
          </p>
        </header>

        {/* Subcategory Filter & Sort Bar */}
        <div className="category-filter-bar">
          <div className="subcat-filter-pills">
            <span style={{ fontSize: '0.74rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--ink-muted)', marginRight: '4px' }}>
              Sub-Beats:
            </span>
            {subcategories.map(sub => (
              <button
                key={sub}
                className={`subcat-pill ${selectedSubcat === sub ? 'active' : ''}`}
                onClick={() => setSelectedSubcat(sub)}
              >
                {sub === 'all' ? 'All Sub-Beats' : sub}
              </button>
            ))}
          </div>

          <div className="sort-select-wrap">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Latest Published</option>
              <option value="oldest">Historical Archive</option>
            </select>
          </div>
        </div>

        {/* Stories Grid */}
        {filteredArticles.length === 0 ? (
          <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--ink-muted)' }}>
            <p>No reports currently found in this subcategory.</p>
          </div>
        ) : (
          <div className="three-col-grid">
            {filteredArticles.map(art => (
              <ArticleCard 
                key={art.id} 
                article={art} 
                variant={category === 'Explained' ? 'explained' : category === 'Opinion' ? 'opinion' : 'standard'} 
                onSelectArticle={onSelectArticle} 
                onSelectAuthor={onSelectAuthor}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
