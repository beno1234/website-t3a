"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#000d24] text-white py-4 px-6">
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo + Mobile menu button */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Image src="/logo.png" alt="Logo" width={130} height={30} />

          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex bg-[#1c1629] rounded-md px-6 py-2 items-center text-sm gap-6">
          {["Home", "About", "Pages", "Services", "Blog"].map((item) => (
            <div key={item} className="flex items-center gap-1 cursor-pointer">
              <span>{item}</span>
              <ChevronDown size={14} />
            </div>
          ))}
          <Link href="#contact" className="hover:text-purple-400">
            Contact
          </Link>
        </nav>

        {/* Desktop Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1"
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="object-cover w-6 h-4"
              />
              <ChevronDown size={14} />
            </button>
            {languageOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black text-sm rounded shadow p-2 z-10">
                <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                  English
                </div>
                <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                  Português
                </div>
              </div>
            )}
          </div>

          <Link
            href="#login"
            className="border bg-[#000d24] px-4 py-2 rounded text-sm hover:bg-[#1e4b8f] transition"
          >
            Login
          </Link>

          <Link
            href="#join"
            className="bg-[#000d24] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1e4b8f] transition"
          >
            Join now
          </Link>
        </div>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden">
          <div className="bg-[#1c1629] rounded-md px-4 py-3 text-sm flex flex-col gap-2">
            {["Home", "About", "Pages", "Services", "Blog"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1 cursor-pointer"
              >
                <span>{item}</span>
                <ChevronDown size={14} />
              </div>
            ))}
            <Link href="#contact" className="hover:text-purple-400">
              Contact
            </Link>
          </div>

          <div className="flex justify-between items-center px-2">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1"
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  className="object-cover w-6 h-4"
                />
                <ChevronDown size={14} />
              </button>
              {languageOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black text-sm rounded shadow p-2 z-10">
                  <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                    English
                  </div>
                  <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                    Português
                  </div>
                </div>
              )}
            </div>

            {/* Auth buttons */}
            <div className="flex gap-2">
              <Link
                href="#login"
                className="border bg-[#000d24] px-4 py-2 rounded text-sm hover:bg-[#1e4b8f] transition"
              >
                Login
              </Link>
              <Link
                href="#join"
                className="bg-[#000d24] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1e4b8f] transition"
              >
                Join now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
