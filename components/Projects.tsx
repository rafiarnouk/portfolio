"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { Project, projects } from "@/data/projects";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between gap-5">
        <div>
          <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-5">
          {project.technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-primary/60"
            >
              View repo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="mb-16 text-5xl font-heading uppercase text-primary text-center">
        Projects
      </h1>

      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
