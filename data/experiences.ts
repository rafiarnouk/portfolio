export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string[];
  technologies: string[];
  logo: string;
};

export const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "Software Engineering Intern",
    start: "May 2025",
    end: "Aug. 2025",
    description: [
      "Worked on Alexa Plus on the LLM Runtime and Guardrails Team. I rebuilt and modernized an existing operational tools platform into a new AWS Lambda service, and created an AI tool powered by Claude Sonnet large language models (LLMs) to streamline operational tool creation for future developers."
    ],
    technologies: ["AWS", "Java", "TypeScript", "AWS Lambda", "AWS CDK"],
    logo: "/amazonlogo.png"
  },
  {
    company: "Miru Smart Technologies",
    role: "Software Engineering Co-op",
    start: "Jan. 2024",
    end: "Aug. 2024",
    description: [
      "Built software tools to support scientists working with electrochromic glass, including a platform for querying and visualizing complex experimental data. I also worked on algorithmic problems like optimizing spray paths for manufacturing demos, and helped improve internal systems for experiment tracking and data quality."
    ],
    technologies: ["Python", "MongoDB", "MySQL", "Plotly", "Pandas", "Flask"],
    logo: "/mirulogo.jpeg"
  },
  {
    company: "SkyHive",
    role: "Data Science Intern",
    start: "Jul. 2023",
    end: "Aug. 2023",
    description: [
      "Supported data analysis projects involving large-scale workforce datasets, performing tasks like gathering, cleaning, and wrangling data, along with quality assurance. I also compiled analysis results into visualizations and a formal report exploring trends in workforce analytics and disruptive technologies."
    ],
    technologies: ["Python", "Pandas", "Tableau"],
    logo: "/skyhivelogo.png"
  }
];

