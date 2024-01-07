import Footer from "../../components/layout/footer";
import Header from "../../components/pages/projects/boga/header";
import Problem from "../../components/pages/projects/boga/problem";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};

export default function About() {
  return (
    <main>
      <Header />
      <Problem />
      <Footer />
    </main>
  );
}
