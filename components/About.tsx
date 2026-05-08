"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-8 py-20">
      <motion.div
        className="text-center space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <h1 className="text-5xl font-heading uppercase text-primary">
          About Me
        </h1>
        <p className="text-md align-text text-foreground max-w-2xl">
          Hello! I'm Rafi, an undergraduate student at the University of British Columbia majoring in Computer Science and minoring in Mathematics.

Over the course of my degree I have built experience in the fields of software engineering and data analysis. Most recently, I interned at Amazon, where I worked on Alexa as part of the LLM (Large Language Models) Runtime and Guardrails team. Prior to that, I spent 8 months building internal laboratory management software used by scientists and engineers developing electrochromic windows at Miru Smart Technologies, a greentech startup based in Vancouver. I've also previously spent a summer working with the data team at SkyHive where I contributed to data analysis projects involving large-scale labour economy data.

I am particularly interested in machine learning and its applications in scientific domains. At UBC's Ding Lab, a computational biology research group, I contributed to research efforts by developing a benchmarking framework for evaluating machine learning models that predict the effects of genetic perturbations in cells. I also have structured much of my degree at UBC around this interest, taking courses like CPSC 440 (Advanced Machine Learning) and 436N (Natural Language Processing), while strengthening my mathematical foundations in areas like linear algebra, probability, and optimization through a minor in Mathematics.
        </p>
      </motion.div>
    </section>
  );
}
