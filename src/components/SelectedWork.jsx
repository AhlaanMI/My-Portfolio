import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import { featuredProject, secondaryProjects, moreProjects } from "../data/projects";
import { site } from "../data/site";

const imageUrl = (path) => `${process.env.PUBLIC_URL}${path}`;

const ImageLink = ({ href, children, className }) =>
  href && href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <a href="#work" className={className}>
      {children}
    </a>
  );

const ProjectLinks = ({ liveUrl, github }) => (
  <div className="flex flex-wrap items-center gap-5">
    {liveUrl && (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost text-white"
      >
        Live site
        <FiArrowUpRight />
      </a>
    )}
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
      >
        <FiGithub className="text-base" />
        Code
      </a>
    )}
  </div>
);

const StackChips = ({ stack }) => (
  <div className="flex flex-wrap gap-2">
    {stack.map((s) => (
      <span key={s} className="chip">
        {s}
      </span>
    ))}
  </div>
);

const FeaturedCard = ({ project }) => (
  <article className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
    <div className="group">
      <ImageLink
        href={project.liveUrl}
        className="block overflow-hidden rounded-lg border border-line surface"
      >
        <img
          src={imageUrl(project.image)}
          alt={`${project.title} interface`}
          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
      </ImageLink>
    </div>

    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="eyebrow">Featured case study</span>
        <span className="text-xs text-secondary">{project.year}</span>
      </div>
      <h3 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
        {project.title}
      </h3>
      <p className="text-accent font-medium mb-5">{project.subtitle}</p>

      <p className="text-secondary leading-relaxed mb-8">{project.summary}</p>

      <div className="grid sm:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="eyebrow mb-2">My role</h4>
          <p className="text-sm text-white">{project.role}</p>
        </div>
        <div>
          <h4 className="eyebrow mb-2">Challenge</h4>
          <p className="text-sm text-secondary leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <h4 className="eyebrow mb-2">Outcome</h4>
          <p className="text-sm text-secondary leading-relaxed">{project.outcome}</p>
        </div>
        <div>
          <h4 className="eyebrow mb-2">Key features</h4>
          <ul className="space-y-1">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-secondary flex gap-2">
                <span className="text-accent">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <StackChips stack={project.stack} />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip text-accent border-accent/30">
              {t}
            </span>
          ))}
        </div>
        <ProjectLinks liveUrl={project.liveUrl} github={project.github} />
      </div>
    </div>
  </article>
);

const SecondaryCard = ({ project }) => (
  <article className="surface rounded-lg overflow-hidden flex flex-col hover:border-accent/40 transition-colors duration-300">
    <ImageLink
      href={project.liveUrl}
      className="block overflow-hidden"
    >
      <img
        src={imageUrl(project.image)}
        alt={`${project.title} interface`}
        className="w-full aspect-[16/10] object-cover hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />
    </ImageLink>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-secondary">{project.year}</span>
      </div>
      <h3 className="font-heading text-xl font-bold text-white mb-1">{project.title}</h3>
      <p className="text-accent text-sm font-medium mb-4">{project.subtitle}</p>
      <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{project.summary}</p>
      <StackChips stack={project.stack.slice(0, 4)} />
      <div className="mt-5">
        <ProjectLinks liveUrl={project.liveUrl} github={project.github} />
      </div>
    </div>
  </article>
);

const MoreRow = ({ project }) => (
  <article className="group surface rounded-lg p-6 flex items-start justify-between gap-6 hover:border-accent/40 transition-colors duration-300">
    <div className="min-w-0">
      <h3 className="font-heading text-lg font-bold text-white mb-1">{project.title}</h3>
      <p className="text-accent text-sm mb-3">{project.subtitle}</p>
      <p className="text-secondary text-sm leading-relaxed">{project.summary}</p>
    </div>
    <div className="flex flex-col items-end gap-4 flex-shrink-0">
      <span className="text-xs text-secondary">{project.year}</span>
      <ProjectLinks liveUrl={project.liveUrl} github={project.github} />
    </div>
  </article>
);

const SelectedWork = () => (
  <section id="work" className="py-24 md:py-32">
    <div className="container-site">
      <Reveal className="mb-16 md:mb-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected Work</p>
            <h2 className="section-title">Products I've built & shipped.</h2>
          </div>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FiGithub />
            View all on GitHub
            <FiArrowUpRight />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mb-24">
        <FeaturedCard project={featuredProject} />
      </Reveal>

      <Reveal delay={0.1} className="mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <SecondaryCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="eyebrow mb-6">More projects</p>
        <div className="grid md:grid-cols-2 gap-4">
          {moreProjects.map((project) => (
            <MoreRow key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default SelectedWork;
