import React from "react";
import { FiAward, FiArrowUpRight } from "react-icons/fi";
import { SiAmazonaws, SiMicrosoft, SiUdemy } from "react-icons/si";
import Reveal from "./Reveal";
import { certifications } from "../data/certifications";

const AnthropicIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M6.28 5h2.28l3.72 10.4L16 5h2.3l-5.02 14h-2.22z" />
  </svg>
);

const providerIcons = {
  anthropic: AnthropicIcon,
  aws: SiAmazonaws,
  microsoft: SiMicrosoft,
  udemy: SiUdemy,
};

const Certifications = () => (
  <section id="certifications" className="py-24 md:py-32 border-t border-line">
    <div className="container-site">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">Credentials</p>
        <h2 className="section-title">Certifications & continuous learning.</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => {
          const Icon = providerIcons[cert.provider] || FiAward;
          return (
            <Reveal key={cert.name} delay={index * 0.03}>
              <div className="surface rounded-lg p-5 h-full flex flex-col hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/30 flex-shrink-0 text-accent">
                    <Icon className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug">
                      {cert.name}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="text-xs text-secondary">
                    <p>{cert.providerLabel}</p>
                    <p>{cert.year}</p>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost text-xs"
                  >
                    View credential
                    <FiArrowUpRight className="text-xs" />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Certifications;
