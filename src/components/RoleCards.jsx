import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import RoleCard from './RoleCard';
import { allRoles } from '../data/resumeData';
import '../styles/RoleCards.css';

const RoleCards = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          // Header animation
          const tl = anime.timeline({ easing: 'easeOutExpo' });

          tl.add({
            targets: '.roles__label',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
          });

          tl.add({
            targets: '.roles__title',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
          }, '-=400');

          tl.add({
            targets: '.roles__subtitle',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
          }, '-=500');

          tl.add({
            targets: '.roles__divider',
            scaleX: [0, 1],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeInOutQuad',
          }, '-=300');

          // Cards — dramatic stagger entrance
          tl.add({
            targets: '.roles__grid > div',
            opacity: [0, 1],
            translateY: [80, 0],
            scale: [0.85, 1],
            rotateX: [15, 0],
            easing: 'easeOutBack',
            duration: 900,
            delay: anime.stagger(200),
          }, '-=400');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roles" className="roles" ref={sectionRef}>
      {/* Section header */}
      <div className="roles__inner">
        <div className="roles__header" ref={headerRef}>
          <p className="roles__label" style={{ opacity: 0 }}>What I Do</p>
          <h2 className="roles__title" style={{ opacity: 0 }}>
            My <span className="gradient-text">Professional Roles</span>
          </h2>
          <p className="roles__subtitle" style={{ opacity: 0 }}>
            Three distinct career paths, one passionate developer. Click on any card to explore projects and download role-specific resumes.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="roles__divider" style={{ opacity: 0 }} />

      {/* Role Cards Grid */}
      <div className="roles__grid" ref={cardsRef}>
        {allRoles.map((role, idx) => (
          <div key={role.id} style={{ opacity: 0 }}>
            <RoleCard role={role} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoleCards;
