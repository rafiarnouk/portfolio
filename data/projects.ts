export type Project = {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Genetic Perturbation Modeling Benchmarking Framework",
    description:
      "A responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion to showcase work, experience, and contact information in an interactive layout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repoUrl: "https://github.com/yourusername/portfolio",
  }
]
