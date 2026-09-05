import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckSquare, Trophy, Menu, X } from 'lucide-react';

export default function EduNavbar({ currentRoute, onNavigate, onOpenQuiz, onOpenChecklist, onSwitchToRankings }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (route) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <nav className="s1-navbar">
      <div className="container s1-nav-inner">
        {/* Brand */}
        <div className="s1-brand" onClick={() => handleNav('edu-home')}>
          <div className="s1-brand-icon">
            <BookOpen size={22} />
          </div>
          <div className="s1-brand-text">
            <h3>DirectSelling<span>Guide</span>.in</h3>
            <p>Independent Educational Resource</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="s1-nav-links desktop-nav">
          <button 
            className={`s1-nav-btn ${currentRoute === 'edu-home' ? 'active' : ''}`}
            onClick={() => handleNav('edu-home')}
          >
            Start Here
          </button>
          <button 
            className={`s1-nav-btn ${currentRoute === 'benefits-of-direct-selling' ? 'active' : ''}`}
            onClick={() => handleNav('benefits-of-direct-selling')}
          >
            Benefits
          </button>
          <button 
            className={`s1-nav-btn ${currentRoute === 'how-to-choose-mlm-company' ? 'active' : ''}`}
            onClick={() => handleNav('how-to-choose-mlm-company')}
          >
            How to Choose
          </button>
          <button 
            className={`s1-nav-btn ${currentRoute === 'mlm-vs-job-vs-business' ? 'active' : ''}`}
            onClick={() => handleNav('mlm-vs-job-vs-business')}
          >
            MLM vs Job
          </button>
          <button 
            className="s1-nav-btn s1-nav-checklist"
            onClick={onOpenChecklist}
          >
            <CheckSquare size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            Free Checklist
          </button>
          <button 
            className={`s1-nav-btn ${currentRoute === 'about-education' ? 'active' : ''}`}
            onClick={() => handleNav('about-education')}
          >
            Is It Sponsored?
          </button>
        </div>

        {/* Action Button to Site 2 */}
        <div className="s1-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            className="s1-btn-quiz"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            onClick={onOpenQuiz}
          >
            <Sparkles size={14} />
            <span>Fit Quiz</span>
          </button>

          <button 
            className="s1-cta-jump"
            onClick={onSwitchToRankings}
          >
            <Trophy size={14} />
            <span>See Top 10 MLM →</span>
          </button>

          <button 
            className="mobile-toggle-btn" 
            style={{ display: 'none', color: '#5A1825', padding: '6px' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
