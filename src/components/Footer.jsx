import React from "react";
import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import { site } from "../data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-site py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading text-lg font-bold text-white">
              Ahlaan Imamdeen
            </p>
            <p className="text-sm text-secondary mt-1">
              Full-stack Software Engineer · Founder of Flowstack
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg border border-line text-secondary hover:text-accent hover:border-accent/40 transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-line text-secondary hover:text-accent hover:border-accent/40 transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href={site.flowstack}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg border border-line text-secondary hover:text-accent hover:border-accent/40 transition-colors text-sm font-medium"
            >
              Flowstack
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="p-2.5 rounded-lg border border-line text-secondary hover:text-accent hover:border-accent/40 transition-colors"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-secondary">
            &copy; {year} Ahlaan Imamdeen. All rights reserved.
          </p>
          <p className="text-xs text-secondary">
            Designed & built by Ahlaan — React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
