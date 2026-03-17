"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ArrowRight } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import BeforeAfter from "@/components/BeforeAfter";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  "All",
  "Painting",
  "Doors & Windows",
  "Decks & Fences",
  "Siding & Eaves",
  "Basement",
];

const galleryItems = [
  {
    id: 1,
    title: "Full Exterior Repaint",
    category: "Painting",
    description: "Complete exterior colour transformation for a two-storey home in SW Calgary.",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
    span: "md:col-span-2",
  },
  {
    id: 2,
    title: "Interior Living Room Refresh",
    category: "Painting",
    description: "Modern neutral tones with accent wall finish for a Brentwood bungalow.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
    span: "",
  },
  {
    id: 3,
    title: "Garage & Trim Painting",
    category: "Painting",
    description: "Weather-resistant coating on garage door and exterior trim details.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80",
    span: "",
  },
  {
    id: 4,
    title: "Front Entry Door Replacement",
    category: "Doors & Windows",
    description: "Energy-efficient fibreglass entry door installation with sidelites.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    span: "",
  },
  {
    id: 5,
    title: "Triple-Pane Window Upgrade",
    category: "Doors & Windows",
    description: "Full window replacement with triple-pane glass for improved insulation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    span: "",
  },
  {
    id: 6,
    title: "Custom Cedar Deck",
    category: "Decks & Fences",
    description: "Multi-level cedar deck with built-in planters and railing system.",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80",
    span: "md:row-span-2",
  },
  {
    id: 7,
    title: "Privacy Fence Installation",
    category: "Decks & Fences",
    description: "Pressure-treated wood privacy fence with lattice top detailing.",
    image: "https://images.unsplash.com/photo-1593284332996-63eaa1ad4838?w=800&q=80",
    span: "",
  },
  {
    id: 8,
    title: "Composite Deck Build",
    category: "Decks & Fences",
    description: "Low-maintenance composite decking with aluminum railing in Tuscany.",
    image: "https://images.unsplash.com/photo-1582533404221-9c8db685e30e?w=800&q=80",
    span: "",
  },
  {
    id: 9,
    title: "James Hardie Siding",
    category: "Siding & Eaves",
    description: "Full James Hardie fibre cement siding installation with colour-matched trim.",
    image: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=800&q=80",
    span: "md:col-span-2",
  },
  {
    id: 10,
    title: "Soffit & Fascia Replacement",
    category: "Siding & Eaves",
    description: "Aluminum soffit and fascia replacement with improved ventilation.",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80",
    span: "",
  },
  {
    id: 11,
    title: "Full Basement Development",
    category: "Basement",
    description: "Complete basement build-out with bedroom, bathroom, and living area.",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
    span: "",
  },
  {
    id: 12,
    title: "Basement Suite with Separate Entry",
    category: "Basement",
    description: "Legal basement suite including separate entrance, kitchen, and plumbing.",
    image: "https://images.unsplash.com/photo-1560185127-6a8c06e3c8f1?w=800&q=80",
    span: "",
  },
];

const beforeAfterProjects = [
  {
    before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    after: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    title: "Exterior Transformation",
  },
  {
    before: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    title: "Basement Development",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    category: item.category,
  }));

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Craftsman at work on renovation project"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.p
            className="text-[#E53935] uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span className="text-[#E53935]">Work</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse our portfolio of completed projects across Calgary
          </motion.p>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 md:py-24 px-6 bg-cream">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Transformations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              Before & After
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <BeforeAfter
                  beforeSrc={project.before}
                  afterSrc={project.after}
                  alt={project.title}
                  className="shadow-lg"
                />
                <p className="text-charcoal font-semibold mt-4 text-center">
                  {project.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Filter Tabs */}
          <div className="flex items-center gap-3 mb-12 flex-wrap justify-center">
            <Filter className="w-4 h-4 text-teal mr-1 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wider uppercase transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-teal text-white border-teal shadow-sm"
                    : "bg-transparent border-black/[0.08] text-muted hover:border-teal/30 hover:text-charcoal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Masonry / Bento */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={staggerItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer ${item.span}`}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase bg-white/90 backdrop-blur-sm text-teal">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            alt="Luxury home exterior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <h2 className="mb-6 text-white">
            Like What You <span className="text-[#E53935]">See</span>?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss your project. Get a free consultation and
            discover how we can transform your home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C62828] text-white font-semibold text-lg hover:bg-[#9B1F1F] transition-all hover:-translate-y-1 shadow-lg"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === 0 ? lightboxImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === lightboxImages.length - 1 ? 0 : prev + 1
          )
        }
      />
    </main>
  );
}
