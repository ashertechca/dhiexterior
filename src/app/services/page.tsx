import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Paintbrush,
  DoorOpen,
  Fence,
  Home,
  HardHat,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | DHI Exteriors Calgary",
  description:
    "DHI Exteriors offers professional painting, door & window installation, custom decks & fences, siding & eavestrough, and basement development services in Calgary. Over 30 years of trusted craftsmanship.",
  openGraph: {
    title: "Our Services | DHI Exteriors Calgary",
    description:
      "Explore our full range of home exterior and interior services in Calgary. From painting to basement development, DHI Exteriors delivers quality craftsmanship.",
    url: "https://dhiexteriors.com/services",
  },
};

const services = [
  {
    title: "Painting",
    description:
      "Interior and exterior painting with weather-resistant finishes, expert color consultation, and premium paint brands. Transform your home with a flawless, lasting finish.",
    href: "/services/painting",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=600&q=80",
  },
  {
    title: "Doors & Windows",
    description:
      "Energy-efficient door and window installation that enhances security, reduces noise, and boosts curb appeal. Professional fitting with a wide variety of styles.",
    href: "/services/doors-and-windows",
    icon: DoorOpen,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    title: "Decks & Fences",
    description:
      "Custom-designed decks and fences built with durable, weather-treated materials. Create the perfect outdoor living space for entertaining and privacy.",
    href: "/services/decks-and-fences",
    icon: Fence,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  },
  {
    title: "Siding & Eaves",
    description:
      "Protect and beautify your home with expert siding and eavestrough installation. Improved insulation, water damage protection, and a major curb appeal boost.",
    href: "/services/siding-and-eaves",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Basement Development",
    description:
      "Full basement development including separate entrances, plumbing, electrical, soundproofing, and custom layouts. Maximize your home's living space and value.",
    href: "/services/basement-development",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Our services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-28 md:py-36">
          <p className="text-[#E53935] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            What We Do
          </p>
          <h1 className="text-white mb-6">
            Our <span className="text-[#E53935]">Services</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            With over 30 years of experience, DHI Exteriors delivers
            exceptional craftsmanship across every aspect of your home&apos;s
            exterior and interior.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl overflow-hidden border border-black/[0.06] hover:border-teal/40 hover:shadow-lg transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/90 to-[#9B1F1F]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <h2 className="mb-6 text-white">
            Ready to <span className="text-white/90">Get Started</span>?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a free consultation and quote. We&apos;ll help
            you choose the right services for your home improvement goals.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#C62828] font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
