'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code,  Github, 
  ExternalLink,  Moon, Star
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface Skill {
  category: string;
  items: string[];
}



export default function Home() {

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Chat Collect",
      description: "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      image: "/track.png", // Replace with actual image path
      timeframe: "Jan 2024 - Feb 2024",
      link: "https://chatcollect.com",
      github: "https://github.com/yourusername/chat-collect",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]
    },
    {
      title: "Magic UI",
      description: "Designed, developed and sold animated UI components for developers.",
      image: "/true.png", // Replace with actual image path
      timeframe: "June 2023 - Present",
      link: "https://magicui.design",
      github: "https://github.com/yourusername/magic-ui",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]
    },

    {
      title: "Magic UI",
      description: "Designed, developed and sold animated UI components for developers.",
      image: "/crack.png", // Replace with actual image path
      timeframe: "June 2023 - Present",
      link: "https://magicui.design",
      github: "https://github.com/yourusername/magic-ui",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]
    },
    {
      title: "Magic UI",
      description: "Designed, developed and sold animated UI components for developers.",
      image: "/batt.png", // Replace with actual image path
      timeframe: "June 2023 - Present",
      link: "https://magicui.design",
      github: "https://github.com/yourusername/magic-ui",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]
    },
    // ... add more projects as needed
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma ORM"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      category: "DevOps",
      items: ["AWS", "Docker", "CI/CD", "Git"]
    }
  ];

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0.1 }}
          animate={{
            x: mousePosition.x * (0.01 + i * 0.001),
            y: mousePosition.y * (0.01 + i * 0.001),
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          {i % 2 === 0 ? (
            <Moon className="text-yellow-500/10 w-3 h-3" />
          ) : (
            <Star className="text-yellow-500/10 w-2 h-2" />
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-12">
      <FloatingElements />
      
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl text-yellow-500 font-bold mb-2 "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Sonali Nayak
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-xl text-yellow-500/80">
            Full Stack Developer
            <span className="mx-2">|</span>
            <span className="typing-text font-mono">Guardian of Clean Code</span>
          </p>
        </motion.div>
      </motion.section>
      <motion.div
          className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Hi there! Im a passionate Full Stack Developer with a keen eye for creating elegant, efficient, and user-friendly applications. With expertise in modern web technologies and a commitment to writing clean, maintainable code, I bring ideas to life through thoughtful software solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span className="text-yellow-500">5+</span> Years Experience
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span className="text-yellow-500">50+</span> Projects Completed
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span className="text-yellow-500">∞</span> Love for Coding
            </div>
          </div>
        </motion.div>
      

      {/* Skills Section */}
      <motion.section 
        className="space-y-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold flex items-center">
          <Code className="mr-2 text-yellow-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300">
            Skills & Technologies
          </span>
        </h2>
        <div className="space-y-4">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-yellow-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-500">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="space-y-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          Check out my latest work
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Ive worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.timeframe}</p>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Website
                  </a>
                  {project.github && (
                    <a 
                      href={project.github}
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Add custom styles for the typing animation */}
      <style jsx global>{`
        .typing-text {
          border-right: 2px solid #eab308;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
          white-space: nowrap;
          overflow: hidden;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #eab308 }
        }
      `}</style>
    </div>
  );
}