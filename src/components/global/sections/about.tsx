"use client";

import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
      scrollTrigger: {
        start: "top 90%",
        end: "+=200",
        scrub: true,
        trigger: ".about-content",
      },
    });

    tl.from(".about-content", {});

    tl.from(".about-image", {
      x: -50,
    });
  });
  return (
    <section className="text-black" id="about">
      <div className="container pt-32 sm:pb-32">
        <div className="flex items-center gap-8 max-sm:flex-col">
          <div className="about-content | space-y-4">
            <h2 className="text-3xl">I am thrilled for my introduction.</h2>
            <div className="space-y-4 leading-7 text-muted-foreground">
              <p>
                I am Uttam Bohara, an MBA graduate, who decided to pursue my
                passion for programming. I realized that I did not have
                techinical skills, and I have always wanted to learn
                programming. Therefore, I gave it a go.
              </p>

              <p>
                I started with python but the visual aspect of Javasript allured
                me. I learning JS by cobbling resources online and through
                documentaton. Today, I specialize in NextJs, React, NodeJS,
                Prisma, and Typescript. And I am keen on learning new
                technologies.
              </p>
            </div>
          </div>

          <div className="about-image | relative h-[20rem] w-full">
            <Image
              src={"/about.png"}
              alt="About image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
