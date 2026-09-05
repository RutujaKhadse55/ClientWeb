import React, { useState } from 'react';
import { 
  Clock, 
  Share2, 
  Bookmark, 
  Printer, 
  ThumbsUp, 
  MessageSquare, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Globe, 
  MessageCircle, 
  Send 
} from 'lucide-react';
import { getArticleById, getRelatedArticles, getTrendingArticles } from '../data/newsArticles';
import { getAuthorById } from '../data/authors';
import ArticleCard from '../components/ArticleCard';

export default function ArticleDetailPage({ 
  articleId, 
  onNavigate, 
  onNavigateCategory, 
  onSelectArticle, 
  onSelectAuthor 
}) {
  const article = getArticleById(articleId);
  const author = getAuthorById(article.authorId);
  const relatedArticles = getRelatedArticles(article.id);
  const trendingArticles = getTrendingArticles();

  const [fontSizeOffset, setFontSizeOffset] = useState(0); // -1, 0, 1, 2
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      author: "Rajesh Varma",
      role: "Managing Director, Apex Capital",
      date: "September 5, 2026 at 11:20 AM",
      text: "A masterclass in structural reporting. The breakdown on ultra-pure water pipelines and mature node economics makes it clear why mature fabs will dominate Indian industrial consumption."
    },
    {
      author: "Nandini Swaminathan",
      role: "VP Engineering, Semiconductor R&D",
      date: "September 5, 2026 at 09:45 AM",
      text: "The talent pipeline from Taiwan's PSMC is indeed the secret sauce. Training hundreds of cleanroom specialists before tool calibration ensures rapid yield stabilization."
    }
  ]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      {
        author: "Verified Reader",
        role: "Financial Markets Analyst",
        date: "Just now",
        text: newComment.trim()
      },
      ...comments
    ]);
    setNewComment('');
  };

  const getBodyFontSize = () => {
    switch (fontSizeOffset) {
      case -1: return '0.98rem';
      case 1: return '1.18rem';
      case 2: return '1.28rem';
      default: return '1.08rem';
    }
  };

  return (
    <article className="article-page-wrapper">
      <div className="container">
        {/* Breadcrumb Bar */}
        <div className="article-breadcrumbs">
          <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Home</span>
          <span>/</span>
          <span style={{ cursor: 'pointer' }} onClick={() => onNavigateCategory(article.category)}>
            {article.category}
          </span>
          <span>/</span>
          <span className="curr">{article.subcategory || "Report"}</span>
        </div>

        <div className="article-layout-grid">
          {/* Main Editorial Story Column */}
          <div>
            <header className="article-header">
              <span className="article-category-tag">
                {article.kicker || `${article.category} • ${article.subcategory}`}
              </span>

              <h1 className="article-headline serif-headline">
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="article-subheadline">
                  {article.subtitle}
                </p>
              )}

              {/* Author & Timestamp Bar */}
              <div className="article-author-strip">
                <div className="author-info-block">
                  <img 
                    src={author.avatar} 
                    alt={author.name} 
                    className="author-avatar-img"
                    onClick={() => onSelectAuthor(author.id)}
                  />
                  <div className="author-details-text">
                    <span 
                      className="author-name-link"
                      onClick={() => onSelectAuthor(author.id)}
                    >
                      {author.name}
                    </span>
                    <span className="author-role-text">{author.role} • {author.location}</span>
                  </div>
                </div>

                <div className="article-timestamps">
                  <span>Published: {article.publishDate}</span>
                  {article.updatedDate && (
                    <span style={{ color: 'var(--ink-secondary)', fontWeight: '600' }}>
                      Updated: {article.updatedDate}
                    </span>
                  )}
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Reading Tools & Share Bar */}
              <div className="article-toolbar">
                <div className="toolbar-social-btns">
                  <button 
                    className="tool-icon-btn" 
                    onClick={handleShare}
                    title="Copy Link"
                  >
                    {copied ? <Check size={14} color="var(--accent-green)" /> : <Share2 size={14} />}
                  </button>
                  <button 
                    className="tool-icon-btn"
                    onClick={() => setBookmarked(!bookmarked)}
                    title="Bookmark Story"
                  >
                    <Bookmark size={14} fill={bookmarked ? "var(--accent-burgundy)" : "none"} />
                  </button>
                  <button 
                    className="tool-icon-btn" 
                    onClick={() => window.print()}
                    title="Print Story"
                  >
                    <Printer size={14} />
                  </button>
                  {copied && (
                    <span style={{ fontSize: '0.74rem', color: 'var(--accent-green)', fontWeight: '700' }}>
                      Link Copied to Clipboard!
                    </span>
                  )}
                </div>

                <div className="toolbar-font-control">
                  <span>Text Size:</span>
                  <button 
                    className="font-size-btn" 
                    onClick={() => setFontSizeOffset(prev => Math.max(-1, prev - 1))}
                    disabled={fontSizeOffset === -1}
                  >
                    A-
                  </button>
                  <button 
                    className="font-size-btn" 
                    onClick={() => setFontSizeOffset(0)}
                  >
                    Reset
                  </button>
                  <button 
                    className="font-size-btn" 
                    onClick={() => setFontSizeOffset(prev => Math.min(2, prev + 1))}
                    disabled={fontSizeOffset === 2}
                  >
                    A+
                  </button>
                </div>
              </div>
            </header>

            {/* Featured Media */}
            {article.heroImage && (
              <div className="article-hero-media">
                <img src={article.heroImage} alt={article.title} />
                {article.imageCaption && (
                  <p className="media-caption">{article.imageCaption}</p>
                )}
              </div>
            )}

            {/* Key Takeaways Callout */}
            {article.keyHighlights && article.keyHighlights.length > 0 && (
              <div className="article-takeaways-card">
                <h3>Executive Summary & Key Takeaways</h3>
                <ul>
                  {article.keyHighlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rich Story Paragraphs */}
            <div className="article-rich-content" style={{ fontSize: getBodyFontSize() }}>
              <p style={{ fontWeight: '500', color: 'var(--ink-primary)' }}>
                {article.intro}
              </p>

              {/* Companies List if available (e.g. Top 10 Direct Selling Guide) */}
              {article.companiesList && article.companiesList.length > 0 && (
                <div style={{ margin: '32px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', borderBottom: '2px solid var(--ink-border-dark)', paddingBottom: '8px' }}>
                    10 Leading & Notable Direct Selling Enterprises in India
                  </h2>
                  {article.companiesList.map(comp => (
                    <div 
                      key={comp.rank} 
                      style={{ 
                        background: comp.rank === 10 ? '#FFFDF7' : '#FFFFFF', 
                        border: comp.rank === 10 ? '2px solid #C27D38' : '1px solid var(--ink-border)', 
                        padding: '20px', 
                        position: 'relative' 
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ background: comp.rank === 10 ? '#C27D38' : 'var(--accent-burgundy)', color: '#FFFFFF', fontWeight: '800', fontSize: '0.85rem', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            #{comp.rank}
                          </span>
                          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0, color: 'var(--ink-primary)' }}>
                            {comp.name}
                          </h3>
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', background: '#F1F5F9', border: '1px solid #CBD5E1', padding: '3px 8px', color: '#334155' }}>
                          {comp.identity}
                        </span>
                      </div>

                      <p style={{ fontSize: '0.94rem', color: 'var(--ink-secondary)', marginBottom: '12px' }}>
                        {comp.desc}
                      </p>

                      {comp.categories && (
                        <div style={{ marginBottom: '10px' }}>
                          <strong style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '4px' }}>
                            Key Product Categories:
                          </strong>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {comp.categories.map((cat, cIdx) => (
                              <span key={cIdx} style={{ fontSize: '0.74rem', background: '#FAF7F2', border: '1px solid #E2DBD2', padding: '2px 8px', color: 'var(--ink-primary)', fontWeight: '600' }}>
                                • {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {comp.whyNotable && (
                        <div style={{ background: '#F8FAFC', padding: '10px 14px', borderLeft: '3px solid var(--accent-blue)', marginTop: '10px', fontSize: '0.86rem', color: '#1E293B' }}>
                          <strong>Why Notable:</strong> {comp.whyNotable}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Comparison Table if available */}
              {article.comparisonTable && article.comparisonTable.length > 0 && (
                <div style={{ margin: '36px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '12px' }}>
                    Comparing the 10 Companies (Market Segment & Operating Focus)
                  </h3>
                  <div style={{ overflowX: 'auto', border: '1px solid var(--ink-border)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '2px solid var(--ink-border-dark)' }}>
                          <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.76rem' }}>Company</th>
                          <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.76rem' }}>Primary Focus Area</th>
                          <th style={{ padding: '12px 14px', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.76rem' }}>Market Identity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {article.comparisonTable.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid var(--ink-border)', background: rIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                            <td style={{ padding: '10px 14px', fontWeight: '700', color: 'var(--ink-primary)' }}>{row.company}</td>
                            <td style={{ padding: '10px 14px', color: 'var(--ink-secondary)' }}>{row.focus}</td>
                            <td style={{ padding: '10px 14px' }}>
                              <span style={{ fontSize: '0.74rem', fontWeight: '700', textTransform: 'uppercase', padding: '2px 6px', background: row.identity.includes('Emerging') ? '#FEF3C7' : '#F1F5F9', color: row.identity.includes('Emerging') ? '#92400E' : '#334155' }}>
                                {row.identity}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {article.sections && article.sections.map((sec, idx) => (
                <section key={idx}>
                  <h2>{sec.heading}</h2>
                  {sec.content.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </section>
              ))}

              {/* Pullquote */}
              {article.pullQuote && (
                <blockquote className="article-pullquote">
                  "{article.pullQuote}"
                </blockquote>
              )}

              {/* Stat Callout */}
              {article.statCallout && (
                <div className="article-stat-callout">
                  <div className="stat-callout-number">{article.statCallout.number}</div>
                  <div className="stat-callout-label">{article.statCallout.label}</div>
                </div>
              )}

              {/* Editorial Disclaimer Callout */}
              {article.editorialDisclaimer && (
                <div style={{ background: '#FAF7F2', border: '1px solid #E2DBD2', borderLeft: '4px solid #C27D38', padding: '16px 20px', margin: '32px 0' }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#C27D38', marginBottom: '6px' }}>
                    Editorial Notice & Regulatory Disclaimer
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: 'var(--ink-muted)', lineHeight: '1.5', margin: 0 }}>
                    {article.editorialDisclaimer}
                  </p>
                </div>
              )}
            </div>

            {/* Tags Strip */}
            {article.tags && article.tags.length > 0 && (
              <div className="article-tags-wrap">
                <span style={{ fontSize: '0.74rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                  Topics:
                </span>
                {article.tags.map((t, i) => (
                  <span 
                    key={i} 
                    className="article-tag-item"
                    onClick={() => onNavigateCategory(t)}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Box */}
            <div className="author-bio-card">
              <img 
                src={author.avatar} 
                alt={author.name}
                onClick={() => onSelectAuthor(author.id)}
                style={{ cursor: 'pointer' }} 
              />
              <div className="author-bio-content">
                <h4 
                  onClick={() => onSelectAuthor(author.id)}
                  style={{ cursor: 'pointer' }}
                >
                  Written by {author.name}
                </h4>
                <span>{author.role} • Bureau: {author.location}</span>
                <p>{author.bio}</p>
              </div>
            </div>

            {/* Reader Discussion / Comments Section */}
            <div className="comments-section">
              <div className="comments-header">
                <span>Reader Discussion & Analysis ({comments.length})</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Moderated for Civil Discourse</span>
              </div>

              <form className="comment-input-box" onSubmit={handlePostComment}>
                <textarea 
                  placeholder="Share your perspective or domain insights on this report..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit" className="comment-submit-btn">
                  Post Contribution
                </button>
              </form>

              <div className="comments-stream">
                {comments.map((cmt, idx) => (
                  <div key={idx} className="comment-item">
                    <div className="comment-meta">
                      <strong>{cmt.author}</strong>
                      <span style={{ color: 'var(--ink-muted)' }}>({cmt.role})</span>
                      <span>•</span>
                      <span>{cmt.date}</span>
                    </div>
                    <p className="comment-text">{cmt.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Related Stories & Most Read */}
          <aside className="article-sidebar">
            <div className="sidebar-sticky-wrap">
              {/* Related In Depth Stories */}
              <div>
                <h3 className="col-header" style={{ marginBottom: '14px' }}>
                  Related Business Intelligence
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {relatedArticles.map(art => (
                    <ArticleCard 
                      key={art.id} 
                      article={art} 
                      variant="compact" 
                      onSelectArticle={onSelectArticle} 
                    />
                  ))}
                </div>
              </div>

              {/* Newsletter Box */}
              <div className="sidebar-newsletter-box">
                <h3>The Morning Bell</h3>
                <p>Never miss a critical market development or boardroom shakeup.</p>
                <input type="email" placeholder="Your business email address" />
                <button>Get Free Briefing</button>
              </div>

              {/* Most Read Ranking Strip */}
              <div>
                <h3 className="col-header">Trending in Markets</h3>
                <div className="trending-list">
                  {trendingArticles.slice(0, 4).map(art => (
                    <ArticleCard 
                      key={art.id} 
                      article={art} 
                      variant="trending" 
                      onSelectArticle={onSelectArticle} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
