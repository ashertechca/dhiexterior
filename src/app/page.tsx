"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Paintbrush,
  DoorOpen,
  Fence,
  Home,
  HardHat,
  Star,
  Quote,
  CheckCircle2,
  Phone,
  ArrowRight,
  Shield,
  Award,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/lib/animations";

const services = [
  {
    icon: HardHat,
    name: "Basement Development",
    description:
      "Complete basement transformations with separate entrances, plumbing, and premium finishes",
    href: "/services/basement-development",
    image: "/Basement-Remodeling.jpg",
  },
  {
    icon: Fence,
    name: "Decks & Fences",
    description:
      "Custom-designed outdoor living spaces built to entertain and endure",
    href: "/services/decks-and-fences",
    image: "/deck-fence.png",
  },
  {
    icon: Paintbrush,
    name: "Painting",
    description:
      "Expert interior & exterior painting with premium finishes that withstand Calgary's harsh climate",
    href: "/services/painting",
    image: "/exterior-painting.png",
  },
  {
    icon: DoorOpen,
    name: "Doors & Windows",
    description:
      "Energy-efficient upgrades that enhance security, style, and insulation year-round",
    href: "/services/doors-and-windows",
    image: "/doors-windows.jpg",
  },
  {
    icon: Home,
    name: "Siding & Eaves",
    description:
      "Protective cladding solutions that insulate, beautify, and defend against the elements",
    href: "/services/siding-and-eaves",
    image: "/medium-rain-gutter-system-for-the-roof-of-the-house.jpg",
  },
];

const testimonials = [
  {
    text: "Your crew was amazing, they did a wonderful job, we barely even knew they were here working. We really appreciate the extra care taken in protecting our furniture and carpet. Will definitely be contacting you again next time!",
    name: "Marjorie J.",
    location: "Calgary AB",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  },
  {
    text: "Your team did an awesome job on the front area, we're really impressed. Everything looks brand new. Not sure how you managed to make it look this good but we're thankful. Great work, we will be referring you to friends and family.",
    name: "Dale W.",
    location: "Calgary AB",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    text: "The work they did on my sliding door was great! They did a tremendous job. I will be calling them again if I need any house repairs or installations. They are highly recommended.",
    name: "Michael Jones",
    location: "Calgary AB",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

const bulletPoints = [
  { icon: CheckCircle2, text: "On-time & On-budget delivery" },
  { icon: Shield, text: "Licensed & fully insured" },
  { icon: Award, text: "Industry-leading customer care" },
  { icon: Star, text: "Free detailed estimates" },
];

export default function HomePage() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Painting", "Siding", "Decks", "Windows", "Basements"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // Parallax for hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Parallax for CTA
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaY = useTransform(ctaProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-warm-white text-charcoal overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              className="text-left"
              style={{ opacity: heroOpacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C62828]/5 border border-[#C62828]/15 text-[#C62828] text-sm font-medium mb-8">
                  Calgary&apos;s Trusted Experts Since 2004
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1F2E] text-balance"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <span>Transforming Homes with</span>
                <span className="relative flex w-full justify-start overflow-hidden md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold text-[#C62828]"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl leading-relaxed text-[#4A5568] max-w-xl mt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Premium exterior renovations backed by 30+ years of craftsmanship.
                We treat every home like it&apos;s our own.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#C62828] text-white font-semibold text-lg hover:bg-[#9B1F1F] transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-1"
                >
                  Get Your Free Quote
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-[#1A1F2E]/15 text-[#1A1F2E] font-semibold text-lg hover:border-[#1A1F2E]/30 hover:bg-[#1A1F2E]/5 transition-all"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="flex items-center gap-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-[#4A5568] ml-2 font-medium">4.8 on Google</span>
                </div>
                <div className="h-5 w-px bg-[#1A1F2E]/10" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                  <span className="text-sm text-[#4A5568] font-medium">30+ Years Experience</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Photo stack */}
            <motion.div
              className="relative h-[500px] md:h-[600px] hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { src: "/image-1.png", top: "0%", left: "0%", z: 10 },
                { src: "/image-2.png", top: "3%", left: "33%", z: 20 },
                { src: "/image-5.png", top: "28%", left: "5%", z: 30 },
                { src: "/image-6.png", top: "30%", left: "38%", z: 40 },
                { src: "/image-7.png", top: "56%", left: "0%", z: 15 },
                { src: "/image-10.png", top: "58%", left: "33%", z: 25 },
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white cursor-pointer"
                  style={{
                    top: photo.top,
                    left: photo.left,
                    zIndex: photo.z,
                  }}
                  whileHover={{ scale: 1.05, zIndex: 50, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={photo.src}
                    alt={`Home renovation project ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              Our Services
            </h2>
            <div className="w-16 h-[2px] bg-teal mx-auto mt-4" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[280px] gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              // Bento layout: Basement (4col, 2row), Decks (2col, 2row), Painting (4col), Doors (2col), Siding (2col)
              const spanClass = [
                "md:col-span-4 lg:col-span-4 md:row-span-2",  // Basement — large hero
                "md:col-span-2 lg:col-span-2 md:row-span-2",  // Decks — tall
                "md:col-span-4 lg:col-span-4",                 // Painting — wide
                "md:col-span-2 lg:col-span-2",                 // Doors & Windows — standard
                "md:col-span-2 lg:col-span-2",                 // Siding & Eaves — standard
              ][i];
              return (
                <motion.div
                  key={service.name}
                  variants={staggerItem}
                  className={`group relative rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-xl transition-all duration-500 ${spanClass}`}
                >
                  <Link href={service.href} className="block h-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed max-w-md">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-white font-medium gap-1.5 text-sm mt-3 group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 px-6 bg-warm-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Stats overlay */}
          <motion.div
            className="relative"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/why-choose-us.jpg"
                alt="Professional renovation crew at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Stats overlay cards */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 grid grid-cols-2 gap-3">
              {[
                { value: 20, suffix: "+", label: "Years Experience" },
                { value: 500, suffix: "+", label: "Projects Done" },
                { value: 4.8, suffix: "", label: "Star Rating", decimals: 1 },
                { value: 100, suffix: "%", label: "Licensed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 shadow-lg border border-black/[0.06] text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <div className="text-muted text-[11px] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-3 text-charcoal text-balance">
              Calgary&apos;s Most Trusted Exterior Team
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              For over two decades, DHI Exteriors has been the go-to partner for
              Calgary homeowners looking to elevate their properties. Our
              commitment to quality craftsmanship, transparent pricing, and
              exceptional customer service has earned us the trust of hundreds of
              families across the city.
            </p>
            <ul className="space-y-4">
              {bulletPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                    <span className="text-slate font-medium">{point.text}</span>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-teal font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              What Our Clients Say
            </h2>
            <div className="w-16 h-[2px] bg-teal mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-2xl p-8 border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={i === 0 ? slideFromLeft : i === 2 ? slideFromRight : staggerItem}
              >
                <Quote className="w-10 h-10 text-teal/10 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-slate leading-relaxed mb-6 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                    <div className="text-muted text-xs">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              How We Work
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "We visit your property, listen to your vision, and assess the scope of work — completely free, no pressure." },
              { step: "02", title: "Detailed Quote", desc: "You receive a transparent, itemized quote with material options, timelines, and no hidden costs." },
              { step: "03", title: "Expert Execution", desc: "Our experienced crews get to work on schedule, keeping you informed at every stage of the project." },
              { step: "04", title: "Final Inspection", desc: "We do a thorough inspection together, handle any touch-ups, and make sure you're 100% satisfied." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="text-6xl font-bold text-gold/15 font-display mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 -mt-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              Featured Projects
            </h2>
            <div className="w-16 h-[2px] bg-teal mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Complete Exterior Renovation", category: "Siding & Painting", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
              { title: "Custom Backyard Deck", category: "Decks & Fences", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80" },
              { title: "Modern Window Upgrade", category: "Doors & Windows", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-teal-light text-xs uppercase tracking-wider font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-charcoal">
              Proudly Serving Calgary & Area
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              DHI Exteriors serves homeowners across Calgary and surrounding
              communities. Whether you&apos;re in the heart of the city or in a
              nearby town, our team is ready to help transform your home.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Calgary SW", "Calgary SE", "Airdrie", "Cochrane", "Chestermere", "Okotoks"].map((area) => (
                <div key={area} className="flex items-center gap-2 text-slate text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320009.0195036498!2d-114.31876508671875!3d51.02729579999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1710000000000"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DHI Exteriors service area - Calgary, Alberta"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 pointer-events-none">
              <div className="text-charcoal font-bold text-lg">Calgary, Alberta</div>
              <div className="text-muted text-sm">& Surrounding Communities</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section ref={ctaRef} className="relative py-24 px-6 overflow-hidden">
        {/* Background image with parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: ctaY }}>
          <Image
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1920&q=80"
            alt="Warm family home at golden hour"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/90 to-[#9B1F1F]/90" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Get a free, no-obligation quote today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#C62828] font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
            >
              Request a Quote
            </Link>
            <a
              href="tel:5875754832"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white font-semibold text-lg hover:border-white/70 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 587-575-4832
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
