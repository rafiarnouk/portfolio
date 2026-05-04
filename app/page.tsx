import Image from "next/image";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";

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
    </>
  );
}