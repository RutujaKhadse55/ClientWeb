import React from 'react';
import { X, MapPin, Mail, Globe, BookOpen } from 'lucide-react';
import { getAuthorById } from '../data/authors';
import { newsArticles } from '../data/newsArticles';

export default function AuthorModal({ authorId, onClose, onSelectArticle }) {
  if (!authorId) return null;
  const author = getAuthorById(authorId);
  const authorArticles = newsArticles.filter(a => a.authorId === author.id);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', borderBottom: '1px solid var(--ink-border)', paddingBottom: '20px', marginBottom: '20px' }}>
          <img 
            src={author.avatar} 
            alt={author.name} 
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          />
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-burgundy)', letterSpacing: '0.6px' }}>
              IBC EDITORIAL BUREAU
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: '2px 0 4px' }}>
              {author.name}
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', fontWeight: '600' }}>
              {author.role}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px', fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} />
                {author.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Globe size={12} />
                {author.twitter}
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '6px' }}>
            About the Journalist
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--ink-secondary)' }}>
            {author.bio}
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-burgundy)', borderBottom: '2px solid var(--accent-burgundy)', paddingBottom: '6px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={14} />
            Published Reports & Columns ({authorArticles.length})
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {authorArticles.map(art => (
              <div 
                key={art.id}
                onClick={() => {
                  onClose();
                  onSelectArticle(art.id);
                }}
                style={{ padding: '10px 0', borderBottom: '1px solid var(--ink-border)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.68rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-blue)' }}>
                  {art.category} • {art.publishDate}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', margin: '2px 0 4px', color: 'var(--ink-primary)' }}>
                  {art.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {art.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
