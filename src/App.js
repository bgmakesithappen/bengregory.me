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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <span className="tech-badge">AWS</span>
          <span className="tech-badge">Kubernetes</span>
          <span className="tech-badge">Docker</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">FastAPI</span>
          <span className="tech-badge">n8n</span>
          <span className="tech-badge">PostgreSQL</span>
        </div>
      </div>
      <div className="certifications">
        <h2>Certifications</h2>
        <p>AWS Certified Cloud Practitioner</p>
      </div>
    </div>
  );
}

function LinksILike() {
  const links = [
    {
      title: 'Kubernetes Documentation',
      url: 'https://kubernetes.io/docs/',
      description: 'Comprehensive resource for container orchestration and cluster management'
    },
    {
      title: 'n8n Workflow Automation',
      url: 'https://n8n.io/',
      description: 'Self-hosted workflow automation platform for building complex integrations'
    },
    {
      title: 'AWS Architecture Center',
      url: 'https://aws.amazon.com/architecture/',
      description: 'Reference architectures and best practices for cloud infrastructure design'
    },
    {
      title: 'React Documentation',
      url: 'https://react.dev/',
      description: 'Official React framework documentation and learning resources'
    },
    {
      title: 'FastAPI Framework',
      url: 'https://fastapi.tiangolo.com/',
      description: 'Modern Python web framework for building high-performance APIs'
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
      title: 'Kubernetes Portfolio',
      url: 'https://k8s.bengregory.me',
      description: 'Self-documenting Kubernetes deployment on AWS EKS featuring FastAPI backend and React frontend dashboard with comprehensive infrastructure automation',
      tech: ['Kubernetes', 'AWS EKS', 'FastAPI', 'React', 'Docker']
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
