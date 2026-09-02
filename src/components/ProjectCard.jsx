import React from 'react';
import { ExternalLink } from 'lucide-react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, index = 0, colorVariant = 'cyan' }) => {
  return (
    <div className="project-card" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="project-card__inner">
        {/* Decorative gradient orb */}
        <div className={`project-card__orb project-card__orb--${colorVariant}`} />

        <div className="project-card__content">
          {/* Header */}
          <div className="project-card__header">
            <h4 className="project-card__title">{project.title}</h4>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          {/* Duration */}
          <p className={`project-card__duration project-card__duration--${colorVariant}`}>
            {project.duration}
          </p>

          {/* Description */}
          <p className="project-card__desc">{project.description}</p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="project-card__highlights">
              {project.highlights.map((h, i) => (
                <li key={i} className="project-card__highlight">
                  <span className={`project-card__highlight-dot project-card__highlight-dot--${colorVariant}`} />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span key={t} className="project-card__tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
