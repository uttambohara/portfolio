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
import { Menu } from "lucide-react";
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
            <SheetContent className="space-y-6">
              <div className="space-y-3">
                <SheetTitle className="text-3xl">Navigate</SheetTitle>
                <SheetDescription>
                  User this sidebar to navigate in mobile devices.
                  <ul className="flex items-center gap-4 max-md:hidden">
                    {SocialMediaIcon.map((icon) => (
                      <a key={icon.id} href={icon.href} target="_blank">
                        <li key={icon.id}>
                          <icon.icon />
                        </li>
                      </a>
                    ))}
                  </ul>
                </SheetDescription>
              </div>

              <nav>
                <ul className="flex flex-col gap-4">
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
