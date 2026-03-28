import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink, Download, GitFork, Link2, Mail, ChevronDown, FileText, ArrowRight } from 'lucide-react';

const Portfolio3D = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const containerRef = useRef(null);

  // CONFIGURE YOUR GOOGLE DRIVE RESUME
  // Steps: 1. Upload resume to Google Drive
  //        2. Right-click → Share → Get link
  //        3. Extract file ID from URL: https://drive.google.com/file/d/[FILE_ID]/view
  const RESUME_FILE_ID = '1zDGKZlg8E6d8wrZO8pUbOUGQQFBsO-fj';
  // https://drive.google.com/file/d/1zDGKZlg8E6d8wrZO8pUbOUGQQFBsO-fj/view?usp=drive_link
  const resumeViewUrl = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
  const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

  // Track mouse movement for 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Product Website',
      description: 'Responsive e-commerce storefront with modular React components and optimized routing',
      tech: ['React', 'CSS Flexbox/Grid', 'ReactRouter', 'JavaScript'],
      link: 'https://github.com/vaibhav91-singh/The-Unfold-A-web-Practice',
      icon: '🛍️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Meesho Clone',
      description: 'Multi-page UI clone with React and CSS, featuring mobile-first design and efficient state management',
      tech: ['React', 'CSS Flexbox/Grid', 'JavaScript', 'Responsive Design'],
      link: 'https://github.com/vaibhav91-singh/Meesho-Clone',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'News Application',
      description: 'Dynamic news app with API integration and routing, handling real-time data updates',
      tech: ['React', 'News API', 'React Router', 'JavaScript'],
      link: 'https://github.com/vaibhav91-singh/News_Apllication',
      icon: '📰',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Data Analysis Projects',
      description: 'Interactive Power BI dashboards for Uber, Blinkit, and Rapido with advanced DAX queries',
      tech: ['Power BI', 'DAX', 'Data Modeling', 'SQL'],
      link: 'https://github.com/vaibhav91-singh/Data-Analysis',
      icon: '📊',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Vue JS'], icon: '⚛️' },
    { category: 'Backend', items: ['Node JS', 'MongoDB', 'SQL', 'Django'], icon: '🔧' },
    { category: 'Data & Tools', items: ['Power BI', 'Python', 'Git', 'Automation'], icon: '📊' },
    { category: 'Languages', items: ['C', 'C++', 'Java', 'Python'], icon: '💻' }
  ];

  const testimonials = [
    {
      name: 'Your Client Name',
      role: 'Project Manager',
      message: 'Outstanding work on the web development projects. Delivered on time with excellent quality.',
      rating: 5
    },
    {
      name: 'Team Lead',
      role: 'Tech Company',
      message: 'Great attention to detail and proactive problem-solving. Highly recommended!',
      rating: 5
    },
    {
      name: 'Startup Founder',
      role: 'Tech Startup',
      message: 'Built our product MVP beautifully. Professional and reliable developer.',
      rating: 5
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const parallaxValue = scrollY * 0.5;

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        .glow-pulse {
          animation: glowPulse 2s ease-in-out infinite;
        }
        .perspective {
          perspective: 1000px;
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-hover:hover {
          transform: translateY(-10px) rotateX(5deg) rotateZ(-2deg);
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold animate-float">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Vaibhav Singh
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Resume', id: 'resume' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-slideInUp">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Resume', id: 'resume' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-cyan-400 py-2 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vaibhav Singh
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
              Full-Stack Developer & Data Analyst | React Specialist | Building beautiful web experiences with 3rd-year B.Tech CSE AI-DS
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group card-hover"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-400 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 card-hover"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/vaibhav91-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 card-hover"
              >
                <GitFork size={24} />
              </a>
              <a
                href="https://linkedin.com/in/vaibhav91-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 card-hover"
              >
                <Link2 size={24} />
              </a>
              <a
                href="mailto:singhvaibhav849@gmail.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 card-hover"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Animated Code Card */}
          <div className="relative animate-slideInRight">
            <div className="relative group perspective">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 blur-xl transition duration-1000 group-hover:blur-2xl"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="text-sm font-mono text-slate-400 mb-4">
                  <span className="text-red-400">&lt;</span><span className="text-cyan-400">Developer</span><span className="text-red-400">&gt;</span>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-slate-400">
                    <span className="text-slate-500">const</span> <span className="text-cyan-400">skills</span> <span className="text-slate-500">=</span> <span className="text-yellow-400">[</span>
                  </div>
                  <div className="ml-4 text-green-400">"React", "JavaScript", "Node.js"</div>
                  <div className="ml-4 text-green-400">"Power BI", "MongoDB", "Python"</div>
                  <div className="text-yellow-400">]</div>
                  <div className="mt-4 text-slate-400">
                    <span className="text-slate-500">const</span> <span className="text-cyan-400">passion</span> <span className="text-slate-500">=</span> <span className="text-purple-400">"Building Amazing UX"</span>
                  </div>
                  <div className="text-slate-400 mt-4">
                    <span className="text-red-400">&lt;/</span><span className="text-cyan-400">Developer</span><span className="text-red-400">&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-slideInUp">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate 3rd-year B.Tech student in Computer Science Engineering with AI-DS specialization (CGPA: 7.2) at Greater Noida Institute of Technology. My journey in tech has been driven by curiosity and a love for building beautiful, functional applications.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in <strong>React.js</strong> development and have hands-on experience with full-stack web development. Beyond coding, I'm skilled in data analysis using <strong>Power BI</strong>, creating actionable insights from complex datasets.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My academic achievements include certifications from IIT Kanpur in C Programming and OOPS with C++, and a Government of India Design Patent (Design No.: 452336-001) for a Real-Time Facial Expression Recognition Device.
              </p>
              <div className="pt-4">
                <p className="text-slate-400 mb-3">Currently exploring:</p>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Data Analysis', 'Automation', 'AI/ML'].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-slate-800 border border-cyan-500/50 rounded-full text-sm text-cyan-300 hover:bg-slate-700 transition-all duration-300 card-hover"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '4+', label: 'Web Projects', icon: '🚀' },
                  { number: '3+', label: 'Data Projects', icon: '📊' },
                  { number: '10+', label: 'Certifications', icon: '🏆' },
                  { number: '7.2', label: 'CGPA', icon: '📚' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 card-hover"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center animate-slideInUp">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="animate-slideInUp card-hover group"
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 h-full hover:border-cyan-500 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-slate-700 text-cyan-300 border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group/link"
                    >
                      View Project
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center animate-slideInUp">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="animate-slideInUp card-hover"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-slate-300 group/skill"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover/skill:scale-150 transition-transform"></div>
                        <span className="group-hover/skill:translate-x-1 transition-transform">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center animate-slideInUp">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <div className="animate-slideInLeft card-hover">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 h-full hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <FileText size={32} className="text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">My Resume</h3>
                    <p className="text-slate-400 text-sm">Hosted on Google Drive</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed">
                  View my detailed resume including education, skills, projects, certifications, and academic achievements.
                </p>

                <div className="space-y-4">
                  <a
                    href={resumeViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 justify-center card-hover"
                  >
                    <FileText size={20} />
                    View Resume
                  </a>
                  <a
                    href={resumeDownloadUrl}
                    className="flex items-center gap-2 w-full px-6 py-3 border-2 border-slate-400 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 justify-center card-hover"
                  >
                    <Download size={20} />
                    Download PDF
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-4">Quick Links:</p>
                  <div className="flex flex-wrap gap-2">
                    {['B.Tech CSE AI-DS', 'CGPA: 7.2', 'IIT Certifications', 'Design Patent'].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs rounded-full bg-slate-700 text-cyan-300 border border-cyan-500/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="animate-slideInRight space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 hover:border-cyan-500 transition-all duration-300 card-hover">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-500 pl-4">
                    <p className="font-semibold text-white">B.Tech in CSE - AI & Data Science</p>
                    <p className="text-slate-400 text-sm">Greater Noida Institute of Technology</p>
                    <p className="text-slate-400 text-sm">2023 - 2027 | CGPA: 7.2</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-4">
                    <p className="font-semibold text-white">Intermediate (U.P Board)</p>
                    <p className="text-slate-400 text-sm">2021 - 2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 hover:border-cyan-500 transition-all duration-300 card-hover">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Certifications</h3>
                <div className="space-y-3">
                  {[
                    'Student Development Program - C Programming (IIT Kanpur)',
                    'Student Development Program - OOPS with C++ (IIT Kanpur)',
                    'React JS - Udemy JavaScript for Beginners',
                    'Skill Up Front End Development (Simpli Learn)',
                    'Git & GitHub (PW Academy)'
                  ].map((cert) => (
                    <div key={cert} className="flex gap-2 text-sm">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span className="text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center animate-slideInUp">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="animate-slideInUp card-hover"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 hover:border-cyan-500 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-slate-300 italic mb-6">"{testimonial.message}"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center animate-slideInUp">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'singhvaibhav849@gmail.com', link: 'mailto:singhvaibhav849@gmail.com' },
              { icon: Link2, label: 'LinkedIn', value: 'vaibhav91-singh', link: 'https://linkedin.com/in/vaibhav91-singh' },
              { icon: GitFork, label: 'GitHub', value: 'vaibhav91-singh', link: 'https://github.com/vaibhav91-singh' }
            ].map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-cyan-500 transition-all duration-300 card-hover text-center"
                >
                  <Icon size={32} className="text-cyan-400 mx-auto mb-3" />
                  <p className="font-semibold text-white mb-1">{contact.label}</p>
                  <p className="text-slate-400 text-sm">{contact.value}</p>
                </a>
              );
            })}
          </div>

          <form onSubmit={handleContactSubmit} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 hover:border-cyan-500 transition-all duration-300 animate-slideInUp">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 card-hover"
              >
                Send Message
                <ArrowRight size={20} />
              </button>
              {formSubmitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center animate-slideInUp">
                  ✓ Message sent successfully!
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-slate-400">
                Designed & Built by AI And <span className="text-cyan-400 font-semibold">Vaibhav Singh</span>
              </p>
            </div>
            <div className="flex justify-center gap-6">
              {[
                { name: 'GitHub', url: 'https://github.com/vaibhav91-singh' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/vaibhav91-singh' },
                { name: 'Email', url: 'mailto:singhvaibhav849@gmail.com' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-right">
              <p className="text-slate-400">© 2026 All rights reserved</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>Built with React • Styled with Tailwind CSS • Animated with CSS3 & JavaScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio3D;
