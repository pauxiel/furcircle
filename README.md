# FurCircle Coming Soon Page

A beautiful, responsive coming soon page for FurCircle - the all-in-one pet services platform.

## 🐾 About FurCircle

FurCircle brings all pet services to one app — daycare, walks, grooming, vet care, and a neighbourhood community for pet lovers. One app, endless convenience and savings.

## ✨ Features

- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Email Waitlist**: Collect email addresses from interested users
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Dark Mode Support**: Automatic theme switching based on user preference
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Content Updates
Edit the content in `data/data.ts`:

```typescript
const data = {
    sitename: "FurCircle",
    sitetagline: "Bringing all pet services to one app 🐾",
    description: "Your custom description...",
    // ... other settings
}
```

### Services Icons
Update the services array to change the displayed pet services:

```typescript
services: [
    { name: "Daycare", icon: "🏠" },
    { name: "Walks", icon: "🚶" },
    // Add more services...
]
```

### Email Integration
The waitlist form is ready for integration with:
- **Google Forms**: Replace the form action in `SubscribeForm.tsx`
- **Typeform**: Embed Typeform widget
- **Notion**: Use Notion API for form submissions
- **Email services**: Integrate with Mailchimp, ConvertKit, etc.

## 📧 Email Collection Setup

### Option 1: Google Forms
1. Create a Google Form
2. Get the form action URL
3. Replace the form submission in `SubscribeForm.tsx`

### Option 2: Typeform
1. Create a Typeform
2. Get the embed code
3. Replace the current form with Typeform embed

### Option 3: Notion Database
1. Create a Notion database
2. Set up Notion API integration
3. Add API endpoint in `pages/api/subscribe.ts`

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimal with code splitting

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify

### Custom Server
1. Build: `npm run build`
2. Start: `npm start`

## 📞 Contact

For any questions about FurCircle:
- Email: info@furcircle.ca
- Website: https://furcircle.ca

## 📄 License

This project is licensed under the MIT License.

---

**Launch Timeline**: Less than 18 days! 🚀

Ready to revolutionize pet care? Join our waitlist and be the first to experience FurCircle!

## Credits
Built with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/). Original template by [Sandip Baikare](https://github.com/baikaresandip/)
