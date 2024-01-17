"use client";

import { ImageFrame } from "../image-frame";
import Image from "next/image";
import { siteConfig } from "../../config/site";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center space-y-8 py-12 md:mt-10 mb-20 lg:space-y-16 lg:pt-10 relative px-4 lg:px-8 lg:max-w-7xl mx-auto">
      <motion.div className="w-full md:w-2/5 px-4">
        <motion.h1
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block flex-wrap pb-8 font-medium leading-11 text-pretty text-5xl "
        >
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Hello!
          </span>{" "}
          👋
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-4 leading-7 text-muted-foreground"
        >
          <p>
            I'm Nathan, currently pursuing a degree in software development at
            SAIT. My journey has been fueled by a deep interest in coding and
            data analysis, where I've immersed myself in the intricacies of
            programming. My focus lies in crafting efficient algorithms and
            data-driven solutions.
          </p>
          <p>
            Having roots in the Philippines and growing up in Los Angeles before
            settling in Canada, my diverse background has instilled in me a
            passion for problem-solving through technology. From an early age, I
            found myself drawn to the world of coding and data, fascinated by
            its potential to shape and enhance our daily lives.
          </p>
          <p>
            In my spare time you'll likely find me hitting the gym, gaming,
            DJing, and almost always listening to music (
            <a
              href="https://open.spotify.com/playlist/6i9kekgrwQV7wjh4AEKduM?si=3e60e938d06145c3"
              className="underline hover:text-muted-foreground"
            >
              my playlist
            </a>
            ).
          </p>{" "}
          <p>—</p>
          <motion.ul
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-foreground my-6 flex flex-wrap flex-row gap-3 sm:gap-6 items-start sm:items-center text-sm md:text-base mb-4 underline"
          >
            <Link href="/Nathan_Garcia_Resume_2024.pdf" target="_blank">
              <h1 className=" hover:text-muted-foreground">Resume↗︎</h1>
            </Link>
            <Link href="https://www.linkedin.com/in/ntns/" target="_blank">
              <h1 className=" hover:text-muted-foreground">LinkedIn↗︎</h1>
            </Link>
            <Link href="mailto:hello@ntns.me" target="_blank">
              <h1 className=" hover:text-muted-foreground">Contact↗︎</h1>
            </Link>
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full md:w-2/5"
      >
        <ImageFrame>
          <Image
            className="rounded-lg"
            src="/images/about_me.jpg"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={""}
          />
        </ImageFrame>
      </motion.div>
    </section>
  );
}
