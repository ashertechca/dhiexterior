import type { Metadata } from "next";

import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Door & Window Installation Calgary | DHI Exteriors",
  description:
    "Professional door and window installation in Calgary. Energy-efficient upgrades, enhanced security, noise reduction, and UV protection. Expert fitting with a wide variety of styles. Free quotes available.",
  openGraph: {
    title: "Door & Window Installation Calgary | DHI Exteriors",
    description:
      "Upgrade your Calgary home with energy-efficient doors and windows. Professional installation, enhanced security, and noise reduction. Free consultation and quote.",
    url: "https://dhiexteriors.com/services/doors-and-windows",
  },
  keywords: [
    "door installation Calgary",
    "window installation Calgary",
    "window replacement Calgary",
    "energy efficient windows Calgary",
    "front door replacement Calgary",
    "patio door installation Calgary",
  ],
};

const benefits = [
  {
    icon: "Zap",
    title: "Energy Efficiency",
    description:
      "Modern double and triple-pane windows and insulated doors dramatically reduce heat loss, lowering your energy bills through Calgary's long winters.",
  },
  {
    icon: "ShieldCheck",
    title: "Enhanced Security",
    description:
      "Heavy-duty frames, multi-point locking systems, and impact-resistant glass options keep your family and belongings safe.",
  },
  {
    icon: "Volume2",
    title: "Noise Reduction",
    description:
      "Upgraded windows and solid-core doors significantly reduce outside noise — ideal for homes near busy Calgary streets or construction zones.",
  },
  {
    icon: "Sun",
    title: "UV Protection",
    description:
      "Low-E glass coatings block harmful UV rays that fade furniture, flooring, and artwork while still letting natural light flood your rooms.",
  },
  {
    icon: "Wrench",
    title: "Professional Fitting",
    description:
      "Precise measurements and expert installation eliminate drafts, ensure smooth operation, and maximize the lifespan of your new doors and windows.",
  },
  {
    icon: "LayoutGrid",
    title: "Variety of Styles",
    description:
      "Choose from casement, sliding, awning, bay, and picture windows, plus entry, patio, and French doors in a range of materials and finishes.",
  },
];

const steps = [
  {
    icon: "Phone",
    title: "Free In-Home Consultation",
    description:
      "We assess your current doors and windows, discuss your priorities — energy savings, style, security — and take precise measurements.",
  },
  {
    icon: "Ruler",
    title: "Product Selection & Custom Order",
    description:
      "Browse our curated selection of brands and styles. We help you choose the best products for Calgary's climate and your budget.",
  },
  {
    icon: "Hammer",
    title: "Professional Installation",
    description:
      "Our certified installers remove old units and fit your new doors and windows with precision, proper insulation, and weatherproofing.",
  },
  {
    icon: "ClipboardCheck",
    title: "Inspection & Warranty Handover",
    description:
      "We walk you through the finished work, test every unit, clean up thoroughly, and provide full product and labour warranty documentation.",
  },
];

const faqs = [
  {
    question: "How do I know if my windows need replacing?",
    answer:
      "Common signs include drafts near windows, condensation between panes, difficulty opening or closing, visible damage or rot, and noticeably higher energy bills. If your windows are over 15-20 years old, modern energy-efficient replacements can make a significant difference in comfort and cost savings, especially in Calgary's climate.",
  },
  {
    question: "What types of windows work best for Calgary homes?",
    answer:
      "We recommend triple-pane, low-E coated windows with argon gas fill for maximum energy efficiency in Calgary's cold winters. Vinyl and fiberglass frames are popular choices because they resist warping in temperature extremes. We'll help you select the best option based on your home's orientation, budget, and style preferences.",
  },
  {
    question: "How long does a door or window installation take?",
    answer:
      "A single door replacement typically takes 2-4 hours. Window replacements average 1-2 hours per window. A full-home window replacement project can be completed in 1-3 days. We schedule installations to minimize disruption and always secure your home at the end of each day.",
  },
  {
    question:
      "Do new windows and doors really save money on energy bills?",
    answer:
      "Yes. Upgrading from single-pane to triple-pane windows can reduce heat loss through windows by up to 50%. Many Calgary homeowners see a noticeable reduction in heating costs within the first winter. Combined with insulated entry doors, the improvements to your home's thermal envelope pay for themselves over time.",
  },
];

export default function DoorsAndWindowsPage() {
  return (
    <ServicePageContent
      heroImage="/doors-windows.jpg"
      heroTag="Our Services"
      heroTitle={
        <>
          Door & Window{" "}
          <span className="text-[#E53935]">Installation</span> in Calgary
        </>
      }
      heroDescription="Upgrade your home's comfort, security, and energy efficiency with professionally installed doors and windows from DHI Exteriors. Built for Calgary's climate."
      benefitsTag="Why Upgrade"
      benefitsTitle={
        <>
          Benefits of New{" "}
          <span className="gradient-text">Doors & Windows</span>
        </>
      }
      benefits={benefits}
      serviceImage1="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
      serviceImage2="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
      steps={steps}
      faqs={faqs}
      ctaTitle={
        <>
          Ready to <span className="text-white/90">Upgrade Your Home</span>?
        </>
      }
      ctaDescription="Get a free, no-obligation quote for your door and window project. Let us help you improve your home's comfort, security, and value."
    />
  );
}
