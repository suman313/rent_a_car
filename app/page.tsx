import Image from "next/image";
import Hero from "./_components/Hero";
import SearchBar from "./_components/SearchBar";
import Workflow from "./_sections/Workflow";
import { About } from "./_sections/About";
import Testimonials from "./_sections/Testimonials";
import { Footer, Navbar } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Workflow />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}
