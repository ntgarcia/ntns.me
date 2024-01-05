import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

function Cards() {
  return (
    <>
      <Card className="flex flex-grow flex-col gap-4 p-8 text-left dark:bg-primary">
        <Link
          href="/#boga"
          target="_blank"
          className="overflow-hidden rounded-xl mb-4"
        >
          <Image
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
            src="/images/boga-cover.png"
            alt="BOGA Cover"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <CardContent className="flex gap-4 flex-col place-content-center">
          <div className="flex gap-4">
            <CardTitle
              className="text-3xl bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
            >
              BOGA
            </CardTitle>
            <p className="rounded-2xl bg-accent mt-0.5 px-4 py-1.5 text-sm font-medium">
              Case Study
            </p>
          </div>
          <CardDescription>
            Effortlessly schedule and coordinates board game nights with your
            friends.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="flex flex-grow flex-col gap-4 p-8 text-left dark:bg-primary">
        <Link
          href="/#cail"
          target="_blank"
          className="overflow-hidden rounded-xl mb-4"
        >
          <Image
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300"
            src="/images/cail-cover.png"
            alt="CAIL Cover"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <CardContent className="flex gap-4 flex-col place-content-center">
          <div className="flex gap-4">
            <CardTitle
              className="text-3xl bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
            >
              CAIL
            </CardTitle>
            {/* <p className="rounded-2xl bg-accent mt-0.5 px-4 py-1.5 text-sm font-medium">
              Capstone
            </p> */}
            <p className="text-green-500 mt-0.5 py-1.5 text-sm font-medium">
              ● IN PROGRESS
            </p>
          </div>
          <CardDescription>
            Enable communication and coordination between students and seniors
            in assisted living facilities.
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

export default function Projects() {
  return (
    <section className="bg-secondary" id="projects">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        {/* <HeadingText subtext="Design Concepts & Case Studies">
          Projects
        </HeadingText> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Cards />
        </div>
      </div>
    </section>
  );
}
