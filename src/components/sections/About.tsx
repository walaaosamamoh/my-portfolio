import {
  Code2,
  MonitorSmartphone,
  Plug,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Reusable components and maintainable architecture.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive UI",
    description: "Consistent experiences across different devices.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connecting interfaces with REST APIs and dynamic data.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden py-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full"
      />

      <div className="container relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* About content */}
        <div>
          {/* Section heading */}
          <div className="mb-8">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles size={16} />
              Get to know me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              About Me
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* About text */}
          <div className="space-y-5">
            <p className="text-base leading-8 text-text/90 sm:text-lg">
              I’m a Front-End Developer specializing in building responsive,
              scalable, and user-focused web applications using React.js,
              Vue.js, and TypeScript. I focus on translating designs and
              business requirements into intuitive interfaces with clean,
              maintainable code and a strong emphasis on performance and
              usability.
            </p>

            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              My experience spans developing interactive applications,
              integrating REST APIs, managing application state, and building
              reusable components that support consistent and efficient
              development. I approach each project with attention to detail,
              problem-solving, and a commitment to delivering reliable,
              high-quality results.
            </p>

            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              I believe great front-end development goes beyond writing code —
              it’s about understanding user needs, making thoughtful technical
              decisions, and creating digital experiences that deliver real
              value. I strive to bring that mindset to every project I work on.
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              View My Projects
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold text-text transition hover:border-primary hover:text-primary"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Professional highlights */}
        <div className="flex flex-col justify-center gap-10 lg:pl-8">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.title}
                className="flex items-start gap-4 border-l-2 border-primary/60 pl-5 transition-colors hover:border-primary"
              >
                <div className="mt-1 shrink-0 text-primary">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    {highlight.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-7 text-text-secondary sm:text-base">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}