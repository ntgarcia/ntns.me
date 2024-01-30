"use client";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center space-y-8 py-12 md:mt-8 lg:space-y-16 relative px-20 lg:max-w-7xl mx-auto">
      <div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            className="mb-12 rounded-xl transition ease-in-out delay-100 duration-300"
            src="/images/boga/boga-cover.png"
            alt="BOGA Cover"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 mb-4">
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-2/5"
          >
            <h1 className="inline-block flex-wrap pb-8 font-bold leading-11 text-pretty text-4xl md:text-5xl">
              BOGA Mobile App
            </h1>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-8 text-muted-foreground">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="font-semibold text-foreground mb-4">CLIENT</h1>
              <p>Class Project</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h1 className="font-semibold text-foreground mb-4">ROLE</h1>
              <p>
                Research <br />
                UI/UX Design
              </p>
            </motion.div>
            {/* <span>
              <h1 className="font-semibold text-foreground mb-4">TEAM</h1>
              <p>
                Kenneth Cruz
                <br />
                Rocky Van Ladio Dagalea
                <br />
                Nathan Garcia
                <br />
                Juniper Grunow
                <br />
                Matthew Kulcher
                <br />
                Quintin Mason
              </p>
            </span> */}
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h1 className="font-semibold text-foreground mb-4">DURATION</h1>
              <p>
                10 weeks <br />
                Fall 2022
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h1 className="font-semibold text-foreground mb-4">
                DELIVERABLES
              </h1>
              <p>
                User Interface (Mobile) <br />
                High-Fidelity Mocks
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
