import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/Philosophy";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Philosophy />
        <Menu />
        <Experience />
        <Features />
        <Testimonial />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
