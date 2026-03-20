"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Shield, Clock, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/lib/animations";

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every project is completed to the highest standard using premium materials and proven techniques that stand the test of time and Calgary's climate.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We listen, we communicate, and we deliver. Your satisfaction drives every decision we make, from the initial consultation to the final walkthrough.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "No hidden fees, no surprises. We provide honest assessments, detailed quotes, and keep you informed at every stage of your project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your time. Our projects are carefully planned and executed to meet agreed-upon deadlines without compromising on quality.",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 4.8, suffix: "", label: "Star Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="About DHI Exteriors"
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
            Our Story
          </motion.p>
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <span className="text-[#E53935]">DHI Exteriors</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building Trust Through Quality Craftsmanship Since 2004
          </motion.p>
        </div>
      </section>

      {/* Story Section — Alternating Image + Text */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Row 1: Image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80"
                alt="Renovation craftsmanship up close"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
                Who We Are
              </span>
              <h2 className="mt-3 mb-6">
                Our <span className="gradient-text-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  DHI Exteriors was founded with a simple mission — deliver
                  exceptional exterior renovation services with honest pricing and
                  reliable timelines. Over 30 years later, DHI Exteriors has become
                  one of Calgary&apos;s most trusted home exterior companies.
                </p>
                <p>
                  What started as a passion for transforming homes has grown into a
                  full-service exterior renovation company serving homeowners across
                  Calgary and surrounding areas.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  From painting and siding to custom decks, doors, windows, and
                  complete basement development, we bring the same dedication to
                  quality on every project.
                </p>
                <p>
                  Our growth has been built entirely on word-of-mouth referrals and
                  repeat customers — a testament to the relationships we build
                  and the results we deliver.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 lg:order-2"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                alt="Beautiful home after renovation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              What Drives Us
            </span>
            <h2 className="mt-3">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-8 border border-black/[0.06] hover:border-teal/30 hover:shadow-md transition-all duration-500 group"
                  variants={staggerItem}
                >
                  <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-teal transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 border-y border-black/[0.06]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold font-display">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-muted text-sm mt-2 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Leadership
            </span>
            <h2 className="mt-3 mb-8">
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-teal/20">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                alt="Marty - Founder"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">
              Marty
            </h3>
            <p className="text-teal text-sm uppercase tracking-[0.15em] font-semibold mb-6">
              Founder & Lead
            </p>
            <p className="text-muted leading-relaxed">
              Led by Marty, who brings decades of hands-on experience in home
              exterior renovations, DHI Exteriors operates with a commitment to
              excellence that comes only from years spent perfecting the craft.
              Marty personally oversees every project, ensuring that the same
              standards that built DHI&apos;s reputation continue to define every
              job we take on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/90 to-[#9B1F1F]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <h2 className="mb-6 text-white">
            Ready to Work with{" "}
            <span className="text-white/90">Calgary&apos;s Best</span>?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Get a free quote today and discover why hundreds of Calgary
            homeowners trust DHI Exteriors with their homes.
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
