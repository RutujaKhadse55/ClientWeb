import React from 'react';
import { BookOpen, Trophy, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function SiteSwitcherBar({ activeSite, onSwitchSite }) {
  return (
    <div className="site-switcher-bar">
      <div className="container switcher-container">
        <div className="switcher-left">
          <span className="network-badge">
            <Sparkles size={13} className="sparkle-icon" /> Dual Portal Network
          </span>
          <span className="network-tagline">
            Switch between educational guidance and verified Indian MLM rankings:
          </span>
        </div>

        <div className="switcher-tabs">
          <button
            className={`switcher-tab ${activeSite === 'education' ? 'active' : ''}`}
            onClick={() => onSwitchSite('education')}
          >
            <BookOpen size={15} />
            <span>Site 1: Direct Selling Education</span>
            {activeSite === 'education' && <span className="active-dot"></span>}
          </button>

          <button
            className={`switcher-tab ${activeSite === 'rankings' ? 'active' : ''}`}
            onClick={() => onSwitchSite('rankings')}
          >
            <Trophy size={15} />
            <span>Site 2: Top 10 MLM Rankings (2026)</span>
            <span className="badge-pill">Editor's Pick</span>
            {activeSite === 'rankings' && <span className="active-dot"></span>}
          </button>
        </div>
      </div>
    </div>
  );
}
