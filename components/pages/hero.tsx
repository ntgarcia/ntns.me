"use client";

import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function HeroHeader() {
  return (
    <>
      <section className="flex items-center justify-center space-y-8 py-12 md:space-y-16 md:pt-10 lg:py-32 relative px-4 md:px-8 lg:max-w-7xl mx-auto">
        <div className="container flex max-w-[64rem] flex-col items-start gap-10 text-left">
          <p
            className="inline-block flex-wrap pb-8 font-medium leading-11 text-pretty text-5xl bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Hi, I'm Nathan
            <a href="/about">
              <Avatar className="inline-block ml-2 mr-3">
                <AvatarImage src="/images/hero-image.jpg"></AvatarImage>
                <AvatarFallback>NT</AvatarFallback>
              </Avatar>
            </a>
            a full stack product designer with a passion for creating engaging
            design systems.
          </p>
          <div className="w-full flex gap-y-8 justify-between flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <h1 className="font-semibold pb-2 text-muted-foreground">
                Currently
              </h1>
              <p>Finishing Software Development at SAIT</p>
            </div>
            <div className="w-full md:w-2/5">
              <h1 className="font-semibold pb-2 text-muted-foreground">Past</h1>
              <p>Former Intern at Alberta Health Services IT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
