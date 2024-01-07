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
            I'm Nathan, a product designer studying software development at
            SAIT. Fueled by a passion for UI/UX and graphic design, I've honed
            these skills into the realm of product design. My focus is on
            seamlessly integrating creative aesthetics with sustainable
            functionalities. Eager to contribute innovative, user-centric
            solutions, I actively engage in every design stage, from concept to
            prototyping.
          </p>
          <p>
            Born in the Philippines, and raised in Los Angeles before moving to
            Canada, I've always had a passion for the arts. Growing up, I became
            more attentive to great design that enhances experiences around me,
            naturally gravitating to anything forward thinking and innovative.
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
            <Link href="/Nathan_Garcia-Resume_2024.pdf" target="_blank">
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
        transition={{ duration: 0.7, delay: 0.6 }}
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
