import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'links', label: 'Links I Like' },
    { id: 'projects', label: 'Portfolio Projects' },
    { id: 'connect', label: 'Connect With Me' }
  ];

  return (
    <div className="App">
      <div className="container">
        <nav className="nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <main className="content">
          {activeTab === 'about' && <AboutMe />}
          {activeTab === 'links' && <LinksILike />}
          {activeTab === 'projects' && <PortfolioProjects />}
          {activeTab === 'connect' && <ConnectWithMe />}
        </main>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="section">
      <div className="profile-container">
        <img src="/profile.jpg" alt="Ben Gregory" className="profile-image" />
      </div>
      <h1>Ben Gregory</h1>
      <p className="bio">
      <p>I am an implementation-focused engineer who lives at the intersection of customers, infrastructure, and identity.</p>
      <br />
      <p>In practical terms, I'm a figure-it-the-hell-out-er.</p>

      <br />
         <p>Over the last few years I’ve led enterprise rollouts of security and access products, and plugged them into messy hybrid environments. I am the person that people call when a project is wobbling and needs to be made boring and reliable (yet fun and worth mentioning at the professional conference).</p>
      <br />
      <p>My day-to-day tools are Linux, Docker, IAM/PAM, and cloud services, with enough Python, JavaScript, and automation (n8n, APIs, scripting) to glue systems together and remove repetitive work. I care less about shiny features and more about making sure the system stays up, users can log in, and the path to “it works” is documented and repeatable.</p>
      <br />
      <p>Before my tech adventures began, I served in the U.S. Air Force as a mechanic on the C-17 Globemaster, fought wildland fires in the American West, sold real estate, and completed a full-stack web-dev bootcamp.</p>
      </p>
      <div className="tech-stack">
        <h2>(Some of The) Tools in My Toolbox</h2>
        <div className="tech-grid">
          <span className="tech-badge">AWS</span>
          <span className="tech-badge">Kubernetes</span>
          <span className="tech-badge">Docker</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">Linux</span>
          <span className="tech-badge">n8n</span>
          <span className="tech-badge">PostgreSQL</span>
        </div>
      </div>
      <div className="certifications">
        <h2>Certs (If You Roll Like That)</h2>
        <p>AWS Certified Cloud Practitioner</p>
      </div>
    </div>
  );
}

function LinksILike() {
  const links = [
    {
      title: 'Your Password Sucks',
      url: 'https://yourpasswordsucks.com/',
      description: 'Opinionated site encouraging strong, unique passwords and promoting password managers and breach checks.'
    },
    {
      title: 'Bitwarden',
      url: 'https://bitwarden.com/',
      description: 'Open-source password manager for securely storing and syncing passwords and passkeys across devices.'
    },
    {
      title: 'Collaboration Sucks',
      url: 'https://newsletter.posthog.com/p/collaboration-sucks',
      description: 'Newsletter essay on why most “collaboration” is wasteful and how to make team work more effective.'
    },
    {
      title: 'Notion.so',
      url: 'https://www.notion.so/',
      description: 'All-in-one workspace app for notes, docs, tasks, and databases for individuals and teams.'
    },
    {
      title: 'Have I Been Pwned',
      url: 'https://haveibeenpwned.com/',
      description: 'Breach-checking service to see if your email or passwords have appeared in known data leaks.'
    },
    {
      title: 'Proton',
      url: 'https://proton.me/',
      description: 'Privacy-focused suite of encrypted services including email, calendar, VPN, storage, and more.'
    }
  ];

  return (
    <div className="section">
      <h1>Links I Like</h1>
      <div className="links-grid">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-card">
            <h3>{link.title}</h3>
            <p>{link.description}</p>
            <span className="link-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function PortfolioProjects() {
  const projects = [
    {
      title: 'Kubernetes Hit Piece',
      url: 'https://k8s.bengregory.me',
      description: 'Self-documenting Kubernetes deployment on AWS EKS featuring FastAPI backend and React frontend dashboard with comprehensive infrastructure automation',
      tech: ['Kubernetes', 'AWS EKS', 'FastAPI', 'React', 'Docker']
    },
    {
      title: 'Docker Multi-Host Deployment',
      url: 'https://github.com/bgmakesithappen/docker-multi-host-deploy/blob/main/PORTFOLIO_SUMMARY.md',
      description: 'Automated deployment system that provisions cloud infrastructure and deploys containerized applications to multiple servers with a single command.',
      tech: ['Docker', 'AWS', 'Nginx', 'Terraform', 'Python']
    }
  ];

  return (
    <div className="section">
      <h1>Portfolio Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ConnectWithMe() {
  const connections = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bgmakesithappen/',
      icon: 'in'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/bgmakesithappen',
      icon: 'gh'
    }
  ];

  return (
    <div className="section">
      <h1>Connect With Me</h1>
      <div className="connect-grid">
        {connections.map((conn, index) => (
          <a key={index} href={conn.url} target="_blank" rel="noopener noreferrer" className="connect-card">
            <div className="connect-icon">{conn.icon}</div>
            <h3>{conn.platform}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
