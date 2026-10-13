import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import heroLaptop from "../../assets/hero-laptop.png";

const techStack = [
  { name: "React", icon: "⚛", color: "text-cyan-400" },
  { name: "Vue", icon: "V", color: "text-emerald-400" },
  { name: "TypeScript", icon: "TS", color: "text-blue-400" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] scroll-mt-28 items-center overflow-hidden py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-20 h-60 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="container relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        {/* Left: Introduction */}
        <div>
          <p className="mb-3 text-lg text-text-secondary">👋 Hello, I'm</p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Walaa <span className="text-primary">Osama</span>
          </h1>

          <h2 className="mt-3 text-2xl font-semibold text-text-secondary sm:text-3xl">
            Front-End Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-text-secondary">
            I build modern, responsive, and user-friendly web applications
            using React, Vue, and TypeScript. I love turning ideas into clean,
            interactive experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-text shadow-lg shadow-primary/25 transition hover:bg-primary-hover"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="glass rounded-full px-6 py-3 font-semibold transition hover:border-primary/60 hover:bg-primary/10"
            >
              About Me
            </a>
          </div>

          {/* Tech stack and social links */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className={`glass flex h-11 w-11 items-center justify-center rounded-xl font-bold transition hover:-translate-y-1 hover:border-primary/50 ${tech.color}`}
              >
                {tech.icon}
              </div>
            ))}

            <span className="h-8 w-px bg-white/20" />

            <a
              href="https://github.com/walaaosamamoh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-text-secondary transition hover:-translate-y-1 hover:text-primary"
            >
              <SiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/walaaosamamoh"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-text-secondary transition hover:-translate-y-1 hover:text-primary"
            >
              <SlSocialLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: Glass card with laptop */}
        <div className="relative">
          <div className="glass p-3 sm:p-4">
            <img
              src={heroLaptop}
              alt="Laptop showing code, surrounded by React, Vue and TypeScript icons"
              width={700}
              height={610}
              className="w-full"
            />
          </div>

          {/* Floating glass badge */}
          <div className="glass absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm font-medium">Open to work</span>
          </div>
        </div>
      </div>
    </section>
  );
}