"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline me-4 md:me-6">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="hover:underline me-4 md:me-6">
                {t("footer.services")}
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline me-4 md:me-6">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="/" className="hover:underline font-semibold">
            T3A™
          </Link>
          . {t("footer.rights")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
