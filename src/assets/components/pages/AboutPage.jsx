import React from 'react';
import { Users, Target, Award, Lightbulb, Globe, Zap, Building2, Heart } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="value-icon" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive digital transformation."
    },
    {
      icon: <Award className="value-icon" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, ensuring quality and reliability in every project."
    },
    {
      icon: <Heart className="value-icon" />,
      title: "Client-Centric",
      description: "Our clients' success is our success. We build lasting partnerships through trust, transparency, and results."
    },
    {
      icon: <Globe className="value-icon" />,
      title: "Global Reach",
      description: "We serve clients worldwide with localized expertise and global best practices."
    }
  ];

  const stats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About TechGen Informatics</h1>
            <p>Empowering businesses through innovative technology solutions and digital transformation</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>Who We Are</h2>
              <p>
                TechGen Informatics Private Limited is a leading technology company dedicated to transforming 
                businesses through innovative AI solutions, cloud services, and comprehensive IT consulting. 
                Founded with a vision to bridge the gap between cutting-edge technology and business needs, 
                we have been at the forefront of digital transformation.
              </p>
              <p>
                Our team of experienced professionals brings together expertise in artificial intelligence, 
                cloud computing, data analytics, and emerging technologies to deliver solutions that drive 
                growth, efficiency, and competitive advantage for our clients.
              </p>
            </div>
            <div className="overview-visual">
              <div className="company-highlight">
                <Building2 className="highlight-icon" />
                <h3>Established Excellence</h3>
                <p>Since our inception, we've been committed to delivering world-class technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission-card">
              <Target className="mv-icon" />
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive digital transformation, 
                enhance operational efficiency, and create sustainable competitive advantages in an ever-evolving 
                digital landscape.
              </p>
            </div>
            <div className="vision-card">
              <Zap className="mv-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the global leader in AI-driven technology solutions, recognized for our innovation, 
                excellence, and commitment to transforming how businesses operate and succeed in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                {value.icon}
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="company-stats">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose TechGen Informatics?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <Users className="reason-icon" />
              <h4>Expert Team</h4>
              <p>Our team consists of certified professionals with extensive experience in cutting-edge technologies.</p>
            </div>
            <div className="reason-card">
              <Award className="reason-icon" />
              <h4>Proven Track Record</h4>
              <p>We have successfully delivered numerous projects across various industries with measurable results.</p>
            </div>
            <div className="reason-card">
              <Lightbulb className="reason-icon" />
              <h4>Innovation First</h4>
              <p>We stay ahead of technology trends to provide our clients with the most advanced solutions available.</p>
            </div>
            <div className="reason-card">
              <Heart className="reason-icon" />
              <h4>Client Partnership</h4>
              <p>We build long-term relationships with our clients, ensuring their continued success and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how TechGen Informatics can help you achieve your digital transformation goals.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get In Touch</a>
              <a href="/services" className="btn-secondary">View Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;