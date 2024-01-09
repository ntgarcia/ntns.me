"use client";

import * as React from "react";
import { Icons } from "./icons";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

import { MouseFollower, UpdateFollower } from "react-mouse-follower";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Icons.sun
        className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
          theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""
        }`}
      />
      <Icons.moon
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
          theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
