import Link from "next/link";
import { siteConfig } from "../../config/site";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="flex flex-row justify-between mx-auto w-full max-w-screen-xl p-10 md:p-20">
        <div className="flex flex-col place-content-start">
          <h1
            className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Get in Touch!
          </h1>
          <ul className="my-6 flex flex-wrap gap-6 items-center text-m mb-4 underline">
            <Link href={siteConfig.links.github}>
              <h1 className=" hover:text-muted-foreground">Github↗︎</h1>
            </Link>
            <Link href="https://www.linkedin.com/in/ntns/">
              <h1 className=" hover:text-muted-foreground">LinkedIn↗︎</h1>
            </Link>
            <Link href="mailto:hello@ntns.me">
              <h1 className=" hover:text-muted-foreground">Contact↗︎</h1>
            </Link>
          </ul>
        </div>
        <div className="flex items-start mt-2">
          <div className="block text-right">
            <h1 className="text-m mb-5">
              Designed and coded by Nathan Garcia ✨
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
