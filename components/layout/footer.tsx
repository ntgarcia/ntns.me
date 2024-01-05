import Link from "next/link";
import { siteConfig } from "../../config/site";
import { navLinks } from "../../config/links";
import { ModeToggle } from "../mode-toggle";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-10 md:p-20">
        <div className="flex flex-col place-content-start">
          <h1
            className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Get in Touch with Me
          </h1>
          <ul className="my-6 flex flex-wrap gap-4 items-center">
            {/* {navLinks.data.map((item, index) => {
              return (
                item.href && (
                  <li key={index}>
                    <Link
                      href={item.disabled ? "/" : item.href}
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              );
            })} */}
            <Link
              href={siteConfig.links.github}
              // className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              {/* <FaGithub className="text-2xl " /> */}
              <h1 className="text-lg mb-4 hover:text-muted-foreground">
                ➝ Github
              </h1>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ntns/"
              // className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              {/* <FaLinkedin className="text-2xl " /> */}
              <h1 className="text-lg mb-4 hover:text-muted-foreground">
                ➝ LinkedIn
              </h1>
            </Link>
            <Link
              href="mailto:n8g423@gmail.com"
              // className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              {/* <IoMail className="text-2xl " /> */}
              <h1 className="text-lg mb-4 hover:text-muted-foreground">
                ➝ Contact
              </h1>
            </Link>
          </ul>
        </div>
        <div className="flex items-start ">
          <div className="block">
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
