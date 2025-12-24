import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className = '', delay = 0, animation = 'fade-in-up' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const animations = {
    'fade-in-up': 'opacity-0 translate-y-20',
    'fade-in-left': 'opacity-0 -translate-x-20',
    'fade-in-right': 'opacity-0 translate-x-20',
    'scale-in': 'opacity-0 scale-95',
    'rotate-in': 'opacity-0 rotate-6 scale-95',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0' : animations[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
