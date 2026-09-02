import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, GitFork, Link2, Send } from 'lucide-react';
import anime from 'animejs';
import { personalInfo } from '../data/resumeData';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const animated = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    const mailtoUrl = `mailto:singhvaibhav849@gmail.com?subject=${subject}&body=${body}`;

    // Trigger direct email composition to singhvaibhav849@gmail.com
    window.location.href = mailtoUrl;

    // Success animation
    anime({
      targets: '.contact__form-submit',
      scale: [1, 1.05, 1],
      duration: 400,
      easing: 'easeOutBack',
    });

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

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
            targets: '.contact__label',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
          });

          tl.add({
            targets: '.contact__title',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
          }, '-=400');

          tl.add({
            targets: '.contact__subtitle',
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 600,
          }, '-=500');

          // Contact cards — stagger slide from left
          tl.add({
            targets: '.contact__card',
            opacity: [0, 1],
            translateX: [-40, 0],
            easing: 'easeOutBack',
            duration: 600,
            delay: anime.stagger(80),
          }, '-=300');

          // Experience & patent cards
          tl.add({
            targets: ['.contact__experience', '.contact__patent'],
            opacity: [0, 1],
            translateY: [25, 0],
            duration: 600,
            delay: anime.stagger(100),
          }, '-=400');

          // Form — slide from right
          tl.add({
            targets: '.contact__form',
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
          }, '-=600');

          // Form fields stagger
          tl.add({
            targets: '.contact__form-fields > div, .contact__form-submit',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            delay: anime.stagger(80),
          }, '-=400');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const contactCards = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    { icon: GitFork, label: 'GitHub', value: 'vaibhav91-singh', href: personalInfo.github },
    { icon: Link2, label: 'LinkedIn', value: 'vaibhav91-singh', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      {/* Header */}
      <div className="contact__header">
        <p className="contact__label" style={{ opacity: 0 }}>Get In Touch</p>
        <h2 className="contact__title" style={{ opacity: 0 }}>
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="contact__subtitle" style={{ opacity: 0 }}>
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="contact__grid">
        {/* Contact cards */}
        <div>
          <div className="contact__cards">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const Wrapper = card.href ? 'a' : 'div';
              const wrapperProps = card.href
                ? {
                    href: card.href,
                    target: card.href.startsWith('http') ? '_blank' : undefined,
                    rel: card.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                  }
                : {};

              return (
                <Wrapper key={card.label} {...wrapperProps} className="contact__card" style={{ opacity: 0 }}>
                  <div className="contact__card-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="contact__card-label">{card.label}</p>
                    <p className="contact__card-value">{card.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Experience */}
          <div className="contact__experience" style={{ opacity: 0 }}>
            <h4 className="contact__experience-title">
              💼 {personalInfo.experience.role}
            </h4>
            <p className="contact__experience-detail">
              {personalInfo.experience.company} • {personalInfo.experience.duration}
            </p>
          </div>

          {/* Patent */}
          <div className="contact__patent" style={{ opacity: 0 }}>
            <h4 className="contact__patent-title">🏆 Design Patent — Govt. of India</h4>
            <p className="contact__patent-detail">{personalInfo.patent.title}</p>
            <p className="contact__patent-reg">Reg. No.: {personalInfo.patent.regNo}</p>
          </div>
        </div>

        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="contact__form" style={{ opacity: 0 }}>
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__form-fields">
              <div style={{ opacity: 0 }}>
                <label htmlFor="contact-name" className="contact__form-label">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="contact__form-input"
                />
              </div>

              <div style={{ opacity: 0 }}>
                <label htmlFor="contact-email" className="contact__form-label">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                  className="contact__form-input"
                />
              </div>

              <div style={{ opacity: 0 }}>
                <label htmlFor="contact-message" className="contact__form-label">Message</label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="contact__form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="contact__form-submit"
                style={{ opacity: 0 }}
              >
                {submitted ? (
                  <span className="contact__form-success">✓ Message Sent!</span>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
