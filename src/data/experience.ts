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
    role: "Freelance Front-End Developer",
    company: "Freelance",
    period: "March 2025 – Present",
    type: "Freelance",
    description:
      "Developing responsive websites and web applications, with a focus on reusable components, API integration, and reliable deployment.",
    responsibilities: [
      "Build responsive user interfaces using Vue.js, JavaScript, Tailwind CSS, HTML, and CSS.",
      "Integrate REST APIs using Axios and manage shared application state with Pinia.",
      "Deploy web projects using Vercel and cPanel/FTP workflows.",
    ],
    technologies: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Pinia",
      "Axios",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    role: "Front-End Developer Trainee",
    company: "Systech Digital",
    period: "June 2026 – August 2026",
    type: "Training",
    description:
      "Completed practical front-end development training by building web projects, practicing collaborative workflows, and expanding into React and TypeScript.",
    responsibilities: [
      "Built web projects using Vue.js and the Composition API, including e-commerce and social media interfaces.",
      "Practiced version control and team collaboration using Git and GitHub.",
      "Gained initial hands-on experience with React and TypeScript and deployed projects using Vercel.",
    ],
    technologies: [
      "Vue.js",
      "JavaScript",
      "React",
      "TypeScript",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Mezat",
    period: "September 2022 – March 2023",
    type: "Internship",
    description:
      "Contributed to website development by translating design mockups into responsive interfaces and supporting front-end implementation.",
    responsibilities: [
      "Translated Figma designs into responsive web pages using HTML, CSS, Flexbox, Grid, and JavaScript.",
      "Used Git for version control and collaborated with team members through code reviews.",
      "Supported WordPress customization, cross-browser testing, and basic SEO improvements.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Git", "WordPress"],
  },
];
