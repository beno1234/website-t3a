"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Breadcrumb = () => {
  return (
    <section className="relative container mx-auto py-16">
      <div className="bg-gradient-to-r from-[#000d24] to-[#1e4b8f] max-w-8xl mx-auto py-16 container rounded-xl">
        <div className="text-center">
          <motion.h2
            className="text-6xl mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Contato
          </motion.h2>

          <motion.ul
            className="relative px-[20px] inline-block mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <li className="relative font-normal text-lg mr-4 pr-4 inline-block text-white">
              <Link href="/" className="text-white transition">
                Home
                <span className="ml-10">{">"}</span>
              </Link>
            </li>

            <li className="relative font-normal text-lg mr-4 pr-4 inline-block text-white">
              <Link href="/contato" className="text-white transition">
                Contato
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
