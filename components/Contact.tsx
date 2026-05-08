"use client";

import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
    color: "hover:text-gray-300",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
    color: "hover:text-red-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-8 py-20">
      <motion.div
        className="text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <h1 className="text-5xl font-heading uppercase text-primary">
          Get in touch!
        </h1>
        <div className="flex justify-center gap-16 pt-8">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className={`group flex flex-col items-center justify-center w-52 h-52 rounded-4xl bg-primary/10 transition-all duration-300 hover:scale-105 ${link.color}`}
                variants={fadeIn}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-24 h-24 text-primary group-hover:scale-110 mb-2 transition-transform duration-300" />
                <span className="text-md font-medium text-black">{link.name}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}