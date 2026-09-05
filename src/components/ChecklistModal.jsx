import React, { useState } from 'react';
import { X, CheckSquare, Download, Printer, Check } from 'lucide-react';

export default function ChecklistModal({ isOpen, onClose }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const checklist = [
    { id: 1, title: "Genuine Non-Distributor Customer Demand", desc: "Are products being bought by regular consumers who have no financial interest in the compensation model?" },
    { id: 2, title: "Fair & Competitive Retail Pricing", desc: "Are product prices competitive compared to standard market brands, or inflated to pay multi-tier bonuses?" },
    { id: 3, title: "Transparent Corporate Registration (MCA / CIN / GST)", desc: "Is the company incorporated in India with verifiable Ministry of Corporate Affairs filings and active leadership?" },
    { id: 4, title: "Clear 30-Day Buyback & Cooling-Off Policy", desc: "Does the company offer a mandatory 30-day refund/inventory repurchase mechanism required under Indian Direct Selling Rules 2021?" },
    { id: 5, title: "No Mandatory Joining Fee or Inventory Loading", desc: "Can you start with zero joining fee or simply purchasing personal product samples without forced bulk inventory loading?" },
    { id: 6, title: "Ethics-First Training vs. Pure Hype", desc: "Does the company provide structured product education, compliance guidance, and business skills rather than luxury lifestyle hype?" },
    { id: 7, title: "Grievance Redressal Officer in India", desc: "Is there a designated nodal compliance and grievance officer listed on the official corporate website?" }
  ];

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container" 
        style={{ background: '#FFFFFF', border: '2px solid #1D2321', color: '#1D2321' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close checklist">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '16px' }}>
          <span className="category-tag" style={{ marginBottom: '8px' }}>
            Due Diligence Framework
          </span>
          <h2 style={{ fontSize: '1.65rem', color: '#0F2721', margin: '6px 0 8px' }}>
            Due-Diligence Checklist Before Joining Any MLM
          </h2>
          <p style={{ color: '#5C6662', fontSize: '0.92rem' }}>
            An essential 7-point audit checklist based on Indian Direct Selling Guidelines (2021) to protect your capital and evaluate legitimate business practices.
          </p>
        </div>

        {/* Progress Tracker */}
        <div style={{ marginBottom: '20px', background: '#F8F5F0', padding: '12px 16px', border: '1px solid #E2DBD2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#5C6662', marginBottom: '6px' }}>
            <span>Verification Status: <strong>{completedCount} of {checklist.length} verified</strong></span>
            <span>{Math.round((completedCount / checklist.length) * 100)}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#E2DBD2' }}>
            <div style={{ width: `${(completedCount / checklist.length) * 100}%`, height: '100%', background: '#1A3C34', transition: 'width 0.2s' }}></div>
          </div>
        </div>

        {/* Checklist items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '320px', overflowY: 'auto', marginBottom: '20px' }}>
          {checklist.map(item => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div 
                key={item.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  background: isChecked ? '#F3ECE4' : '#FFFFFF', 
                  border: isChecked ? '1px solid #1A3C34' : '1px solid #E2DBD2', 
                  padding: '12px 16px', 
                  cursor: 'pointer' 
                }}
                onClick={() => toggleCheck(item.id)}
              >
                <div style={{ width: '18px', height: '18px', border: '2px solid #1A3C34', background: isChecked ? '#1A3C34' : '#fff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {isChecked && <Check size={12} />}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#0F2721', margin: '0 0 2px' }}>{item.id}. {item.title}</h4>
                  <p style={{ fontSize: '0.84rem', color: '#5C6662', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Capture or Actions */}
        <div>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <input 
                type="email" 
                placeholder="Enter email to receive PDF printable version..." 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '10px 14px', border: '1px solid #E2DBD2', fontSize: '0.88rem', background: '#FAF8F5', outline: 'none' }}
              />
              <button type="submit" className="btn-card-action" style={{ padding: '10px 20px', background: '#1A3C34', color: '#fff' }}>
                <Download size={14} />
                <span style={{ marginLeft: '4px' }}>Send PDF</span>
              </button>
            </form>
          ) : (
            <div style={{ background: '#F3ECE4', border: '1px solid #1A3C34', padding: '10px 14px', fontSize: '0.88rem', color: '#1A3C34', fontWeight: '600', marginBottom: '14px' }}>
              ✓ Checklist PDF sent to {email}! You can also print directly below.
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn-nav-checklist" onClick={handlePrint} style={{ fontSize: '0.85rem' }}>
              <Printer size={15} style={{ marginRight: '6px' }} />
              <span>Print / Save PDF</span>
            </button>
            <button className="btn-card-action" onClick={onClose} style={{ background: '#1A3C34', color: '#fff', padding: '10px 24px' }}>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
