"use client";

import Link from "next/link";

import { siteConfig } from "../../config/site";
import { navLinks } from "../../config/links";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
} from "react";
import { UrlObject } from "url";
import { ModeToggle } from "../mode-toggle";
import { NavItem } from "../../types";

export default function Navbar() {
  return (
    <header className="select-none sticky top-0 backdrop-filter bg-background/50 backdrop-blur-md z-10 border-b">
      <nav className="mx-auto flex items-center justify-between px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/">
              <h1
                className="text-2xl font-bold duration-200 bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-600 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
              >
                <h2>nt.</h2>
              </h1>
            </Link>
          </div>
        </div>
        <div className="block">
          <div
            className="left-0 right-0 z-10 m-auto justify-self-center rounded-md static mt-0 p-0"
            style={{ width: "100%", maxWidth: "20rem" }}
          >
            <ul className="flex font-medium items-center opacity-60 flex-row space-x-6 space-y-0">
              {navLinks.data.map(function (item: NavItem, index: number) {
                return (
                  item.href && (
                    <Link
                      key={index}
                      href={item.disabled ? "/" : item.href}
                      className="hover:underline decoration-2 underline-offset-2"
                    >
                      {item.title}
                    </Link>
                  )
                );
              })}
              <ModeToggle />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
