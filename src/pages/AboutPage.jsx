import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="container article-reading-container">
      <div className="article-header-box">
        <button 
          onClick={() => onNavigate('home')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: '700', color: '#1A3C34', textTransform: 'uppercase', marginBottom: '16px' }}
        >
          <ArrowLeft size={15} />
          <span>Back to Publication Home</span>
        </button>

        <span className="category-tag">Editorial Policy & Standards</span>
        <h1 className="article-headline serif-headline">
          About Direct Selling Journal India: Editorial Independence & Regulatory Framework
        </h1>
        <p className="article-deck">
          Our editorial commitment to objective direct selling research, consumer protection, and neutral industry coverage in India.
        </p>
      </div>

      <div className="article-body-content">
        <h2>Our Editorial Mission</h2>
        <p>
          The direct selling and multi-level marketing (MLM) sector in India represents a major channel for micro-entrepreneurship, consumer products, and alternative livelihoods. However, the industry has often been clouded by sensational claims, illegal money-circulation schemes, and aggressive recruitment practices.
        </p>
        <p>
          <strong>Direct Selling Journal India</strong> is an independent research publication created to provide transparent, verifiable, and educational coverage of the Indian direct selling market.
        </p>

        <h2>Our 4 Core Editorial Principles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', margin: '24px 0' }}>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '6px' }}>1. Zero Paid Placements</strong>
            <p style={{ fontSize: '0.88rem', color: '#5C6662', margin: 0 }}>We do not accept commercial payments to rank or endorse any direct selling company.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '6px' }}>2. Regulatory Alignment</strong>
            <p style={{ fontSize: '0.88rem', color: '#5C6662', margin: 0 }}>All evaluations adhere to the Consumer Protection (Direct Selling) Rules, 2021 notified by the Government of India.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '6px' }}>3. Balanced Reporting</strong>
            <p style={{ fontSize: '0.88rem', color: '#5C6662', margin: 0 }}>We highlight both operational strengths and market challenges/considerations for all featured entities.</p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid #E2DBD2', padding: '18px' }}>
            <strong style={{ color: '#1A3C34', display: 'block', marginBottom: '6px' }}>4. Consumer Due Diligence</strong>
            <p style={{ fontSize: '0.88rem', color: '#5C6662', margin: 0 }}>We prioritize empowering prospective distributors with checklists, red flags, and risk assessments.</p>
          </div>
        </div>

        <h2>Regulatory Context: Consumer Protection (Direct Selling) Rules, 2021</h2>
        <p>
          In December 2021, the Ministry of Consumer Affairs, Food and Public Distribution notified the landmark <em>Consumer Protection (Direct Selling) Rules, 2021</em> under the Consumer Protection Act, 2019.
        </p>
        <p>Key requirements under Indian law include:</p>
        <ul style={{ margin: '14px 0 24px 24px', listStyle: 'disc' }}>
          <li>Mandatory incorporation as an Indian entity with a physical registered office in India.</li>
          <li>Strict prohibition of Pyramid Schemes and Money Circulation Schemes under the guise of direct selling.</li>
          <li>Mandatory 30-day cooling-off period and inventory buyback/refund policy for distributors and consumers.</li>
          <li>Appointment of a designated Nodal Officer and Grievance Redressal Officer in India.</li>
          <li>Prohibition of mandatory joining fees or forced bulk product loading.</li>
        </ul>

        <h2>Contact & Editorial Inquiries</h2>
        <p>
          For editorial inquiries, factual corrections, or regulatory feedback, please reach out to our editorial desk.
        </p>

        <div style={{ marginTop: '36px', borderTop: '2px solid #1D2321', paddingTop: '20px' }}>
          <button className="btn-card-action" onClick={() => onNavigate('top-10-rankings')}>
            <span>Explore Top 10 Indian MLM Rankings →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
