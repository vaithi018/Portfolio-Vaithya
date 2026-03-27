import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="flex-1 flex flex-col relative">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
