"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  DollarSign,
  CheckCircle,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  ArrowRight,
  Shield,
  Zap,
  CalendarCheck,
  BadgePercent,
  Banknote,
  FileCheck,
  Phone,
  Percent,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const terms = [12, 24, 36, 48, 60];

const benefitsData = [
  {
    icon: DollarSign,
    title: "No Money Down",
    desc: "Start your renovation without any upfront payment. The full project cost is financed so you can get started right away.",
  },
  {
    icon: Zap,
    title: "Approved in Seconds",
    desc: "Quick and easy online application with instant credit decisions. No waiting around — know your options on the spot.",
  },
  {
    icon: BadgePercent,
    title: "Rates from 0%",
    desc: "Competitive interest rates starting as low as 0% on select promotional plans. Much lower than credit card interest.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Terms Up to 60 Months",
    desc: "Choose weekly, bi-weekly, or monthly payments with terms up to 60 months to fit your budget comfortably.",
  },
  {
    icon: Shield,
    title: "No Prepayment Penalties",
    desc: "Pay off your balance early at any time without extra fees. Plain-language agreements with no hidden costs.",
  },
  {
    icon: Banknote,
    title: "Finance Up to $100,000",
    desc: "Cover projects from $500 to $100,000. Whether it's a simple paint job or a full exterior renovation, we've got you covered.",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Get Your Free Quote",
    desc: "We visit your home, assess the project, and provide a detailed, transparent quote for your renovation.",
  },
  {
    step: "02",
    title: "Apply in Minutes",
    desc: "Complete a simple online application through Financeit. Just your basic info — name, address, income, and employment details.",
  },
  {
    step: "03",
    title: "Get Approved Instantly",
    desc: "Receive your credit decision in seconds. Once approved, review and e-sign your loan agreement with clear, plain-language terms.",
  },
  {
    step: "04",
    title: "We Get to Work",
    desc: "Your project begins on schedule. You enjoy affordable monthly payments while we transform your home.",
  },
];

const faqs = [
  {
    q: "Who is Financeit?",
    a: "Financeit is a leading Canadian consumer financing platform established in 2011. They've helped over 12,000 partner businesses and processed over $5 billion in loan applications. DHI Exteriors has partnered with Financeit to offer our clients affordable payment plans for their renovation projects.",
  },
  {
    q: "How do I apply for financing?",
    a: "Applying is quick and easy. After you receive your project quote from us, you can apply online through Financeit in just a few minutes. You'll need your name, date of birth, address, gross income, and employment information. Credit decisions come back in seconds.",
  },
  {
    q: "What do I need to qualify?",
    a: "You'll need a government-issued photo ID, a void personal cheque, and proof of income may be required depending on the loan amount. Financeit handles the credit review process and provides instant decisions in most cases.",
  },
  {
    q: "What interest rates are available?",
    a: "Rates range from 0% to 17.99% depending on the plan, credit approval, and loan amount. We offer promotional 0% interest plans on select terms. Contact us for current promotional offers and to find the best rate for your project.",
  },
  {
    q: "Can I pay off my loan early?",
    a: "Absolutely. There are no prepayment penalties with Financeit. You can pay off your balance in full or make extra payments at any time without any additional fees.",
  },
  {
    q: "How long is my approval valid?",
    a: "Once approved, your financing is valid for 6 months. This gives you plenty of time to plan and schedule your renovation at your convenience.",
  },
  {
    q: "How does DHI Exteriors get paid?",
    a: "Once your project is complete and you sign off on the work, Financeit pays us the full project amount directly within 2 business days. You simply continue making your affordable monthly payments to Financeit.",
  },
  {
    q: "What payment schedules are available?",
    a: "You can choose from weekly, bi-weekly, or monthly payment schedules — whatever works best for your budget. Terms range from 12 to 60 months.",
  },
];

export default function FinancingPage() {
  const [projectCost, setProjectCost] = useState(25000);
  const [selectedTerm, setSelectedTerm] = useState(36);
  const rate = 6.99;

  const { monthlyPayment, totalCost, totalInterest } = useMemo(() => {
    const principal = projectCost;
    const monthlyRate = rate / 100 / 12;
    const n = selectedTerm;

    if (monthlyRate === 0) {
      const mp = principal / n;
      return { monthlyPayment: mp, totalCost: principal, totalInterest: 0 };
    }

    const mp =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
      (Math.pow(1 + monthlyRate, n) - 1);
    const tc = mp * n;
    const ti = tc - principal;

    return { monthlyPayment: mp, totalCost: tc, totalInterest: ti };
  }, [projectCost, selectedTerm, rate]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);

  return (
    <main className="min-h-screen bg-warm-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C62828]/[0.02] via-transparent to-[#8E712F]/[0.02]" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8E712F]/5 border border-[#8E712F]/15 text-[#8E712F] text-sm font-medium mb-8">
                <CreditCard className="w-4 h-4" />
                Powered by Financeit
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1F2E] mb-6 text-balance">
                Don&apos;t Let Cost Hold You{" "}
                <span className="text-[#C62828]">Back</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-[#4A5568] max-w-xl mb-8">
                Get the exterior renovation you&apos;ve been dreaming of with
                affordable monthly payments. Apply in minutes, get approved in
                seconds. <strong>0% financing available</strong> on select plans.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C62828] text-white font-semibold text-lg hover:bg-[#9B1F1F] transition-all shadow-lg shadow-red-900/20 hover:-translate-y-1"
                >
                  Apply for Financing <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:5875754832"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-[#1A1F2E]/15 text-[#1A1F2E] font-semibold text-lg hover:border-[#1A1F2E]/30 hover:bg-[#1A1F2E]/5 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call to Discuss
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#4A5568]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                  <span className="font-medium">$500 – $100,000</span>
                </div>
                <div className="h-5 w-px bg-[#1A1F2E]/10" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                  <span className="font-medium">Rates from 0%</span>
                </div>
                <div className="h-5 w-px bg-[#1A1F2E]/10" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                  <span className="font-medium">No Prepayment Penalties</span>
                </div>
              </div>
            </motion.div>

            {/* Right — Highlight card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-[#1A1F2E] to-[#2D3348] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Percent className="w-6 h-6 text-[#EF5350]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Starting from</p>
                    <p className="text-3xl font-bold">0% Interest</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "No money down required",
                    "Approved in seconds, not days",
                    "Terms up to 60 months",
                    "Weekly, bi-weekly, or monthly payments",
                    "No hidden fees or penalties",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#EF5350] shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                    Example: $25,000 renovation
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$483</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <p className="text-white/40 text-xs mt-1">
                    60 months at 6.99% APR
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              How Financing Works
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
            <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
              Getting financing for your renovation is quick and easy through
              our partnership with Financeit, Canada&apos;s leading home
              improvement financing platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((item, i) => (
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
                <h3 className="text-lg font-bold text-charcoal mb-2 -mt-4">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Why Finance With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              Financing That Works for You
            </h2>
            <div className="w-16 h-[2px] bg-teal mx-auto mt-4" />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {benefitsData.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-7 border border-black/[0.06] hover:border-[#C62828]/20 transition-all duration-300 group hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 flex items-center justify-center mb-5 group-hover:bg-[#C62828]/15 transition-colors">
                    <Icon className="w-6 h-6 text-[#C62828]" />
                  </div>
                  <h3 className="text-[#1A1F2E] font-bold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PAYMENT CALCULATOR ===== */}
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
              Plan Your Budget
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              Payment Calculator
            </h2>
            <div className="w-16 h-[2px] bg-teal mx-auto mt-4" />
          </motion.div>

          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden shadow-sm">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-[#C62828]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#1A1F2E]">
                    Estimate Your Monthly Payments
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    See how affordable your renovation can be
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Inputs */}
                <div className="space-y-8">
                  {/* Project Cost */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-sm font-medium text-[#4A5568]">
                        Project Cost
                      </label>
                      <span className="text-3xl font-bold text-[#1A1F2E]">
                        {formatCurrency(projectCost)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5000}
                      max={100000}
                      step={1000}
                      value={projectCost}
                      onChange={(e) => setProjectCost(Number(e.target.value))}
                      className="w-full h-2 bg-[#FAFAF8] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C62828] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#C62828]/30 [&::-webkit-slider-thumb]:cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #C62828 0%, #C62828 ${
                          ((projectCost - 5000) / 95000) * 100
                        }%, #E5E7EB ${((projectCost - 5000) / 95000) * 100}%, #E5E7EB 100%)`,
                      }}
                    />
                    <div className="flex justify-between mt-2 text-xs text-[#9CA3AF]">
                      <span>$5,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>

                  {/* Term Selector */}
                  <div>
                    <label className="block text-sm font-medium text-[#4A5568] mb-4">
                      Loan Term (Months)
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {terms.map((term) => (
                        <button
                          key={term}
                          onClick={() => setSelectedTerm(term)}
                          className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            selectedTerm === term
                              ? "bg-[#C62828] text-white shadow-lg shadow-[#C62828]/20"
                              : "bg-[#FAFAF8] text-[#6B7280] border border-black/[0.08] hover:border-black/[0.12]"
                          }`}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rate Display */}
                  <div className="bg-[#F5F3EE] rounded-xl p-5 border border-black/[0.06]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">
                          Rates starting from
                        </p>
                        <p className="text-3xl font-bold text-[#8E712F]">
                          {rate}%
                        </p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-[#8E712F]/40" />
                    </div>
                  </div>
                </div>

                {/* Right: Results */}
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-[#F5F3EE] to-white rounded-2xl p-8 border border-black/[0.06] space-y-6">
                    <div className="text-center pb-6 border-b border-black/[0.06]">
                      <p className="text-sm text-[#9CA3AF] uppercase tracking-wider mb-2">
                        Estimated Monthly Payment
                      </p>
                      <p className="text-5xl font-bold text-[#C62828]">
                        {formatCurrency(monthlyPayment)}
                      </p>
                      <p className="text-sm text-[#9CA3AF] mt-2">per month</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">
                          Total Cost
                        </p>
                        <p className="text-xl font-semibold text-[#1A1F2E]">
                          {formatCurrency(totalCost)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">
                          Total Interest
                        </p>
                        <p className="text-xl font-semibold text-[#8E712F]">
                          {formatCurrency(totalInterest)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-[#9CA3AF] text-center mt-6 max-w-3xl mx-auto">
            * Rates shown are for illustration purposes. Actual rates depend on
            credit approval and may vary. Promotional 0% plans available on
            select terms. Contact us for personalized financing options through
            Financeit.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal uppercase tracking-[0.2em] text-sm font-semibold">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              Financing <span className="gradient-text">FAQ</span>
            </h2>
            <div className="w-16 h-[2px] bg-teal mx-auto mt-4" />
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
                key={faq.q}
                className="group glass-card-light overflow-hidden"
                variants={staggerItem}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-charcoal font-semibold hover:text-teal transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-teal shrink-0 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-teal/10 pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/95 to-[#9B1F1F]/95" />
        <div className="absolute inset-0 bg-[url('/image-1.png')] bg-cover bg-center opacity-10" />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-4">
            Your dream renovation is more affordable than you think.
          </p>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Apply for financing through Financeit and get approved in seconds.
            No money down, no prepayment penalties, and flexible payment
            options to fit your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-[#C62828] font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
            >
              <FileCheck className="w-5 h-5" />
              Apply for Financing
            </Link>
            <a
              href="tel:5875754832"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white font-semibold text-lg hover:border-white/70 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (587) 575-4832
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
