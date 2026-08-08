import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import Reveal from "./Reveal";
import { site } from "../data/site";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Project inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const links = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: FiMail, external: false },
    { label: "LinkedIn", value: "linkedin.com/in/ahlaan", href: site.linkedin, icon: FiLinkedin, external: true },
    { label: "GitHub", value: "github.com/AhlaanMI", href: site.github, icon: FiGithub, external: true },
    { label: "WhatsApp", value: "+94 77 732 6274", href: site.whatsapp, icon: () => whatsappIcon, external: true },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="section-title mb-6">Let's build something.</h2>
            <p className="text-secondary leading-relaxed mb-10 max-w-md">
              Have a product idea, website project, or engineering opportunity? I'm always
              interested in solving interesting problems and building useful things.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {site.resume && (
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Resume
                  <FiArrowUpRight />
                </a>
              )}
              <a href={`mailto:${site.email}`} className="btn-secondary">
                Start a Project
                <FiArrowUpRight />
              </a>
            </div>

            <div className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon;
                const content = (
                  <>
                    <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/30 flex-shrink-0">
                      <Icon className="text-accent text-lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-secondary">{link.label}</p>
                      <p className="text-sm font-medium text-white truncate">
                        {link.value}
                      </p>
                    </div>
                    <FiArrowUpRight className="ml-auto text-secondary group-hover:text-accent transition-colors" />
                  </>
                );
                return link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 surface rounded-lg p-4 hover:border-accent/40 transition-colors duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-4 surface rounded-lg p-4 hover:border-accent/40 transition-colors duration-300"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="surface rounded-lg p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white">Or send a message</h3>

              <div>
                <label htmlFor="name" className="block text-sm text-secondary mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-line text-white placeholder-secondary/50 focus:outline-none focus:border-accent/60 transition-colors duration-300"
                  placeholder="Ahlaan Imamdeen"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-secondary mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-line text-white placeholder-secondary/50 focus:outline-none focus:border-accent/60 transition-colors duration-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-line text-white placeholder-secondary/50 focus:outline-none focus:border-accent/60 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
                <HiOutlineArrowRight />
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/40 text-accent text-sm">
                  Thanks! Your email draft is ready to send — I'll get back to you soon.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
