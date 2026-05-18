import { socialLinks } from "@/data/social";

export const siteConfig = {
  name: "E&ICT Academy",
  fullName: "Electronics & ICT Academy, IIT Guwahati",
  tagline: "Training · Research · Innovation for North-East India",
  contact: {
    email: "eictacad@iitg.ac.in",
    phoneOffice: "+91-361-2583182",
    phoneMobile: "+91-7086502139",
    address: "Indian Institute of Technology, Amingaon-Doul Gobinda Road, near North Amingaon, IIT Guwahati, Guwahati, Assam 781039",
  },
  social: socialLinks,
  footer: {
    forStudents: [
      { label: "Register Online", href: "/portal/register" },
      { label: "Portal Login", href: "/portal/login" },
      { label: "Verify Certificate", href: "/portal/verify" },
      { label: "LMS", href: "/portal/lms" },
      { label: "Courses & Fees", href: "/academy/courses" },
    ],
    quickLinks: [
      { label: "Home", href: "/academy" },
      { label: "People", href: "/academy/people" },
      { label: "Infrastructure", href: "/academy/infrastructure" },
      { label: "Gallery", href: "/academy/gallery" },
      { label: "About", href: "/academy/about" },
      { label: "Contact Us", href: "/academy/contact" },
    ],
    aboutNe: [
      { label: "About Northeast India", href: "/academy/about#northeast-states" },
      { label: "NE States Outreach", href: "/academy/about#northeast-states" },
      { label: "IIT Guwahati", href: "https://www.iitg.ac.in/" },
      { label: "MeitY", href: "https://www.meity.gov.in/" },
    ],
  },
  heroSlides: [
    {
      src: "/images/iit-pic-1.jpg",
      alt: "IIT Guwahati campus",
      title: "Electronics & ICT Academy",
      subtitle: "IIT Guwahati · MeitY Initiative for North-East India",
    },
    {
      src: "/images/iit-pic-2.jpg",
      alt: "IIT Guwahati campus views",
      title: "Electronics & ICT Academy",
      subtitle: "Training · Research · Innovation for North-East India",
    },
    {
      src: "/images/iit-pic-3.png",
      alt: "IIT Guwahati facilities",
      title: "Industry-Ready ICT Programmes",
      subtitle: "400+ programmes · 25,000+ participants trained",
    },
    {
      src: "/images/iit-pic-4.png",
      alt: "IIT Guwahati academic environment",
      title: "Advance Your Career",
      subtitle: "Certifications in AI/ML, Cloud, Cybersecurity & more",
    },
    {
      src: "/images/iit-pic-5.png",
      alt: "IIT Guwahati events and community",
      title: "Electronics & ICT Academy",
      subtitle: "Empowering faculty, students, and professionals across the North-East",
    },
    {
      src: "/images/iit-pic-6.png",
      alt: "IIT Guwahati landscape",
      title: "Electronics & ICT Academy",
      subtitle: "IIT Guwahati · MeitY Initiative for North-East India",
    },
    {
      src: "/images/iit-pic-7.jpg",
      alt: "IIT Guwahati - new campus view",
      title: "Electronics & ICT Academy",
      subtitle: "Specialized training for faculties across India",
    },
  ],
  stats: [
    { label: "Programs Conducted", value: "400+" },
    { label: "Participants Trained", value: "25,000+" },
    { label: "Professional Certifications", value: "2,000+" },
    { label: "NE States Outreach", value: "8" },
  ],
  pillars: [
    {
      title: "Training",
      description: "Imparting training and mentorship to faculty across disciplines.",
    },
    {
      title: "Education",
      description: "Conducting quality programmes for employability enhancement.",
    },
    {
      title: "Research",
      description: "Providing platform to researchers for professional growth.",
    },
    {
      title: "Development & Innovation",
      description: "Building an eco-system to exchange ideas and create innovations.",
    },
  ],
  news: [
    {
      title: "Registration Link For Joint FDP on Classical ML (Online)",
      date: "May 18, 2026",
      isNew: false,
    },
    {
      title: "New courses in VLSI, Cybersecurity, and AIML starting end of 2026",
      date: "Nov 21, 2025",
      isNew: true,
    },
    {
      title: "Registration Guidelines for online courses",
      date: "Jan 27, 2026",
      isNew: true,
    },
    {
      title: "Register as a Spoke Institute with E&ICT Academy IIT Guwahati",
      date: "Jan 1, 2026",
      isNew: true,
    },
  ],
};
