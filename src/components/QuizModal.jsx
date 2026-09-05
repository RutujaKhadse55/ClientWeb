import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, CheckCircle, Briefcase, Building, Users } from 'lucide-react';
import { quizQuestions } from '../data/faqs';

export default function QuizModal({ isOpen, onClose, onNavigate }) {
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
      // Calculate outcome
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

    // Set detailed profile
    if (topChoice === 'mlm') {
      setResult({
        type: 'Direct Selling / Modern MLM',
        icon: 'users',
        badge: 'Recommended: Micro-Entrepreneurship & Direct Selling',
        headline: 'Direct Selling / MLM matches your desire for flexibility, low capital entry, and personal growth!',
        description: 'You are looking to build income without risking major life savings, value flexible self-paced hours, and want to learn practical communication, sales, and leadership skills.',
        advice: 'Look for companies with genuine consumable products, strong digital training, and fair compensation without forced inventory loading.',
        ctaText: 'Explore Verified Top 10 Indian MLM Companies',
        ctaRoute: 'rankings-home'
      });
    } else if (topChoice === 'business') {
      setResult({
        type: 'Traditional Independent Business',
        icon: 'building',
        badge: 'Recommended: Independent Enterprise',
        headline: 'Traditional Business matches your appetite for full equity ownership and high capital investment!',
        description: 'You have significant capital to invest, thrive in managing end-to-end supply chains and operations, and are prepared for the full risks and rewards of running your own venture.',
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

  const handleCtaClick = (route) => {
    onClose();
    onNavigate(route);
  };

  const currentQ = quizQuestions[currentStep];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container quiz-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close quiz">
          <X size={20} />
        </button>

        {!result ? (
          <div className="quiz-flow">
            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={15} />
                <span>60-Second Career & Income Assessment</span>
              </div>
              <h2 className="modal-title">Which Path Fits You Best?</h2>
              <p className="modal-subtitle">
                Answer 4 quick questions to discover whether a Traditional Job, Independent Business, or Direct Selling / MLM suits your goals.
              </p>
            </div>

            {/* Quiz Progress */}
            <div className="quiz-progress-bar">
              <div className="progress-info">
                <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="question-card">
              <h3 className="question-text">{currentQ.question}</h3>
              <div className="options-list">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className="option-button"
                    onClick={() => handleSelectOption(opt.score)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="option-text">{opt.text}</span>
                    <ArrowRight size={16} className="option-arrow" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="quiz-result-view">
            <div className="result-badge-wrap">
              <div className="result-icon-box">
                {result.icon === 'users' && <Users size={32} className="text-amber" />}
                {result.icon === 'building' && <Building size={32} className="text-blue" />}
                {result.icon === 'briefcase' && <Briefcase size={32} className="text-purple" />}
              </div>
              <span className="result-pill">{result.badge}</span>
            </div>

            <h2 className="result-title">{result.headline}</h2>
            <p className="result-desc">{result.description}</p>

            <div className="result-advice-box">
              <strong>💡 Strategic Recommendation:</strong>
              <p>{result.advice}</p>
            </div>

            <div className="result-actions">
              <button 
                className="btn-action-primary"
                onClick={() => handleCtaClick(result.ctaRoute)}
              >
                <span>{result.ctaText}</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-action-outline" onClick={resetQuiz}>
                <RotateCcw size={15} />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
