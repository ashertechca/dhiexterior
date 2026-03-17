import type { Metadata } from "next";

import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Basement Development Calgary | DHI Exteriors",
  description:
    "Professional basement development in Calgary. Separate entrances, soundproofing, full plumbing, electrical, egress windows, and custom layouts. Turn your basement into a legal suite or dream living space. Free quotes from DHI Exteriors.",
  openGraph: {
    title: "Basement Development Calgary | DHI Exteriors",
    description:
      "Maximize your Calgary home's value with professional basement development. Legal suites, custom layouts, full plumbing, and electrical. Free consultation available.",
    url: "https://dhiexteriors.com/services/basement-development",
  },
  keywords: [
    "basement development Calgary",
    "basement renovation Calgary",
    "basement finishing Calgary",
    "legal basement suite Calgary",
    "basement contractor Calgary",
    "secondary suite Calgary",
  ],
};

const benefits = [
  {
    icon: "DoorOpen",
    title: "Separate Entrance",
    description:
      "We design and build code-compliant separate entrances for legal secondary suites, maximizing your property's rental income potential in Calgary.",
  },
  {
    icon: "Volume2",
    title: "Soundproofing",
    description:
      "Professional-grade sound insulation between floors ensures privacy and comfort for both your family and tenants in suite configurations.",
  },
  {
    icon: "Droplets",
    title: "Full Plumbing",
    description:
      "Complete bathroom and kitchen rough-in and finishing, including drain connections, water supply, and fixture installation to code.",
  },
  {
    icon: "Zap",
    title: "Electrical",
    description:
      "Full electrical design and installation — separate panel, lighting, outlets, and smoke/carbon monoxide detectors meeting all Alberta codes.",
  },
  {
    icon: "Sun",
    title: "Exterior Windows",
    description:
      "Properly sized egress windows for safety compliance and natural light, transforming your basement from a dark space to a bright, liveable area.",
  },
  {
    icon: "LayoutDashboard",
    title: "Custom Layouts",
    description:
      "From open-concept entertainment areas to multi-bedroom rental suites, we design layouts that maximize every square foot of your basement.",
  },
];

const steps = [
  {
    icon: "Phone",
    title: "Free Consultation & Assessment",
    description:
      "We evaluate your basement's current state, discuss your goals — rental suite, family space, home theatre — and outline what's possible.",
  },
  {
    icon: "Ruler",
    title: "Design, Permits & Planning",
    description:
      "Our team creates detailed floor plans, handles City of Calgary permits and inspections, and develops a comprehensive build schedule.",
  },
  {
    icon: "Hammer",
    title: "Full Construction",
    description:
      "From framing and insulation to plumbing, electrical, drywall, and finishes — our crews handle every phase of your basement development.",
  },
  {
    icon: "ClipboardCheck",
    title: "Final Inspection & Handover",
    description:
      "We coordinate all required municipal inspections, do a thorough walkthrough with you, and deliver your new space turnkey-ready.",
  },
];

const faqs = [
  {
    question: "How much does basement development cost in Calgary?",
    answer:
      "Costs vary based on size, layout complexity, and finish level. A basic finished basement typically starts around $30-$50 per square foot, while a full legal suite with separate entrance, kitchen, and bathroom can range from $60-$100+ per square foot. We provide detailed, transparent quotes during our free consultation so there are no surprises.",
  },
  {
    question: "Do I need a permit for basement development in Calgary?",
    answer:
      "Yes. The City of Calgary requires development and building permits for basement development, especially if you're creating a secondary suite. Permits ensure your project meets safety codes for fire separation, egress, electrical, and plumbing. We handle the entire permitting process for you, including coordinating all required inspections.",
  },
  {
    question: "How long does a basement development project take?",
    answer:
      "A typical basement development takes 6-12 weeks from start to finish, depending on scope and complexity. A basic finish may take 6-8 weeks, while a full legal suite with plumbing, electrical, and a separate entrance can take 10-12 weeks. Permit approval timelines from the City of Calgary can also affect the schedule.",
  },
  {
    question: "Can I build a legal basement suite for rental income?",
    answer:
      "Yes, and it's an excellent investment. Calgary allows secondary suites in most residential areas. We build fully code-compliant suites with separate entrances, fire-rated separations, proper egress windows, independent HVAC, and all required safety features. A legal suite can generate significant monthly rental income and increase your property value.",
  },
];

export default function BasementDevelopmentPage() {
  return (
    <ServicePageContent
      heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
      heroTag="Our Services"
      heroTitle={
        <>
          Professional{" "}
          <span className="text-[#E53935]">Basement Development</span> in Calgary
        </>
      }
      heroDescription="Unlock your home's full potential with a professionally developed basement. From legal rental suites to custom family spaces, DHI Exteriors handles every detail from permits to finishing touches."
      benefitsTag="What's Included"
      benefitsTitle={
        <>
          Complete{" "}
          <span className="gradient-text">Basement Solutions</span>
        </>
      }
      benefits={benefits}
      serviceImage1="https://images.unsplash.com/photo-1560185127-6ed7e76a05ab?w=800&q=80"
      serviceImage2="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
      steps={steps}
      faqs={faqs}
      ctaTitle={
        <>
          Ready to{" "}
          <span className="text-white/90">Transform Your Basement</span>?
        </>
      }
      ctaDescription="Get a free, no-obligation quote for your basement development project. Whether it's a rental suite or a family living space, we'll bring your vision to life."
    />
  );
}
