import { SiteConfig } from "../types";
import { env } from "process";

export const siteConfig: SiteConfig = {
  name: "Nathan Garcia",
  author: "ntgarcia",
  description: "My Portfolio Website",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "",
  },
  links: {
    github: "https://github.com/ntgarcia",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
