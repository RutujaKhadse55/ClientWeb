import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, HelpCircle, Trophy, BookOpen } from 'lucide-react';
import { directSellingFaqs } from '../data/faqs';

export default function RankingsFaqPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="page-wrapper faq-page">
      <header className="article-hero-header">
        <div className="container article-container">
          <button className="back-link-btn" onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 Rankings</span>
          </button>

          <div className="article-meta-tags">
            <span className="tag-pill tag-amber">❓ Frequently Asked Questions</span>
          </div>

          <h1 className="article-main-title">Top 10 MLM & Direct Selling FAQ</h1>
          <p className="article-lead-subtitle">
            Answers to common questions regarding company rankings, legitimacy, Indian regulations, and how to choose safely.
          </p>
        </div>
      </header>

      <div className="article-body-wrapper">
        <div className="container article-container">
          <div className="faq-accordion-wrap">
            {directSellingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="article-bottom-nav">
            <button 
              className="btn-next-article"
              onClick={() => onNavigate('rankings-home')}
            >
              <span>View Top 10 Indian MLM Rankings</span>
              <Trophy size={16} />
            </button>
            <button 
              className="btn-see-top10"
              onClick={() => onNavigate('edu-home')}
            >
              <span>Back to Education Portal →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
