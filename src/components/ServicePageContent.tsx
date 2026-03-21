"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown,
  Paintbrush, ShieldCheck, Palette, Award, Layers, Sparkles,
  Phone, Brush, ClipboardCheck, Ruler, Hammer,
  Zap, Volume2, Sun, Wrench, LayoutGrid,
  PenTool, Shield, PartyPopper, Lock, CloudSun, FileCheck,
  Thermometer, Droplets, Settings,
  DoorOpen, LayoutDashboard, HardHat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Paintbrush, ShieldCheck, Palette, Award, Layers, Sparkles,
  Phone, Brush, ClipboardCheck, Ruler, Hammer,
  Zap, Volume2, Sun, Wrench, LayoutGrid,
  PenTool, Shield, PartyPopper, Lock, CloudSun, FileCheck,
  Thermometer, Droplets, Settings,
  DoorOpen, LayoutDashboard, HardHat,
  ArrowRight, ChevronDown,
};

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageContentProps {
  heroImage: string;
  heroTag: string;
  heroTitle: React.ReactNode;
  heroDescription: string;
  benefitsTag: string;
  benefitsTitle: React.ReactNode;
  benefits: Benefit[];
  serviceImage1: string;
  serviceImage2: string;
  steps: Step[];
  faqs: FAQ[];
  ctaTitle: React.ReactNode;
  ctaDescription: string;
}

export default function ServicePageContent({
  heroImage,
  heroTag,
  heroTitle,
  heroDescription,
  benefitsTag,
  benefitsTitle,
  benefits,
  serviceImage1,
  serviceImage2,
  steps,
  faqs,
  ctaTitle,
  ctaDescription,
}: ServicePageContentProps) {
  const leftBenefits = benefits.slice(0, 3);
  const rightBenefits = benefits.slice(3, 6);

  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero with full-bleed image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-28 md:py-40">
          <motion.p
            className="text-[#E53935] uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {heroTag}
          </motion.p>
          <motion.h1
            className="text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {heroDescription}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C62828] text-white font-semibold hover:bg-[#9B1F1F] transition-all hover:-translate-y-1 shadow-lg"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits — alternating image + text */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              {benefitsTag}
            </span>
            <h2 className="mt-3">{benefitsTitle}</h2>
          </motion.div>

          {/* Row 1: Image left, benefits right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src={serviceImage1}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {leftBenefits.map((benefit) => {
                const Icon = iconMap[benefit.icon] || ArrowRight;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Row 2: Benefits left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {rightBenefits.map((benefit) => {
                const Icon = iconMap[benefit.icon] || ArrowRight;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 lg:order-2"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src={serviceImage2}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process — Vertical Timeline */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">
              Our Process
            </span>
            <h2 className="mt-3">
              How It <span className="gradient-text-gold">Works</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:-translate-x-1/2" />

            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || ArrowRight;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    isLeft
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Step number circle */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-gold/30 flex items-center justify-center z-10 shadow-sm">
                    <span className="text-gold font-bold text-lg">{i + 1}</span>
                  </div>

                  {/* Content card */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? "md:pr-4 md:text-right" : "md:pl-4"
                  }`}>
                    <div className="bg-white rounded-xl p-6 border border-black/[0.06] shadow-sm">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <h3 className="text-base font-bold text-charcoal">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Common Questions
            </span>
            <h2 className="mt-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                className="group glass-card-light overflow-hidden"
                variants={staggerItem}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-charcoal font-semibold hover:text-teal transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-teal shrink-0 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-teal/10 pt-4">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/90 to-[#9B1F1F]/90" />
        </div>
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-white">{ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
            {ctaDescription}
          </p>
          <p className="text-white/60 text-sm mb-10 max-w-lg mx-auto">
            Flexible financing available through Financeit — 0% interest plans, no money down, approved in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#C62828] font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
            >
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white font-semibold text-lg hover:border-white/70 hover:bg-white/10 transition-all"
            >
              Explore Financing
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
