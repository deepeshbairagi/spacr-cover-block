# EmailJS Setup Instructions

## How to Configure Email Sending

The contact forms are now configured to send emails to `sales@spacrconcrete.com` using EmailJS.

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)

### Step 2: Create Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
New contact form submission received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Address: {{address}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy your Template ID** (e.g., `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 5: Configure Environment Variables
Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual IDs from EmailJS.

### Step 6: Restart Development Server
After adding the `.env` file, restart your development server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form
2. Submit the form
3. Check your email inbox at `sales@spacrconcrete.com`
4. You should receive the form submission

## Notes
- The free plan allows 200 emails per month
- For production, consider upgrading to a paid plan
- Make sure to add `.env` to your `.gitignore` file to keep credentials secure

