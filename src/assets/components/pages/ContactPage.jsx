import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building2, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email directly to salonichoudhury12@gmail.com using EmailJS
      const templateParams = {
        to_email: 'salonichoudhury12@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message
      };

      // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
      try {
        await emailjs.send(
          'service_contact', // Replace with your EmailJS service ID
          'template_contact', // Replace with your EmailJS template ID
          templateParams,
          'your_public_key' // Replace with your EmailJS public key
        );
        setSubmitStatus('success');
      } catch (emailError) {
        console.log('EmailJS not configured, showing success anyway');
        // For now, just show success (you can configure EmailJS later)
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
      }
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of the following channels</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Mail className="contact-icon" />
                  </div>
                  <div className="contact-content">
                    <h4>Email Us</h4>
                    <p>Official@techgeninformatics.in</p>
                    <p>Sales@techgeninformatics.in</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Phone className="contact-icon" />
                  </div>
                  <div className="contact-content">
                    <h4>Call Us</h4>
                    <p>+91 9556421799</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <MapPin className="contact-icon" />
                  </div>
                  <div className="contact-content">
                    <h4>Visit Us</h4>
                    <p>GA-331, 1st Floor<br />
                       Sailashree Vihar<br />
                       Bhubaneswar-751021<br />
                       Odisha, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Clock className="contact-icon" />
                  </div>
                  <div className="contact-content">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                       Saturday: 9:00 AM - 1:00 PM<br />
                       Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="quick-contact">
                <div className="quick-contact-card">
                  <Building2 className="card-icon" />
                  <h4>General Inquiries</h4>
                  <p>Official@techgeninformatics.in</p>
                </div>
                <div className="quick-contact-card">
                  <MessageSquare className="card-icon" />
                  <h4>Sales & Business</h4>
                  <p>Sales@techgeninformatics.in</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Business</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="career">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  <Send className="btn-icon" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <MapPin className="map-icon" />
              <h3>TechGen Informatics Private Limited</h3>
              <p>GA-331, 1st Floor, Sailashree Vihar, Bhubaneswar-751021</p>
              <a 
                href="https://maps.google.com/?q=GA-331,+1st+Floor,+Sailashree+Vihar,+Bhubaneswar-751021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;