import React, { useState } from 'react';
import { X, Star, CheckCircle, AlertTriangle, Calendar, MapPin, Award } from 'lucide-react';

export default function CompanyDetailModal({ company, isOpen, onClose, onOpenHgrFullReview }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !company) return null;

  const isHgr = company.id === 'hgr-corporation';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container" 
        style={{ background: '#FFFDF9', border: '2px solid #D9DED5', color: '#252B28' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close profile">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '16px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#D97706', textTransform: 'uppercase' }}>
            Rank #{company.rank} in India
          </span>
          <h2 style={{ fontSize: '1.75rem', color: '#0D3328', margin: '4px 0 8px' }}>{company.name}</h2>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ background: '#EAEDE3', color: '#174A3A', fontSize: '0.78rem', fontWeight: '700', padding: '3px 10px', borderRadius: '12px' }}>
              {company.marketType}
            </span>
            <span style={{ background: '#EAEDE3', color: '#252B28', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '12px' }}>
              {company.focusArea}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', color: '#92400E', fontSize: '0.8rem', fontWeight: '700', padding: '3px 8px', borderRadius: '12px' }}>
              <Star size={13} fill="#D97706" color="#D97706" />
              {company.rating} / 5.0
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', background: '#EAEDE3', padding: '10px 14px', borderRadius: '8px', fontSize: '0.84rem', color: '#68706B', marginBottom: '18px' }}>
          <div>Founded: <strong style={{ color: '#0D3328' }}>{company.yearFounded}</strong></div>
          <div>HQ: <strong style={{ color: '#0D3328' }}>{company.hq}</strong></div>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', borderBottom: '1px solid #D9DED5', marginBottom: '18px', gap: '8px' }}>
          <button 
            style={{ padding: '8px 14px', fontSize: '0.9rem', fontWeight: '700', color: activeTab === 'overview' ? '#174A3A' : '#68706B', borderBottom: activeTab === 'overview' ? '2px solid #174A3A' : 'none' }}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            style={{ padding: '8px 14px', fontSize: '0.9rem', fontWeight: '700', color: activeTab === 'products' ? '#174A3A' : '#68706B', borderBottom: activeTab === 'products' ? '2px solid #174A3A' : 'none' }}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            style={{ padding: '8px 14px', fontSize: '0.9rem', fontWeight: '700', color: activeTab === 'pros-cons' ? '#174A3A' : '#68706B', borderBottom: activeTab === 'pros-cons' ? '2px solid #174A3A' : 'none' }}
            onClick={() => setActiveTab('pros-cons')}
          >
            Pros & Cons
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.6', color: '#252B28', marginBottom: '14px' }}>{company.summary}</p>
            <div style={{ background: '#EAEDE3', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
              <strong style={{ color: '#174A3A', display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>Why Notable:</strong>
              <p style={{ color: '#252B28', fontSize: '0.9rem', margin: 0 }}>{company.whyNotable}</p>
            </div>
            {isHgr && (
              <button 
                style={{ width: '100%', background: 'linear-gradient(135deg, #174A3A, #0D3328)', color: '#fff', fontWeight: '800', padding: '12px', borderRadius: '10px', marginTop: '10px' }}
                onClick={() => { onClose(); onOpenHgrFullReview(); }}
              >
                Read Dedicated HGR Brand Profile →
              </button>
            )}
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <h4 style={{ color: '#0D3328', marginBottom: '10px' }}>Key Categories:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              {company.productCategories.map((cat, idx) => (
                <div key={idx} style={{ background: '#EAEDE3', padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', color: '#0D3328', fontWeight: '600' }}>
                  ✓ {cat}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pros-cons' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={{ background: '#EAEDE3', padding: '14px', borderRadius: '8px' }}>
              <h5 style={{ color: '#174A3A', marginBottom: '8px' }}>Strengths:</h5>
              <ul style={{ fontSize: '0.85rem', color: '#252B28', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {company.pros.map((p, idx) => <li key={idx}>• {p}</li>)}
              </ul>
            </div>
            <div style={{ background: '#FEF3C7', padding: '14px', borderRadius: '8px' }}>
              <h5 style={{ color: '#92400E', marginBottom: '8px' }}>Considerations:</h5>
              <ul style={{ fontSize: '0.85rem', color: '#92400E', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {company.cons.map((c, idx) => <li key={idx}>• {c}</li>)}
              </ul>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', borderTop: '1px solid #D9DED5', paddingTop: '14px' }}>
          <button 
            style={{ background: '#174A3A', color: '#fff', fontWeight: '700', padding: '8px 18px', borderRadius: '8px' }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
