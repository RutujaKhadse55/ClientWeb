import React, { useState } from 'react';
import { X, CheckSquare, Download, Printer, Shield, Check, Mail, Sparkles } from 'lucide-react';

export default function LeadMagnetModal({ isOpen, onClose }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const checklist = [
    { id: 1, title: "Genuine Non-Distributor Customer Demand", desc: "Are products being bought by regular consumers who have no financial interest in the business model?" },
    { id: 2, title: "Fair & Competitive Retail Pricing", desc: "Are product prices realistic compared to comparable market brands, or inflated to pay out multi-level bonuses?" },
    { id: 3, title: "Transparent Corporate Registration (MCA / CIN / GST)", desc: "Is the company incorporated in India with active Ministry of Corporate Affairs filings and verifiable leadership?" },
    { id: 4, title: "Clear 30-Day Buyback & Cooling-Off Policy", desc: "Does the company offer a mandatory 30-day refund / inventory repurchase mechanism mandated under Direct Selling Rules 2021?" },
    { id: 5, title: "No Mandatory Joining Fee or Inventory Loading", desc: "Can you start with zero joining fee or simply buying sample products for personal use without forced bulk stockpiling?" },
    { id: 6, title: "Ethics-First Training vs. Pure Hype", desc: "Does the company provide structured product education, compliance guidance, and business skills rather than luxury car hype?" },
    { id: 7, title: "Grievance Redressal Officer in India", desc: "Is there a designated nodal compliance and grievance redressal officer listed on the official corporate website?" }
  ];

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container checklist-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <CheckSquare size={16} />
            <span>Free Lead Magnet Tool</span>
          </div>
          <h2 className="modal-title">Due-Diligence Checklist Before Joining Any MLM</h2>
          <p className="modal-subtitle">
            An essential 7-point audit checklist based on Indian Direct Selling Guidelines (2021) to protect your time and capital.
          </p>
        </div>

        {/* Interactive Checklist */}
        <div className="checklist-progress-bar">
          <div className="progress-info">
            <span>Audit Progress: <strong>{completedCount} of {checklist.length} verified</strong></span>
            <span>{Math.round((completedCount / checklist.length) * 100)}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${(completedCount / checklist.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="checklist-items-scroll">
          {checklist.map(item => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div 
                key={item.id} 
                className={`checklist-item-card ${isChecked ? 'item-checked' : ''}`}
                onClick={() => toggleCheck(item.id)}
              >
                <div className={`checkbox-custom ${isChecked ? 'active' : ''}`}>
                  {isChecked ? <Check size={14} /> : null}
                </div>
                <div className="checklist-text">
                  <h4 className="checklist-item-title">{item.id}. {item.title}</h4>
                  <p className="checklist-item-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Capture or Actions */}
        <div className="modal-footer-actions">
          {!subscribed ? (
            <form className="email-capture-form" onSubmit={handleSubscribe}>
              <div className="input-group">
                <Mail size={16} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter email to get PDF printable version..." 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-submit-capture">
                  <Download size={14} />
                  <span>Send PDF</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="success-capture-msg">
              <Check size={16} className="text-green" />
              <span>Checklist PDF sent to <strong>{email}</strong>! You can also print directly below.</span>
            </div>
          )}

          <div className="footer-button-row">
            <button className="btn-action-outline" onClick={handlePrint}>
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
            <button className="btn-action-primary" onClick={onClose}>
              <span>Done Reviewing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
