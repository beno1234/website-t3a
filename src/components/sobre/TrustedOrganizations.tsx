"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";

interface Organization {
  id: number;
  name: string;
  logoUrl: string;
}

const organizations: Organization[] = [
  { id: 1, name: "ecl", logoUrl: "/carousel/ecl-conecta.webp" },
  { id: 2, name: "energy-solar", logoUrl: "/carousel/energy-solar.webp" },
  { id: 3, name: "ensino", logoUrl: "/carousel/ensino.webp" },
  { id: 4, name: "fiber", logoUrl: "/carousel/fiber.webp" },
  { id: 5, name: "finance", logoUrl: "/carousel/finance.webp" },
  { id: 6, name: "lameds", logoUrl: "/carousel/lameds.webp" },
  { id: 7, name: "life", logoUrl: "/carousel/life.webp" },
  { id: 8, name: "mouratta", logoUrl: "/carousel/mouratta.webp" },
  { id: 9, name: "oswaldo-cruz", logoUrl: "/carousel/oswaldo-cruz.webp" },
  { id: 10, name: "rafael", logoUrl: "/carousel/rafael.webp" },
  { id: 11, name: "superflow", logoUrl: "/carousel/superflow.webp" },
];

const TrustedOrganizationsCarousel: React.FC = () => {
  return (
    <motion.section
      className="text-white py-16 px-4 sm:px-6 lg:px-8 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-widest text-[#4bc4f2] mb-12 garet"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Negocios brasileiros que confiam na T3A
        </motion.p>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mySwiper logo-carousel"
          >
            {organizations.map((org) => (
              <SwiperSlide key={org.id}>
                <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center h-24 w-full">
                  <div className="relative w-full h-10">
                    <Image
                      src={org.logoUrl}
                      alt={`${org.name} Logo`}
                      fill
                      objectFit="contain"
                      className=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustedOrganizationsCarousel;
