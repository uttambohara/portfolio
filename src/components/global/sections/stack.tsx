"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { Figma, GitBranch } from "lucide-react";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Stack() {
  useGSAP(() => {
    //
    gsap.from(".stacks > *", {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".stacks",
        start: "top 70%",
      },
      stagger: {
        // wrap advanced options in an object
        amount: 1,
        from: "center",
        grid: "auto",
        ease: "power2.inOut",
      },
    });
  });

  return (
    <section className="bg-[#c9bb94]/10 text-center text-black" id="stack">
      <div className="container py-24">
        <h2 className="mb-8 text-3xl">Language I speak</h2>
        <div className="stacks | flex flex-wrap justify-center gap-4 text-5xl">
          <DiJavascript />
          <FaNodeJs />
          <DiMongodb />
          <FaReact />
          <TbBrandNextjs />
          <SiTypescript />
          <SiTailwindcss />
          <SiPrisma />
          <GitBranch />
          <Figma />
        </div>
      </div>
    </section>
  );
}
