"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Shield, Award, Clock, CreditCard, Star } from "lucide-react";
import ScrollProgress from "./ScrollProgress";

const trustItems = [
  { icon: Clock, label: "30+ Years Experience" },
  { icon: Award, label: "500+ Projects Completed" },
  { icon: Shield, label: "Licensed & Fully Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: CreditCard, label: "0% Financing Available", href: "/financing" },
];

const services = [
  { name: "Painting", href: "/services/painting" },
  { name: "Doors & Windows", href: "/services/doors-and-windows" },
  { name: "Decks & Fences", href: "/services/decks-and-fences" },
  { name: "Siding & Eaves", href: "/services/siding-and-eaves" },
  { name: "Basement Development", href: "/services/basement-development" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Financing", href: "/financing" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      >
        {/* Trust Bar */}
        <div className="hidden lg:block bg-[#1A1F2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
            <div className="flex items-center justify-center gap-x-8">
              {trustItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.08em] uppercase text-white/70 hover:text-white transition-colors duration-300">
                    <Icon className="w-3 h-3 text-[#EF5350] shrink-0" />
                    {item.label}
                  </span>
                );
                return item.href ? (
                  <Link key={item.label} href={item.href}>{content}</Link>
                ) : (
                  <span key={item.label}>{content}</span>
                );
              })}
            </div>
          </div>
        </div>
        {/* Accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C62828] to-transparent" />
        <ScrollProgress />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/DHI-Exteriors-Light.svg"
                alt="DHI Exteriors"
                width={160}
                height={66}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-3 py-2 text-[11px] font-light tracking-[0.12em] uppercase transition-colors duration-300 text-[#4A5568] hover:text-[#1A1F2E]"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="w-64 bg-white border border-black/[0.08] rounded-lg shadow-lg overflow-hidden">
                            <div className="h-[1px] bg-gradient-to-r from-[#C62828]/40 to-transparent" />
                            <div className="py-2">
                              {services.map((service, i) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="group/item flex items-center px-5 py-3 transition-all duration-300 hover:bg-[#F5F3EE]"
                                >
                                  <span className="text-[11px] text-[#C62828]/40 font-light mr-4 tabular-nums">
                                    0{i + 1}
                                  </span>
                                  <span className="text-[13px] font-light tracking-wide text-[#6B7280] group-hover/item:text-[#1A1F2E] transition-colors duration-300">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 text-[11px] font-light tracking-[0.12em] uppercase transition-colors duration-300 text-[#4A5568] hover:text-[#1A1F2E]"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:5875754832"
                className="flex items-center gap-2 transition-colors duration-300 text-[#6B7280] hover:text-[#1A1F2E]"
              >
                <Phone size={14} className="text-[#C62828]" />
                <span className="text-[14px] font-semibold tracking-wide">
                  (587) 575-4832
                </span>
              </a>

              <Link
                href="/quote"
                className="relative group px-6 py-2.5 text-[12px] font-medium tracking-[0.2em] uppercase text-white bg-[#C62828] rounded-lg hover:bg-[#9B1F1F] transition-all duration-300 shadow-sm"
              >
                <span className="relative z-10">Get a Free Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-colors text-[#4A5568] hover:text-[#1A1F2E]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white border-l border-black/[0.06] overflow-y-auto"
            >
              <div className="h-[2px] bg-gradient-to-r from-[#C62828]/40 to-transparent" />

              <div className="p-8">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src="/DHI-Exteriors-Light.svg"
                    alt="DHI Exteriors"
                    width={130}
                    height={54}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-[#6B7280] hover:text-[#1A1F2E] transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="space-y-1">
                  {navLinks.map((link, i) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="w-full flex items-center justify-between py-3 text-[13px] font-light tracking-[0.15em] uppercase text-[#4A5568] hover:text-[#1A1F2E] transition-colors"
                          >
                            <span className="flex items-center gap-4">
                              <span className="text-[11px] text-[#C62828]/40 tabular-nums">
                                0{i + 1}
                              </span>
                              {link.name}
                            </span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-300 ${
                                servicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-10 py-2 space-y-1 border-l border-black/[0.06] ml-4">
                                  {services.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 text-[13px] font-light tracking-wide text-[#6B7280] hover:text-[#1A1F2E] transition-colors"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4 py-3 text-[13px] font-light tracking-[0.15em] uppercase text-[#4A5568] hover:text-[#1A1F2E] transition-colors"
                        >
                          <span className="text-[11px] text-[#C62828]/40 tabular-nums">
                            0{i + 1}
                          </span>
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact & CTA */}
                <div className="mt-12 pt-8 border-t border-black/[0.06] space-y-6">
                  <a
                    href="tel:5875754832"
                    className="flex items-center gap-3 text-[#6B7280] hover:text-[#1A1F2E] transition-colors"
                  >
                    <Phone size={16} className="text-[#C62828]" />
                    <span className="text-sm font-light tracking-wider">
                      (587) 575-4832
                    </span>
                  </a>

                  <Link
                    href="/quote"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-6 py-3.5 text-[12px] font-medium tracking-[0.2em] uppercase text-white bg-[#C62828] rounded-lg hover:bg-[#9B1F1F] transition-all duration-300"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
