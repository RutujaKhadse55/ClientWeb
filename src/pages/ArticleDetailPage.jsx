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
  Send,
  ShieldCheck,
  Trophy
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
  const [openFaq, setOpenFaq] = useState(null);
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

              {/* SEO Keyword Variants Strip */}
              {article.keywordVariants && article.keywordVariants.length > 0 && (
                <div style={{ background: '#FAF7F2', border: '1px solid #E2DBD2', borderLeft: '3px solid var(--accent-burgundy)', padding: '10px 16px', margin: '14px 0 18px', fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
                  <strong style={{ color: 'var(--accent-burgundy)', textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                    Search Themes &amp; Also Searched As:
                  </strong>{' '}
                  {article.keywordVariants.join(' • ')}
                </div>
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

              {/* Companies List if available (e.g. Top 10 Direct Selling & MLM Benchmark Guides) */}
              {article.companiesList && article.companiesList.length > 0 && (
                <div style={{ margin: '32px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ borderBottom: '2px solid var(--ink-border-dark)', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0, color: 'var(--ink-primary)' }}>
                      {article.primaryKeyword ? `${article.primaryKeyword}: 2026 Editorial Rankings` : "10 Leading & Notable Direct Selling Enterprises in India"}
                    </h2>
                    <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>
                      Editorial Evaluation Index
                    </span>
                  </div>

                  {article.companiesList.map(comp => (
                    <div
                      key={comp.rank}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid var(--ink-border)',
                        padding: '24px',
                        position: 'relative',
                        borderLeft: '5px solid var(--accent-burgundy)'
                      }}
                      id={`company-${comp.rank}`}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <span style={{ background: 'var(--accent-burgundy)', color: '#FFFFFF', fontWeight: '900', fontSize: '0.9rem', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            #{comp.rank}
                          </span>
                          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: 0, color: 'var(--ink-primary)', fontWeight: '800' }}>
                            {comp.name}
                          </h3>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                          {comp.identity && (
                            <span style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', background: '#F1F5F9', border: '1px solid #CBD5E1', padding: '3px 8px', color: '#334155' }}>
                              {comp.identity}
                            </span>
                          )}
                          {comp.founded && (
                            <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                              Founded: {comp.founded}
                            </span>
                          )}
                        </div>
                      </div>

                      <p style={{ fontSize: '0.96rem', color: 'var(--ink-secondary)', lineHeight: '1.65', marginBottom: '12px' }}>
                        {comp.desc}
                      </p>

                      {comp.categories && (
                        <div style={{ marginBottom: '10px' }}>
                          <strong style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '4px' }}>
                            Primary Focus / Product Categories:
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
                        <div style={{ background: '#FAF7F2', padding: '12px 16px', borderLeft: '3px solid var(--accent-burgundy)', marginTop: '10px', marginBottom: '10px', fontSize: '0.88rem', color: 'var(--ink-primary)' }}>
                          <strong style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--accent-burgundy)', display: 'block', marginBottom: '3px', letterSpacing: '0.5px' }}>
                            Why {comp.name} Is Included:
                          </strong>
                          {comp.whyNotable}
                        </div>
                      )}

                      {comp.keyFacts && comp.keyFacts.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                          {comp.keyFacts.map((fact, idx) => (
                            <span key={idx} style={{ background: '#FAF7F2', border: '1px solid #E2DBD2', fontSize: '0.78rem', padding: '3px 10px', color: 'var(--ink-primary)', fontWeight: '600' }}>
                              ✓ {fact}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Methodology */}
              {article.methodology && (
                <div style={{ background: '#FAF7F2', border: '1px solid #E2DBD2', borderTop: '3px solid var(--accent-burgundy)', padding: '24px 28px', margin: '36px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <ShieldCheck size={20} color="var(--accent-burgundy)" />
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: 0, color: 'var(--ink-primary)' }}>
                      Research Methodology &amp; Evaluation Criteria
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.75', color: 'var(--ink-secondary)', margin: 0 }}>
                    {article.methodology}
                  </p>
                </div>
              )}

              {/* Frequently Asked Questions Accordion */}
              {article.faqs && article.faqs.length > 0 && (
                <div style={{ margin: '36px 0', borderTop: '2px solid var(--ink-border-dark)', paddingTop: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '18px', color: 'var(--ink-primary)' }}>
                    Frequently Asked Questions: {article.primaryKeyword || "Direct Selling"}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {article.faqs.map((faq, fIdx) => (
                      <div key={fIdx} style={{ border: '1px solid #E2DBD2', background: '#FFFFFF' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                          style={{ width: '100%', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', background: openFaq === fIdx ? '#FAF7F2' : '#FFFFFF', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: '700', color: 'var(--ink-primary)' }}
                        >
                          <span>{faq.question}</span>
                          <span style={{ fontSize: '1.2rem', color: 'var(--accent-burgundy)', fontWeight: '800' }}>
                            {openFaq === fIdx ? '−' : '+'}
                          </span>
                        </button>
                        {openFaq === fIdx && (
                          <div style={{ padding: '14px 18px', borderTop: '1px solid #E2DBD2', fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--ink-secondary)', background: '#FFFFFF' }}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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
                <div style={{ background: '#FAF7F2', border: '1px solid #E2DBD2', borderLeft: '4px solid var(--accent-burgundy)', padding: '16px 20px', margin: '32px 0' }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--accent-burgundy)', marginBottom: '6px' }}>
                    Editorial Notice &amp; Regulatory Disclaimer
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
              {/* Direct Selling & MLM Benchmark Index Widget */}
              <div style={{ background: '#FFFFFF', border: '1px solid var(--ink-border)', padding: '20px', marginBottom: '24px', borderTop: '3px solid var(--accent-burgundy)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Trophy size={16} color="var(--accent-burgundy)" />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', margin: 0, color: 'var(--ink-primary)', fontWeight: '800' }}>
                    Direct Selling &amp; MLM Index
                  </h3>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', marginBottom: '14px', lineHeight: '1.4' }}>
                  2026 Editorial Benchmarks &amp; Evaluated Rankings:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[
                    { id: "world-top-10-mlm-companies", title: "World Top 10 MLM Companies" },
                    { id: "india-top-10-mlm-companies", title: "India Top 10 MLM Companies" },
                    { id: "india-top-10-new-mlm-companies", title: "India Top 10 New MLM Companies" },
                    { id: "india-top-10-emerging-mlm-companies", title: "India Top 10 Emerging MLM Companies" },
                    { id: "india-top-10-new-mlm-startups", title: "India Top 10 New MLM Startups" },
                    { id: "india-top-10-fast-growing-mlm-companies", title: "India Top 10 Fast Growing MLM" },
                    { id: "india-top-10-new-direct-selling-companies", title: "India Top 10 New Direct Selling" },
                    { id: "emerging-indian-direct-selling-hgr-corporation", title: "Emerging Indian Direct Selling (HGR)" },
                    { id: "fastest-growing-mlm-startup-hgr-corporation", title: "Fastest-Growing MLM Startup (HGR)" }
                  ].map(item => {
                    const isCurrent = article.id === item.id || article.route === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onSelectArticle(item.id)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          background: isCurrent ? '#FAF7F2' : 'none',
                          border: 'none',
                          borderLeft: isCurrent ? '3px solid var(--accent-burgundy)' : '3px solid transparent',
                          padding: '7px 8px',
                          fontSize: '0.82rem',
                          fontWeight: isCurrent ? '800' : '600',
                          color: isCurrent ? 'var(--accent-burgundy)' : 'var(--ink-secondary)',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'background 0.15s'
                        }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '6px' }}>{item.title}</span>
                        <ArrowRight size={11} color={isCurrent ? 'var(--accent-burgundy)' : '#999'} />
                      </button>
                    );
                  })}
                </div>
              </div>

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
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
