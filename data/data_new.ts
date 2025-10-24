const currentYear = new Date().getFullYear();
const data = {
    sitename: "FurCircle",
    sitetagline: "Bringing all pet services to one app 🐾",
    siteurl: "https://furcircle.ca",
    sitelogo: "/WhatsApp Image 2025-10-23 at 23.19.29.jpeg",
    title: "Coming Soon!",
    description: "Bringing all pet services to one app — daycare, walks, grooming, vet care, and a neighbourhood community for pet lovers. One app, endless convenience and savings.",
    newsletterheading: "🔔 Join the Waitlist",
    copyrightText: `Copyright © ${currentYear} FurCircle | Contact us: <a href="mailto:info@furcircle.ca" class="no-underline md:underline">info@furcircle.ca</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/furcircle",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/furcircle",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/company/furcircle",
        },
    ],
    // Additional FurCircle sections
    aboutSection: {
        title: "About FurCircle",
        content: "FurCircle is a modern platform helping pet owners manage all their pet care needs in one place. We're launching soon to revolutionize how you care for your furry family members."
    },
    whySection: {
        title: "Why FurCircle Matters",
        content: "Pet care is scattered. We make it seamless — one subscription, trusted professionals, and an engaged community all in one place."
    },
    services: [
        { name: "Daycare", icon: "🏠" },
        { name: "Walks", icon: "🚶" },
        { name: "Grooming", icon: "✂️" },
        { name: "Vet Care", icon: "🩺" },
        { name: "Community", icon: "👥" }
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;