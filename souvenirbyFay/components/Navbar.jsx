
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import CurrencySwitcher from "@/components/CurrencySwitcher"





export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const navClass = (path) =>
    `transition hover:opacity-70 ${
      pathname === path
        ? "text-[#B53471] font-semibold"
        : "text-gray-800"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center ">
        <Image
  src="/sv.png"
  alt="sovenirbyFay"
  width={300}
  height={100}
  priority
  className="h-[96px] w-auto"
/>

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-light">
          <Link href="/" className={navClass("/")}>{t("Home")}</Link>
          <Link href="/products" className={navClass("/products")}>{t("Collections")}</Link>
          <Link href="/about" className={navClass("/about")}>{t("About Us")}</Link>
          <Link href="/contact" className={navClass("/contact")}>{t("Contact")}</Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

<div className="hidden md:flex items-center gap-2">
            <div className="rounded-full  ring-[#080249]/30">
             <CurrencySwitcher/>
            </div>
               {/* vertical line */}
              <span className="h-4 w-px bg-gray-400 mx-1" />








          {/* CUSTOM ORDER CTA */}
          <div className={` text-black hover:text-white gap-0.5   ${
                pathname === "/custom-order"
                  ? "bg-[#080249] text-white"
                  : "  "
              }  hover:bg-[#080249]  flex border border-gray-400 py-2 px-3 rounded-full items-center`}>
          <Link
            href="/custom-order"
            className={`  hidden md:inline-flex items-center    text-sm font-medium transition
             `}
          >
            {t("CustomOrder")}
           
          </Link>
          <br />
          <span className="font-bold md:mt-[-6]">...</span>
           
</div>
          {/* Currency & Language */}
        
            
            <div className="rounded-full ring-2 ring-[#080249]/30">
           
              <LanguageSwitcher />
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden rounded-full border px-4 py-2 text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] transition-all duration-300 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 z-0  transition-opacity  duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* PANEL */}
        <div
          className={`absolute top-0 right-0  z-10 h-full w-[80%] max-w-sm bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* HEADER */}
       <div className="flex items-center justify-between px-6 py-4 border-b">
  {/* LOGO */}
  <div className="flex items-center">
    <Image
      src="/sou.avif"
      alt="Souvenir by Fay"
      width={110}
      height={36}
      priority
      className="object-contain"
    />
  </div>

  {/* CLOSE BUTTON */}
  <button
    onClick={() => setOpen(false)}
    className="text-3xl font-bold text-gray-700 hover:opacity-70 transition"
    aria-label="Close menu"
  >
    ×
  </button>
</div>


          {/* LINKS */}
          <nav className="flex flex-col gap-6 px-6 py-8 text-lg font-semibold rounded-md bg-[#fcffff] text-center">
            {[
              { name: t("Home"), href: "/" },
              { name: t("Products"), href: "/products" },
              { name: t("About Us"), href: "/about" },
              { name: t("Contact"), href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  pathname === link.href
                    ? "text-[#B53471] font-semibold"
                    : "text-gray-800 hover:text-[#080249]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/custom-order"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[#080249] px-6 py-3 text-center text-white font-medium shadow-md"
            >
              {t("CustomOrder")}
            </Link>

            {/* Currency & Language */}
            <div className="mt-6 flex gap-3 mx-auto">
          
              <CurrencySwitcher />
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
