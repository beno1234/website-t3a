"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  clientName: string;
  clientRole: string;
  clientAvatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    clientName: "Marian R. Vieira",
    clientRole: "Social Media Manager",
    clientAvatarUrl: "/author-2.png",
  },
  {
    id: 2,
    rating: 5,
    text: "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    clientName: "Bob E. Wiggins",
    clientRole: "Social Media Manager",
    clientAvatarUrl: "/author-3.png",
  },
  {
    id: 3,
    rating: 5,
    text: "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    clientName: "Larry K. Lund",
    clientRole: "Social Media Manager",
    clientAvatarUrl: "/author-2.png",
  },
  {
    id: 4,
    rating: 5,
    text: "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    clientName: "Marian R. Vieira",
    clientRole: "Social Media Manager",
    clientAvatarUrl: "/author-2.png",
  },
];

const TestimonialCarousel: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div className="flex mb-4">{stars}</div>;
  };

  return (
    <motion.section
      className="bg-[#000d24] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-9xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-400 mb-2 garet"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Histórias de sucesso
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight garet"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Nossos clientes compartilharam <br className="sm:hidden" />
          <span className="text-[#4bc4f2] garet">seus sucessos</span>
        </motion.h2>

        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4, centeredSlides: false },
            768: { slidesPerView: 2.4, centeredSlides: false },
            1024: { slidesPerView: 3.8, centeredSlides: false },
          }}
          className="mySwiper testimonial-swiper pb-12"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-gray-800 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  {renderStars(testimonial.rating)}
                  <p className="text-gray-300 text-base leading-relaxed mb-6 garet">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.clientAvatarUrl}
                      alt={testimonial.clientName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold garet">
                      {testimonial.clientName}
                    </h4>
                    <p className="text-gray-400 text-sm garet">
                      {testimonial.clientRole}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default TestimonialCarousel;
