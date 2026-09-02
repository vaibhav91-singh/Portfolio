import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleCards from './components/RoleCards';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <div className="section-divider section-spacing" />
      <RoleCards />
      <div className="section-divider section-spacing" />
      <AboutSection />
      <div className="section-divider section-spacing" />
      <ContactSection />
      <Footer />
    </div>
  );
}