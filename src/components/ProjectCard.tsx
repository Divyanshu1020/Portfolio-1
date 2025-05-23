import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { GlowingEffect } from "./ui/glowing-effect";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
export default function ProjectCard({ project, index, setSelectedProject }) {
  return (
    <motion.div
      key={index}
      className=" z-10 relative border border-gray-200 dark:border-gray-700  muted rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer "
      variants={item}
      onClick={() => setSelectedProject(project)}
      whileHover={{ y: -5 }}
    >
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={60}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <motion.div
        className="relative group rounded-t-lg overflow-hidden p-[1px] "
        // whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-t-lg "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
      </motion.div>

      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white  mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 sm:line-clamp-4 md:line-clamp-4">
          {project.description}
        </p>
        <div
          className="flex gap-2 mb-4 mt-auto overflow-x-auto flex-nowrap"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="relative  bg-blue-100 dark:bg-muted dark:text-black border text-blue-600 rounded-full text-xs p-[2px]"
              whileHover={{ scale: 1.05 }}
            >
              <Badge className=" text-nowrap" variant="secondary">{tech}</Badge>
            </motion.span>
          ))}
        </div>
        <div className="flex justify-between items-center ">
          <motion.a
            href={project.github}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.live}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
