"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

import { MouseFollower, UpdateFollower } from "react-mouse-follower";

export default function Projects() {
  const hoverLink = { backgroundColor: "#209CEE", scale: 10, zIndex: -1 };
  return (
    <section className="" id="projects">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <div className="grid grid-cols-1 gap-8 ">
          <>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col-2 gap-10"
            >
              <Link
                href="/boga"
                className=" rounded-xl mb-5 md:w-1/2 bg-secondary"
              >
                <UpdateFollower mouseOptions={hoverLink}>
                  <Image
                    src="/images/boga-cover.svg"
                    alt="BOGA Cover"
                    width="0"
                    height="0"
                    style={{ width: "100%", height: "auto" }}
                  />
                </UpdateFollower>
              </Link>

              <div className="hidden md:flex flex-col gap-6 mb-5 w-1/2 justify-center">
                <h1
                  className="text-left text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
                >
                  Simplifying Board Game Nights with Seamless Scheduling and
                  Coordination
                </h1>
                <div className="flex font-semibold text-muted-foreground h-5 items-center space-x-4 text-sm">
                  <div>Case Study</div>
                  <Separator orientation="vertical" />
                  <div>Product Design</div>
                  <Separator orientation="vertical" />
                  <div>UI/UX</div>
                </div>
                <UpdateFollower mouseOptions={hoverLink}>
                  <Link href="/boga" className="flex  justify-start">
                    <Button
                      variant="outline"
                      className="w-fit bg-background hover:bg-foreground hover:text-background"
                    >
                      View Case Study
                    </Button>
                  </Link>
                </UpdateFollower>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col-2 gap-10"
            >
              <Link
                href="https://getfitness.vercel.app/"
                passHref
                target="_blank"
                className=" rounded-xl mb-5 md:w-1/2 bg-secondary"
              >
                <UpdateFollower mouseOptions={hoverLink}>
                  <Image
                    src="/images/getfitness-cover.svg"
                    alt="GetFitness Cover"
                    width="0"
                    height="0"
                    style={{ width: "100%", height: "auto" }}
                  />
                </UpdateFollower>
              </Link>

              <div className="hidden md:flex flex-col gap-6 mb-5 w-1/2 justify-center">
                <h1
                  className="text-left text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
                >
                  GetFitness: Streamlining Workout Routines
                </h1>
                <div className="flex font-semibold text-muted-foreground h-5 items-center space-x-4 text-sm">
                  <div>Front-End Development</div>
                  <Separator orientation="vertical" />
                  <div>Web Design</div>
                </div>
                <UpdateFollower mouseOptions={hoverLink}>
                  <Link
                    href="https://getfitness.vercel.app/"
                    passHref
                    target="_blank"
                    className="flex  justify-start"
                  >
                    <Button
                      variant="outline"
                      className="w-fit bg-background hover:bg-foreground hover:text-background"
                    >
                      View Website ↗︎
                    </Button>
                  </Link>
                </UpdateFollower>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col-2 gap-10"
            >
              <Link href="/" className=" rounded-xl mb-5 md:w-1/2 bg-secondary">
                <UpdateFollower mouseOptions={hoverLink}>
                  <Image
                    src="/images/cail-cover.svg"
                    alt="BOGA Cover"
                    width="0"
                    height="0"
                    style={{ width: "100%", height: "auto" }}
                  />
                </UpdateFollower>
              </Link>

              <div className="hidden md:flex flex-col gap-6 mb-5 w-1/2 justify-center">
                <h1
                  className="text-left text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
                >
                  Supporting Inclusive Inter-Generational Communities
                </h1>
                <div className="font-semibold text-muted-foreground flex h-5 items-center space-x-4 text-sm">
                  <div>Capstone Project</div>
                  <Separator orientation="vertical" />
                  <div>Mobile App Development</div>
                </div>

                <Button
                  variant="outline"
                  className="w-fit bg-background hover:bg-foreground hover:text-background"
                >
                  Work in Progress 🚧
                </Button>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col-2"
            >
              <Link href="/" className=" rounded-xl mb-5 md:w-1/2">
                <UpdateFollower mouseOptions={hoverLink}>
                  <Image
                    src="/images/osu-cover.svg"
                    alt="BOGA Cover"
                    width="0"
                    height="0"
                    style={{ width: "100%", height: "auto" }}
                  />
                </UpdateFollower>
              </Link>

              <div className="hidden md:flex flex-col gap-6 mb-5 w-1/2 justify-center">
                <h1
                  className="text-left text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
                >
                  osu! 2024 Mousepad Commission
                </h1>
                <div className="font-semibold text-muted-foreground flex h-5 items-center space-x-4 text-sm">
                  <div>Misc.</div>
                  <Separator orientation="vertical" />
                  <div>Design</div>
                  <Separator orientation="vertical" />
                  <div>Commission</div>
                </div>
                <UpdateFollower mouseOptions={hoverLink}>
                  <Link href="/" className="flex justify-start">
                    <Button
                      variant="outline"
                      className="w-fit bg-background hover:bg-foreground hover:text-background"
                    >
                      View Work
                    </Button>
                  </Link>
                </UpdateFollower>
              </div>
            </motion.div> */}
          </>
        </div>
      </div>
    </section>
  );
}
