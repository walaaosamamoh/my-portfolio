import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-24 sm:py-28">
      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles size={16} aria-hidden="true" />A little of what I build
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            My Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
            A selection of projects where I turn ideas into interactive,
            user-friendly web experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Project screenshot */}
              <Link
                to={`/projects/${project.slug}`}
                aria-label={`View ${project.title} project details`}
                className="relative block overflow-hidden"
              >
                <div className="aspect-16/10 overflow-hidden bg-background">
                  <img
                    src={project.image}
                    alt={`${project.title} application preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-background/90 px-4 py-2 text-sm font-medium text-text">
                    View Project
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Project information */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-7 text-text-secondary">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-background/70 px-2.5 py-1.5 text-xs text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      {technology}
                    </span>
                  ))}

                  {project.technologies.length > 4 && (
                    <span className="rounded-md bg-primary/10 px-2.5 py-1.5 text-xs text-primary">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project links */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    View Details
                    <ArrowUpRight size={16} />
                  </Link>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo (opens in a new tab)`}
                      title="Live Demo"
                      className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <ExternalLink size={18} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                      title="Source Code"
                      className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <SiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-semibold text-text">
              Have a project in mind?
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              Let's build something meaningful together.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
