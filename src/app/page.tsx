import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VerticalSection from "@/components/VerticalSection";
import MenuGrid from "@/components/MenuGrid";
import SpaceGallery from "@/components/SpaceGallery";
import AccessInfo from "@/components/AccessInfo";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VerticalSection />
      <MenuGrid />
      <SpaceGallery />
      <AccessInfo />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
