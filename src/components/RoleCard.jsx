import React, { useState, useRef, useCallback } from 'react';
import { RotateCcw, FileText, Download } from 'lucide-react';
import anime from 'animejs';
import SkillBadge from './SkillBadge';
import ProjectCard from './ProjectCard';
import '../styles/RoleCards.css';

const COLOR_MAP = {
  'data-analyst': 'cyan',
  'salesforce-dev': 'purple',
  'fullstack-dev': 'emerald',
};

const RoleCard = ({ role, index = 0 }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const frontBadgesRef = useRef(null);
  const backProjectsRef = useRef(null);

  const resumeViewUrl = `https://drive.google.com/file/d/${role.resumeFileId}/preview`;
  const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${role.resumeFileId}`;
  const colorVariant = COLOR_MAP[role.id] || 'cyan';

  const handleFlipToBack = useCallback(() => {
    setFlipped(true);

    // Animate projects on back side after flip
    setTimeout(() => {
      if (backProjectsRef.current) {
        anime({
          targets: backProjectsRef.current.querySelectorAll('.project-card'),
          opacity: [0, 1],
          translateX: [-30, 0],
          easing: 'easeOutExpo',
          duration: 600,
          delay: anime.stagger(120),
        });
      }
    }, 400);
  }, []);

  const handleFlipToFront = useCallback(() => {
    setFlipped(false);

    // Re-animate skill badges
    setTimeout(() => {
      if (frontBadgesRef.current) {
        anime({
          targets: frontBadgesRef.current.querySelectorAll('.skill-badge'),
          opacity: [0, 1],
          scale: [0.5, 1],
          easing: 'easeOutBack',
          duration: 400,
          delay: anime.stagger(30),
        });
      }
    }, 400);
  }, []);

  return (
    <div className="role-card" ref={cardRef}>
      {/* Flip card */}
      <div className={`role-card__flip ${flipped ? 'role-card__flip--flipped' : ''}`}>
        <div className="role-card__flip-inner">

          {/* ======= FRONT ======= */}
          <div className={`role-card__face role-card__face--${colorVariant}`}>
            <div className="role-card__face-content">
              {/* Header */}
              <div className="role-card__header">
                <div className="role-card__header-left">
                  <span className="role-card__icon">{role.icon}</span>
                  <div>
                    <h3 className="role-card__title">{role.title}</h3>
                    <p className={`role-card__subtitle role-card__subtitle--${colorVariant}`}>
                      {role.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleFlipToBack}
                  className="role-card__flip-btn"
                  aria-label="Flip to see projects"
                  title="See Projects & Resume"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              {/* Summary */}
              <p className="role-card__summary">{role.summary}</p>

              {/* Skills */}
              <div className="role-card__skills" ref={frontBadgesRef}>
                {role.skills.map((group, gIdx) => (
                  <div key={group.category} className="role-card__skill-group">
                    <h4 className="role-card__skill-label">{group.category}</h4>
                    <div className="role-card__skill-badges">
                      {group.items.map((skill, sIdx) => (
                        <SkillBadge
                          key={skill}
                          name={skill}
                          index={gIdx * 5 + sIdx}
                          variant={colorVariant}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Flip hint */}
              <div className="role-card__flip-hint">
                <button
                  onClick={handleFlipToBack}
                  className={`role-card__flip-hint-btn role-card__flip-hint-btn--${colorVariant}`}
                >
                  <RotateCcw size={12} />
                  Click to see Projects & Resume →
                </button>
              </div>
            </div>
          </div>

          {/* ======= BACK ======= */}
          <div className={`role-card__face role-card__face--back role-card__face--${colorVariant}`}>
            <div className="role-card__face-content">
              {/* Header */}
              <div className="role-card__header">
                <div>
                  <h3 className="role-card__back-title">{role.title}</h3>
                  <p className={`role-card__back-label role-card__subtitle--${colorVariant}`}>
                    Projects & Resume
                  </p>
                </div>
                <button
                  onClick={handleFlipToFront}
                  className="role-card__flip-btn"
                  aria-label="Flip back to skills"
                  title="Back to Skills"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              {/* Projects */}
              <div className="role-card__projects" ref={backProjectsRef}>
                {role.projects.map((project, pIdx) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={pIdx}
                    colorVariant={colorVariant}
                  />
                ))}
              </div>

              {/* Resume buttons */}
              <div className="role-card__resume">
                <a
                  href={resumeViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`role-card__resume-btn role-card__resume-btn--primary ${colorVariant}`}
                >
                  <FileText size={16} />
                  View Resume
                </a>
                <a
                  href={resumeDownloadUrl}
                  className="role-card__resume-btn role-card__resume-btn--secondary"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>

              {/* Flip hint */}
              <div className="role-card__flip-hint">
                <button
                  onClick={handleFlipToFront}
                  className={`role-card__flip-hint-btn role-card__flip-hint-btn--${colorVariant}`}
                >
                  <RotateCcw size={12} />
                  ← Back to Skills
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="role-card__certs">
        <h4 className="role-card__certs-title">Certifications</h4>
        <div className="role-card__cert-list">
          {role.certifications.map((cert) => (
            <div key={cert.name} className="role-card__cert-item">
              <span className={`role-card__cert-check--${colorVariant}`}>✓</span>
              <div>
                <span className="role-card__cert-name">{cert.name}</span>
                <span className="role-card__cert-issuer">— {cert.issuer} ({cert.year})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
