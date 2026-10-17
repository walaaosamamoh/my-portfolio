export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: "Training" | "Freelance" | "Internship";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Front-End Developer Trainee",
    company: "Systech Digital",
    period: "June 2026 – August 2026",
    type: "Training",
    description:
      "Completed practical front-end development training, building projects and collaborating in a development environment.",
    responsibilities: [
      "Developed web applications using Vue.js and the Composition API.",
      "Practiced Git and GitHub workflows and team collaboration.",
      "Started working with React and TypeScript and deployed projects using Vercel.",
    ],
    technologies: [
      "Vue.js",
      "JavaScript",
      "Git",
      "GitHub",
      "React",
      "TypeScript",
    ],
  },
  {
    role: "Freelance Front-End Developer",
    company: "Freelance",
    period: "March 2025 – Present",
    type: "Freelance",
    description:
      "Building responsive web interfaces and interactive applications based on project requirements.",
    responsibilities: [
      "Developed responsive interfaces using Vue.js, JavaScript, Tailwind CSS, HTML, and CSS.",
      "Integrated REST APIs and managed application state using Pinia and Axios.",
      "Worked with deployment workflows using Vercel and cPanel/FTP.",
    ],
    technologies: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Pinia",
      "Axios",
      "REST APIs",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Mezat",
    period: "September 2022 – March 2023",
    type: "Internship",
    description:
      "Contributed to front-end website development, translating designs into responsive and reusable interfaces.",
    responsibilities: [
      "Translated Figma designs into responsive web interfaces using HTML, CSS, Flexbox, Grid, and JavaScript.",
      "Used Git for version control and collaborated with team members through code reviews.",
      "Assisted with WordPress customization, cross-browser testing, and basic SEO practices.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
      "WordPress",
    ],
  },
];