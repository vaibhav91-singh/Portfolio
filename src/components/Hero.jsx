import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, GitFork, Link2, Mail } from 'lucide-react';
import anime from 'animejs';
import { personalInfo, allRoles } from '../data/resumeData';
import '../styles/Hero.css';

const roleTitles = allRoles.map((r) => `${r.title} • ${r.subtitle}`);

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef(null);
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const hasAnimated = useRef(false);

  // Anime.js entrance animation
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    // Status badge
    tl.add({
      targets: '.hero__status',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
    });

    // Name greeting "Hi, I'm"
    tl.add({
      targets: '.hero__heading-greeting',
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 800,
    }, '-=500');

    // Name — letter by letter
    if (nameRef.current) {
      const nameText = personalInfo.name;
      nameRef.current.innerHTML = nameText
        .split('')
        .map((char) =>
          char === ' '
            ? '<span class="hero__name-char" style="display:inline-block">&nbsp;</span>'
            : `<span class="hero__name-char" style="display:inline-block;opacity:0">${char}</span>`
        )
        .join('');

      tl.add({
        targets: '.hero__name-char',
        opacity: [0, 1],
        translateY: [40, 0],
        rotateX: [90, 0],
        scale: [0.5, 1],
        easing: 'easeOutBack',
        duration: 600,
        delay: anime.stagger(50),
      }, '-=400');
    }

    // Typing area
    tl.add({
      targets: '.hero__typing-area',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    }, '-=300');

    // Education
    tl.add({
      targets: '.hero__education',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    }, '-=400');

    // CTA buttons — stagger
    tl.add({
      targets: '.hero__cta > a',
      opacity: [0, 1],
      translateY: [30, 0],
      scale: [0.9, 1],
      easing: 'easeOutBack',
      duration: 600,
      delay: anime.stagger(120),
    }, '-=400');

    // Social links — stagger from bottom
    tl.add({
      targets: '.hero__social-link',
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.8, 1],
      easing: 'easeOutBack',
      duration: 500,
      delay: anime.stagger(80),
    }, '-=300');

    // Scroll indicator
    tl.add({
      targets: '.hero__scroll',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 600,
    }, '-=200');

  }, []);

  // Typing effect
  useEffect(() => {
    const fullText = roleTitles[currentRole];
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === fullText.length) {
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            isDeleting = true;
            setIsTyping(true);
            type();
          }, 2500);
          return;
        }
        timeoutRef.current = setTimeout(type, 45);
      } else {
        setDisplayText(fullText.slice(0, charIndex));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentRole((prev) => (prev + 1) % roleTitles.length);
          return;
        }
        timeoutRef.current = setTimeout(type, 25);
      }
    };

    timeoutRef.current = setTimeout(type, 1500);
    return () => clearTimeout(timeoutRef.current);
  }, [currentRole]);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Decorative blobs */}
      <div className="hero__blobs">
        <div className="hero__blob hero__blob--cyan" />
        <div className="hero__blob hero__blob--purple" />
        <div className="hero__blob hero__blob--emerald" />
      </div>

      <div className="hero__content">
        {/* Status badge */}
        <div className="hero__status" style={{ opacity: 0 }}>
          <span className="hero__status-dot" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="hero__heading">
          <span className="hero__heading-greeting" style={{ opacity: 0 }}>Hi, I'm</span>
          <span className="hero__heading-name" ref={nameRef}>{personalInfo.name}</span>
        </h1>

        {/* Typing role */}
        <div className="hero__typing-area" style={{ opacity: 0 }}>
          <p className="hero__typing-text">
            {displayText}
            <span className={`hero__cursor ${isTyping ? 'animate-blink' : ''}`} />
          </p>
        </div>

        {/* Education */}
        <p className="hero__education" style={{ opacity: 0 }}>
          {personalInfo.education.degree} — {personalInfo.education.university}
        </p>

        {/* CTA Buttons */}
        <div className="hero__cta">
          <a href="#roles" className="hero__btn-primary" style={{ opacity: 0 }}>
            Explore My Roles
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="hero__btn-secondary" style={{ opacity: 0 }}>
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials">
          {[
            { icon: GitFork, href: personalInfo.github, label: 'GitHub' },
            { icon: Link2, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hero__social-link"
              style={{ opacity: 0 }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" style={{ opacity: 0 }}>
        <a href="#roles" className="hero__scroll-link">
          <span className="hero__scroll-text">Scroll</span>
          <ChevronDown size={20} className="hero__scroll-icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
