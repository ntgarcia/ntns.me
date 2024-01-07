"use client";

import { ImageFrame } from "../image-frame";
import Image from "next/image";
import { siteConfig } from "../../config/site";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="bg-secondary">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <h1>Problem</h1>
      </div>
    </section>
  );
}
