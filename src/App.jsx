import { useState } from 'react';
import './App.css';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateField(name, value) {
  if (name === 'name' && value.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (name === 'email' && !isValidEmail(value)) {
    return 'Please enter a valid email address';
  }
  if (name === 'message' && value.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  return '';
}

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNavClick = (e) => {
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || !targetId.startsWith('#') || targetId === '#') return;
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;
    e.preventDefault();
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFilterClick = (category) => setActiveFilter(category);

  const cardStyle = (category) =>
    activeFilter === 'all' || activeFilter === category
      ? undefined
      : { display: 'none' };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const inputClass = (name) => {
    if (!touched[name]) return undefined;
    return errors[name] ? 'error' : 'success';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      setSubmitted(false);
    }, 3000);
  };

  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 6 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 8 will teach you how to break this into smaller pieces

  return (
    <div className="portfolio">
      {/* TODO: Add your navigation here */}
      {/* HINT: Replace <a href="#home" class="nav-link"> with <a href="#home" className="nav-link" onClick={handleNavClick}> */}
      {/* HINT: Replace onclick with onClick={handleNavClick} */}

      <nav id="navbar">
        <div className="nav-brand">
          <span>Yaelle Tang</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile menu toggle (for bonus implementation) */}
        <div className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* TODO: Add your hero section here */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Yaelle Tang</h1>
          <p className="hero-subtitle">
            Data journalist and Frontend Developer
          </p>
          <p className="hero-tagline">
            Creating beautiful, responsive web experiences with modern
            technologies
          </p>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={handleNavClick}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={handleNavClick}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* TODO: Add your about section here */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a bilingual data journalist specializing in investigations
                at the intersection of public health, urban equity, and social
                systems. This summer, I am interning at the Philadelphia
                Inquirer as a DJNF Data Journalism Fellow. Currently studying at
                UC Berkeley, pursuing Master degree in Journalism and a Data
                Science certificate.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <a href="mailto:yueyang_tang@berkeley.edu">
                    yueyang_tang@berkeley.edu
                  </a>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📱</span>
                  <span>(123) 456-7890</span>
                </div>
              </div>
            </div>
            <div className="about-availability">
              <h3>Currently Available For:</h3>
              <div className="availability-tags">
                <span className="tag tag-available">Freelance</span>
                <span className="tag tag-available">Internship</span>
                <span className="tag tag-available">Fellowship</span>
                <span className="tag tag-available">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Add your skills section here */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">⚛️</span>
                <h3 className="skill-name">React</h3>
              </div>
              <div className="skill-category">Frontend Framework</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': '90%' }}
                ></div>
              </div>
              <span className="skill-percentage">90%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎨</span>
                <h3 className="skill-name">CSS3</h3>
              </div>
              <div className="skill-category">Styling</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': '95%' }}
                ></div>
              </div>
              <span className="skill-percentage">95%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">📱</span>
                <h3 className="skill-name">Responsive Design</h3>
              </div>
              <div className="skill-category">Design</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': '88%' }}
                ></div>
              </div>
              <span className="skill-percentage">88%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🚀</span>
                <h3 className="skill-name">JavaScript</h3>
              </div>
              <div className="skill-category">Programming</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': '85%' }}
                ></div>
              </div>
              <span className="skill-percentage">85%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎯</span>
                <h3 className="skill-name">Figma</h3>
              </div>
              <div className="skill-category">Design Tools</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': '80%' }}
                ></div>
              </div>
              <span className="skill-percentage">80%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🌐</span>
                <h3 className="skill-name">Node.js</h3>
              </div>
              <div className="skill-category">Backend</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': '75%' }}
                ></div>
              </div>
              <span className="skill-percentage">75%</span>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Add your projects section here */}
      {/* HINT: For filter buttons, use onClick={() => handleFilterClick('category')} */}

      <section id="projects" className="section">
        <div className="container">
          <h2>Featured Projects</h2>
          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button
              className={`filter-btn${activeFilter === 'all' ? ' active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn${activeFilter === 'frontend' ? ' active' : ''}`}
              onClick={() => handleFilterClick('frontend')}
            >
              Frontend
            </button>
            <button
              className={`filter-btn${activeFilter === 'fullstack' ? ' active' : ''}`}
              onClick={() => handleFilterClick('fullstack')}
            >
              Full-Stack
            </button>
            <button
              className={`filter-btn${activeFilter === 'design' ? ' active' : ''}`}
              onClick={() => handleFilterClick('design')}
            >
              Design
            </button>
            <button
              className={`filter-btn${activeFilter === 'webapp' ? ' active' : ''}`}
              onClick={() => handleFilterClick('webapp')}
            >
              Web App
            </button>
          </div>

          <div className="projects-grid">
            <div
              className="project-card featured"
              data-category="frontend"
              style={cardStyle('frontend')}
            >
              <div className="project-image">
                <img
                  src="https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App"
                  alt="E-Commerce Platform"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {' '}
                      <span>💻</span> Code{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">E-Commerce Platform</h3>
                  <span className="project-category">Full-Stack</span>
                </div>
                <p className="project-description">
                  A modern e-commerce platform built with React and Node.js,
                  featuring shopping cart, payment integration, and admin
                  dashboard.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">MongoDB</span>
                  <span className="project-tag">Stripe</span>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              data-category="fullstack"
              style={cardStyle('fullstack')}
            >
              <div className="project-image">
                <img
                  src="https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App"
                  alt="Weather Dashboard"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {' '}
                      <span>💻</span> Code{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Weather Dashboard</h3>
                  <span className="project-category">Frontend</span>
                </div>
                <p className="project-description">
                  Clean and intuitive weather dashboard with location search,
                  7-day forecast, and beautiful animations.
                </p>
                <div className="project-tags">
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">CSS3</span>
                  <span className="project-tag">API</span>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              data-category="design"
              style={cardStyle('design')}
            >
              <div className="project-image">
                <img
                  src="https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager"
                  alt="Task Management App"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {' '}
                      <span>💻</span> Code{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Task Management App</h3>
                  <span className="project-category">Web App</span>
                </div>
                <p className="project-description">
                  Productivity app with drag-and-drop functionality, project
                  collaboration, and deadline tracking.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">Firebase</span>
                </div>
              </div>
            </div>

            <div
              className="project-card"
              data-category="webapp"
              style={cardStyle('webapp')}
            >
              <div className="project-image">
                <img
                  src="https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site"
                  alt="Portfolio Website"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {' '}
                      <span>💻</span> Code{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Creative Portfolio</h3>
                  <span className="project-category">Design</span>
                </div>
                <p className="project-description">
                  Responsive portfolio website for a graphic designer with
                  interactive galleries and smooth animations.
                </p>
                <div className="project-tags">
                  <span className="project-tag">HTML5</span>
                  <span className="project-tag">CSS3</span>
                  <span className="project-tag">GSAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Add your contact form here */}
      {/* HINT: Form will use onSubmit={handleFormSubmit} */}
      {/* HINT: Inputs will use onChange for real-time validation */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>
              I'm always interested in hearing about new opportunities and
              projects. Feel free to reach out!
            </p>

            <form
              className="contact-form"
              id="contact-form"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    required
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    required
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClass('message')}
                    required
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <div className="form-group form-group-full">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
              {submitted && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* TODO: Add your footer here */}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Yaelle Tang. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
