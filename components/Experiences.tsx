"use client";

import Image from "next/image";
import { Experience, experiences } from "@/data/experiences";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Badge({ children }: { children: React.ReactNode }) {
    return (
      <span className="px-3 py-1 text-sm rounded-full bg-secondary text-black font-bold hover:bg-secondary/80 transition">
        {children}
      </span>
    );
  }

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div className="group flex gap-6 p-6 rounded-2xl bg-primary/5 hover:scale-102 transition">
      <div className="w-20 h-20 relative shrink-0">
        <Image
          src={exp.logo}
          alt={exp.company}
          fill
          className="object-contain rounded-lg group-hover:scale-110 group-hover:rotate-[-2deg] transition-transform duration-300"
        />
      </div>
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-xl mb-1">
            {exp.company}
          </h3>
          <p className="text-md opacity-100">
            <span className="font-bold">
              {exp.role}
            </span> • {exp.start} - {exp.end}
          </p>
        </div>
        {exp.description.map((d, i) => (
          <p key={i} className="text-sm leading-relaxed opacity-100">
            {d}
          </p>
        ))}
        {exp.technologies && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-sm opacity-100">Technologies:</span>
            {exp.technologies.map((tech, i) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experiences() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-20">
      <h1 className="mb-16 text-5xl font-heading uppercase text-primary text-center">
        Experience
      </h1>
      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, i) => (
          <motion.div key={i} variants={item}>
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}