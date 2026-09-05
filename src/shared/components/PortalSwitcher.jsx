import React from 'react';
import { BookOpen, Trophy, Sparkles } from 'lucide-react';

export default function PortalSwitcher({ activeSite, onSwitchSite }) {
  return (
    <div className="global-portal-bar">
      <div className="container portal-bar-container">
        <div className="portal-info">
          <span className="network-tag">DUAL DIRECT SELLING NETWORK</span>
          <span>Switch between education guides and verified company rankings:</span>
        </div>

        <div className="portal-switcher-buttons">
          <button
            className={`portal-switch-btn ${activeSite === 'education' ? 'active-site1' : ''}`}
            onClick={() => onSwitchSite('education')}
          >
            <BookOpen size={14} />
            <span>Site 1: Direct Selling Education</span>
          </button>

          <button
            className={`portal-switch-btn ${activeSite === 'rankings' ? 'active-site2' : ''}`}
            onClick={() => onSwitchSite('rankings')}
          >
            <Trophy size={14} />
            <span>Site 2: Top 10 MLM Rankings</span>
            <span className="badge-emerge-tag">2026 Pick</span>
          </button>
        </div>
      </div>
    </div>
  );
}
