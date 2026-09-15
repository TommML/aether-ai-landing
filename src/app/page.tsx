import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1" tabIndex={-1}>
        <Hero />
        <Services />
        <HowWeWork />
        <Benefits />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
