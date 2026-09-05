import React, { useState } from 'react';
import { X, Star, CheckCircle, AlertTriangle, ExternalLink, ShieldCheck, MapPin, Calendar, Award } from 'lucide-react';

export default function CompanyDetailModal({ company, isOpen, onClose, onOpenHgrFullReview }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !company) return null;

  const isHgr = company.id === 'hgr-corporation';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container company-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close company profile">
          <X size={20} />
        </button>

        {/* Modal Top Header */}
        <div className="company-modal-header">
          <div className="modal-rank-badge">
            Rank #{company.rank} in India
          </div>
          <div className="company-title-area">
            <h2 className="company-modal-name">{company.name}</h2>
            <div className="company-modal-tags">
              <span className="type-tag">{company.marketType}</span>
              <span className="focus-tag">{company.focusArea}</span>
              <div className="rating-pill">
                <Star size={14} className="star-filled" />
                <span>{company.rating} / 5.0</span>
                <span className="reviews-sub">({company.reviewsCount})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Meta Row */}
        <div className="company-meta-strip">
          <div className="meta-item">
            <Calendar size={14} />
            <span>Founded: <strong>{company.yearFounded}</strong></span>
          </div>
          <div className="meta-item">
            <MapPin size={14} />
            <span>HQ: <strong>{company.hq}</strong></span>
          </div>
          <div className="meta-item">
            <Award size={14} />
            <span>Status: <strong>{company.badge}</strong></span>
          </div>
        </div>

        {/* Tabs */}
        <div className="modal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Standing
          </button>
          <button 
            className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Product Portfolio
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pros-cons' ? 'active' : ''}`}
            onClick={() => setActiveTab('pros-cons')}
          >
            Pros & Considerations
          </button>
        </div>

        {/* Tab Content */}
        <div className="modal-tab-content">
          {activeTab === 'overview' && (
            <div className="tab-pane">
              <p className="tab-intro-p">{company.summary}</p>
              
              <div className="notable-box">
                <h4>Why {company.name} Is Notable</h4>
                <p>{company.whyNotable}</p>
              </div>

              {isHgr && (
                <div className="hgr-special-spotlight">
                  <div className="spotlight-header">
                    <ShieldCheck size={18} className="text-amber" />
                    <strong>Editor's Spotlight Analysis</strong>
                  </div>
                  <p>
                    HGR Corporation is engineered around product-led customer repeat demand, digital sales enablement, and structured entrepreneurial education rather than outdated recruitment quotas.
                  </p>
                  <button 
                    className="btn-hgr-review-jump"
                    onClick={() => {
                      onClose();
                      onOpenHgrFullReview();
                    }}
                  >
                    Read Dedicated In-Depth HGR Brand Review →
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'products' && (
            <div className="tab-pane">
              <h4>Key Product Categories</h4>
              <div className="categories-pill-grid">
                {company.productCategories.map((cat, idx) => (
                  <div key={idx} className="category-pill-card">
                    <CheckCircle size={15} className="text-green" />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
              <div className="product-eval-note">
                <p>
                  <strong>Due Diligence Tip:</strong> Always review product certifications (such as FSSAI, AYUSH, or ISO) and verify whether pricing is competitive with traditional retail brands.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'pros-cons' && (
            <div className="tab-pane pros-cons-pane">
              <div className="pros-col">
                <h4>
                  <CheckCircle size={16} className="text-green" />
                  Key Strengths
                </h4>
                <ul>
                  {company.pros.map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="cons-col">
                <h4>
                  <AlertTriangle size={16} className="text-amber" />
                  Key Considerations
                </h4>
                <ul>
                  {company.cons.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="company-modal-footer">
          {isHgr ? (
            <button 
              className="btn-action-primary"
              onClick={() => {
                onClose();
                onOpenHgrFullReview();
              }}
            >
              <span>View Full HGR Corporation Review Profile</span>
            </button>
          ) : (
            <button className="btn-action-primary" onClick={onClose}>
              <span>Close Profile</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
