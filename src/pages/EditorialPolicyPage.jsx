import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Mail, Users, ArrowLeft } from 'lucide-react';
import { authorsData } from '../data/authors';

export default function EditorialPolicyPage({ onNavigate, onSelectAuthor }) {
  return (
    <div style={{ padding: '36px 0 70px', background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div className="article-breadcrumbs">
          <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Home</span>
          <span>/</span>
          <span className="curr">Editorial Charter & Standards</span>
        </div>

        <header style={{ borderBottom: '2px solid var(--ink-border-dark)', paddingBottom: '20px', marginBottom: '32px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-burgundy)', letterSpacing: '1px' }}>
            THE CHRONICLE CHARTER
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: '800', margin: '6px 0 10px', color: 'var(--ink-primary)' }}>
            Editorial Policy, Independence & Code of Ethics
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--ink-muted)', lineHeight: '1.5' }}>
            Our commitment to rigorous, fearless, and non-partisan business journalism.
          </p>
        </header>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--ink-secondary)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '12px' }}>
              1. Editorial Independence & Financial Integrity
            </h2>
            <p>
              <strong>The Indian Business Chronicle (IBC)</strong> operates with strict editorial separation between newsroom reporting and commercial business operations. Our journalists, editors, and columnists do not take direction from advertisers, corporate sponsors, or political organizations.
            </p>
            <p style={{ marginTop: '12px' }}>
              No IBC reporter or editor is permitted to hold direct equity positions or trade short-term derivatives in the specific companies or sectors they actively cover on their beat, eliminating potential conflicts of interest.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '12px' }}>
              2. Sourcing, Fact-Checking & Attribution
            </h2>
            <p>
              We prioritize primary documentation—regulatory filings (SEBI, MCA, RBI, US SEC), audited balance sheets, court transcripts, and verified on-the-record statements. When background briefings or anonymous sources are essential to breaking critical public-interest reporting, facts must be independently cross-verified across at least two independent credible sources.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '12px' }}>
              3. Transparent Corrections & Ombudsman Policy
            </h2>
            <p>
              Accuracy is our foundational currency. When factual errors occur, we correct them promptly and transparently at the top or bottom of the relevant article, clearly specifying what was altered and when. Readers may reach our Independent Reader's Ombudsman directly regarding any grievance.
            </p>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '16px', marginTop: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={20} color="var(--accent-burgundy)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ink-primary)' }}>
                  Office of the Readers' Ombudsman
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
                  Email: ombudsman@indianbusinesschronicle.in • Response SLA: 48 Business Hours
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '16px' }}>
              4. Editorial Leadership & Senior Bureau
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
              {authorsData.map(auth => (
                <div 
                  key={auth.id} 
                  style={{ background: '#FAFAFA', border: '1px solid var(--ink-border)', padding: '14px', display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}
                  onClick={() => onSelectAuthor(auth.id)}
                >
                  <img 
                    src={auth.avatar} 
                    alt={auth.name} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--ink-primary)' }}>
                      {auth.name}
                    </h4>
                    <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', display: 'block' }}>
                      {auth.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
