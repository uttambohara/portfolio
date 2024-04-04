"use client";

import { Button } from "@/components/ui/button";
import { SocialMediaIcon } from "@/lib/constant";
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
    <section className="relative h-full w-full">
      {/* <div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}

      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <div className="absolute -top-10 bottom-auto left-0 h-[500px] w-[500px] -translate-x-[30%]  rounded-full bg-[rgba(173,109,244,0.5)] opacity-30 blur-[80px]"></div>
      </div>

      <div className="container relative py-32 pt-[9rem] sm:pt-[11rem]">
        <div className="hero-content | space-y-8">
          <h1 className="text-5xl tracking-wide max-md:text-4xl">
            Designing and Developing <br />
            <span className="text-[#c9bb94]">Web App</span>
          </h1>
          <p className="leading-8">
            Hello! I am a full stack developer with 1.5 years of experience. I
            enjoy building web apps and websites. My expertise is on NextJs,
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
              href="https://utfs.io/f/3cd84f5a-c6b2-4cad-93a5-1b1a2f9d9ca9-h4h8gv.pdf"
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

            <ul className="flex items-center gap-4">
              {SocialMediaIcon.map((icon) => (
                <a key={icon.id} href={icon.href} target="_blank">
                  <li key={icon.id}>
                    <icon.icon />
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
