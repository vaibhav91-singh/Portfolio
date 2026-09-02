import React from 'react';
import { GitFork, Link2, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <p className="footer__brand-name">Vaibhav Singh</p>
            <p className="footer__brand-desc">
              Data Analyst • Salesforce Dev • Full Stack Developer
            </p>
          </div>

          {/* Social */}
          <div className="footer__socials">
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
                className="footer__social-link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__bottom-text">
            Built with <Heart size={12} className="footer__heart" /> using React & CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
