import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/sobre/Breadcrumb";
import CoreValues from "@/components/sobre/CoreValues";
import Ourhistory from "@/components/sobre/Ourhistory";
import TeamCarousel from "@/components/sobre/TeamCarousel";
import TestimonialCarousel from "@/components/sobre/TestimonialCarousel";
import TrustedOrganizations from "@/components/sobre/TrustedOrganizations";
import React from "react";

const Sobre = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Ourhistory />
      <CoreValues />
      <TeamCarousel />
      <TestimonialCarousel />
      <TrustedOrganizations />
      <Footer />
    </>
  );
};

export default Sobre;
