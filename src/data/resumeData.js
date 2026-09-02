// ============================================================
// Resume Data — 3 Roles extracted from 3 resumes
// ============================================================

export const personalInfo = {
  name: 'Vaibhav Singh',
  phone: '+91-9129019491',
  email: 'singhvaibhav849@gmail.com',
  github: 'https://github.com/vaibhav91-singh',
  linkedin: 'https://linkedin.com/in/vaibhav91-singh',
  location: 'Greater Noida, Uttar Pradesh, India',
  education: {
    degree: 'B.Tech in Computer Science & Engineering — AI & Data Science',
    university: 'Greater Noida Institute of Technology (GNIOT)',
    expected: '2027',
  },
  experience: {
    company: 'ElevenSkills',
    role: 'Software Development Intern',
    duration: 'Mar 2026 – May 2026 (1 Month Virtual)',
  },
  patent: {
    title: 'Real-Time Facial Expression Recognition Device (2025)',
    regNo: '452336-001',
    description:
      'Successfully conceptualized and developed AI-based hardware for automated emotion detection',
  },
  publication:
    'Engineered an AI-powered touchless workout assistant for real-time posture correction published in the International Journal of Information Movement',
};

// ============================================================
// Role 1 — Data Analyst / Data Engineer / AI & Data Science
// ============================================================
export const roleDataAnalyst = {
  id: 'data-analyst',
  title: 'Data Analyst',
  subtitle: 'Data Engineer — AI & Data Science Specialist',
  icon: '📊',
  gradient: 'from-cyan-500 to-blue-600',
  glowColor: 'rgba(6,182,212,0.4)',
  borderColor: 'border-cyan-500/40',
  accentColor: 'text-cyan-400',
  bgAccent: 'bg-cyan-500/10',
  resumeFileId: '1zDGKZlg8E6d8wrZO8pUbOUGQQFBsO-fj', // UPDATE with actual Drive ID
  summary:
    'Dynamic AI & Data Science undergraduate with a robust foundation in statistical modeling, predictive machine learning, and business intelligence visualization. Proven capability to architect data pipelines, clean massive datasets, and build intelligent extraction agents.',
  skills: [
    { category: 'Analytics & BI', items: ['Power BI', 'Power Query', 'Tableau', 'DAX'] },
    { category: 'Databases', items: ['SQL', 'MongoDB'] },
    {
      category: 'Programming',
      items: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'JavaScript'],
    },
    {
      category: 'ML & AI',
      items: ['LLM', 'RAG', 'Neural Networks', 'Generative AI', 'Prompt Engineering'],
    },
    { category: 'DevOps', items: ['Git', 'GitHub', 'Version Control'] },
  ],
  projects: [
    {
      title: 'AI-Powered Web Scraping Agent',
      tech: ['Python', 'BeautifulSoup', 'Gemini API'],
      duration: 'Feb 2026 – Present',
      github: 'https://github.com/vaibhav91-singh',
      description:
        'Developed an intelligent web scraping agent using Python, Requests, and BeautifulSoup to automatically extract and clean unstructured text from dynamic websites. Integrated Google GenAI SDK (Gemini-2.5-flash) via an OpenAI-compatible client to process scraped content and answer context-specific user queries accurately.',
      highlights: [
        'Auto-extracts text from dynamic websites with custom headers',
        'Gemini API integration for context-specific Q&A',
        'Robust exception handling and automated script optimization',
      ],
    },
    {
      title: 'Rapido Logistics Analysis',
      tech: ['Power BI', 'DAX'],
      duration: 'Mar 2026 – Apr 2026',
      github: 'https://github.com/vaibhav91-singh',
      description:
        'Analyzed extensive bike-taxi ride datasets to precisely identify demand hotspots and visualize granular profit-per-ride metrics. Developed dynamic Power BI dashboards to monitor operational turnaround times, driver allocation efficiency, and overall fleet productivity.',
      highlights: [
        'Demand hotspot identification & profit-per-ride metrics',
        'Dynamic Power BI dashboards for fleet productivity',
        'Operational turnaround time monitoring',
      ],
    },
    {
      title: 'Blinkit & Uber Market Analysis',
      tech: ['Power BI', 'Python'],
      duration: 'Jan 2026 – Feb 2026',
      github: 'https://github.com/vaibhav91-singh',
      description:
        'Converted messy delivery data into clear business insights using Power Query and custom DAX measures. Identified critical KPIs that successfully drove a projected 15% increase in driver allocation efficiency.',
      highlights: [
        'Data cleaning with Power Query & custom DAX',
        'KPI identification → 15% driver allocation improvement',
        'Business intelligence visualization',
      ],
    },
  ],
  certifications: [
    { name: 'Power BI For Data Analytics and Visualization', issuer: 'Microsoft', year: '2025' },
    { name: 'React.js & Node.js Complete Web Development', issuer: 'Udemy', year: '2026' },
    { name: 'Full Stack Generative and Agentic AI with Python', issuer: 'Udemy', year: '2026' },
  ],
};

// ============================================================
// Role 2 — Salesforce Developer
// ============================================================
export const roleSalesforceDev = {
  id: 'salesforce-dev',
  title: 'Salesforce Developer',
  subtitle: 'Aspiring Salesforce Professional',
  icon: '☁️',
  gradient: 'from-purple-500 to-indigo-600',
  glowColor: 'rgba(168,85,247,0.4)',
  borderColor: 'border-purple-500/40',
  accentColor: 'text-purple-400',
  bgAccent: 'bg-purple-500/10',
  resumeFileId: '1zDGKZlg8E6d8wrZO8pUbOUGQQFBsO-fj', // UPDATE with actual Drive ID
  summary:
    'Motivated B.Tech Computer Science undergraduate seeking a Salesforce Developer Intern position, combining strong full-stack foundations with platform-focused competencies. Experienced in leveraging Apex, JavaScript, and RESTful API integrations to design scalable architecture.',
  skills: [
    {
      category: 'Salesforce',
      items: [
        'Apex',
        'Triggers',
        'Controllers',
        'LWC',
        'Salesforce Flows',
        'SOQL',
        'Custom Objects',
        'Profiles',
        'Permission Sets',
        'Sharing Rules',
      ],
    },
    { category: 'Programming', items: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL'] },
    {
      category: 'Web Technologies',
      items: ['HTML', 'CSS', 'Tailwind CSS', 'RESTful API', 'JWT Authentication'],
    },
    { category: 'Databases', items: ['MongoDB', 'MySQL'] },
    {
      category: 'DevOps',
      items: ['Git', 'GitHub', 'Postman', 'Docker', 'CI/CD Pipelines', 'VS Code'],
    },
  ],
  projects: [
    {
      title: 'Institute Management System',
      tech: ['Salesforce Platform', 'Apex', 'Flows'],
      duration: 'Nov 2024 – Dec 2024',
      github: 'https://github.com/vaibhav91-singh',
      description:
        'Designed an end-to-end educational administration and student enrollment application on Salesforce using custom objects, master-detail relationships, and validation rules.',
      highlights: [
        'Custom Salesforce objects & master-detail relationships',
        'Record-Triggered Flows & SOQL queries for automation',
        'Student fee tracking, course notifications & admin dashboards',
      ],
    },
    {
      title: 'Video Sharing Platform',
      tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT'],
      duration: 'Feb 2026 – Present',
      github: 'https://github.com/vaibhav91-singh/Video-Sharing-Platform',
      description:
        'Engineered a scalable streaming application featuring secure authentication workflows, role-based access control, and modular backend routing logic.',
      highlights: [
        'Secure JWT-based authentication & role-based access',
        'Scalable streaming architecture',
        'Modular backend routing logic',
      ],
    },
    {
      title: 'Meesho Clone — E-Commerce App',
      tech: ['React.js', 'Redux', 'Node.js'],
      duration: 'Aug 2024 – Sep 2024',
      github: 'https://github.com/vaibhav91-singh/Meesho-Clone',
      description:
        'Built a high-performance e-commerce interface utilizing more than 15 reusable components and efficient state management to optimize component rendering and data flow.',
      highlights: [
        '15+ reusable React components',
        'Redux state management for optimal data flow',
        'High-performance rendering optimization',
      ],
    },
  ],
  certifications: [
    { name: 'React.js & Node.js Complete Web Development', issuer: 'Udemy', year: '2026' },
    { name: 'Full Stack Generative and Agentic AI with Python', issuer: 'Udemy', year: '2026' },
    { name: 'Power BI For Data Analytics and Visualization', issuer: 'Microsoft', year: '2025' },
  ],
};

// ============================================================
// Role 3 — Full Stack Developer / MERN Stack
// ============================================================
export const roleFullStack = {
  id: 'fullstack-dev',
  title: 'Full Stack Developer',
  subtitle: 'MERN Stack Developer — Software Engineer',
  icon: '⚡',
  gradient: 'from-emerald-500 to-teal-600',
  glowColor: 'rgba(16,185,129,0.4)',
  borderColor: 'border-emerald-500/40',
  accentColor: 'text-emerald-400',
  bgAccent: 'bg-emerald-500/10',
  resumeFileId: '1zDGKZlg8E6d8wrZO8pUbOUGQQFBsO-fj', // UPDATE with actual Drive ID
  summary:
    'Aspiring Software Engineer with a strong foundation in Full Stack Development, AI, and Data Science. Experienced in designing and deploying scalable web applications using the MERN stack and Python Django. Skilled in Data Structures, Algorithms, and Agile development.',
  skills: [
    { category: 'Frontend', items: ['React.js', 'React Router', 'HTML', 'CSS', 'Tailwind CSS'] },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express.js',
        'Django REST Framework',
        'RESTful API',
        'JWT Authentication',
      ],
    },
    { category: 'Programming', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL'] },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'CI/CD Pipelines', 'Git', 'GitHub', 'Postman', 'Power BI', 'VS Code'],
    },
  ],
  projects: [
    {
      title: 'Meesho Clone — E-Commerce App',
      tech: ['React.js', 'Node.js', 'REST API'],
      duration: 'Aug 2024 – Sep 2024',
      github: 'https://github.com/vaibhav91-singh/Meesho-Clone',
      description:
        'Engineered a high-performance, responsive e-commerce web application using more than 15 reusable React components, reducing page load time by 30% through memoization and lazy loading.',
      highlights: [
        '15+ reusable components, 30% faster load times',
        'Memoization & lazy loading optimization',
        'Redux state management for code reusability',
      ],
    },
    {
      title: 'TreHousing — Exam Preparation Platform',
      tech: ['React.js', 'Django REST Framework', 'SQL'],
      duration: 'Oct 2024 – Present',
      github: 'https://github.com/vaibhav91-singh/TreHousing',
      description:
        'Developed and deployed a scalable full-stack exam preparation platform with dynamic syllabus navigation and CRUD-based content management, using Agile Method based development.',
      highlights: [
        'Dynamic syllabus navigation & CRUD content management',
        'Django REST Framework backend',
        'Agile methodology development',
      ],
    },
    {
      title: 'Video Sharing Platform',
      tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT'],
      duration: 'Feb 2026 – Present',
      github: 'https://github.com/vaibhav91-singh/Video-Sharing-Platform',
      description:
        'Developing a scalable video streaming application featuring secure JWT-based authentication and role-based access control. Building real-time content filtering using RESTful APIs and a microservices-oriented backend architecture.',
      highlights: [
        'JWT authentication & role-based access control',
        'Real-time content filtering',
        'Microservices-oriented backend architecture',
      ],
    },
  ],
  certifications: [
    { name: 'React.js & Node.js Complete Web Development', issuer: 'Udemy', year: '2026' },
    { name: 'Power BI For Data Analytics and Visualization', issuer: 'Microsoft', year: '2025' },
    { name: 'Full Stack Generative and Agentic AI with Python', issuer: 'Udemy', year: '2026' },
  ],
};

// All roles array for easy iteration
export const allRoles = [roleDataAnalyst, roleSalesforceDev, roleFullStack];
