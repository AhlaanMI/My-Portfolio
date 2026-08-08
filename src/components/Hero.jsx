import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { site, stats } from "../data/site";

const Hero = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-gradient" />

      <div className="container-site py-32 md:py-40">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="eyebrow mb-6 inline-flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            {site.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="display-xl text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-4xl"
          >
            {site.heroHeadlineTop}{" "}
            <span className="text-secondary">{site.heroHeadlineBottom}</span>
          </motion.h1>

          <motion.p variants={item} className="section-sub max-w-xl mt-8">
            {site.heroSub}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-10">
            <a href="#work" className="btn-primary">
              View My Work
              <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Work Together
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiGithub className="text-lg" />
              GitHub
              <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2 mt-12">
            {site.techStrip.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line mt-20 max-w-2xl rounded-lg overflow-hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-dark px-6 py-6">
              <div className="font-heading text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              <p className="text-xs text-secondary mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
