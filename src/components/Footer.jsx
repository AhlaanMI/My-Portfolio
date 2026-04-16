import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-darkAlt/50 border-t border-slate-700/30 py-12">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 font-heading">
              Ahlaan Imamdeen
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & Founder of Flowstack
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4 font-heading">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4 font-heading">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/AhlaanMI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ahlaan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://flowstack.ink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Flowstack
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Ahlaan Imamdeen. All rights reserved. Designed
            & built with React, Tailwind CSS & Framer Motion.
          </p>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 transition-all"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
