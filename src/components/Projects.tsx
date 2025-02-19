import { AnimatePresence, motion } from "framer-motion";
import {  ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

import ProjectCard from "./ProjectCard";
import { allProjects, Project } from "@/db";
import Markdown from "react-markdown";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const modalVariants = {
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
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pb-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {allProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/all-projects">
            <motion.button
              className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <motion.span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div> */}

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
                <div className="p-8 max-w-4xl text-wrap ">
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
                    
                        <motion.p
                          className="mb-4 text-wrap "
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 +  0.1 }}
                        >
                          <Markdown>{selectedProject.longDescription}</Markdown>
                        </motion.p>
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
    </section>
  );
};

export default Projects;
