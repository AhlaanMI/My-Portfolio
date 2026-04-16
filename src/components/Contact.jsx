import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:mohamedahlan58@gmail.com",
      icon: FiMail,
      color: "hover:text-red-400",
    },
    {
      name: "Phone",
      url: "tel:+94777326274",
      icon: FiPhone,
      color: "hover:text-green-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ahlaan",
      icon: FiLinkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/AhlaanMI",
      icon: FiGithub,
      color: "hover:text-gray-400",
    },
    {
      name: "Flowstack",
      url: "https://flowstack.ink",
      icon: FiExternalLink,
      color: "hover:text-cyan-400",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:mohamedahlan58@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);

    // Clear success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-dark">
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
            Get In Touch
            <div className="heading-underline" style={{ width: "140px" }} />
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Have a project in mind or want to collaborate? Let's connect! Feel
            free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                  placeholder="Ahlaan Imamdeen"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                Send Message
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 text-sm"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Contact
              </h3>

              <a
                href="mailto:mohamedahlan58@gmail.com"
                className="flex items-center gap-4 p-4 card-gradient rounded-lg hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FiMail className="text-2xl text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    mohamedahlan58@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+94777326274"
                className="flex items-center gap-4 p-4 card-gradient rounded-lg hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <FiPhone className="text-2xl text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    +94 77 732 6274
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-heading">
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex flex-col items-center justify-center p-4 card-gradient rounded-lg hover:border-cyan-500/50 transition-all group"
                    >
                      <Icon className={`text-2xl text-cyan-400 mb-2 ${link.color} transition-colors`} />
                      <p className="text-xs text-gray-400 text-center group-hover:text-gray-300">
                        {link.name}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
            >
              <p className="text-sm text-gray-400 mb-2">Available for:</p>
              <div className="space-y-2">
                <p className="text-white font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Freelance Projects
                </p>
                <p className="text-white font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Full-time Opportunities
                </p>
                <p className="text-white font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Collaboration & Consulting
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
