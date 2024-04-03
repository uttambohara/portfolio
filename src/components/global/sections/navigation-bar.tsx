"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationItem, SocialMediaIcon } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, LinkedinIcon, Menu } from "lucide-react";
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

      <nav>
        <ul className="flex gap-2 max-lg:gap-4 max-lg:text-sm max-md:hidden">
          {NavigationItem.map((item) => (
            <Link href={item.href} className="p-1" key={item.id}>
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

        <div className="hidden max-md:block">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-[300px] space-y-6 bg-[#f7f6f5]">
              <div className="space-y-3">
                <SheetTitle className="text-3xl">Navigate</SheetTitle>
                <SheetDescription>
                  <div className="flex gap-4">
                    <a href="https://github.com/uttambohara" target="_blank">
                      <Github />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/uttam-bohara-a6b059271/"
                      target="_blank"
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                </SheetDescription>
              </div>

              <nav>
                <ul className="flex flex-col gap-2">
                  {NavigationItem.map((item) => (
                    <SheetClose key={item.id} asChild>
                      <Link href={item.href} className="p-1">
                        <li className="text-xl">{item.name}</li>
                      </Link>
                    </SheetClose>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <ul className="flex items-center gap-4 max-md:hidden">
          {SocialMediaIcon.map((icon) => (
            <a key={icon.id} href={icon.href} target="_blank">
              <li key={icon.id}>
                <icon.icon />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
}
