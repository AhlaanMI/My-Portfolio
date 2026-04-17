import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const roles = [
      "Full-Stack Developer",
      "React & Next.js Engineer",
      "Laravel & Node.js Developer",
      "Freelance Founder @ Flowstack",
    ];
    const currentRole = roles[textIndex];
    const typingInterval = setTimeout(() => {
      if (charIndex < currentRole.length) {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Wait before switching to next role
        setTimeout(() => {
          setTextIndex((textIndex + 1) % roles.length);
          setCharIndex(0);
          setDisplayedText("");
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(typingInterval);
  }, [charIndex, textIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Ahlaan Imamdeen
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 h-16 flex items-center justify-center font-heading"
        >
          <span>{displayedText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build things for the web — fast, scalable, and end-to-end. From
          responsive frontends to robust backends, I craft digital experiences
          that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="btn-primary group"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/AhlaanMI"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
