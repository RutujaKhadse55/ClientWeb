import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { breakingNewsItems } from '../data/marketData';

export default function BreakingNewsBar({ onSelectHeadline }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNewsItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="breaking-bar">
      <div className="container breaking-inner">
        <span className="breaking-badge">
          <Zap size={13} />
          BREAKING
        </span>
        <span 
          className="breaking-text"
          onClick={() => onSelectHeadline && onSelectHeadline(breakingNewsItems[currentIndex])}
        >
          {breakingNewsItems[currentIndex]}
        </span>
      </div>
    </div>
  );
}
