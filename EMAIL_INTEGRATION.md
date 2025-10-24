# Email Integration Setup Guide

## Quick Setup Options for FurCircle Waitlist

### Option 1: Google Forms (Easiest - 5 minutes)

1. **Create Google Form**:
   - Go to [forms.google.com](https://forms.google.com)
   - Create new form titled "FurCircle Waitlist"
   - Add one field: "Email address" (set as required)

2. **Get Form URL**:
   - Click "Send" → "Link" tab
   - Copy the form URL

3. **Update the form**:
   Replace the `onSubmit` function in `SubscribeForm.tsx`:
   ```tsx
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     window.open('YOUR_GOOGLE_FORM_URL', '_blank');
     setIsSubmitted(true);
   };
   ```

### Option 2: Typeform (Professional - 10 minutes)

1. **Create Typeform**:
   - Go to [typeform.com](https://typeform.com)
   - Create new form with email question
   - Customize design to match FurCircle branding

2. **Get embed code**:
   - Click "Share" → "Embed"
   - Copy the embed code

3. **Replace current form**:
   ```tsx
   // Replace the entire form with Typeform embed
   <div data-tf-widget="YOUR_FORM_ID"></div>
   ```

### Option 3: Notion Database (Free - 15 minutes)

1. **Create Notion page**:
   - Create new database with "Email" and "Date" columns
   - Get integration token from [notion.so/my-integrations](https://notion.so/my-integrations)

2. **Add API endpoint**:
   Create `src/app/api/subscribe/route.ts`:
   ```typescript
   import { NextRequest, NextResponse } from 'next/server';

   export async function POST(request: NextRequest) {
     const { email } = await request.json();
     
     // Add to Notion database
     const response = await fetch('https://api.notion.com/v1/pages', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
         'Content-Type': 'application/json',
         'Notion-Version': '2022-06-28'
       },
       body: JSON.stringify({
         parent: { database_id: process.env.NOTION_DATABASE_ID },
         properties: {
           Email: { email: email },
           Date: { date: { start: new Date().toISOString() } }
         }
       })
     });

     return NextResponse.json({ success: true });
   }
   ```

### Option 4: Mailchimp (Marketing focused)

1. **Create Mailchimp account**
2. **Create audience**
3. **Get API key and audience ID**
4. **Update form submission to call Mailchimp API**

## Environment Variables

For Notion integration, add to `.env.local`:
```
NOTION_TOKEN=your_integration_token
NOTION_DATABASE_ID=your_database_id
```

## Color Scheme Customization

Ready to update colors based on your image! To customize:

1. **Update Tailwind colors** in `tailwind.config.js`
2. **Update gradient colors** in components
3. **Update brand colors** in `data/data.ts`

Send me your brand image and I'll provide exact color codes to update! 🎨