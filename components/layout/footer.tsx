import Link from "next/link";
import { siteConfig } from "../../config/site";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="flex flex-row justify-between mx-auto w-full max-w-screen-xl p-10 md:p-20">
        <div className="flex flex-col place-content-start">
          <h1
            className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Get in Touch!
          </h1>
          <ul className="my-6 flex flex-wrap flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center text-sm md:text-base mb-4 underline">
            <Link href={siteConfig.links.github} target="_blank">
              <h1 className=" hover:text-muted-foreground">Github↗︎</h1>
            </Link>
            <Link href="https://www.linkedin.com/in/ntns/" target="_blank">
              <h1 className=" hover:text-muted-foreground">LinkedIn↗︎</h1>
            </Link>
            <Link href="mailto:hello@ntns.me" target="_blank">
              <h1 className=" hover:text-muted-foreground">Contact↗︎</h1>
            </Link>
          </ul>
        </div>
        <div className="flex flex-wrap items-start md:justify-end flex-col sm:flex-row mt-2 w-1/3 sm:w-1/2">
          <div className="block text-right">
            <h1 className="text-sm text-muted-foreground font-medium md:text-base mb-5 text-pretty">
              Designed and coded by yours truly ✨
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              {" "}
              © {new Date().getFullYear()} Nathan Garcia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
