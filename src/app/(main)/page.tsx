import About from "@/components/global/sections/about";
import Contact from "@/components/global/sections/contact";
import Experiences from "@/components/global/sections/experiences";
import Hero from "@/components/global/sections/hero";
import Stack from "@/components/global/sections/stack";
import Works from "@/components/global/sections/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Works />

      <Experiences />
      <Contact />
    </main>
  );
}
