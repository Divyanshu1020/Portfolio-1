export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}
type AllProjects = Project[];

export const allProjects: AllProjects = [
{
    title: "Spelling Practice with Audio",
    description:
      "Improve your spelling skills by listening to words and typing them correctly. A fun and interactive way to enhance your vocabulary!.",
    longDescription: `
### Improve your spelling skills by listening to words and typing them correctly. A fun and interactive way to enhance your vocabulary!.


## 🛠️ Technologies Used

- Next.js
- Tailwind CSS
- Framer Motion
`,
    image:
      "https://res.cloudinary.com/dnq2kbsta/image/upload/t_edit/portfolio/wmw7tobsbgngxwzycoj0",
    technologies: [
      "Next.js",
    ],
    github: "https://github.com/Divyanshu1020/Portfolio-1",
    live: "https://spellprap.vercel.app/",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application built with modern web technologies, featuring a responsive UI, smooth animations, and seamless state management.",
    longDescription: `
### A real-time chat application built with modern web technologies, featuring a responsive UI, smooth animations, and seamless state management.

## Features

- **Real-time Messaging** using Socket.IO
- **Responsive Design** with Tailwind CSS
- **Smooth Animations** powered by Framer Motion
- **Efficient State Management** using Redux Toolkit (RTK)
- **Modern API Integration** with RTK Query
- **Secure Authentication** with JWT
- **Image Sharing** with Cloudinary integration
- **Real-time User Status Updates**

## 🛠️ Technologies Used

- React.js
- Redux Toolkit & RTK Query
- Tailwind CSS
- Framer Motion
- Socket.IO Client
- JWT for authentication
`,
    image:
      "https://res.cloudinary.com/dnq2kbsta/image/upload/v1739950577/portfolio/a9gnjg7mtze9mwvek79r.jpg",
    technologies: [
      "React",
      "node.js",
      "express",
      "socket.io",
      "redux",
      "mongoDB",
    ],
    github: "https://github.com/Divyanshu1020/VideoChatApp-Frontend",
    live: "https://chat-app-olive-ten.vercel.app/",
  },
  {
    title: "The Fanfiction Frontier",
    description:
      "Unleash Your Inner Storyteller! Write engaging blogs about your favorite characters, explore mind-bending alternate realities, or simply share your passionate thoughts with a community of fellow enthusiasts.",
    longDescription: `
    # What If? The Fanfiction Frontier

What If? is a web application built with React, Tailwind CSS, and TypeScript, leveraging Appwrite for backend services. It provides a platform for users to create and share blog posts centered around fan fiction, character analysis, and personal opinions.

## Tech Stack:
- Frontend: React, Tailwind CSS, TypeScript
- Backend: Appwrite

## Key Features:

- **Unrestricted Creativity**: Write about any character, from Marvel and Anime to your own original creations.
- **Interactive Community**: Connect with fans, share ideas, and engage in lively discussions.
- **Sleek Design**: Immerse yourself in a visually stunning platform built with React, Tailwind CSS, and TypeScript.
- **Powerful Backend**: Enjoy a seamless user experience powered by Appwrite.
### Join the What If? movement and let your imagination run wild!

    `,
    image:
      "https://res.cloudinary.com/dnq2kbsta/image/upload/c_crop,g_auto,h_626,w_1234/portfolio/s9po66wkx6860bmausvd",
    technologies: ["React", "Tailwind CSS", "TypeScript","Appwrite"],
    github: "https://github.com/Divyanshu1020/The-Fanfiction-Frontier",
    live: "https://wb.binaryvish.me/post/Tony%20Stark%7D/a-night-with-the-bat/66aaaab5000bb3ff8f5c",
  },
  {
    title: "Dev Magic: Summon the Spell of Creation",
    description:
      "This is a personal Command Line Interface (CLI) tool for quickly setting up React projects with a preferred folder structure and configurations. It's designed for personal use and to streamline the process of starting new React projects.",
    longDescription: `Dev Magic: Summon the Spell of Creation

**dev-magic** is an arcane CLI spell that conjures the bones of your application—frontend and backend—ready to harness the powers of React and Node.js. With a single incantation, it weaves together optimal, scalable structures imbued with legendary features: Redux, Axios, Tailwind, Socket.IO, Redis, Kafka, Prisma, Swagger, and GraphQL. Perfect for developers seeking an enchanted kickstart.

## Enchanted Powers

- **Frontend Creation Magic (React)**: Summons a basic React application from the void.
- **Backend Creation Magic (Node.js)**: Calls forth a Node.js backend with Express.
- **Feature Conjurations**:
  - **Redux** for spellbinding state control.
  - **Axios** for mystical HTTP requests.
  - **TailwindCSS** for woven styling.
  - **Socket.IO** for real-time communication.
  - **Redis** for caching and enchanted messaging.
  - **Kafka** for seamless event streaming.
  - **Prisma** for database ORM magic.
  - **Swagger** for clarity in API documentation.
  - **GraphQL** for powerful API architecture.
  `,
    image:
      "https://th.bing.com/th/id/OIP.C4l9TvrafiN-YRdS6e7nGwHaD4?rs=1&pid=ImgDetMain",
    technologies: ["Node.js", "TypeScript"],
    github: "https://github.com/Divyanshu1020/Dev-Magic-Project-Creator-CLI/tree/main",
    live: "https://www.npmjs.com/package/dev-magic",
  },
];
export const allExpriences = [
  {
    title: "Full-Stack Developer (Internship)",
    company: "The RD Group Of Industries",
    period: "Nov 2024 - jan 2025",
    description: `
    Contributed to an ongoing project built using Next.js, PostgreSQL, and Prisma.
    Designed and developed new features, including:
    Admin Control for Top Ten List: Enabled the admin to reorder items, update images, and dynamically manage the homepage.
    Search Result Management: Provided functionality for the admin to control website search results through the admin panel.

    `,
  },
  {
    title: "Freelance Web Developer (Freelance) ",
    company: "The Squirrel",
    period: "Oct 2024 – Nov 2024",
    description: `
Built a responsive and visually appealing portfolio website for a client to showcase their projects.
Collaborated with the client to ensure the design met their requirements and expectations.
Implemented SEO-friendly features to improve visibility.
`,
  },
];
