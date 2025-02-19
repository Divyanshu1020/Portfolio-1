import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background">
          <ShootingStars />
          <StarsBackground />
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Divyanshu</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer specializing in building exceptional digital experiences
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="https://github.com" 
              className="p-2 rounded-full  text-white hover:bg-gray-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              className="p-2 rounded-full  text-white hover:bg-gray-700  transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:contact@example.com" 
              className="p-2 rounded-full  text-white hover:bg-gray-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
          {/* <motion.button 
            className="bg-transparent text-white  rounded-lg text-lg font-medium  transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Know me more
          </motion.button> */}
        </motion.div>
      </div>
  
    </section>
  );
};

export default Hero;