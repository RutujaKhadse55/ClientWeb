import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { searchArticles } from '../data/newsArticles';

export default function SearchModal({ onClose, onSelectArticle }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Markets', 'Corporate', 'MLM Companies & Rankings', 'Economy', 'Startups', 'Banking', 'Policy', 'Explained'];
  const results = searchArticles(query, selectedCategory);

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-modal-header">
          <Search size={20} color="var(--accent-burgundy)" />
          <input 
            type="text" 
            className="search-input-field" 
            placeholder="Search news, companies, sectors, macro policies..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} style={{ color: 'var(--ink-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div style={{ padding: '10px 20px', background: '#FAFAFA', borderBottom: '1px solid var(--ink-border)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontSize: '0.72rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '3px 8px',
                background: selectedCategory === cat ? 'var(--ink-primary)' : '#FFFFFF',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--ink-secondary)',
                border: '1px solid var(--ink-border)'
              }}
            >
              {cat === 'all' ? 'All Channels' : cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="search-results-list">
          <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '8px' }}>
            Found {results.length} stories {query ? `for "${query}"` : ''}
          </div>

          {results.length === 0 ? (
            <div style={{ padding: '30px 0', textAlign: 'center', color: 'var(--ink-muted)' }}>
              <p>No matching business reports or articles found.</p>
            </div>
          ) : (
            results.map(art => (
              <div 
                key={art.id} 
                className="search-result-item"
                onClick={() => {
                  onClose();
                  onSelectArticle(art.id);
                }}
              >
                <div className="search-result-meta">
                  <span style={{ color: 'var(--accent-blue)', fontWeight: '700', textTransform: 'uppercase' }}>
                    {art.category} • {art.subcategory}
                  </span>
                  <span> • {art.publishDate}</span>
                </div>
                <h4>{art.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {art.subtitle || art.intro}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
