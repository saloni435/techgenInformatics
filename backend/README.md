# Backend Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Installation

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` file with your actual email credentials.

4. **Gmail App Password Setup:**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Enable 2-Factor Authentication
   - Go to Security → App passwords
   - Generate password for "Mail"
   - Use this 16-character password in `.env` file

## Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Career Applications
- **POST** `/api/career-application`
- Accepts multipart/form-data with resume file
- Sends email to: Official@techgeninformatics.in + salonichoudhury12@gmail.com

### Contact Form
- **POST** `/api/contact-form` 
- Accepts JSON data
- Routes emails based on subject

### Health Check
- **GET** `/api/health`
- Returns server status

## Security Features
- CORS protection
- Helmet security headers
- File type validation
- File size limits (5MB)
- Input sanitization

## Email Templates
- Professional HTML email formatting
- Resume attachments for career applications
- Automatic reply-to configuration for contact forms