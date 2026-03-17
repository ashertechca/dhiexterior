import type { Metadata } from "next";

import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Siding & Eavestrough Installation Calgary | DHI Exteriors",
  description:
    "Professional siding and eavestrough installation in Calgary. Improved insulation, water damage protection, energy savings, and a major curb appeal boost. James Hardie, vinyl, and more. Free quotes from DHI Exteriors.",
  openGraph: {
    title: "Siding & Eavestrough Installation Calgary | DHI Exteriors",
    description:
      "Protect and beautify your Calgary home with expert siding and eavestrough installation. Improved insulation, water protection, and energy savings. Free consultation.",
    url: "https://dhiexteriors.com/services/siding-and-eaves",
  },
  keywords: [
    "siding installation Calgary",
    "eavestrough installation Calgary",
    "James Hardie siding Calgary",
    "vinyl siding Calgary",
    "gutter installation Calgary",
    "siding contractor Calgary",
  ],
};

const benefits = [
  {
    icon: "Thermometer",
    title: "Improved Insulation",
    description:
      "New siding with integrated insulation board dramatically reduces thermal bridging, keeping your Calgary home warmer in winter and cooler in summer.",
  },
  {
    icon: "Droplets",
    title: "Water Damage Protection",
    description:
      "Properly installed siding and eavestroughs channel water away from your foundation and walls, preventing costly moisture damage and mould growth.",
  },
  {
    icon: "Sparkles",
    title: "Curb Appeal Boost",
    description:
      "Fresh siding transforms the look of your entire home. Choose from modern profiles and colours that elevate your property's appearance and value.",
  },
  {
    icon: "Settings",
    title: "Low Maintenance",
    description:
      "Today's siding products — vinyl, fiber cement, and engineered wood — resist fading, cracking, and rot, requiring minimal upkeep for decades.",
  },
  {
    icon: "LayoutGrid",
    title: "Variety of Materials",
    description:
      "We install James Hardie fiber cement, premium vinyl, engineered wood, and aluminum siding, matching the right material to your home and budget.",
  },
  {
    icon: "Zap",
    title: "Energy Savings",
    description:
      "Upgraded siding and sealed eavestroughs reduce air infiltration and improve your home's energy envelope, leading to lower monthly utility bills.",
  },
];

const steps = [
  {
    icon: "Phone",
    title: "Free Home Assessment",
    description:
      "We inspect your current siding and eavestroughs, identify problem areas, and discuss material options that suit your home and budget.",
  },
  {
    icon: "Ruler",
    title: "Material Selection & Planning",
    description:
      "Choose from our range of premium siding materials and eavestrough systems. We provide samples, colour swatches, and a detailed project plan.",
  },
  {
    icon: "Hammer",
    title: "Professional Installation",
    description:
      "Our crews remove old siding, install weather barrier, and fit your new siding and eavestroughs with precision and attention to detail.",
  },
  {
    icon: "ClipboardCheck",
    title: "Quality Inspection & Cleanup",
    description:
      "We inspect every seam and joint, test eavestrough drainage, remove all debris, and walk you through the finished product and warranty.",
  },
];

const faqs = [
  {
    question: "What type of siding is best for Calgary homes?",
    answer:
      "James Hardie fiber cement siding is one of the most popular choices for Calgary because it handles extreme temperature swings, resists hail damage, and won't warp or rot. Vinyl siding is an excellent budget-friendly option that also performs well. We'll help you compare materials based on your priorities — durability, aesthetics, and cost.",
  },
  {
    question: "How do I know if my eavestroughs need replacing?",
    answer:
      "Signs include visible sagging, rust or holes, water pooling around your foundation, peeling paint behind the gutters, or eavestroughs pulling away from the fascia. If your eavestroughs are older than 20 years or showing any of these symptoms, it's time for an assessment. Failing eavestroughs can lead to serious foundation and water damage.",
  },
  {
    question: "How long does siding installation take?",
    answer:
      "A full siding replacement on a typical Calgary home takes about 5-10 business days, depending on size, complexity, and weather. Eavestrough installation is usually a 1-2 day job. We always provide a detailed timeline in your project proposal and communicate any weather-related schedule adjustments.",
  },
  {
    question: "Does new siding increase home value?",
    answer:
      "Absolutely. Siding replacement consistently ranks among the top home improvement projects for return on investment. According to industry reports, homeowners typically recoup 70-80% of the cost at resale, plus enjoy lower energy bills and reduced maintenance costs in the meantime. It's one of the smartest upgrades you can make.",
  },
];

export default function SidingAndEavesPage() {
  return (
    <ServicePageContent
      heroImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
      heroTag="Our Services"
      heroTitle={
        <>
          Siding &{" "}
          <span className="text-[#E53935]">Eavestrough Installation</span> in Calgary
        </>
      }
      heroDescription="Protect your home from the elements and boost its curb appeal with professional siding and eavestrough installation from DHI Exteriors. Materials and craftsmanship built for Calgary."
      benefitsTag="Why Upgrade"
      benefitsTitle={
        <>
          The Benefits of New{" "}
          <span className="gradient-text">Siding & Eavestroughs</span>
        </>
      }
      benefits={benefits}
      serviceImage1="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
      serviceImage2="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80"
      steps={steps}
      faqs={faqs}
      ctaTitle={
        <>
          Ready to <span className="text-white/90">Protect Your Home</span>?
        </>
      }
      ctaDescription="Get a free, no-obligation quote for siding and eavestrough installation. Our team will help you choose the best materials for your home and budget."
    />
  );
}
