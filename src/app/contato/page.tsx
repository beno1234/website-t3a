import Breadcrumb from "@/components/contato/Breadcrumb";
import Email from "@/components/contato/Email";
import FormSection from "@/components/contato/Form";
import MapSection from "@/components/contato/MapSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Contato = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Email />
      <FormSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default Contato;
