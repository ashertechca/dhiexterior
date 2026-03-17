"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  DollarSign,
  Clock,
  CheckCircle,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const terms = [12, 24, 36, 48, 60];

const benefitsData = [
  {
    icon: DollarSign,
    title: "No Money Down",
    desc: "Start your renovation project without any upfront payment required.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Rates",
    desc: "We partner with leading lenders to offer you the best available rates.",
  },
  {
    icon: Clock,
    title: "Quick Approval Process",
    desc: "Get approved in as little as 24 hours so your project can begin sooner.",
  },
  {
    icon: CreditCard,
    title: "Flexible Terms Up to 60 Months",
    desc: "Choose a payment schedule that fits comfortably within your budget.",
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
    <main className="min-h-screen bg-[#FAFAF8] py-20 px-4">
      <div className="max-w-6xl mx-auto pt-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8E712F]/30 bg-[#8E712F]/10 mb-6">
            <CreditCard className="w-4 h-4 text-[#8E712F]" />
            <span className="text-[#8E712F] text-sm font-medium">Financing</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1F2E] mb-4">
            Flexible Financing Options
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Make your dream renovation affordable with our easy financing solutions.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden mb-16">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-[#C62828]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#1A1F2E]">
                  Payment Calculator
                </h2>
                <p className="text-[#6B7280] text-sm">
                  Estimate your monthly payments
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
                      <p className="text-3xl font-bold text-[#8E712F]">{rate}%</p>
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

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1F2E] text-center mb-10">
            Why Finance With Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-black/[0.06] hover:border-[#C62828]/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 flex items-center justify-center mb-5 group-hover:bg-[#C62828]/15 transition-colors">
                    <Icon className="w-6 h-6 text-[#C62828]" />
                  </div>
                  <h3 className="text-[#1A1F2E] font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#9CA3AF] max-w-3xl mx-auto">
            * Rates shown are for illustration purposes. Actual rates depend on
            credit approval. Contact us for personalized financing options.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8E712F] to-[#C62828] text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            <CheckCircle className="w-5 h-5" />
            Apply for Financing
          </Link>
          <a
            href="tel:587-575-4832"
            className="inline-flex items-center gap-2 px-8 py-4 border border-black/[0.08] text-[#1A1F2E] rounded-xl hover:border-[#8E712F]/50 hover:text-[#8E712F] transition-all"
          >
            <DollarSign className="w-5 h-5" />
            Call to Discuss: 587-575-4832
          </a>
        </div>
      </div>
    </main>
  );
}
