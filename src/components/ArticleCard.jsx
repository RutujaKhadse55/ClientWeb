import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { getAuthorById } from '../data/authors';

export default function ArticleCard({ 
  article, 
  variant = "standard", 
  onSelectArticle, 
  onSelectAuthor 
}) {
  if (!article) return null;
  const author = getAuthorById(article.authorId);

  // Variant: Numbered Trending Item
  if (variant === "trending") {
    return (
      <div 
        className="trending-item" 
        onClick={() => onSelectArticle(article.id)}
      >
        <span className="trending-rank">#{article.trendingRank || "•"}</span>
        <div className="trending-content">
          <h4>{article.title}</h4>
          <div className="trending-meta">
            <span>{article.category}</span> • <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    );
  }

  // Variant: Horizontal Compact Row
  if (variant === "compact") {
    return (
      <div 
        className="horizontal-story-row"
        onClick={() => onSelectArticle(article.id)}
      >
        <div>
          <span className="card-kicker">{article.kicker || article.category}</span>
          <h4>{article.title}</h4>
          <div className="card-meta-line">
            <span>{author.name}</span> • <span>{article.publishDate}</span>
          </div>
        </div>
        {article.heroImage && (
          <img src={article.heroImage} alt={article.title} loading="lazy" />
        )}
      </div>
    );
  }

  // Variant: Signature "Explained" Card
  if (variant === "explained") {
    return (
      <div 
        className="explained-card"
        onClick={() => onSelectArticle(article.id)}
      >
        {article.heroImage && (
          <img 
            className="explained-card-img" 
            src={article.heroImage} 
            alt={article.title} 
            loading="lazy" 
          />
        )}
        <div className="explained-card-body">
          <span className="explained-card-kicker">EXPLAINED • {article.subcategory || article.category}</span>
          <h3>{article.title}</h3>
          <p>{article.subtitle || article.intro}</p>
          <div className="explained-card-footer">
            <span>By {author.name}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    );
  }

  // Variant: Opinion Columnist Card
  if (variant === "opinion") {
    return (
      <div 
        className="opinion-spotlight-card"
        onClick={() => onSelectArticle(article.id)}
      >
        <div className="opinion-author-row">
          <img 
            className="opinion-avatar" 
            src={author.avatar} 
            alt={author.name} 
            onClick={(e) => {
              e.stopPropagation();
              onSelectAuthor && onSelectAuthor(author.id);
            }}
          />
          <div className="opinion-author-info">
            <h4>{author.name}</h4>
            <span>{author.role}</span>
          </div>
        </div>
        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', margin: '4px 0' }}>
          {article.title}
        </h4>
        <p className="opinion-quote">
          "{article.pullQuote || article.subtitle}"
        </p>
        <div className="card-meta-line" style={{ marginTop: '4px' }}>
          <span>{article.publishDate}</span> • <span>{article.readTime}</span>
        </div>
      </div>
    );
  }

  // Variant: Standard News Card (Default)
  return (
    <div 
      className="news-article-card"
      onClick={() => onSelectArticle(article.id)}
    >
      {article.heroImage && (
        <div className="card-thumb-wrap">
          <img src={article.heroImage} alt={article.title} loading="lazy" />
        </div>
      )}
      <span className="card-kicker">{article.kicker || article.category}</span>
      <h3>{article.title}</h3>
      <p className="card-summary">{article.subtitle || article.intro}</p>
      <div className="card-meta-line">
        <strong 
          onClick={(e) => {
            e.stopPropagation();
            onSelectAuthor && onSelectAuthor(author.id);
          }}
          style={{ cursor: 'pointer' }}
        >
          {author.name}
        </strong>
        <span>•</span>
        <span>{article.publishDate}</span>
      </div>
    </div>
  );
}
