"use client";

import { WorksData } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import gsap, { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  useGSAP(() => {
    const expItems = gsap.utils.toArray(".work-item");

    console.log(expItems);
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
      scrollTrigger: {
        start: "top 60%",
        end: "+=200",
        trigger: ".works-container",
      },
    });

    tl.from(".works-container", { opacity: 0, duration: 2 });
  });

  return (
    <section className="relative bg-black" id="works">
      <div className="works-container | container space-y-8 py-32">
        <h2 className="text-3xl">I have developed</h2>

        <ul className="group space-y-10">
          {WorksData.map((work) => (
            <li
              key={work.id}
              className="work-item | group flex items-center transition-all hover:scale-105  hover:cursor-pointer max-sm:flex-col-reverse md:flex-row"
            >
              <div className="max-w-[50rem] space-y-4 px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-8 w-8">
                    <Image
                      src={work.iconLink}
                      fill
                      priority
                      className="object-cover"
                      alt="Work one"
                    />
                  </div>
                  <h2 className="text-xl">{work.title}</h2>
                </div>

                <div className="flex items-center gap-2">
                  {work.stack.map((Icon, index) => (
                    <div key={index}>
                      <Icon />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-light leading-7">
                  {work.description}
                </p>
              </div>

              <div className="flex h-full w-[20rem] justify-center p-6 sm:w-[30rem]">
                {" "}
                <div className="relative h-[12rem] w-full">
                  <Image
                    src={work.wesiteImageUrl}
                    alt={work.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 right-0 h-[32rem] w-[12rem] bg-purple-700/30 blur-[9rem]" />
      <div className="absolute left-0 top-0 h-[32rem] w-[12rem] bg-purple-700/30 blur-[9rem]" />
    </section>
  );
}
