"use client";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";

export default function Problem() {
  return (
    <section className="bg-secondary flex flex-col md:flex-row gap-8 lg:gap-16 relative">
      <div className="lg:max-w-7xl mx-auto py-20 px-20 justify-center space-y-8 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <HeadingText className="bg-clip-text">Problem</HeadingText>
          <p>
            Most scheduling apps are generalized to be a jack of all trades for
            all tasks, while also being a master of none. Scheduling something
            as niche as weekly board game nights with friends requires more
            planning and organization.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <HeadingText className="bg-clip-text">Solution</HeadingText>
          <p>
            A modern scheduling app designed specifically for organizing board
            game nights with friends. By automatically delegating tasks between
            members, it enables equal and fair workload.
          </p>
        </div>
      </div>
    </section>
  );
}
