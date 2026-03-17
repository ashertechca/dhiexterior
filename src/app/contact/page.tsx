"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { slideFromLeft, slideFromRight } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "587-575-4832",
    href: "tel:5875754832",
  },
  {
    icon: Mail,
    label: "Email",
    value: "clarence@dhiexteriors.com",
    href: "mailto:clarence@dhiexteriors.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Calgary, AB",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 7AM-6PM, Sat 8AM-4PM",
    href: null,
  },
];

const serviceOptions = [
  "Select a service",
  "Painting",
  "Doors & Windows",
  "Decks & Fences",
  "Siding & Eaves",
  "Basement Development",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
            alt="Contact DHI Exteriors"
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
            Contact Us
          </motion.p>
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in <span className="text-[#E53935]">Touch</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to start your project? Reach out for a free consultation and
            quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form - Left Side */}
          <motion.div
            className="lg:col-span-3"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-teal" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-muted leading-relaxed max-w-md mx-auto mb-8">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours to discuss your project.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="text-teal text-sm font-semibold uppercase tracking-wider hover:text-teal-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-charcoal mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-muted text-sm mb-8">
                    Fill out the form below and we&apos;ll get back to you
                    shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-muted mb-2"
                      >
                        <User className="w-3.5 h-3.5 text-teal/60" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg bg-warm-white border border-black/[0.08] text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-teal/40 focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-muted mb-2"
                        >
                          <Mail className="w-3.5 h-3.5 text-teal/60" />
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg bg-warm-white border border-black/[0.08] text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-teal/40 focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-muted mb-2"
                        >
                          <Phone className="w-3.5 h-3.5 text-teal/60" />
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(587) 000-0000"
                          className="w-full px-4 py-3 rounded-lg bg-warm-white border border-black/[0.08] text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-teal/40 focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-muted mb-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-teal/60" />
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-warm-white border border-black/[0.08] text-charcoal text-sm focus:outline-none focus:border-teal/40 focus:ring-2 focus:ring-teal/10 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((option) => (
                          <option
                            key={option}
                            value={option === "Select a service" ? "" : option}
                            disabled={option === "Select a service"}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-muted mb-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-teal/60" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-lg bg-warm-white border border-black/[0.08] text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-teal/40 focus:ring-2 focus:ring-teal/10 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-premium btn-teal w-full justify-center"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Contact Info - Right Side */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="glass-card p-6 group hover:border-teal/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted mb-1">
                        {info.label}
                      </div>
                      <div className="text-charcoal font-medium text-sm">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={info.label} href={info.href}>
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            <div className="glass-card p-6 border-l-2 border-gold/40">
              <p className="text-gold text-sm font-semibold mb-2">
                Quick Response
              </p>
              <p className="text-muted text-sm leading-relaxed">
                We typically respond within 24 hours. For urgent requests, call
                us directly at{" "}
                <a
                  href="tel:5875754832"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  587-575-4832
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=1920&q=80"
            alt="Calgary skyline"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="w-10 h-10 text-[#E53935] mx-auto mb-4" />
            <h2 className="text-white mb-4">
              Serving All of <span className="text-[#E53935]">Calgary</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Proudly serving homeowners across Calgary and surrounding
              communities including Airdrie, Cochrane, Chestermere, and Okotoks.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
