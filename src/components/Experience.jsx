import React from "react";
import { FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import { experienceData } from "../data/experience";

const MetaChips = ({ label, items }) => (
  <div>
    <p className="eyebrow mb-2">{label}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="chip">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const CompanyCard = ({ exp }) => {
  const isMultiRole = exp.roles.length > 1;

  return (
    <div className="surface rounded-lg p-6 md:p-8 hover:border-accent/40 transition-colors duration-300">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/30">
            <FiBriefcase className="text-accent text-lg" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-white">{exp.company}</h3>
            <p className="text-sm text-secondary">{exp.location}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-accent font-medium">{exp.overall}</p>
          <p className="text-xs text-secondary">{exp.type}</p>
        </div>
      </div>

      <div className="space-y-0">
        {exp.roles.map((role, index) => (
          <div key={role.title} className="relative">
            {isMultiRole && index < exp.roles.length - 1 && (
              <div className="hidden md:block absolute left-[9px] top-10 bottom-[-24px] w-px bg-line" />
            )}

            <div className="flex items-center gap-3 mb-2">
              {isMultiRole && (
                <span className="w-[19px] h-[19px] rounded-full border-2 border-accent bg-dark flex-shrink-0" />
              )}
              <h4 className="font-heading text-lg font-bold text-white">{role.title}</h4>
              <span className="text-xs text-secondary whitespace-nowrap">{role.period}</span>
              {role.tag && (
                <span className="chip text-accent border-accent/30">{role.tag}</span>
              )}
            </div>

            <div className={isMultiRole ? "md:pl-10" : ""}>
              <p className="text-secondary text-sm leading-relaxed mb-4">{role.summary}</p>
              <ul className="space-y-2 mb-8">
                {role.achievements.map((a) => (
                  <li key={a} className="text-sm text-secondary flex gap-3 leading-relaxed">
                    <span className="text-accent flex-shrink-0">▸</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-line">
        <MetaChips label="Stack" items={exp.stack} />
        <MetaChips label="Environment" items={exp.environment} />
        <MetaChips label="Focus" items={exp.focus} />
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 md:py-32 border-t border-line">
    <div className="container-site">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="section-title max-w-2xl">
          Joined as an intern, progressed into engineering — and built a practice along the way.
        </h2>
      </Reveal>

      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <Reveal key={exp.id} delay={index * 0.05}>
            <CompanyCard exp={exp} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
