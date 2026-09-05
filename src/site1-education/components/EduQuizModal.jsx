import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, CheckCircle, Briefcase, Building, Users } from 'lucide-react';
import { quizQuestions } from '../../shared/data/index.js';

export default function EduQuizModal({ isOpen, onClose, onNavigate, onSwitchToRankings }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleSelectOption = (score) => {
    const updatedAnswers = { ...answers, [currentStep]: score };
    setAnswers(updatedAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = { job: 0, business: 0, mlm: 0 };
    Object.values(finalAnswers).forEach(val => {
      if (counts[val] !== undefined) counts[val]++;
    });

    let topChoice = 'job';
    if (counts.business > counts[topChoice]) topChoice = 'business';
    if (counts.mlm > counts[topChoice]) topChoice = 'mlm';

    if (topChoice === 'mlm') {
      setResult({
        type: 'Direct Selling / Modern MLM',
        icon: 'users',
        badge: 'Recommended: Micro-Entrepreneurship & Direct Selling',
        headline: 'Direct Selling matches your desire for flexibility, low capital entry, and personal growth!',
        description: 'You are looking to build income without risking major life savings, value flexible self-paced hours, and want to learn practical communication, sales, and leadership skills.',
        advice: 'Look for companies with genuine consumable products, strong digital training, and fair compensation without forced inventory loading.',
        ctaText: 'Explore Verified Top 10 Indian MLM Companies',
        isRankingsCta: true
      });
    } else if (topChoice === 'business') {
      setResult({
        type: 'Traditional Independent Business',
        icon: 'building',
        badge: 'Recommended: Independent Enterprise',
        headline: 'Traditional Business matches your appetite for full equity ownership and capital investment!',
        description: 'You have capital to invest, thrive in managing end-to-end supply chains and operations, and are prepared for the full risks and rewards of running your own venture.',
        advice: 'Conduct detailed feasibility studies, secure commercial licensing, and prepare a 12-month working capital runway before launching.',
        ctaText: 'Read our MLM vs Traditional Business Comparison',
        ctaRoute: 'mlm-vs-job-vs-business'
      });
    } else {
      setResult({
        type: 'Traditional Career / Job',
        icon: 'briefcase',
        badge: 'Recommended: Structured Professional Career',
        headline: 'A Traditional Job matches your priority for stability, predictable income, and structured hours!',
        description: 'You prioritize a guaranteed monthly paycheck, clear corporate hierarchy, and zero personal financial risk over the variable outcomes of sales or business building.',
        advice: 'Focus on advancing specialized credentials, negotiation skills for annual appraisals, and building retirement savings.',
        ctaText: 'Read our Job vs MLM vs Business Breakdown',
        ctaRoute: 'mlm-vs-job-vs-business'
      });
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const handleCtaClick = () => {
    onClose();
    if (result.isRankingsCta) {
      onSwitchToRankings();
    } else if (result.ctaRoute) {
      onNavigate(result.ctaRoute);
    }
  };

  const currentQ = quizQuestions[currentStep];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container" 
        style={{ background: '#FFFDFC', border: '2px solid #E3D5CE', color: '#2B2020' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close quiz">
          <X size={20} />
        </button>

        {!result ? (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="s1-badge" style={{ marginBottom: '10px' }}>
                <Sparkles size={14} /> 60-Second Fit Assessment
              </span>
              <h2 style={{ fontSize: '1.65rem', color: '#3D0D18', margin: '6px 0 8px' }}>Which Career & Income Path Fits You?</h2>
              <p style={{ color: '#756868', fontSize: '0.95rem' }}>
                Question {currentStep + 1} of {quizQuestions.length}
              </p>
            </div>

            {/* Progress bar */}
            <div style={{ width: '100%', height: '6px', background: '#F2EAE2', borderRadius: '10px', overflow: 'hidden', marginBottom: '24px' }}>
              <div style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%`, height: '100%', background: '#5A1825', transition: 'width 0.3s' }}></div>
            </div>

            <h3 style={{ fontSize: '1.2rem', color: '#2B2020', marginBottom: '16px' }}>{currentQ.question}</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    background: '#F2EAE2', 
                    border: '1px solid #E3D5CE', 
                    borderRadius: '10px', 
                    padding: '14px 18px', 
                    textAlign: 'left',
                    color: '#2B2020',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => handleSelectOption(opt.score)}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#5A1825'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E3D5CE'}
                >
                  <span style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#5A1825', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '800', flexShrink: 0 }}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span style={{ flex: 1 }}>{opt.text}</span>
                  <ArrowRight size={16} color="#5A1825" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <span style={{ background: 'rgba(90,24,37,0.1)', color: '#5A1825', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>
              {result.badge}
            </span>

            <h2 style={{ fontSize: '1.6rem', color: '#3D0D18', margin: '14px 0 10px' }}>{result.headline}</h2>
            <p style={{ color: '#756868', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '20px' }}>{result.description}</p>

            <div style={{ background: '#F2EAE2', border: '1px solid #E3D5CE', borderRadius: '12px', padding: '18px', textAlign: 'left', marginBottom: '24px' }}>
              <strong style={{ color: '#5A1825', display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                💡 Strategic Recommendation:
              </strong>
              <p style={{ color: '#2B2020', fontSize: '0.92rem', margin: 0 }}>{result.advice}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button className="s1-btn-primary" onClick={handleCtaClick}>
                <span>{result.ctaText}</span>
                <ArrowRight size={16} />
              </button>
              <button className="s1-btn-quiz" onClick={resetQuiz}>
                <RotateCcw size={15} />
                <span>Retake</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
