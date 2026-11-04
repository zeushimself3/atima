import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { FeedFormulation } from "@/components/FeedFormulation";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Services />
        <FeedFormulation />
        <Process />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
