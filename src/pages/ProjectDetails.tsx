import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { projects } from "../data/projects";
import { SiGithub } from "react-icons/si";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollManager from "../components/ui/ScrollManager";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="container mx-auto min-h-screen px-6 py-24">
        <h1 className="text-3xl font-bold text-text">Project not found</h1>
        <p className="mt-3 text-text-secondary">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/#projects"
          className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary-hover"
        >
          <ArrowLeft size={18} />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollManager/>
      <Navbar />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-primary/10 blur-3xl"
      />

      <main className="container relative mx-auto max-w-5xl px-6 py-24">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back to projects
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {project.category} Project
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
              >
                Live Demo
                <ArrowUpRight size={18} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-5 py-3 font-semibold text-text transition hover:border-primary/40 hover:text-primary"
              >
                <SiGithub size={18} />
                View Source Code
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </header>

        {project.image && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-surface">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="aspect-video w-full object-cover object-top"
            />
          </div>
        )}

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_0.8fr]">
          <section>
            <h2 className="text-2xl font-bold text-text">About the project</h2>
            {project.longDescription.map((paragraph, index) => (
              <p key={index} className="leading-8 text-text-secondary">
                {paragraph}
              </p>
            ))}

            {project.features.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-text">Key Features</h2>
                <ul className="mt-5 space-y-4">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                        <Check size={16} />
                      </span>
                      <span className="leading-7">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges?.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-text">
                  Challenges & Learning
                </h2>
                <ul className="mt-5 space-y-4">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="border-l-2 border-primary/40 pl-4 leading-7 text-text-secondary"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <aside className="h-fit rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 className="text-primary" size={22} />
              <h2 className="text-xl font-bold text-text">Technologies</h2>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-background px-3 py-2 text-sm text-text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-medium text-primary transition hover:text-primary-hover"
          >
            <ArrowLeft size={18} />
            Explore more projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
