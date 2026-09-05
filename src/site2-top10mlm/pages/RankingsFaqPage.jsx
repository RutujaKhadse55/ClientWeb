import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Trophy, BookOpen } from 'lucide-react';
import { directSellingFaqs } from '../../shared/data/index.js';

export default function RankingsFaqPage({ onNavigate, onSwitchToEducation }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="theme-site2">
      <div className="container" style={{ maxWidth: '880px', padding: '40px 24px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <button className="s2-btn-quick-review" style={{ marginBottom: '20px' }} onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 Rankings</span>
          </button>

          <span className="s2-badge">❓ FAQ & Common Doubts</span>
          <h1 style={{ fontSize: '2.6rem', color: '#0D3328', margin: '12px 0' }}>Top 10 MLM & Direct Selling FAQ</h1>
          <p style={{ fontSize: '1.15rem', color: '#68706B' }}>
            Answers to common questions regarding company rankings, legitimacy, Indian regulations, and due diligence checks.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          {directSellingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  background: '#FFFDF9', 
                  border: '1px solid #D9DED5', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(23,74,58,0.03)'
                }}
              >
                <button 
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '20px 24px', 
                    textAlign: 'left',
                    color: '#0D3328',
                    fontWeight: '700',
                    fontSize: '1.05rem'
                  }} 
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#174A3A' }} />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: '#68706B', fontSize: '0.96rem', lineHeight: '1.65', borderTop: '1px solid #EAEDE3', paddingTop: '14px' }}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #D9DED5', paddingTop: '24px' }}>
          <button className="s2-btn-hgr-full" onClick={() => onNavigate('rankings-home')}>
            <Trophy size={16} />
            <span>Back to Top 10 MLM Rankings</span>
          </button>

          <button className="s2-cta-jump" onClick={onSwitchToEducation}>
            <BookOpen size={16} />
            <span>Open Education Guide →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
