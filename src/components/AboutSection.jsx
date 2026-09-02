import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { personalInfo } from '../data/resumeData';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const animated = useRef(false);

  const stats = [
    { number: '3', label: 'Professional Roles', icon: '🎯' },
    { number: '9', label: 'Projects Built', icon: '🚀', suffix: '+' },
    { number: '3', label: 'Certifications', icon: '🏆', suffix: '+' },
    { number: '1', label: 'Design Patent', icon: '📜' },
  ];

  const exploring = [
    'Full Stack Development',
    'Data Analytics & BI',
    'Salesforce Platform',
    'Machine Learning',
    'Generative AI',
    'Agentic AI',
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          const tl = anime.timeline({ easing: 'easeOutExpo' });

          // Header
          tl.add({
            targets: '.about__label',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
          });

          tl.add({
            targets: '.about__title',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
          }, '-=400');

          // Left text paragraphs — stagger
          tl.add({
            targets: '.about__paragraph',
            opacity: [0, 1],
            translateX: [-40, 0],
            duration: 700,
            delay: anime.stagger(150),
          }, '-=400');

          // Exploring tags — cascade pop
          tl.add({
            targets: '.about__exploring-tag',
            opacity: [0, 1],
            scale: [0.5, 1],
            translateY: [15, 0],
            easing: 'easeOutBack',
            duration: 500,
            delay: anime.stagger(60),
          }, '-=300');

          // Stats cards — stagger with bounce
          tl.add({
            targets: '.about__stat',
            opacity: [0, 1],
            scale: [0.7, 1],
            translateY: [40, 0],
            easing: 'easeOutBack',
            duration: 700,
            delay: anime.stagger(120),
          }, '-=600');

          // Counter animation for stat numbers
          const statNumbers = section.querySelectorAll('.about__stat-number');
          statNumbers.forEach((el, i) => {
            const target = parseInt(stats[i].number, 10);
            const suffix = stats[i].suffix || '';
            if (isNaN(target)) return;

            const obj = { value: 0 };
            anime({
              targets: obj,
              value: target,
              round: 1,
              easing: 'easeOutExpo',
              duration: 1500,
              delay: 800 + i * 150,
              update: () => {
                el.textContent = obj.value + suffix;
              },
            });
          });

          // Education card
          tl.add({
            targets: '.about__education',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
          }, '-=400');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        {/* Header */}
        <div className="about__header">
          <p className="about__label" style={{ opacity: 0 }}>Who Am I</p>
          <h2 className="about__title" style={{ opacity: 0 }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about__grid">
          {/* Left: Text */}
          <div>
            <div className="about__text">
              <p className="about__paragraph" style={{ opacity: 0 }}>
                I'm a passionate B.Tech student in <strong>Computer Science Engineering — AI & Data Science</strong> at
                Greater Noida Institute of Technology (GNIOT), expected to graduate in 2027.
              </p>
              <p className="about__paragraph" style={{ opacity: 0 }}>
                My journey spans <strong>three distinct domains</strong> — from building scalable full-stack applications with the MERN stack,
                to crafting enterprise solutions on the Salesforce platform, to deriving actionable insights through data analytics and AI-powered tools.
              </p>
              <p className="about__paragraph" style={{ opacity: 0 }}>
                I hold a <span className="highlight-emerald">Government of India Design Patent</span> for a Real-Time Facial Expression Recognition Device
                and have published research on AI-powered touchless workout assistance in the International Journal of Information Movement.
              </p>

              {/* Exploring tags */}
              <div className="about__exploring">
                <p className="about__exploring-label">Currently Exploring</p>
                <div className="about__exploring-tags">
                  {exploring.map((item) => (
                    <span key={item} className="about__exploring-tag" style={{ opacity: 0 }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div>
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat" style={{ opacity: 0 }}>
                  <div className="about__stat-icon">{stat.icon}</div>
                  <div className="about__stat-number">0</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="about__education" style={{ opacity: 0 }}>
              <div className="about__education-inner">
                <span className="about__education-icon">🎓</span>
                <div>
                  <h4 className="about__education-degree">{personalInfo.education.degree}</h4>
                  <p className="about__education-university">{personalInfo.education.university}</p>
                  <p className="about__education-year">Expected {personalInfo.education.expected}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
