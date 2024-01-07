"use client";

import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center space-y-8 py-12 md:mt-8 mb-20 lg:space-y-16 relative px-4 lg:px-8 lg:max-w-7xl mx-auto">
      <div>
        <Image
          className="mb-12 rounded-xl transition ease-in-out delay-100 duration-300 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
          src="/images/boga-cover.png"
          alt="BOGA Cover"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="grid grid-cols-1">
          <h1
            className="inline-block flex-wrap pb-8 font-semibold leading-11 text-pretty text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            BOGA Mobile App
          </h1>
          <h2 className="text-muted-foreground pb-10">
            Effortlessly schedule and coordinates board game nights with your
            friends.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 py-8 text-muted-foreground">
            <span>
              <h1 className="font-semibold text-foreground mb-4">CLIENT</h1>
              <p>Class Project</p>
            </span>
            <span>
              <h1 className="font-semibold text-foreground mb-4">ROLE</h1>
              <p>
                Research <br />
                UI/UX Design
              </p>
            </span>
            <span>
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
            </span>
            <span>
              <h1 className="font-semibold text-foreground mb-4">DURATION</h1>
              <p>
                10 weeks <br />
                Fall 2022
              </p>
            </span>
            <span>
              <h1 className="font-semibold text-foreground mb-4">
                PROJECT DELIVERABLES
              </h1>
              <p>
                User Interface (Mobile) <br />
                High-Fidelity Mocks
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
