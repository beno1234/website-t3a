"use client";

import { motion } from "framer-motion";
import { PenTool, Search, Megaphone, Users, Share2 } from "lucide-react";

const services = [
  {
    title: "Pequenas Empresas",
    description:
      " Acelere as vendas com automação inteligente e atendimento imediato pelo WhatsApp.",
    icon: <Megaphone className="w-5 h-5 text-[#4bc4f2]" />,
    id: "01",
  },
  {
    title: "Times de Vendas",
    description:
      " Reduza o tempo de resposta, aumente conversões e economize tempo com IA comercial.",
    icon: <Share2 className="w-5 h-5 text-[#4bc4f2]" />,
    id: "02",
  },
  {
    title: "Startups",
    description:
      " Estruture uma operação de vendas automatizada desde o início — com baixo custo e alta eficiência.",
    icon: <Users className="w-5 h-5 text-[#4bc4f2]" />,
    id: "03",
  },
  {
    title: "Agências de Marketing",
    description:
      "Ofereça IA como diferencial para seus clientes e aumente o ROI das campanhas.",
    icon: <PenTool className="w-5 h-5 text-[#4bc4f2]" />,
    id: "04",
  },
  {
    title: "Especialistas em SEO",
    description:
      "Converta tráfego orgânico automaticamente com assistentes que qualificam e vendem.",
    icon: <Search className="w-5 h-5 text-[#4bc4f2]" />,
    id: "05",
  },
  {
    title: "Outros negócios",
    description:
      "Podemos adaptar nossa IA para qualquer segmento. Fale com a T3A e vamos automatizar juntos.",
    icon: (
      <div className="w-5 h-5">
        <svg fill="#4bc4f2" viewBox="0 0 24 24">
          <path d="M12 2L1.8 9l10.2 7 10.2-7L12 2z" />
        </svg>
      </div>
    ),
    highlight: true,
    id: "06",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0e0e0e] py-20 px-6 md:px-16 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative bg-gradient-to-t from-black/20 to-black/5 border border-white/5 rounded-xl p-6 transition ${
              service.highlight ? "bg-[#4bc4f2] text-white" : "bg-[#141414]"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center justify-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white garet">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold garet">{service.title}</h3>
            </div>

            <p className="text-sm text-gray-300 mb-6 garet">
              {service.description}{" "}
            </p>

            <div className="flex items-center justify-between text-xs text-white/30 font-semibold garet">
              <span>{service.id}</span>
              <span className="text-white font-medium flex items-center gap-1 garet">
                Quero automatizar <span className="text-lg">+</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
