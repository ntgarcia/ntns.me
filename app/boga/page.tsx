import Footer from "../../components/layout/footer";

import Header from "../../components/pages/projects/boga/header";
import Problem from "../../components/pages/projects/boga/problem";
import Body from "../../components/pages/projects/boga/body";
import Prototypes from "../../components/pages/projects/boga/prototypes";
import Issues from "../../components/pages/projects/boga/issues";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOGA - Nathan Garcia",
  description: "BOGA Mobile App",
};

export default function About() {
  return (
    <main>
      <Header />
      <Problem />
      <Body />
      <Prototypes />
      <Issues />
      <Footer />
    </main>
  );
}
