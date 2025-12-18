import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Anh Thu Nguyen — Marketing Executive",
  author: "Nguyễn Thị Anh Thư",
  description:
    "Dynamic, results-driven Marketing Executive with nearly 3 years of experience in international enterprises in HCMC. Fluent in English with a Bachelor's in International Business.",
  lang: "en",
  siteLogo: "/images/avatar_jd.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Education", href: "#education" },
    { text: "Certificates", href: "#certificates" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/ntathu/" },
    { text: "Email", href: "mailto:nguyenthianhthu.work@gmail.com" },
    { text: "Phone", href: "tel:+84336911240" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://example.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nguyễn Thị Anh Thư",
    specialty: "Marketing Executive",
    summary:
      "I’m a dynamic and results-driven Gen-Z Marketing Executive with nearly 3 years of experience in international enterprises in HCMC. Fluent in English and holding a Bachelor’s degree in International Business. With a strong track record in collaborating with cross-cultural teams and international clients, I specialize in developing and executing impactful marketing strategies.",
    email: "nguyenthianhthu.work@gmail.com",
  },
  experience: [
    {
      company: "International Enterprise (HCMC)",
      position: "Marketing Executive",
      startDate: "2022",
      endDate: "Present",
      summary: [
        "Collaborated with cross-cultural teams and international clients to deliver impactful strategies.",
        "Led project management and event planning across trade and digital marketing initiatives.",
        "Developed and executed multi-channel marketing campaigns aligned to business goals.",
      ],
    },
  ],
  projects: [
    {
      name: "Product Launch Campaign",
      summary:
        "Designed and executed cross-channel funnel (Social/Google/Email) to drive qualified leads and brand awareness.",
      linkPreview: "/",
      image: "/spotifu.png",
    },
    {
      name: "Ads Performance Optimization",
      summary:
        "Restructured ad accounts and ran A/B tests on creatives and audiences to improve conversion efficiency.",
      linkPreview: "/",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Nguyễn Thị Anh Thư — a dynamic, results-driven Marketing Executive. I focus on project management, event planning, and trade & digital marketing, collaborating with cross-cultural teams to create measurable impact.

      I bring a global perspective and creative flair to every campaign, leveraging data-driven execution and continuous optimization to help businesses grow sustainably.
    `,
    image: "/images/avatar_jd.jpg",
  },
  certificates: [
    {
      name: "IELTS 6.0",
      issuer: "British Council / IDP",
      date: "",
      image: "/images/IELTS%20test%20results_Thu%20Nguyen.jpeg",
    },
    {
      name: "Foundations of Project Management",
      issuer: "Google",
      date: "",
      credentialLink:
        "/images/Google_Foundations%20of%20Project%20Management.pdf",
    },
    {
      name: "Marketing in a Digital World",
      issuer: "University of Illinois",
      date: "",
      credentialLink:
        "/images/University%20of%20Illinois_Marketing%20in%20a%20Digital%20World.pdf",
    },
    {
      name: "Vector Graphic Basics",
      issuer: "Design Anthropology School",
      date: "",
      image: "/images/DAS_Vector%20Graphic%20Basics.JPG",
    },
    {
      name: "Negotiation & Persuasion",
      issuer: "RSM Vietnam",
      date: "",
      credentialLink: "/images/RSM%20Vietnam_Negotiation%20%26%20Persuasion.pdf",
    },
    {
      name: "Women in Leadership",
      issuer: "RSM Vietnam",
      date: "",
      credentialLink: "/images/RSM%20Vietnam_Women%20in%20Leadership.pdf",
    },
  ],
  education: [
    {
      institution: "University of Finance - Marketing (UFM)",
      degree: "Bachelor of International Business",
      program: "Advanced Program",
      yearOfGraduation: "2023",
      classification: "Good",
    },
    {
      institution: "University of Economics — The University of Da Nang (DUE)",
      degree: "Master of Business Administration",
      startDate: "Sept 2025",
      endDate: "Present",
    },
  ],
};

// #5755ff
