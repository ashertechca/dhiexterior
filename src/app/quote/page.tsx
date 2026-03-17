"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Home,
  Wrench,
} from "lucide-react";

const services = [
  { id: "painting", label: "Painting", icon: "🎨" },
  { id: "doors-windows", label: "Doors & Windows", icon: "🚪" },
  { id: "decks-fences", label: "Decks & Fences", icon: "🏗️" },
  { id: "siding-eaves", label: "Siding & Eaves", icon: "🏠" },
  { id: "basement", label: "Basement Development", icon: "🔨" },
];

const benefits = [
  { title: "Free & No Obligation", desc: "Get a detailed quote with zero commitment required." },
  { title: "Response within 24 Hours", desc: "Our team will reach out promptly to discuss your project." },
  { title: "Detailed Written Estimate", desc: "Transparent pricing with a comprehensive breakdown." },
  { title: "20+ Years Experience", desc: "Trusted Calgary expertise you can count on." },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("phone");
  const [preferredTime, setPreferredTime] = useState("morning");

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const changeStep = (newStep: number) => {
    setDirection(newStep > step ? "forward" : "backward");
    setAnimating(true);
    setTimeout(() => {
      setStep(newStep);
      setAnimating(false);
    }, 200);
  };

  const handleSubmit = () => {
    setAnimating(true);
    setTimeout(() => {
      setSubmitted(true);
      setAnimating(false);
    }, 200);
  };

  const canProceedStep1 = selectedServices.length > 0;
  const canProceedStep2 = propertyType && projectSize && timeline;
  const canProceedStep3 = name && email && phone;

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FAFAF8] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center pt-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C62828]/15 mb-8">
            <CheckCircle className="w-10 h-10 text-[#C62828]" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1F2E] mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-[#4A5568] mb-4">
            We&apos;ll contact you within 24 hours.
          </p>
          <p className="text-[#6B7280] mb-10">
            Our team is reviewing your request and will prepare a personalized quote for your project.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C62828] text-white font-semibold rounded-lg hover:bg-[#C62828]/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Dark Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
            alt="Request a quote"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
            <Wrench className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Free Quote</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Request a Quote
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a detailed, no-obligation estimate.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Form */}
          <div className="flex-1">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#8E712F]">
                  Step {step} of 3
                </span>
                <span className="text-sm text-[#9CA3AF]">
                  {step === 1 && "Service Selection"}
                  {step === 2 && "Project Details"}
                  {step === 3 && "Contact Info"}
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C62828] to-[#8E712F] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-3">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        s < step
                          ? "bg-[#C62828] text-white"
                          : s === step
                          ? "bg-[#8E712F] text-white"
                          : "bg-white text-[#9CA3AF]"
                      }`}
                    >
                      {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div
              className={`bg-white rounded-2xl p-8 border border-black/[0.06] transition-all duration-200 ${
                animating
                  ? direction === "forward"
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold text-[#1A1F2E] mb-2">
                    Select Your Services
                  </h2>
                  <p className="text-[#6B7280] mb-8">
                    Choose one or more services you&apos;re interested in.
                  </p>
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedServices.includes(service.id)
                            ? "border-[#C62828] bg-[#C62828]/10"
                            : "border-black/[0.08] bg-[#F5F3EE] hover:border-black/[0.12]"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                            selectedServices.includes(service.id)
                              ? "border-[#C62828] bg-[#C62828]"
                              : "border-black/[0.15]"
                          }`}
                        >
                          {selectedServices.includes(service.id) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="text-2xl">{service.icon}</span>
                        <span className="text-[#1A1F2E] font-medium text-lg">
                          {service.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold text-[#1A1F2E] mb-2">
                    Project Details
                  </h2>
                  <p className="text-[#6B7280] mb-8">
                    Help us understand the scope of your project.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#4A5568] mb-2">
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] focus:outline-none focus:border-[#C62828] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A5568] mb-2">
                        Project Size
                      </label>
                      <select
                        value={projectSize}
                        onChange={(e) => setProjectSize(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] focus:outline-none focus:border-[#C62828] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select project size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A5568] mb-2">
                        Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] focus:outline-none focus:border-[#C62828] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-weeks">1-2 Weeks</option>
                        <option value="1-month">1 Month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A5568] mb-2">
                        Project Description{" "}
                        <span className="text-[#9CA3AF]">(optional)</span>
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        placeholder="Tell us more about what you have in mind..."
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C62828] transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold text-[#1A1F2E] mb-2">
                    Contact Information
                  </h2>
                  <p className="text-[#6B7280] mb-8">
                    How can we reach you to discuss your quote?
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-[#4A5568] mb-2">
                        <User className="w-4 h-4" /> Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C62828] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-[#4A5568] mb-2">
                        <Mail className="w-4 h-4" /> Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C62828] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-[#4A5568] mb-2">
                        <Phone className="w-4 h-4" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(587) 555-1234"
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C62828] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-[#4A5568] mb-3">
                        <MessageSquare className="w-4 h-4" /> Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {["Phone", "Email", "Text"].map((method) => (
                          <button
                            key={method}
                            onClick={() => setContactMethod(method.toLowerCase())}
                            className={`px-5 py-2.5 rounded-lg border transition-all text-sm font-medium ${
                              contactMethod === method.toLowerCase()
                                ? "border-[#C62828] bg-[#C62828]/10 text-[#C62828]"
                                : "border-black/[0.08] text-[#6B7280] hover:border-black/[0.12]"
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A5568] mb-3">
                        Preferred Time to Contact
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {["Morning", "Afternoon", "Evening"].map((time) => (
                          <button
                            key={time}
                            onClick={() => setPreferredTime(time.toLowerCase())}
                            className={`px-5 py-2.5 rounded-lg border transition-all text-sm font-medium ${
                              preferredTime === time.toLowerCase()
                                ? "border-[#8E712F] bg-[#8E712F]/10 text-[#8E712F]"
                                : "border-black/[0.08] text-[#6B7280] hover:border-black/[0.12]"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  onClick={() => changeStep(step - 1)}
                  className="flex items-center gap-2 px-6 py-3 border border-black/[0.08] text-[#4A5568] rounded-xl hover:border-black/[0.12] hover:text-[#1A1F2E] transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <button
                  onClick={() => changeStep(step + 1)}
                  disabled={
                    (step === 1 && !canProceedStep1) ||
                    (step === 2 && !canProceedStep2)
                  }
                  className="flex items-center gap-2 px-8 py-3 bg-[#C62828] text-white font-semibold rounded-xl hover:bg-[#C62828]/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceedStep3}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#8E712F] to-[#C62828] text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  Submit Request
                </button>
              )}
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl p-8 border border-black/[0.06] sticky top-32">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1F2E] mb-6">
                Why Get a Quote?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C62828]/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#C62828]" />
                    </div>
                    <div>
                      <h4 className="text-[#1A1F2E] font-medium mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[#6B7280]">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-black/[0.06]">
                <p className="text-sm text-[#9CA3AF] mb-3">Prefer to call?</p>
                <a
                  href="tel:587-575-4832"
                  className="flex items-center gap-3 text-[#8E712F] font-semibold text-lg hover:text-[#8E712F]/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  587-575-4832
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
