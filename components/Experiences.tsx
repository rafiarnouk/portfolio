import Image from "next/image";
import { Experience, experiences } from "@/data/experiences";

function Badge({ children }: { children: React.ReactNode }) {
    return (
      <span className="px-3 py-1 text-sm rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition">
        {children}
      </span>
    );
  }

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl bg-primary/5 hover:-translate-y-1 transition">
      <div className="w-14 h-14 relative shrink-0">
        <Image
          src={exp.logo}
          alt={exp.company}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-xl mb-1">
            {exp.company}
          </h3>
          <p className="text-sm opacity-100">
            <span className="font-bold">{exp.role}</span> • {exp.start} - {exp.end}
          </p>
        </div>
        {exp.description.map((d, i) => (
          <p key={i} className="text-sm leading-relaxed opacity-100">
            {d}
          </p>
        ))}
        {exp.technologies && (
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.technologies.map((tech, i) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-20">
      <h1 className="mb-16 text-5xl font-heading uppercase text-primary text-center">
        Experience
      </h1>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  )
}