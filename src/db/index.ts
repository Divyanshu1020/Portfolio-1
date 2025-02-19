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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.",
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
`,
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription: `A powerful task management solution designed for team collaboration. Notable features include:
  
  • Real-time updates using WebSocket
  • Drag-and-drop task organization
  • Team workspaces and permissions
  • File attachments and sharing
  • Task comments and mentions
  • Due date reminders
  • Progress tracking
  • Integration with popular tools
  • Detailed activity logs`,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using GPT-3.",
    longDescription: `Leveraging the power of AI to revolutionize content creation. Key features include:
  
  • Integration with OpenAI's GPT-3
  • Multiple content types support
  • Custom tone and style settings
  • SEO optimization suggestions
  • Content history and versioning
  • Export to multiple formats
  • Team collaboration tools
  • Analytics and performance tracking
  • API access for developers`,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
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
    description:
      `
Built a responsive and visually appealing portfolio website for a client to showcase their projects.
Collaborated with the client to ensure the design met their requirements and expectations.
Implemented SEO-friendly features to improve visibility.
`,
  },
];
