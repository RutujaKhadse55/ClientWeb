import React, { useState } from 'react';
import { X, CheckSquare, Download, Printer, Check, Mail } from 'lucide-react';

export default function EduChecklistModal({ isOpen, onClose }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const checklist = [
    { id: 1, title: "Genuine Non-Distributor Customer Demand", desc: "Are products being bought by regular consumers who have no financial interest in the business model?" },
    { id: 2, title: "Fair & Competitive Retail Pricing", desc: "Are product prices realistic compared to market brands, or inflated to fund multi-level payouts?" },
    { id: 3, title: "Transparent Corporate Registration (MCA / CIN / GST)", desc: "Is the company incorporated in India with active Ministry of Corporate Affairs filings?" },
    { id: 4, title: "Clear 30-Day Buyback & Cooling-Off Policy", desc: "Does the company offer a mandatory 30-day inventory repurchase mechanism mandated under Direct Selling Rules 2021?" },
    { id: 5, title: "No Mandatory Joining Fee or Inventory Loading", desc: "Can you start with zero joining fee or simply buying sample products for personal use?" },
    { id: 6, title: "Ethics-First Training vs. Pure Hype", desc: "Does the company provide structured product education, compliance guidance, and business skills?" },
    { id: 7, title: "Grievance Redressal Officer in India", desc: "Is there a designated nodal compliance officer listed on the official corporate website?" }
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
        style={{ background: '#FFFDFC', border: '2px solid #E3D5CE', color: '#2B2020' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close checklist">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '16px' }}>
          <span className="s1-badge" style={{ marginBottom: '8px' }}>
            <CheckSquare size={14} /> Free Due Diligence Tool
          </span>
          <h2 style={{ fontSize: '1.6rem', color: '#3D0D18', margin: '4px 0 6px' }}>
            Due-Diligence Checklist Before Joining Any MLM
          </h2>
          <p style={{ color: '#756868', fontSize: '0.92rem' }}>
            An essential 7-point audit checklist based on Indian Direct Selling Guidelines (2021) to protect your capital.
          </p>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#756868', marginBottom: '4px' }}>
            <span>Verified: <strong>{completedCount} of {checklist.length} items</strong></span>
            <span>{Math.round((completedCount / checklist.length) * 100)}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#F2EAE2', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${(completedCount / checklist.length) * 100}%`, height: '100%', background: '#5A1825', transition: 'width 0.3s' }}></div>
          </div>
        </div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '300px', overflowY: 'auto', marginBottom: '20px', paddingRight: '4px' }}>
          {checklist.map(item => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div 
                key={item.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  background: isChecked ? '#F2EAE2' : '#FFFFFF', 
                  border: isChecked ? '1px solid #5A1825' : '1px solid #E3D5CE', 
                  padding: '12px 16px', 
                  borderRadius: '10px', 
                  cursor: 'pointer' 
                }}
                onClick={() => toggleCheck(item.id)}
              >
                <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '2px solid #5A1825', background: isChecked ? '#5A1825' : '#fff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {isChecked && <Check size={12} />}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: '#3D0D18', margin: '0 0 2px' }}>{item.id}. {item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#756868', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form or Print Action */}
        <div>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <input 
                type="email" 
                placeholder="Enter email to get PDF printable version..." 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '10px 14px', border: '1px solid #E3D5CE', borderRadius: '8px', fontSize: '0.88rem', background: '#F2EAE2', outline: 'none' }}
              />
              <button type="submit" className="s1-btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                <Download size={14} />
                <span>Send PDF</span>
              </button>
            </form>
          ) : (
            <div style={{ background: '#F2EAE2', padding: '10px 14px', borderRadius: '8px', fontSize: '0.88rem', color: '#5A1825', fontWeight: '600', marginBottom: '14px' }}>
              ✓ Checklist PDF sent to {email}! You can also print directly below.
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="s1-btn-quiz" onClick={handlePrint} style={{ fontSize: '0.88rem', padding: '8px 16px' }}>
              <Printer size={15} />
              <span>Print Checklist</span>
            </button>
            <button className="s1-btn-primary" onClick={onClose} style={{ fontSize: '0.88rem', padding: '8px 20px' }}>
              <span>Done</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
