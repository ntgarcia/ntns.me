"use client";

import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <>
      <section className="flex items-center justify-center space-y-8 py-12 md:py-32 lg:py-64 relative px-4 md:px-8 lg:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container flex max-w-[64rem] flex-col items-start gap-10 text-left"
        >
          <p
            className="inline-block flex-wrap pb-8 font-medium leading-11 text-pretty text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Hi, I'm Nathan
            <a href="/about">
              <Avatar className="inline-block ml-2 mr-3">
                <AvatarImage src="/images/hero-image.jpg"></AvatarImage>
                <AvatarFallback>NT</AvatarFallback>
              </Avatar>
            </a>
            a Calgary-based product designer with a passion for creating
            engaging design systems.
          </p>
          <div className="w-full flex gap-y-8 justify-between flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-2/5"
            >
              <h1 className="font-semibold pb-2 text-muted-foreground">
                Currently
              </h1>
              <p>Finishing Software Development at SAIT</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full md:w-2/5"
            >
              <h1 className="font-semibold pb-2 text-muted-foreground">Past</h1>
              <p>Former Intern at Alberta Health Services IT</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
