import Image from "next/image";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function StarDivider() {
  return (
    <div className="flex justify-center py-2 color-black">
      <img
        src="/star.svg"
        alt="divider"
        className="w-1/3"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StarDivider />
      <Experiences />
      {/* <StarDivider />
      <Projects /> */}
      {/* <StarDivider />
      <About /> */}
      <StarDivider />
      <Contact />
      <Footer />
    </>
  );
}