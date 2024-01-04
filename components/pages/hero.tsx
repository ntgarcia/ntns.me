"use client";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "../../config/site";

import { buttonVariants } from "../ui/button";
import { ImageFrame } from "../image-frame";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { useEffect } from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function HeroHeader() {
  return (
    <>
      <section className="flex items-center justify-center space-y-8 py-12 md:space-y-16 md:pt-10 lg:py-32 relative px-4 md:px-8 lg:max-w-7xl mx-auto">
        <div className="container flex max-w-[64rem] flex-col items-start gap-6 text-left">
          {/* <Link
            href={siteConfig.links.github}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          ></Link> */}
          {/* <h1 className="text-pretty font-semibold text-4xl lg:text-5xl">
              Hi I'm Nathan{" "}
            </h1> */}
          {/* <div className="flex w-100%">
            <div className="flex flex-col md:flex-row gap-4">
              <p className="max-w-[42rem] font-semibold leading-normal text-pretty text-foreground text-3xl sm:leading-8">
                Hi, I'm Nathan{" "}
                <Avatar className="place-content-center">
                  <AvatarImage src="/images/hero-image.jpg"></AvatarImage>
                </Avatar>
              </p>
            </div>
            <p className="max-w-[42rem] font-semibold leading-normal text-pretty text-foreground text-3xl sm:leading-8">
              , a full stack product designer with a passion for creating
              engaging front-end experiences. Calgary-based and currently
              studying at SAIT.
            </p>
          </div> */}
          {/* <p className="max-w-[42rem] leading-normal text-pretty text-muted-foreground sm:text-lg sm:leading-8">
              Full Stack Product Designer
            </p> */}

          {/* <p className="max-w-[42rem] leading-normal text-pretty text-muted-foreground sm:text-xl sm:leading-8">
            is a full stack product designer with a passion for creating
            engaging front-end experiences. Calgary-based and currently studying
            at SAIT.
          </p> */}
          <p
            className="inline-block flex-wrap pb-4 font-medium leading-9 text-pretty text-4xl bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Hi, I'm Nathan
            <Avatar className="inline-block ml-2 mr-3">
              <AvatarImage src="/images/hero-image.jpg"></AvatarImage>
            </Avatar>
            a full stack product designer with a passion for creating engaging
            design systems. Calgary-based and currently studying at SAIT.
          </p>

          <div className="sm:space-x-3 space-x-1">
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <FaGithub className="text-2xl fill-zinc-600 dark:fill-zinc-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nathanlgarcia/"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <FaLinkedin className="text-2xl fill-zinc-600 dark:fill-zinc-300" />
            </Link>
            <Link
              href="mailto:n8g423@gmail.com"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <IoMail className="text-2xl fill-zinc-600 dark:fill-zinc-300" />
            </Link>
          </div>
        </div>
        {/* <div className="mx-auto max-w-6xl px-10 lg:px-12 flex">
          <div className="rounded-full bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:bg-slate-100/5 dark:ring-slate-100/10 lg:rounded-full lg:p-4">
            <Image
              className="rounded-full"
              src="/images/hero-image.jpg"
              width={400}
              height={400}
              quality={100}
              alt="Header image"
            />
          </div>
        </div> */}
      </section>
    </>
  );
}
