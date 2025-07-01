import AboutSection from "@/components/AboutSection";
import AiAnswersSection from "@/components/AiAnswersSection";
import FinalCallToAction from "@/components/FinalCallToAction";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "@/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <AiAnswersSection />
      <TestimonialsSection />
      <FinalCallToAction />
    </>
  );
}
