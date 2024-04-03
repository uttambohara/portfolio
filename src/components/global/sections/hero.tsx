"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".hero-content", {
      opacity: 0,
    });
  });
  return (
    <section className="relative bg-black">
      <div className="container relative py-32 pt-[9rem] sm:pt-[11rem]">
        <div className="hero-content | space-y-8">
          <h1 className="text-5xl tracking-wide max-md:text-4xl">
            Designing and Developing <br />
            <span className="text-[#c9bb94]">Web App</span>
          </h1>
          <p className="leading-8">
            Hello! I am a full stack developer with 1.5 years of experience. I
            enjoy build web apps and websites. My expertise is on NextJs,
            Typescript, and React.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact">
              <Button className="group  active:-translate-y-1">
                <span>Contact me here</span>
                <ArrowRight className="transition-all group-hover:translate-x-1 group-hover:scale-110" />
              </Button>
            </a>

            <a
              href="https://docs.google.com/document/d/1ZBI36wEEeeJnOlX89aGq17eDBVFmxFuaZOugnv7qMf4/edit#heading=h.le7oimcbka0a"
              target="_blank"
            >
              <Button
                variant={"secondary"}
                className="group  active:-translate-y-1"
              >
                Download CV
                <Download className="transition-all group-hover:-translate-y-1 group-hover:scale-110" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 h-[12rem] w-[12rem] rounded-full bg-purple-700 blur-[7rem]" />
    </section>
  );
}
