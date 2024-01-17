"use client";

import * as React from "react";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../../../ui/card";
import { motion } from "framer-motion";

export default function Prototypes() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center space-y-8 lg:space-y-16 relative py-20 px-20 lg:max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <HeadingText className="bg-clip-text mb-14">Wireframes</HeadingText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl w-auto">
          <Image
            src="/images/boga-wireframe/onboard.png"
            alt="Onboarding"
            width="600"
            height="600"
          />

          <Image
            src="/images/boga-wireframe/home.png"
            alt="Home"
            width="600"
            height="600"
          />

          <Image
            src="/images/boga-wireframe/games-msgs.png"
            alt="Games & Msgs"
            width="600"
            height="600"
          />
        </div>
      </motion.div>
    </section>
  );
}
