"use client";

import * as React from "react";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";

export default function Issues() {
  return (
    <section className="flex flex-col gap-8 justify-center space-y-8 lg:space-y-16 relative px-20 lg:max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row gap-20 my-10"
      >
        <span className="flex flex-col justify-center">
          {" "}
          <h1 className="text-lg font-semibold mb-8">Core Feature Emphasis</h1>
          <p>
            At first glance the dashboard screen appeared too conventional,
            resembling other task or scheduling apps. Events, similar to tasks,
            can be standalone or part of a campaign. This distinction is
            reflected in the redesigned event cards, with color-coded types and
            indicators for whether it's a standalone event or part of a
            continued game.
          </p>
        </span>
        <Image
          className="rounded-xl border shadow-lg"
          src="/images/boga/issue1.png"
          alt="Empathy Map"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row gap-20 my-10"
      >
        <span className="flex flex-col justify-center">
          {" "}
          <h1 className="text-lg font-semibold mb-8">Privacy Inclusion</h1>
          <p>
            We found that the event creation tab lacked a prompt for privacy
            options, make it unclear if an event is either open to the public or
            closed off just for friends. Adding a private/public option improves
            clarity and enables users to have the option to either have
            exclusive gatherings with friends or those open to connecting with
            new people.
          </p>
        </span>
        <Image
          className="rounded-xl border shadow-lg"
          src="/images/boga/issue2.png"
          alt="Empathy Map"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
    </section>
  );
}
