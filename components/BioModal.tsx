"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BioModal({ isOpen, onClose }: BioModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={onClose}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-lg p-2 text-foreground hover:bg-primary/10 transition"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="mb-6 text-4xl font-heading uppercase text-primary">
                About Me
              </h2>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Hello! I'm Rafi, an undergraduate student at the University of British Columbia majoring in Computer Science and minoring in Mathematics.
                </p>

                <p>
                  Over the course of my degree I have built experience in the fields of software engineering and data analysis. Most recently, I interned at Amazon, where I worked on Alexa as part of the LLM (Large Language Models) Runtime and Guardrails team. Prior to that, I spent 8 months building internal laboratory management software used by scientists and engineers developing electrochromic windows at Miru Smart Technologies, a greentech startup based in Vancouver. I've also previously spent a summer working with the data team at SkyHive where I contributed to data analysis projects involving large-scale labour economy data.
                </p>

                <p>
                  I am particularly interested in machine learning and its applications in scientific domains. At UBC's Ding Lab, a computational biology research group, I contributed to research efforts by developing a benchmarking framework for evaluating machine learning models that predict the effects of genetic perturbations in cells. I also have structured much of my degree at UBC around this interest, taking courses like CPSC 440 (Advanced Machine Learning) and 436N (Natural Language Processing), while strengthening my mathematical foundations in areas like linear algebra, probability, and optimization through a minor in Mathematics.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
