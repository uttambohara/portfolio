"use client";

import { experiencesData } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
      scrollTrigger: {
        start: "top 40%",
        trigger: ".experience-container",
      },
    });

    tl.from(".experience-box", {
      opacity: 0,
      scale: 1,
    });

    tl.from(".experience-list", {
      opacity: 0,
      x: 100,
      stagger: 0.5,
      ease: "sign.in",
    });
  });
  return (
    <section>
      <div
        className="experience-container | container py-32 max-md:py-12"
        id="experience"
      >
        <h2 className="mb-12 text-3xl text-zinc-600">My Experiences</h2>

        <div className="experience-box | space-y-8 border-l-2 border-[#a65036]/30 pl-6 ">
          {experiencesData.map((experience) => (
            <div
              key={experience.id}
              className="experience-list | relative space-y-1"
            >
              <div className="absolute -left-8 top-5 h-4 w-4 rounded-full bg-[#c9bb94]" />
              <span className="text-sm text-slate-400">{experience.date}</span>
              <h2 className="text-xl text-slate-500">{experience.heading}</h2>
              <div>
                {experience.expList.map((list) => (
                  <div key={list} className="text-slate-400">
                    {list}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
