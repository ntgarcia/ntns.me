import Footer from "../../components/layout/footer";
import Bio from "../../components/pages/bio";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};

export default function About() {
  return (
    <main>
      <Bio />
      <Footer />
    </main>
  );
}
