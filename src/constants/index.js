import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  can,
  radoms,
  threejs,
  linkedin,
  netflix,
  blog,
  apple,
  radomsWeb,
  newstapri,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Radoms Digital Pvt Ltd.",
    icon: radoms,
    iconBg: "#ffffff",
    date: "May 2024 - Present",
    points: [
      "Built and maintained company website (radomsdigital.com), showcasing services and tech capabilities of the firm.",
      "Developed features for newstapri.com, a news and quiz platform where users can participate in quizzes, win prizes, and stay updated with current affairs.",
      "Worked on an e-commerce platform, implementing both the admin dashboard and user-facing frontend, along with backend integration using Node.js and MongoDB.",
      "Contributed to LitConnect, a platform connecting authors and agents, by developing backend APIs to enable seamless collaboration.",
    ],
  },
  {
    title: "Frontend Developer intern",
    company_name: "Can Technologies",
    icon: can,
    iconBg: "#ffffff",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Led the upgrade from old-school PHP to the snazzy React framework, giving our website a fresh and modern feel.",
      "Ensured a seamless experience on every device by making the website not just mobile-friendly, but downright impressive on phones and tablets.",
      "Worked closely with backend folks to connect the new frontend with the server, making everything run smoothly.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ashish proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ashish does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ashish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Newstapri - news portal",
    description:
      "Newstapri is a web app where users can read current news and play fun quizzes to win prizes. It’s designed to make learning and staying updated more enjoyable.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: newstapri,
    source_code_link: "#",
    live_demo: "https://newstapri.com",
  },
  {
    name: "Radoms Digital",
    description:
      "Radoms Digital is the official website of a software development company. It showcases the company’s services, projects, and helps clients get in touch easily.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "yellow-text-gradient",
      },
    ],
    image: radomsWeb,
    source_code_link: "#",
    live_demo: "https://radomsdigital.com",
  },
  {
    name: "LitConnect",
    description:
      "LitConnect is an innovative platform designed to connect authors, publishers, and readers through engaging virtual book tours, promotions, and literary events.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Rest Apis",
        color: "yellow-text-gradient",
      },
    ],
    image: radomsWeb,
    source_code_link: "#",
    live_demo: "https://radomsdigital.com",
  },
  {
    name: "Apple - ThreeJS",
    description:
      "I built a landing page for the Apple iPhone 15 using React and 3D animations with Three.js. The page features smooth interactions and a modern, visually engaging design to showcase the product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "yellow-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/AshishPal8/apple_clone",
    live_demo: "https://ashish-apple.netlify.app/",
  },
  {
    name: "Linkedin Clone",
    description:
      "Developed a LinkedIn clone with React, Tailwind CSS, and Redux Toolkit, incorporating Firebase for secure user authentication. The platform offers a familiar space for professional networking and collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/AshishPal8/linkedin-clone",
    live_demo: "https://linkedin-clone-lac-eta.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "Built a Netflix-inspired web app using React, Tailwind CSS, and Context API for state management, offering seamless user authentication through Firebase. Delivers a secure and intuitive platform for streaming and entertainment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/AshishPal8/netflix-clone",
    live_demo: "https://netflix-clone-phi-lemon.vercel.app/",
  },
  {
    name: "Blog App",
    description:
      "Constructed a blog application with React, Tailwind CSS, and Appwrite for backend services, ensuring secure user authentication and robust content management. Provides an efficient platform for creating and sharing engaging blog posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/AshishPal8/Blog-app",
    live_demo: "https://blog-app-umber-five.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
