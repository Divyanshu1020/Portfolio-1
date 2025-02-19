import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.',
    longDescription: `Our e-commerce platform provides a comprehensive solution for online retail businesses. Key features include:

• Secure user authentication and authorization
• Advanced product search and filtering
• Real-time inventory management
• Stripe payment integration
• Order tracking and history
• Admin dashboard for analytics
• Mobile-responsive design
• Performance optimization with React Query
• Automated testing with Jest and React Testing Library`,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
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
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool using GPT-3.',
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    technologies: ['Next.js', 'OpenAI API', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard for social media management.',
    longDescription: `A powerful social media analytics and management platform. Features include:

• Multi-platform integration (Twitter, Facebook, Instagram)
• Real-time analytics tracking
• Automated reporting
• Content scheduling
• Engagement metrics
• Competitor analysis
• Custom dashboard layouts
• Export capabilities
• Team collaboration tools`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Virtual Event Platform',
    description: 'A platform for hosting and managing virtual events and conferences.',
    longDescription: `A comprehensive virtual event platform designed for modern remote conferences. Key features include:

• Live streaming integration
• Virtual networking rooms
• Interactive workshops
• Ticket management
• Speaker profiles
• Schedule builder
• Chat and Q&A
• Analytics dashboard
• Recording management`,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Health & Fitness App',
    description: 'A comprehensive fitness tracking and workout planning application.',
    longDescription: `A complete health and fitness solution for personal wellness. Features include:

• Workout tracking
• Nutrition planning
• Progress visualization
• Custom workout plans
• Exercise library
• Goal setting
• Social sharing
• Integration with fitness devices
• Personal coaching`,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const technologies = [...new Set(allProjects.flatMap(project => project.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.technologies.includes(filter));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
        </div>

        <motion.h1 
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h1>

        <motion.div 
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <motion.button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button> */}
          {/* {technologies.map((tech, index) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === tech 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {tech}
            </motion.button>
          ))} */}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} setSelectedProject={setSelectedProject} />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-muted rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-none"
                onClick={(e) => e.stopPropagation()}
                style={{
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE/Edge
                }}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg"
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </motion.button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-white dark:text-black rounded-full text-xs font-medium"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none mb-8">
                    {selectedProject.longDescription
                      .split("\n")
                      .map((paragraph, index) => (
                        <motion.p
                          key={index}
                          className="mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.github}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllProjects;
