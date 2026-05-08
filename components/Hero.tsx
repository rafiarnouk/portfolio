"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BioModal from "./BioModal";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <motion.section
        className="grid md:grid-cols-5 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div className="md:col-span-3" variants={fadeIn}>
          <div className="w-full aspect-square relative overflow-hidden group">
            <Image
              src="/rablob.png"
              alt="Rafi Arnouk"
              fill
              className="object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-103 group-hover:rotate-[-1deg]"
              priority
            />
          </div>
        </motion.div>
        <div className="md:col-span-2 space-y-6 text-primary">
          <p className="text-lg">
            Hello! I am
          </p>
          <h1 className="text-5xl md:text-6xl font-heading leading-tight uppercase">
            Rafi Arnouk
          </h1>
          <p className="text-lg leading-relaxed">
            I'm a <span className="font-bold">Computer Science student </span> 
            at UBC with a minor in Mathematics.
            I've worked as a <span className="font-bold">software engineering </span> 
            intern across both <span className="font-bold">big tech </span>
            and <span className="font-bold">startups</span>.
            {/* <br /><br />
            I am studying Computer Science with a minor in Mathematics at the <span className="font-bold">University of British Columbia </span>
            in Vancouver, Canada. */}
          </p>
          <button
            onClick={() => setIsBioOpen(true)}
            className="inline-flex items-center gap-2 mt-2 px-6 py-4 text-lg bg-secondary text-black font-medium rounded-full hover:bg-secondary/80 transition-colors"
          >
            More About Me
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.section>
      <BioModal isOpen={isBioOpen} onClose={() => setIsBioOpen(false)} />
    </main>
  )
}