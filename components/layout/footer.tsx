import Link from "next/link";
import { siteConfig } from "../../config/site";
import { navLinks } from "../../config/links";
import { ModeToggle } from "../mode-toggle";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="flex place-content-center">
          <ul className="mb-6 flex flex-wrap gap-4 items-center opacity-60 sm:mb-6">
            {navLinks.data.map((item, index) => {
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
            })}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="block text-sm text-muted-foreground sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a
              target="_blank"
              href="https://github.com/redpangilinan/iotawise"
              className="hover:underline"
            >
              Nathan Garcia
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
