import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projectSections = [
    { key: "fullstack", title: "Fullstack Projects" },
    { key: "frontend", title: "Frontend Works" },
    { key: "ux", title: "UX Design" },
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">
            Featured Projects
            <div className="heading-underline" style={{ width: "200px" }} />
          </h2>
        </motion.div>

        {projectSections.map((section) => {
          const sectionProjects = projectsData.filter(
            (project) => project.category === section.key,
          );

          if (!sectionProjects.length) return null;

          return (
            <div key={section.key} className="mb-14">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading"
              >
                {section.title}
              </motion.h3>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {sectionProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={item}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="card-gradient p-6 rounded-lg h-full flex flex-col hover:border-cyan-500/50 transition-all duration-300">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 font-heading group-hover:text-cyan-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-cyan-400 text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-gray-500 mb-4">
                        {project.duration}
                      </p>

                      <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full hover:border-cyan-500/60 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                        {project.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                          >
                            <FiGithub className="text-lg" />
                            Code
                          </motion.a>
                        )}
                        {project.liveDemo && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                          >
                            <FiExternalLink className="text-lg" />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/AhlaanMI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            View More on GitHub
            <FiExternalLink className="text-lg" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
