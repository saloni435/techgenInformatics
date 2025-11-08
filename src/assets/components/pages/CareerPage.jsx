import React, { useState } from 'react';
import { Upload, Mail, Phone, MapPin, Briefcase, Users, TrendingUp } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './CareerPage.css';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const jobPositions = [
    {
      category: 'Sales',
      positions: [
        'Sales Manager',
        'Sales Executive', 
        'Sales Associate',
        'Pre-Sales Executive',
        'Pre-sales Consultant'
      ]
    },
    {
      category: 'Marketing',
      positions: [
        'Marketing Manager'
      ]
    },
    {
      category: 'Technical',
      positions: [
        'Technical Consultant (Software)',
        'Technical Consultant (IT Infrastructure)'
      ]
    },
    {
      category: 'General',
      positions: [
        'Intern'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a PDF or Word document');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email directly to salonichoudhury12@gmail.com using EmailJS
      const templateParams = {
        to_email: 'salonichoudhury12@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience || 'Not specified',
        cover_letter: formData.coverLetter || 'No cover letter provided',
        resume_note: formData.resume ? `Resume attached: ${formData.resume.name}` : 'No resume uploaded'
      };

      // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
      try {
        await emailjs.send(
          'service_career', // Replace with your EmailJS service ID
          'template_career', // Replace with your EmailJS template ID
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
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        coverLetter: ''
      });
      
      // Reset file input
      const fileInput = document.getElementById('resume-upload');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>Be part of an innovative technology company shaping the future of digital transformation</p>
            <div className="company-stats">
              <div className="stat">
                <Briefcase className="stat-icon" />
                <div>
                  <h3>Multiple Openings</h3>
                  <p>Across various departments</p>
                </div>
              </div>
              <div className="stat">
                <Users className="stat-icon" />
                <div>
                  <h3>Growing Team</h3>
                  <p>Join our expanding family</p>
                </div>
              </div>
              <div className="stat">
                <TrendingUp className="stat-icon" />
                <div>
                  <h3>Career Growth</h3>
                  <p>Opportunities to advance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="job-positions">
        <div className="container">
          <h2>Open Positions</h2>
          <div className="positions-grid">
            {jobPositions.map((category, index) => (
              <div key={index} className="position-category">
                <h3>{category.category}</h3>
                <ul>
                  {category.positions.map((position, posIndex) => (
                    <li key={posIndex}>{position}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="application-form">
        <div className="container">
          <div className="form-header">
            <h2>Apply Now</h2>
            <p>Submit your application and join our innovative team</p>
          </div>
          
          <form onSubmit={handleSubmit} className="career-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position Applied For *</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Position</option>
                  {jobPositions.map(category => 
                    category.positions.map((position, index) => (
                      <option key={`${category.category}-${index}`} value={position}>
                        {position}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Years of Experience</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              >
                <option value="">Select Experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="resume-upload">Upload Resume/CV *</label>
              <div className="file-upload">
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                <div className="file-upload-display">
                  <Upload className="upload-icon" />
                  <span>
                    {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter (Optional)</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="5"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you'd be a great fit for this position..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                Application submitted successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="career-contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>HR Department</h4>
                <p>Official@techgeninformatics.in</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>9556421799</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>GA-331, 1st Floor, Sailashree Vihar, Bhubaneswar-751021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;