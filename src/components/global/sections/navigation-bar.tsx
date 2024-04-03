"use client";

import { NavigationItem, SocialMediaIcon } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function NavigationBar() {
  // GSAP
  useGSAP(() => {
    gsap.from(".nav-header", {
      y: -100,
      opacity: 0,
      delay: 0.5,
    });
    //
    gsap.to(".animate-green", {
      scale: 2,
      opacity: 0,
      repeat: -1,
      duration: 1,
    });
  });

  return (
    <header className="nav-header fixed top-4 z-20 flex w-full items-center justify-between px-8 py-2 text-zinc-400 backdrop-blur-sm">
      <div>
        <h2>🙋🏼‍♂️ Uttam Bohara</h2>
        <p className="text-sm text-muted-foreground">Aspiring developer</p>
      </div>

      <nav className="max-md:hidden">
        <ul className="flex items-center gap-6">
          {NavigationItem.map((item) => (
            <Link key={item.id} href={item.href}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="relative top-0 text-green-700">
            <div className="animate-green h-3 w-3 rounded-full bg-green-300" />
          </div>

          <div>Available</div>
        </div>

        <ul className="flex items-center gap-4 max-md:hidden">
          {SocialMediaIcon.map((icon) => (
            <li key={icon.id}>
              <icon.icon />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
