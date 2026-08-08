import React from "react";
import Reveal from "./Reveal";

const stories = [
  {
    title: "Engineer",
    text: "Production experience at IT Starter — progressing from intern to Associate Software Engineer.",
  },
  {
    title: "Builder",
    text: "10+ full-stack and AI-integrated projects, from research systems to internal products.",
  },
  {
    title: "Founder",
    text: "Flowstack, where I own the entire client lifecycle — from requirements to deployment.",
  },
];

const About = () => (
  <section id="about" className="py-24 md:py-32 border-t border-line bg-surfaceAlt/30">
    <div className="container-site">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <Reveal>
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-title mb-8">Engineer × Designer × Builder.</h2>
          <div className="space-y-6 text-secondary leading-relaxed">
            <p>
              I'm Ahlaan, a full-stack software engineer and product builder based in Sri
              Lanka.
            </p>
            <p>
              I enjoy turning ideas into production-ready digital experiences — from
              designing interfaces and building applications to deploying, optimizing and
              maintaining them.
            </p>
            <p>
              I've worked on production applications in Agile teams and independently
              delivered websites and digital products for clients through Flowstack, my own
              web development practice.
            </p>
            <p>
              My strongest area sits between engineering and design: taking an idea,
              understanding how it should feel and function, and turning it into a clean,
              scalable product.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-10">
            <div className="aspect-[4/5] rounded-lg border border-line overflow-hidden bg-surface">
              <img
                src={`${process.env.PUBLIC_URL}/hero.jpg`}
                alt="Ahlaan Imamdeen — full-stack software engineer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {stories.map((story) => (
              <div
                key={story.title}
                className="surface rounded-lg p-5 hover:border-accent/40 transition-colors duration-300"
              >
                <h3 className="font-heading font-bold text-white mb-1.5">{story.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{story.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
