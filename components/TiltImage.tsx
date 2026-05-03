"use client";

import { useRef } from "react";
import Image from "next/image";

export default function TiltImage() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const strength = 12;
    // Normalize to [-1, 1]
    const rotateX = ((y - midY) / midY) * -strength; // tilt strength
    const rotateY = ((x - midX) / midX) * strength;

    const scale = 1.03
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="w-full aspect-square rounded-2xl overflow-hidden transition-transform duration-300 ease-out will-change-transform"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image
        src="/rablob.png"
        alt="Rafi Arnouk"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}