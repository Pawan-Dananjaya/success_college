import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import JourneySection from "@/components/JourneySection";
import Branches from "@/components/Branches";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // FIX ADDED HERE: 
    // pt-[130px] pushes it down on Mobile
    // lg:pt-[240px] pushes it down on Desktop (to clear the big logo area)
    <main className="pt-[130px] lg:pt-[200px]">
      
      <HeroSection />

      <WhyChooseUs/>

      <JourneySection/>

      <Branches/>

      <Programs/>

      <Footer/>
      
      {/* Rest of the content */}
      <div className="h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Rest of the content coming soon...</p>
      </div>
    </main>
  );
}