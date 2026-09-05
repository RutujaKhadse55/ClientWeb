import React, { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

export default function NewsletterModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-burgundy)', marginBottom: '8px' }}>
              <Mail size={18} />
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                DAILY MORNING DISPATCH
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px', color: 'var(--ink-primary)' }}>
              Start your business day informed.
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
              Delivered every weekday at 7:00 AM IST. Get a 5-minute curated executive briefing on Dalal Street, corporate earnings, central bank decisions, and venture deals.
            </p>

            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your corporate or personal email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid var(--ink-border)',
                  fontSize: '0.9rem',
                  marginBottom: '12px',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--accent-burgundy)',
                  color: '#FFFFFF',
                  padding: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Subscribe Free
              </button>
            </form>

            <p style={{ fontSize: '0.72rem', color: 'var(--ink-light)', marginTop: '12px', textAlign: 'center' }}>
              Zero spam. Unsubscribe anytime with one click.
            </p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle size={48} color="var(--accent-green)" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '8px' }}>
              Subscription Confirmed!
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', marginBottom: '18px' }}>
              Thank you for subscribing to <strong>The Daily Morning Dispatch</strong>. The next edition will arrive in your inbox at 7:00 AM IST.
            </p>
            <button 
              onClick={onClose}
              style={{
                background: 'var(--ink-primary)',
                color: '#FFFFFF',
                padding: '8px 20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}
            >
              Back to News
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
