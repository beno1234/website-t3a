"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "João Victor Trindade",
    role: "Co-Fundador e desenvolvedor da T3A.",
    imageUrl: "/joao.webp",
  },
  {
    id: 2,
    name: "Fernando Gusmão",
    role: "Co-Fundador e CFO da T3A.",
    imageUrl: "/fernando.webp",
  },
];

const TeamCarousel: React.FC = () => {
  return (
    <motion.section
      className="text-white py-16 px-4 sm:px-6 lg:px-8 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Block */}
        <motion.div
          className="md:w-1/3 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 garet">
            Nosso time
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6 leading-tight garet">
            Time por trás da <span className="text-[#4bc4f2]">inovação</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 garet">
            Somos uma equipe dedicada e apaixonada por tecnologia, focada em
            criar soluções inovadoras que fazem a diferença.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <button className="swiper-button-prev-custom bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="swiper-button-next-custom bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="md:w-2/3 w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={member.id}>
                <motion.div
                  className="rounded-lg flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-96 overflow-hidden rounded-md mb-4">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-1 garet">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-sm garet">{member.role}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default TeamCarousel;
