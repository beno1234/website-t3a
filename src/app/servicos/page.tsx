import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/services/Breadcrumb";
import HeroWithVideoAndStats from "@/components/services/HeroWithVideoAndStats";
import ServicesSection from "@/components/services/Services";
import React from "react";

const Servicos = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <ServicesSection />
      <HeroWithVideoAndStats />
      <Footer />
    </>
  );
};

export default Servicos;
