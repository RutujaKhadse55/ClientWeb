import React from 'react';
import { ArrowLeft, ShieldCheck, Trophy, BookOpen } from 'lucide-react';

export default function MethodologyPage({ onNavigate, onSwitchToEducation }) {
  const criteria = [
    {
      num: "01",
      title: "Regulatory Compliance (Direct Selling Rules 2021)",
      desc: "Verification of Ministry of Corporate Affairs (MCA) incorporation, active CIN, GST registration, mandatory 30-day buyback/refund policy, and absence of money circulation or pyramid schemes."
    },
    {
      num: "02",
      title: "Product Quality, Certifications & Value",
      desc: "Evaluating whether products provide genuine consumer utility at reasonable retail price points, backed by recognized certifications such as FSSAI, AYUSH, ISO, or GMP."
    },
    {
      num: "03",
      title: "Compensation Plan Fairness & Transparency",
      desc: "Analyzing if commissions are generated primarily through retail product consumption or purely through recruitment quotas. We heavily penalize forced starter inventory stockpiling."
    },
    {
      num: "04",
      title: "Training, Technology & Distributor Support",
      desc: "Assessing digital infrastructure (mobile apps, online order tracking, automated customer CRM) and structured distributor skill development in sales ethics, communication, and leadership."
    },
    {
      num: "05",
      title: "Market Standing: Established vs Emerging Potential",
      desc: "Balancing the proven operational longevity of established giants with the ground-floor timing, digital agility, and innovation of emerging Indian direct selling startups (e.g. HGR Corporation)."
    }
  ];

  return (
    <div className="theme-site2">
      <div className="container" style={{ maxWidth: '880px', padding: '40px 24px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <button className="s2-btn-quick-review" style={{ marginBottom: '20px' }} onClick={() => onNavigate('rankings-home')}>
            <ArrowLeft size={16} />
            <span>Back to Top 10 Rankings</span>
          </button>

          <span className="s2-badge">📊 Editorial Framework</span>
          <h1 style={{ fontSize: '2.6rem', color: '#0D3328', margin: '12px 0' }}>How We Ranked India's Top 10 MLM Companies</h1>
          <p style={{ fontSize: '1.15rem', color: '#68706B' }}>
            A transparent breakdown of our 5-point evaluation framework used to curate and review direct selling companies in India.
          </p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#0D3328', marginBottom: '18px' }}>Our 5-Point Evaluation Framework</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {criteria.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#FFFDF9', border: '1px solid #D9DED5', borderRadius: '12px', padding: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#174A3A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#0D3328', margin: '0 0 6px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#68706B', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #D9DED5', paddingTop: '24px' }}>
          <button className="s2-btn-hgr-full" onClick={() => onNavigate('rankings-home')}>
            <Trophy size={16} />
            <span>View Top 10 Indian MLM Rankings</span>
          </button>

          <button className="s2-cta-jump" onClick={onSwitchToEducation}>
            <BookOpen size={16} />
            <span>Back to Education Portal →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
