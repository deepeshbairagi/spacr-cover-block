# Web3Forms Setup - Simple Email Solution

## Quick Setup (2 Minutes)

### Step 1: Get Your Access Key
1. Go to **https://web3forms.com/**
2. Enter your email: **sales@spacrconcrete.com**
3. Click "Get Your Access Key"
4. Copy the access key (it will look like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add to Environment Variables
Create a `.env` file in the root directory (if it doesn't exist):

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Replace `your_access_key_here` with the access key you got from Web3Forms.

### Step 3: Restart Development Server
```bash
npm run dev
```

## That's It! 🎉

Now when someone submits the contact form, you'll receive emails at **sales@spacrconcrete.com**

## Features
- ✅ **Free** - 250 submissions per month
- ✅ **No backend required** - Works directly from frontend
- ✅ **Spam protection** - Built-in spam filtering
- ✅ **Easy setup** - Just need an access key
- ✅ **Reliable** - 99.9% uptime

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox at **sales@spacrconcrete.com**
4. You should receive the form submission within seconds!

## Troubleshooting
- If emails are not received, check the browser console for error messages
- Make sure the `.env` file is in the root directory
- Restart the dev server after adding the access key
- Verify the access key is correct (no extra spaces)

## Upgrade (Optional)
If you need more than 250 submissions/month, Web3Forms offers paid plans starting at $5/month.

