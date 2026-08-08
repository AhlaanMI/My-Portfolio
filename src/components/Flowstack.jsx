import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { site } from "../data/site";

const flow = ["Design", "Development", "Deployment"];

const Flowstack = () => (
  <section id="flowstack" className="py-24 md:py-32 border-t border-line">
    <div className="container-site">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-3">Flowstack</p>
          <h2 className="section-title mb-6">I run a web development practice.</h2>
          <p className="text-secondary leading-relaxed mb-6">
            I founded Flowstack to build production websites and digital experiences for
            businesses across Sri Lanka and Qatar — taking projects from a first conversation
            all the way to a live, optimized product.
          </p>
          <p className="text-secondary leading-relaxed mb-8">
            As Founder & Lead Developer, I independently manage the complete lifecycle from
            requirements to deployment. Flowstack Agency OS — my featured project — is the
            internal system I built to run it.
          </p>

          <a
            href={site.flowstack}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Flowstack
            <FiArrowUpRight />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="surface rounded-lg p-8 h-full flex flex-col justify-between gap-10">
            <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
              <div className="bg-dark p-6">
                <div className="font-heading text-4xl font-extrabold text-accent">04</div>
                <p className="text-xs text-secondary mt-2">Clients served across Sri Lanka & Qatar</p>
              </div>
              <div className="bg-dark p-6">
                <div className="font-heading text-4xl font-extrabold text-accent">End-to-end</div>
                <p className="text-xs text-secondary mt-2">Ownership of every client project</p>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">Complete workflow</p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                {flow.map((step, index) => (
                  <React.Fragment key={step}>
                    <div className="flex-1 surface rounded-lg px-4 py-4 text-center">
                      <p className="text-sm font-semibold text-white">{step}</p>
                    </div>
                    {index < flow.length - 1 && (
                      <div className="hidden sm:flex items-center justify-center text-accent text-xl px-1">
                        →
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xs text-secondary mt-4">
                Requirements, UI/UX, development, deployment, SEO and client communication —
                all handled directly.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Flowstack;
