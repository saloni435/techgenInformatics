# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Enter your Gmail credentials: `salonichoudhury12@gmail.com`
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Templates

### For Career Applications:
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set Template ID: `template_career`
4. Use this template:

```
Subject: New Job Application - {{position}}

New job application received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Position: {{position}}
Experience: {{experience}}

Cover Letter:
{{cover_letter}}

Resume: {{resume_note}}
```

### For Contact Form:
1. Create another template with ID: `template_contact`
2. Use this template:

```
Subject: Contact Form - {{subject}}

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}  
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

## Step 4: Get Public Key
1. Go to "Account" -> "General"
2. Copy your **Public Key** (e.g., `abc123xyz`)

## Step 5: Update Code
Replace these placeholders in both CareerPage.jsx and ContactPage.jsx:

```javascript
// Replace these with your actual EmailJS credentials:
'service_career' → your_service_id
'template_career' → template_career  
'service_contact' → your_service_id
'template_contact' → template_contact
'your_public_key' → your_actual_public_key
```

## Step 6: Test
1. Fill out the career or contact form
2. Check `salonichoudhury12@gmail.com` for emails
3. Forms will work immediately after EmailJS setup!

## Current Status
✅ Forms are set up to send emails to: `salonichoudhury12@gmail.com`
✅ Career applications include all form data
✅ Contact forms include all message details
⚠️ Need to configure EmailJS credentials for actual email sending