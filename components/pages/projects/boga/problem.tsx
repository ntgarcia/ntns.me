"use client";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="bg-secondary flex flex-col md:flex-row gap-8 lg:gap-16 relative">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="lg:max-w-7xl mx-auto py-20 px-20 justify-center space-y-8 lg:space-y-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="flex flex-row mb-2 gap-3">
            <div className="text-red-500 text-2xl ">●</div>
            <HeadingText className="bg-clip-text">Problem</HeadingText>
          </div>

          <p>
            Most scheduling apps are generalized to be a jack of all trades for
            all tasks, while also being a master of none. Scheduling something
            as niche as weekly board game nights with friends requires more
            planning and organization.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-row mb-2 gap-3">
            <div className="text-green-500 text-2xl ">●</div>
            <HeadingText className="bg-clip-text">Solution</HeadingText>
          </div>
          <p>
            A modern scheduling app designed specifically for organizing board
            game nights with friends. By automatically delegating tasks between
            members, it enables equal and fair workload.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
