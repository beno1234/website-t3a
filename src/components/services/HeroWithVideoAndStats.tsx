"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "../VideoModal";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, description }) => (
  <motion.div
    className="flex flex-col items-center p-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="bg-gray-700 p-3 rounded-full mb-3">{icon}</div>
    <p className="text-3xl font-bold mb-1">{value}</p>
    <p className="text-gray-400 text-sm text-center">{description}</p>
  </motion.div>
);

const HeroWithVideoAndStats: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const videoId = "Xk4VvQ2kQpU";
  const youtubeEmbedUrl = `http://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const videoTitle =
    "Amazing American Museum of Natural History in New York / From the Movie...";

  return (
    <motion.section
      className="relative text-white font-sans overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Imagem de Fundo */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src="/video-bg.jpg"
          alt="Cientista de IA trabalhando com robô"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="filter brightness-[0.4] saturate-[1.2] sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-purple-800 opacity-30 mix-blend-multiply"></div>

        {/* Botão de Play */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white bg-opacity-30 backdrop-blur-sm
              transition-all duration-300 hover:bg-opacity-50 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
              group"
            aria-label="Reproduzir vídeo"
          >
            <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping-slow group-hover:animate-none"></span>
            <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping-medium group-hover:animate-none"></span>

            <Play className="w-12 h-12 text-[#4bc4f2] fill-current relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Estatísticas */}
      <motion.div
        className="relative -mt-20 md:-mt-32 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem
            icon={<Icon />}
            value="8,000+"
            description="Empresas que transformaram o WhatsApp em uma máquina de vendas."
          />
          <StatItem
            icon={<Icon />}
            value="500,000+"
            description="Atendimentos realizados com inteligência, empatia e agilidade."
          />
          <StatItem
            icon={<Icon />}
            value="200,000+"
            description="Conversas automatizadas que viraram reuniões, propostas e vendas."
          />
        </div>
      </motion.div>

      {/* Modal de Vídeo */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={youtubeEmbedUrl}
        title={videoTitle}
      />
    </motion.section>
  );
};

// Ícone centralizado
const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    />
  </svg>
);

export default HeroWithVideoAndStats;
