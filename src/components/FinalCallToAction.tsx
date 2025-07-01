"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCallToAction() {
  return (
    <section className="px-4 md:px-12 max-w-[89rem] mx-auto my-20">
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white max-w-md mb-8 md:mb-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Craft your next great{" "}
            <span className="italic underline decoration-white/80">
              content now.
            </span>
          </h2>

          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Get started free
          </button>
        </motion.div>

        {/* Right - Person & Badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Person */}
          <Image
            src="/cta.png"
            alt="Person"
            width={400}
            height={400}
            className="object-contain"
          />

          {/* Badges */}
        </motion.div>
      </div>
    </section>
  );
}
