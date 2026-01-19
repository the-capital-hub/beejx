
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import WhyChoose from "@/components/WhyChoose";
import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import SustainableBanner from "@/components/SustainableBanner";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Impact />
      <WhyChoose />
      <Benefits />
      <Blog />
      <SustainableBanner />
      <Insights />
      <Footer />
    </main>
  );
}
