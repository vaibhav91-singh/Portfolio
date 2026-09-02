import React from 'react';
import '../styles/SkillBadge.css';

const SkillBadge = ({ name, index = 0, variant = 'default' }) => {
  return (
    <span
      className={`skill-badge skill-badge--${variant}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
