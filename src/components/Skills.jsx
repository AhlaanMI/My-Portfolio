import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiLaravel,
  SiKotlin,
  SiTensorflow,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const iconMap = {
    // Frontend
    "React.js": FaReact,
    "Next.js": SiNextdotjs,
    TypeScript: SiTypescript,
    "JavaScript (ES6+)": SiJavascript,
    HTML5: FaHtml5,
    CSS3: FaCss3Alt,
    "Tailwind CSS": SiTailwindcss,
    "Responsive Design": FaTools,
    Figma: SiFigma,
    // Backend
    "Node.js": FaNode,
    "Express.js": SiExpress,
    Laravel: SiLaravel,
    "REST APIs": FaTools,
    "MVC Architecture": FaTools,
    // Databases
    MySQL: FaDatabase,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Firebase: SiFirebase,
    // DevOps & Tools
    Git: FaGitAlt,
    GitHub: FaGithub,
    "CI/CD": FaTools,
    "Agile/Scrum": FaGraduationCap,
    // Other
    Java: FaJava,
    Kotlin: SiKotlin,
    DSA: FaGraduationCap,
    Python: FaPython,
    TensorFlow: SiTensorflow,
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-dark">
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
            Skills & Technologies
            <div className="heading-underline" style={{ width: "240px" }} />
          </h2>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                {category.category}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => {
                  const Icon = iconMap[skill];
                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="group"
                    >
                      <div className="card-gradient p-6 rounded-lg text-center h-full flex flex-col items-center justify-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                        {Icon ? (
                          <Icon className="text-3xl mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                        ) : (
                          <div className="w-8 h-8 mb-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                        )}
                        <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
