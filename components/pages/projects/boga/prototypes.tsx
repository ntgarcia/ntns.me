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

export default function Prototypes() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center space-y-8 lg:space-y-16 relative py-20 px-20 lg:max-w-7xl mx-auto">
      <div>
        <HeadingText className="bg-clip-text mb-14">Wireframes</HeadingText>
        <div className="px-60">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="flex aspect-square items-center justify-center mb-24 rounded-xl"
                  src="/images/boga-wireframe/onboard.png"
                  alt="Onboarding"
                  width="600"
                  height="600"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="flex aspect-square items-center justify-center mb-24 rounded-xl"
                  src="/images/boga-wireframe/home.png"
                  alt="Home"
                  width="600"
                  height="600"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="flex aspect-square items-center justify-center mb-24 rounded-xl"
                  src="/images/boga-wireframe/games-msgs.png"
                  alt="Games & Msgs"
                  width="600"
                  height="600"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
