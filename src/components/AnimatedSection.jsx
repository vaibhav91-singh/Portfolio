import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'up', // 'up' | 'left' | 'right' | 'scale'
  delay = 0,
  threshold = 0.15,
  id,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animClass = {
    up: 'reveal reveal-up',
    left: 'reveal reveal-left',
    right: 'reveal reveal-right',
    scale: 'reveal reveal-scale',
    fade: 'reveal',
  }[animation] || 'reveal reveal-up';

  return (
    <div
      ref={ref}
      id={id}
      className={`${animClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
