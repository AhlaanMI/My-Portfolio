import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Built", value: "10+" },
    { label: "Companies", value: "2" },
    { label: "Freelance Business", value: "1" },
  ];

  return (
    <section id="about" className="py-20 bg-dark">
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
            About Me
            <div className="heading-underline" style={{ width: "120px" }} />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-slate-700/50 overflow-hidden flex items-center justify-center backdrop-blur-sm">
              <img
                src={`${process.env.PUBLIC_URL}/hero.jpg`}
                alt="Ahlaan Imamdeen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-10 blur-2xl" />
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
              Full-stack developer with 1.5+ years of experience building scalable web applications across the entire stack — from responsive React and Next.js frontends to robust Laravel and Node.js backends, with MySQL and MongoDB for data management.
            </p>

            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              I've contributed to production-level codebases at IT Starter and Gamage Recruiters, and I'm the founder of Flowstack, a freelance web development practice. I'm passionate about clean code, user experience, and solving complex problems.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-gradient p-4 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 font-heading">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
