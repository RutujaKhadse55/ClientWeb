import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { liveMarketIndices } from '../data/marketData';

export default function MarketTicker() {
  return (
    <div className="market-ticker-strip">
      <div className="container ticker-flex">
        <span className="ticker-label">MARKETS LIVE</span>
        {liveMarketIndices.map((idx, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-sym">{idx.symbol}:</span>
            <span className="ticker-val">{idx.value}</span>
            <span className={`ticker-change ${idx.isPositive ? 'pos' : 'neg'}`}>
              {idx.isPositive ? '+' : ''}{idx.change} ({idx.changePercent})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
