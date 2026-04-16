import React from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2021 – 2026",
      description:
        "Focus on software development, programming, problem-solving, and teamwork. Active participant in final year research project and hackathons.",
      highlights: [
        "Full-stack web development",
        "Data structures & algorithms",
        "Database management systems",
        "Software engineering principles",
        "Final year research on AI-driven systems",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark">
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
            Education
            <div className="heading-underline" style={{ width: "130px" }} />
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6 max-w-3xl">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card-gradient p-8 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-lg">
                  <FiAward className="text-2xl text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1 font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-lg leading-none mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
