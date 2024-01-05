"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navLinks } from "../../config/links";
import { ModeToggle } from "../mode-toggle";
import { NavItem } from "../../types";

export default function Navbar() {
  return (
    <header className="select-none sticky top-0 backdrop-filter bg-background/70 backdrop-blur-md z-10 border-b">
      <nav className="mx-auto flex items-center justify-between px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/">
              <h1
                className="text-2xl font-bold duration-200 bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-600 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
              >
                nt.
              </h1>
            </Link>
          </div>
        </div>
        <div className="block">
          <div
            className="left-0 right-0 z-10 m-auto justify-self-center rounded-md static mt-0 p-0"
            style={{ width: "100%", maxWidth: "20rem" }}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Work
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Resume
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ModeToggle />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
