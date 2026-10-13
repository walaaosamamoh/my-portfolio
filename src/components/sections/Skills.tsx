
import {
  Code2,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { skillGroups } from "../../data/skills";

const icons = [Code2, Database, Wrench];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 overflow-hidden bg-surface py-24"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles size={16} />
            My favorite tools
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Skills &{" "}
            <span className="text-primary">Technologies</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
            A little collection of the tools I use to bring ideas to life
            and build better web experiences.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Small decorative accent */}
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10" />

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-text">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-text-secondary">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-text-secondary/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-sm text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Friendly footer note */}
        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-text-secondary">
          <span>Always curious, always learning</span>
          <span aria-hidden="true">💚</span>
        </p>
      </div>
    </section>
  );
}
