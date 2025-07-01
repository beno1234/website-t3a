"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Bob E. Wiggins",
    role: "Social Media Manager",
    avatar: "/author-4.png",
    rating: 5,
    content:
      "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
  },
  {
    name: "Larry K. Lund",
    role: "Social Media Manager",
    avatar: "/author-4.png",
    rating: 5,
    content:
      "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
  },
  {
    name: "Marian R. Vieira",
    role: "Social Media Manager",
    avatar: "/author-4.png",
    rating: 5,
    content:
      "Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0e0e0e] text-white px-6 md:px-20 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm text-purple-400 uppercase tracking-widest mb-2">
          Feedbacks
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Feedback de nossos <br />
          <span className="italic underline decoration-purple-500">
            clientes
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className={`bg-[#1a1a1a] border border-white/5 rounded-xl p-6 transition-all duration-300 ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-60 scale-95"
            }`}
            animate={{ opacity: index === current ? 1 : 0.5 }}
          >
            {/* Stars */}
            <div className="text-yellow-400 mb-4">{"★".repeat(t.rating)} </div>

            {/* Text */}
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {t.content}
            </p>

            {/* Avatar and Info */}
            <div className="flex items-center gap-4 mt-auto">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 ${
              idx === current
                ? "bg-purple-500 border-purple-500"
                : "border-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
