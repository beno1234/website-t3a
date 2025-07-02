"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import "swiper/css";

const heroData = [
  {
    title: "Automatize suas vendas com ",
    highlight: "IA",
    description:
      " A T3A ajuda empresas a crescerem com inteligência artificial, captando leads, respondendo em segundos e vendendo 24h por dia — sem depender de humanos.",
    image: "/image-1.png",
    efficiency: "90%",
    goal: "R$98,541",
    goalGrowth: "↑ 110%",
  },
  {
    title: "Automatize suas vendas com",
    highlight: "IA",
    description:
      "A T3A ajuda empresas a crescerem com inteligência artificial, captando leads, respondendo em segundos e vendendo 24h por dia — sem depender de humanos.",
    image: "/image-1.png",
    efficiency: "85%",
    goal: "R$120,000",
    goalGrowth: "↑ 150%",
  },
];

export default function HeroSlider() {
  return (
    <section
      className="min-h-screen bg-[#000d24] text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/pattern-1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {heroData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-around gap-10 px-6 md:px-20 py-16 min-h-screen">
              {/* Left content */}
              <div className="max-w-xl z-10">
                <motion.div
                  className="mb-4 inline-block px-4 py-2 rounded-md bg-purple-800/30 text-sm font-medium garet"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  👋 IA que gera vendas no piloto automático
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 garet"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  {slide.title}{" "}
                  <span className="italic underline decoration-[#4bc4f2] garet">
                    {slide.highlight}
                  </span>{" "}
                </motion.h1>

                <motion.p
                  className="text-gray-300 mb-8 garet"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  className="flex gap-4 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <button className="bg-[#4bc4f2] hover:bg-[#000d24] px-6 py-3 rounded-lg font-semibold text-white transition garet">
                    Fale com a T3A agora
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#4bc4f2] hover:bg-[#000d24] flex items-center justify-center transition">
                    <Play size={20} />
                  </button>
                </motion.div>
              </div>

              {/* Right image */}
              <motion.div
                className="relative hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="relative z-10 rounded-t-[1.5rem] overflow-hidden bg-white bg-opacity-5 backdrop-blur p-4">
                  <Image
                    src={slide.image}
                    alt="Hero Image"
                    width={600}
                    height={600}
                    className="rounded-t-[1.5rem] object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#4bc4f2] px-4 py-2 rounded-md text-sm text-right">
                    <p className="text-white font-bold text-lg garet">
                      ↑ {slide.efficiency}
                    </p>
                    <p className="text-xs text-purple-200 garet">eficiencia</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-10 z-20 bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-4 border border-[#4bc4f2] w-52">
                  <p className="text-[#4bc4f2] font-semibold text-sm mb-1 garet">
                    Metas anuais
                  </p>
                  <p className="text-white font-bold text-lg garet">
                    {slide.goal}{" "}
                    <span className="text-[#4bc4f2] text-xs">
                      {slide.goalGrowth}
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
