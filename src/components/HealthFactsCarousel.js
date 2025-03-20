'use client';

import { useState, useEffect } from 'react';

const healthFacts = [
  {
    title: "Mental Health",
    statistic: "1 in 4",
    description: "people will experience a mental health problem each year",
    color: "#4f46e5" // indigo
  },
  {
    title: "Physical Activity",
    statistic: "150 min",
    description: "of moderate exercise weekly is recommended for adults",
    color: "#0891b2" // cyan
  },
  {
    title: "Nutrition",
    statistic: "5 portions",
    description: "of fruits and vegetables should be consumed daily",
    color: "#65a30d" // lime
  },
  {
    title: "Sleep",
    statistic: "7-9 hours",
    description: "of sleep is recommended for optimal health",
    color: "#7e22ce" // purple
  }
];

export default function HealthFactsCarousel() {
  const [currentFact, setCurrentFact] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate facts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % healthFacts.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const navigateTo = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentFact(index);
      setIsAnimating(false);
    }, 500);
  };

  const fact = healthFacts[currentFact];

  return (
    <div className="health-facts-container">
      <h2 className="facts-header">Health Knowledge Hub</h2>
      
      <div className="facts-carousel">
        <div className={`fact-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          <div className="fact-icon-container" style={{ backgroundColor: fact.color }}>
            <div className="fact-icon"></div>
          </div>
          <h3 className="fact-title">{fact.title}</h3>
          <div className="fact-statistic" style={{ color: fact.color }}>{fact.statistic}</div>
          <p className="fact-description">{fact.description}</p>
        </div>
      </div>
      
      <div className="facts-navigation">
        {healthFacts.map((_, index) => (
          <button 
            key={index} 
            className={`nav-dot ${currentFact === index ? 'active' : ''}`}
            style={{ backgroundColor: currentFact === index ? healthFacts[index].color : '' }}
            onClick={() => navigateTo(index)}
            aria-label={`View fact ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="facts-visualization">
        <div className="viz-container">
          {healthFacts.map((fact, index) => (
            <div 
              key={index} 
              className="viz-bar"
              style={{ 
                backgroundColor: fact.color,
                opacity: index === currentFact ? 1 : 0.3,
                height: index === currentFact ? '100%' : '40%',
                transition: 'all 0.5s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
