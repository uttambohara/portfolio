"use client";

import { WorksData } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import gsap, { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <section className="relative" id="works">
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <div className="absolute left-0 right-auto top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-auto right-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-20 blur-[80px]"></div>
      </div>

      <div className="works-container | container space-y-8 py-32">
        <h2 className="text-3xl">I have developed</h2>

        <ul className="group relative space-y-10">
          {WorksData.map((work, index) => (
            <Link key={work.id} href={work.projectLink}>
              <li
                className={cn(
                  "work-item | ease group flex items-center transition-all hover:-rotate-2 hover:scale-105 hover:cursor-pointer max-sm:flex-col-reverse md:flex-row",
                  index !== WorksData.length - 1 &&
                    "border-b border-slate-100/20",
                )}
              >
                <div className="| group max-w-[50rem] space-y-4 px-6 py-4">
                  {!work.completed && (
                    <Button
                      variant={"link"}
                      className="font-extralight text-zinc-600 decoration-[#c9bb94] transition-all group-hover:underline group-hover:underline-offset-4"
                    >
                      Currently Working
                    </Button>
                  )}
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
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}
