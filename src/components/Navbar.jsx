import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { site, navLinks } from "../data/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-site flex items-center justify-between py-4">
        <a href="#home" className="font-heading text-xl font-bold text-white focus-ring rounded">
          Ahlaan<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-72}
              className="text-sm font-medium text-secondary hover:text-white transition-colors cursor-pointer focus-ring"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {site.resume && (
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Resume
              <FiArrowUpRight />
            </a>
          )}
          <a href="#contact" className="btn-primary text-sm">
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white text-2xl focus-ring"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-dark z-40 flex flex-col justify-between px-6 py-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-72}
                onClick={() => setIsOpen(false)}
                className="font-heading text-3xl font-bold text-white hover:text-accent transition-colors cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {site.resume && (
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume
                <FiArrowUpRight />
              </a>
            )}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
