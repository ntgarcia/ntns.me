import { PWARedirect } from "../../components/pwa-redirect";
import Hero from "../../components/pages/hero";
import FeatureCards from "../../components/pages/projects";
import Overview from "../../components/pages/overview";
import OpenSource from "../../components/pages/opensource";
import Footer from "../../components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <Footer />
    </main>
  );
}
