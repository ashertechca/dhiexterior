import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Painting", href: "/services/painting" },
  { name: "Doors & Windows", href: "/services/doors-and-windows" },
  { name: "Decks & Fences", href: "/services/decks-and-fences" },
  { name: "Siding & Eaves", href: "/services/siding-and-eaves" },
  { name: "Basement Development", href: "/services/basement-development" },
];

const hours = [
  { days: "Monday - Friday", time: "7:00 AM - 6:00 PM" },
  { days: "Saturday", time: "8:00 AM - 4:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/dhilogo.jpg"
                alt="DHI Exteriors"
                width={140}
                height={42}
                className="h-9 w-auto rounded"
              />
            </Link>
            <p className="text-[13px] font-light tracking-wide leading-relaxed text-white/70 mb-8">
              Your Home Exterior Specialists
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-lg text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <span className="text-[10px] font-medium tracking-wider">
                    {platform.slice(0, 2).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D73C3C] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light tracking-wide text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D73C3C] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[13px] font-light tracking-wide text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D73C3C] mb-6">
              Contact
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="tel:5875754832"
                  className="flex items-start gap-3 group"
                >
                  <Phone
                    size={14}
                    className="text-[#D73C3C] mt-0.5 shrink-0"
                  />
                  <span className="text-[13px] font-light tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">
                    587-575-4832
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:clarence@dhiexteriors.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail
                    size={14}
                    className="text-[#D73C3C] mt-0.5 shrink-0"
                  />
                  <span className="text-[13px] font-light tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">
                    clarence@dhiexteriors.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-[#D73C3C] mt-0.5 shrink-0"
                />
                <span className="text-[13px] font-light tracking-wide text-white/70">
                  Calgary, AB
                </span>
              </li>
            </ul>

            {/* Business Hours */}
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D73C3C] mb-4 flex items-center gap-2">
              <Clock size={12} />
              Hours
            </h4>
            <ul className="space-y-2">
              {hours.map((item) => (
                <li
                  key={item.days}
                  className="flex items-center justify-between text-[12px] font-light tracking-wide"
                >
                  <span className="text-white/70">{item.days}</span>
                  <span className={item.time === "Closed" ? "text-white/40" : "text-white/70"}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-light tracking-wider text-white/50">
              &copy; 2026 DHI Exteriors. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-[11px] font-light tracking-wider text-white/50 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[11px] font-light tracking-wider text-white/50 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
