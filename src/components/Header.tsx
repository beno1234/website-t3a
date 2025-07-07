"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    {
      code: "en",
      label: "English",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      code: "pt",
      label: "Português",
      flag: "https://flagcdn.com/w40/br.png",
    },
  ];

  const currentLanguage = i18n.language || "pt";

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageOpen(false);
  };

  const { t } = useTranslation("common"); // se estiver usando namespace

  function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
  }
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

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

        <nav className="hidden md:flex bg-[#1c1629] rounded-md px-6 py-2 items-center text-sm gap-6 garet">
          {[
            { key: "nav.home", href: "/" },
            { key: "nav.about", href: "/sobre" },
            { key: "nav.services", href: "/servicos" },
            { key: "nav.contact", href: "/contato" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="flex items-center gap-1 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={languageOpen}
            >
              <Image
                src={
                  languages.find((lang) => lang.code === currentLanguage)
                    ?.flag ?? "https://flagcdn.com/w40/br.png"
                }
                alt="Idioma"
                width={24} // proporção aproximada para 6x4, então 24x16 ou similar
                height={16}
                className="object-cover"
              />
              <ChevronDown size={14} />
            </button>

            {languageOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black text-sm rounded shadow p-2 z-10 w-32">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleChangeLanguage(lang.code)}
                    className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 garet"
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.label}
                      width={20}
                      height={12}
                      className=""
                    />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#join"
            className="bg-[#000d24] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1e4b8f] transition garet"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden">
          <div className="bg-[#1c1629] rounded-md px-4 py-3 text-sm flex flex-col gap-2">
            {[
              { key: "nav.home", href: "/" },
              { key: "nav.about", href: "/sobre" },
              { key: "nav.services", href: "/servicos" },
              { key: "nav.contact", href: "/contato" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center px-2">
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1"
              >
                <Image
                  src={
                    languages.find((lang) => lang.code === currentLanguage)
                      ?.flag ?? "https://flagcdn.com/w40/br.png"
                  }
                  alt={
                    languages.find((lang) => lang.code === currentLanguage)
                      ?.label ?? "Português"
                  }
                  width={24}
                  height={16}
                  className="object-cover"
                />
                <ChevronDown size={14} />
              </button>
              {languageOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black text-sm rounded shadow p-2 z-10 w-32">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleChangeLanguage(lang.code)}
                      className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 garet"
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={20}
                        height={12}
                        className=""
                      />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Link
                href="/contato"
                className="bg-[#000d24] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1e4b8f] transition"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
