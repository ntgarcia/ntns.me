import Hero from "../../components/pages/hero";
import Projects from "../../components/pages/projects";
import Footer from "../../components/layout/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathan Garcia - Product Designer",
  description: "Portfolio Website",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
