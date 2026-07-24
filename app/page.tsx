import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Equipment />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
      
    </>
  );
}