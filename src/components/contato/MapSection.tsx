"use client";

import React from "react";

const MapSection = () => {
  return (
    <section className="w-full  py-20">
      <div className="container mx-auto px-4">
        <div className="md:w-[1320px] h-[560px] mx-auto rounded-xl overflow-hidden shadow-lg border-4 border-[#4bc4f2]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.755273262996!2d-73.98813542380546!3d40.75889567138983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d4506e25%3A0x69ce4b63d1f68d25!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1719969999999!5m2!1sen!2sus"
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
