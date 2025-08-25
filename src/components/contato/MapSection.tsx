"use client";

import React from "react";

const MapSection = () => {
  return (
    <section className="w-full  py-20">
      <div className="container mx-auto px-4">
        <div className="md:w-[1320px] h-[560px] mx-auto rounded-xl overflow-hidden shadow-lg border-4 border-[#4bc4f2]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.234152947072!2d-43.2075!3d-22.9836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd07969fd9b%3A0x2d32b37292f1b0c!2sR.%20Visconde%20de%20Piraj%C3%A1%2C%20414%20-%20Sala%20718%20-%20Ipanema%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022410-003!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
