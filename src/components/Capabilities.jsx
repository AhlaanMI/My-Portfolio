import React from "react";
import Reveal from "./Reveal";
import { services, aiWorkflow } from "../data/site";
import { skillsData } from "../data/skills";

const Capabilities = () => (
  <section id="capabilities" className="py-24 md:py-32 border-t border-line bg-surfaceAlt/30">
    <div className="container-site">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">What I do</p>
        <h2 className="section-title">Capabilities across the full lifecycle.</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4 mb-20">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <div className="surface rounded-lg p-6 h-full hover:border-accent/40 transition-colors duration-300">
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="surface rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/30 flex-shrink-0">
                <span className="text-accent text-lg font-heading font-bold">AI</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {aiWorkflow.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">{aiWorkflow.description}</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 surface rounded-lg p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              {skillsData.map((group) => (
                <div key={group.category}>
                  <p className="eyebrow mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Capabilities;
