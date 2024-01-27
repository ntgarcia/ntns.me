"use client";

import * as React from "react";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";

export default function Prototypes() {
  return (
    <section className="flex flex-col gap-8 justify-center space-y-8 lg:space-y-16 relative px-20 lg:max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <HeadingText className="bg-clip-text mb-14">Wireframes</HeadingText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl w-auto">
          <Image
            src="/images/boga/onboard.png"
            alt="Onboarding"
            width="600"
            height="600"
          />

          <Image
            src="/images/boga/home.png"
            alt="Home"
            width="600"
            height="600"
          />

          <Image
            src="/images/boga/games-msgs.png"
            alt="Games & Msgs"
            width="600"
            height="600"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-8"
      >
        <span>
          My duty on wireframing was mainly focusing on core features to ensure
          valuable feedback early on. Upon user testing we were able to identify
          these key issues:
        </span>

        <div className="flex flex-col lg:flex-row h-auto lg:h-24 mt-8 mb-8 items-start lg:items-center gap-6">
          <div className="flex flex-row mb-2 gap-3">
            <div className="text-muted-foreground">1.</div>
            <div>
              Emphasize core features of the app to make it distinct from other
              apps that have a similar purpose.
            </div>
          </div>
          <Separator orientation="vertical" className="hidden lg:block" />
          <div className="flex flex-row mb-2 gap-3">
            <div className="text-muted-foreground">2.</div>
            <div>
              Lack of private option in the profile and in the game making
              section. Adding a private or public option to both of those pages.
            </div>
          </div>
          <Separator orientation="vertical" className="hidden lg:block" />
          <div className="flex flex-row mb-2 gap-3">
            <div className="text-muted-foreground">3.</div>
            <div>
              Inconsistency between the games collection page and the event
              planning "choose game" function.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
