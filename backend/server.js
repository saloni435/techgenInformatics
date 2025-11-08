const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Add your frontend URLs
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed'), false);
    }
  }
});

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use App Password for Gmail
    }
  });
};

// Career application endpoint
app.post('/api/career-application', upload.single('resume'), async (req, res) => {
  try {
    const { fullName, email, phone, position, experience, coverLetter } = req.body;
    const resumeFile = req.file;

    if (!resumeFile) {
      return res.status(400).json({ error: 'Resume file is required' });
    }

    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['Official@techgeninformatics.in', 'salonichoudhury12@gmail.com'],
      subject: `New Job Application - ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Job Application Received</h2>
          
          <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Applicant Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Position Applied For:</strong> ${position}</p>
            <p><strong>Experience:</strong> ${experience || 'Not specified'}</p>
          </div>

          ${coverLetter ? `
          <div style="background: #f0f7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Cover Letter</h3>
            <p style="white-space: pre-wrap;">${coverLetter}</p>
          </div>
          ` : ''}

          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Note:</strong> Resume/CV is attached to this email.</p>
          </div>

          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This application was submitted through the TechGen Informatics career portal.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `${fullName.replace(/\s+/g, '_')}_Resume_${Date.now()}.${resumeFile.originalname.split('.').pop()}`,
          content: resumeFile.buffer,
          contentType: resumeFile.mimetype
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully!' 
    });

  } catch (error) {
    console.error('Career application error:', error);
    res.status(500).json({ 
      error: 'Failed to submit application. Please try again.' 
    });
  }
});

// Contact form endpoint
app.post('/api/contact-form', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const transporter = createTransporter();

    // Determine recipients based on subject
    const recipients = subject === 'sales' 
      ? ['Sales@techgeninformatics.in', 'salonichoudhury12@gmail.com']
      : ['Official@techgeninformatics.in', 'salonichoudhury12@gmail.com'];

    const subjectMap = {
      'general': 'General Inquiry',
      'sales': 'Sales & Business Inquiry',
      'support': 'Technical Support Request',
      'partnership': 'Partnership Inquiry',
      'career': 'Career Inquiry',
      'other': 'General Inquiry'
    };

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: `${subjectMap[subject] || 'Contact Form'} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subjectMap[subject] || subject}</p>
          </div>

          <div style="background: #f0f7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Reply to:</strong> ${email}</p>
          </div>

          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This message was submitted through the TechGen Informatics contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running!' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size too large. Maximum 5MB allowed.' });
    }
  }
  res.status(500).json({ error: error.message || 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_USER || 'Not configured'}`);
});

module.exports = app;