import React from "react";
import Reveal from "./Reveal";
import { processSteps } from "../data/site";

const Process = () => (
  <section id="process" className="py-24 md:py-32 border-t border-line bg-surfaceAlt/30">
    <div className="container-site">
      <Reveal className="mb-16">
        <p className="eyebrow mb-3">My process</p>
        <h2 className="section-title">From idea to launch — and beyond.</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.05} className="bg-dark">
            <div className="p-6 h-full hover:bg-surfaceAlt transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-extrabold text-accent/60">
                  {step.step}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
