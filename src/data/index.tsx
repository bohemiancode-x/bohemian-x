import Upwork from "@/svgs/upwork";
import { Work } from "@/types";
import { Github, Linkedin, MailIcon } from "lucide-react";

export const navLinks = [
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "GitHub",
    href: "https://github.com/bohemiancode-x",
    external: true,
  },
];

export const works: Work[] = [
  {
    name: "Project Aurora - Klusterthon",
    overview: "Hackathon winning payment solution for small businesses",
    link: "https://aurora-v0.vercel.app/",
    image: "/assets/images/aurora.png",
    images: [],
    details: [
      `Participated in a 3-week hackathon with the aim of creating a solution to simplify small business payments.`,
      `Won silver medal after placing 2nd out of 300+ teams and 1,600+ participants.`,
      `Built with modern web technologies to provide seamless payment processing for small businesses.`,
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    scope: [
      "Full-Stack Development",
      "Payment Integration",
      "UI/UX Design",
      "Team Collaboration",
    ],
    year: 2023,
  },
  {
    name: "Akerele Jumoke Portfolio",
    overview: "Designer's portfolio showcasing UI/UX excellence",
    link: "https://akerelejumoke.design",
    image: "/assets/images/akerele-jumoke.png",
    images: [],
    details: [
      `Portfolio project for a top UI/UX designer developed with React.js and TailwindCSS.`,
      `Features responsive design and modern animations to showcase design work effectively.`,
    ],
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    scope: [
      "Front-End Development",
      "Portfolio Design",
      "Responsive Design",
      "Animation Implementation",
    ],
    year: 2025,
  },
  {
    name: "Facial Recognition App",
    overview: "AI-powered facial recognition application",
    link: "https://face-recognition-webapp.vercel.app/",
    image: "/assets/images/facial-recognition.png",
    images: [],
    details: [
      `An intelligent facial recognition application built with modern web technologies.`,
      `Features real-time face detection and recognition capabilities.`,
    ],
    technologies: ["React.js", "AI/ML", "Computer Vision", "JavaScript"],
    scope: [
      "AI Integration",
      "Front-End Development",
      "Computer Vision",
      "Real-time Processing",
    ],
    year: 2025,
  },
  {
    name: "PodSum",
    overview: "Podcast summarization platform",
    link: "https://podsum-chi.vercel.app/",
    image: "/assets/images/podsum.png",
    images: [],
    details: [
      `A platform that automatically generates summaries of podcast episodes.`,
      `Built with modern web technologies to help users quickly digest podcast content.`,
    ],
    technologies: ["React.js", "Next.js", "AI/ML", "TypeScript"],
    scope: [
      "Full-Stack Development",
      "AI Integration",
      "Content Processing",
      "User Experience",
    ],
    year: 2025,
  },
];

export const testimonials = [
  {
    name: "Prakshi Yadav",
    role: "Co-founder @Curiflow",
    testimonial: `Emmanuel made a significant impact during his time working with us at Curiflow. His problem-solving skills, attention to detail, and structured approach to challenges ensured that we consistently achieved high-quality outcomes. What stood out most was his reliability—he consistently delivered on time and proactively addressed potential issues. His expertise and commitment were truly valuable to our project, and I highly recommend him for any team looking for a dependable and skilled professional.`,
  },
  {
    name: "Jeremy Seals",
    role: "Data Engineer @ Blue Shield",
    testimonial: `Emmanuel was a fantastic engineer to work with at J3C. He is highly knowledgeable about front end fundamentals and passionate about delivering a product with an exceptional user experience. I enjoyed watching him grow in his skillset and become an invaluable asset to the team!`,
  },
  {
    name: "Leye A.",
    role: "Group CEO and President, CTA Fintech solutions",
    testimonial: `I hired Emmanuel to help design, develop and build our company website. I found Emmanuel very professional and diligent in all his tasks and activities. Emmanuel was reliable, flexible and highly responsive. Highly recommend!`,
  },
  // {
  //   name: "Gabi Odebode",
  //   role: "Client Review - 5.0 ⭐⭐⭐⭐⭐",
  //   testimonial: `It was absolutely amazing working with Emmanuel. Amazing developer highly recommend him.`,
  // },
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/bohemiancode-x",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/emmanueladisa/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/emmie_porsche",
  },
];

export const contactLinks = [
  {
    name: "Email",
    link: "mailto:emmieaddiz@gmail.com",
    icon: () => <MailIcon size={20} strokeWidth={2} />,
  },
  {
    name: "GitHub",
    link: "https://github.com/bohemiancode-x",
    icon: () => <Github size={20} strokeWidth={2} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/emmanueladisa/",
    icon: () => <Linkedin size={20} strokeWidth={2} />,
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~0138b6bb580d94e1a6",
    icon: () => <Upwork width={20} className="w-5 h-auto" />,
  },
];

export const footerLinks = [
  {
    name: "home",
    href: "/home",
  },
  {
    name: "projects",
    href: "/#projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
