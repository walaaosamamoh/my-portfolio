import { BriefcaseBusiness, Sparkles } from "lucide-react";
import { experiences } from "../../data/experience";


export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 bg-surface py-24 sm:py-28"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles size={16} />
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Experience & Training
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
            The experience and learning that have shaped my journey
            as a Front-End Developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-1.75 top-2 w-px bg-primary/25 sm:left-2.25"
          />

          <div className="space-y-10">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-1.5 flex size-3.75 items-center justify-center rounded-full border-2 border-primary bg-background sm:size-[19px]">
                  <div className="size-1.5 rounded-full bg-primary" />
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-white/10 bg-background/70 p-5 transition-all duration-300 hover:border-primary/30 sm:p-7">
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
                        {item.period}
                      </p>

                      <h3 className="text-xl font-semibold text-text sm:text-2xl">
                        {item.role}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                        <BriefcaseBusiness
                          size={16}
                          className="text-primary"
                        />
                        <span>{item.company}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-7 text-text-secondary sm:text-base">
                    {item.description}
                  </p>

                  <ul className="mb-6 space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-3 text-sm leading-7 text-text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1.5 text-xs text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}