"use client";

import { useGSAP } from "@gsap/react";
import { ContactForm } from "../form/contact-form";
import gsap from "gsap/all";

export default function Contact() {
  useGSAP(() => {
    gsap.from(".contact-container", {
      opacity: 0,
      duration: 4,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 60%",
      },
    });
  });
  return (
    <section className="relative bg-black" id="contact">
      <div className="contact-container | mx-auto max-w-screen-sm px-6 py-32">
        <div>
          <div className="mb-8">
            <h2 className="mb-3 text-3xl">Find me through</h2>
            <p>
              My email is boharauttam2@gmail.com or you can contact me using
              this contact form.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-10 h-[12rem] w-[12rem] -translate-x-[50%] rounded-full bg-purple-700 blur-[7rem]" />
    </section>
  );
}
