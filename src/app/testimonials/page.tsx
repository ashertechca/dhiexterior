"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Shield, Award, BadgeCheck, ThumbsUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/lib/animations";

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

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "BBB Accredited" },
  { icon: Star, label: "Google 5-Star" },
  { icon: ThumbsUp, label: "HomeStars Verified" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
            alt="Client testimonials"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-28 md:py-36">
          <motion.p
            className="text-[#E53935] uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Reviews
          </motion.p>
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Clients <span className="text-[#E53935]">Say</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            4.8 out of 5 stars from our valued customers
          </motion.p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 px-6 border-b border-black/[0.06]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card inline-flex flex-col items-center px-12 py-8">
            <div className="text-6xl font-bold text-gold font-display mb-3">
              <AnimatedCounter value={4.8} decimals={1} />
            </div>
            <div className="flex items-center gap-1.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                >
                  <Star className="w-6 h-6 fill-gold text-gold" />
                </motion.div>
              ))}
            </div>
            <p className="text-muted text-sm tracking-wide">
              Based on verified customer reviews
            </p>
          </div>
        </motion.div>
      </section>

      {/* Testimonial Cards */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="glass-card p-8 md:p-10 relative overflow-hidden group"
              variants={i === 0 ? slideFromLeft : i === 2 ? slideFromRight : staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal via-teal/50 to-transparent" />

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-teal/10 mb-6" />

                <blockquote className="text-charcoal text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.08, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-muted text-sm tracking-wide">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 bg-cream">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Trusted & Verified
            </span>
            <h2 className="text-3xl font-bold text-charcoal mt-3">
              Why Calgary Trusts Us
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  className="glass-card p-6 text-center"
                  variants={staggerItem}
                >
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <div className="text-charcoal font-semibold text-sm">
                    {badge.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/90 to-[#9B1F1F]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <h2 className="mb-6 text-white">
            Join Our <span className="text-white/90">Satisfied Customers</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Experience the quality craftsmanship and exceptional service that
            Calgary homeowners trust. Get your free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#C62828] font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
