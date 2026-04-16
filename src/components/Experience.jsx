import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experience";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-dark">
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
            Work Experience
            <div className="heading-underline" style={{ width: "200px" }} />
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transform md:-translate-x-1/2 md:translate-y-0" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:ml-1/2 md:pl-8"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform -translate-x-1.5 md:left-1/2 md:-translate-x-2.5 border-4 border-dark" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card-gradient p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <FaBriefcase className="text-cyan-400 text-lg mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white font-heading">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex gap-3 leading-relaxed"
                      >
                        <span className="text-cyan-400 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
