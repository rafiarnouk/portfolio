"use client";

import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rafi-arnouk-82384226b/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/rafiarnouk",
    icon: FaGithub,
  },
  {
    name: "Email",
    href: "mailto:rafi.arnouk@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-8 py-20">
      <h1 className="mb-16 text-5xl font-heading uppercase text-primary text-center">
        Contact
      </h1>
      <motion.div
        className="grid gap-6 grid-cols-3 pt-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`group mx-auto flex flex-col items-center justify-center rounded-4xl bg-primary/10 w-24 md:w-36 py-8 text-center transition-all duration-300 hover:scale-105`}
              variants={fadeIn}
              whileHover={{ y: -4 }}
            >
              <Icon className="mb-4 h-8 md:h-16 w-8 md:w-16 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-base font-medium text-black">{link.name}</span>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}