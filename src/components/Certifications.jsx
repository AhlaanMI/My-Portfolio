import React from "react";
import { FiAward, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { certifications } from "../data/certifications";

const Certifications = () => (
  <section id="certifications" className="py-24 md:py-32 border-t border-line">
    <div className="container-site">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">Credentials</p>
        <h2 className="section-title">Certifications & continuous learning.</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 0.03}>
            <div className="surface rounded-lg p-5 h-full flex flex-col hover:border-accent/40 transition-colors duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 flex-shrink-0">
                  <FiAward className="text-accent text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white leading-snug">{cert.name}</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between pt-3">
                <div className="text-xs text-secondary">
                  <p>{cert.provider}</p>
                  <p>{cert.year}</p>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs"
                  >
                    View credential
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
