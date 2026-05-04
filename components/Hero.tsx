import Image from "next/image";
import TiltImage from "@/components/TiltImage";

export default function Hero() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <section className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <div className="w-full aspect-square relative overflow-hidden group">
            <Image
              src="/rablob.png"
              alt="Rafi Arnouk"
              fill
              className="object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-103 group-hover:rotate-[-1deg]"
              priority
            />
          </div>
          {/* <TiltImage /> */}
        </div>
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
        </div>
      </section>
    </main>
  )
}