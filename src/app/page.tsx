import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <IndustriesSection />
      </main>
    </>
  );
}