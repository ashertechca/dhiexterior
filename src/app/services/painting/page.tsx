import type { Metadata } from "next";

import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Professional Painting Services Calgary | DHI Exteriors",
  description:
    "Expert interior and exterior painting services in Calgary. Weather-resistant finishes, premium paint brands, colour consultation, and meticulous surface preparation. Over 30 years of experience. Get a free quote today.",
  openGraph: {
    title: "Professional Painting Services Calgary | DHI Exteriors",
    description:
      "Transform your Calgary home with professional interior and exterior painting. Weather-resistant finishes, premium brands, and expert colour consultation. Free quotes available.",
    url: "https://dhiexteriors.com/services/painting",
  },
  keywords: [
    "Calgary painting services",
    "exterior painting Calgary",
    "interior painting Calgary",
    "house painters Calgary",
    "professional painters Calgary",
    "residential painting Calgary",
  ],
};

const benefits = [
  {
    icon: "ShieldCheck",
    title: "Weather-Resistant Finishes",
    description:
      "Coatings engineered to withstand Calgary's harsh winters, UV exposure, and temperature swings without cracking or peeling.",
  },
  {
    icon: "Paintbrush",
    title: "Interior & Exterior Expertise",
    description:
      "From living rooms to full exterior repaints, our crews deliver flawless results on every surface, inside and out.",
  },
  {
    icon: "Palette",
    title: "Colour Consultation",
    description:
      "Not sure on colours? Our design experts help you choose palettes that complement your home's architecture and neighbourhood.",
  },
  {
    icon: "Award",
    title: "Premium Paint Brands",
    description:
      "We use only top-tier paints from Benjamin Moore, Sherwin-Williams, and other trusted manufacturers for lasting beauty.",
  },
  {
    icon: "Layers",
    title: "Surface Preparation Included",
    description:
      "Proper sanding, priming, caulking, and repair work ensures paint adhesion and a smooth, professional finish every time.",
  },
  {
    icon: "Sparkles",
    title: "Clean & Professional Crew",
    description:
      "Our teams protect your furniture and landscaping, maintain a tidy workspace, and leave your home spotless on completion.",
  },
];

const steps = [
  {
    icon: "Phone",
    title: "Free Consultation & Quote",
    description:
      "We visit your home, assess the scope, discuss your vision, and provide a detailed no-obligation quote.",
  },
  {
    icon: "Palette",
    title: "Colour Selection & Surface Prep",
    description:
      "Choose your colours with expert guidance. We then prepare all surfaces — sanding, patching, priming, and masking.",
  },
  {
    icon: "Brush",
    title: "Professional Application",
    description:
      "Our experienced painters apply multiple coats using the right techniques for each surface type and finish.",
  },
  {
    icon: "ClipboardCheck",
    title: "Final Walkthrough & Touch-ups",
    description:
      "We walk through every room and surface with you, address any touch-ups, and ensure your complete satisfaction.",
  },
];

const faqs = [
  {
    question: "How long does a typical painting project take in Calgary?",
    answer:
      "Most interior rooms can be completed in 1-2 days, while a full exterior repaint typically takes 3-5 days depending on the size of your home and weather conditions. We always provide a timeline estimate during our free consultation.",
  },
  {
    question: "Do you paint in Calgary's cold winter months?",
    answer:
      "Interior painting can be done year-round. For exterior projects, we typically work from late spring through early fall when temperatures are consistently above 10°C, which ensures proper paint adhesion and curing. We schedule exterior work strategically around Calgary's weather.",
  },
  {
    question: "What kind of paint do you use, and is it included in the quote?",
    answer:
      "Yes, paint and all materials are included in our quotes. We use premium brands like Benjamin Moore and Sherwin-Williams. We select the right product for each application — low-VOC options for interiors, and weather-resistant formulas for Calgary's exterior conditions.",
  },
  {
    question: "Do you offer a warranty on your painting work?",
    answer:
      "Absolutely. We stand behind our craftsmanship with a workmanship warranty. The exact duration depends on the scope of the project, and the paint manufacturers also provide their own product warranties. We'll cover all warranty details in your quote.",
  },
];

export default function PaintingPage() {
  return (
    <ServicePageContent
      heroImage="/exterior-painting.png"
      heroTag="Our Services"
      heroTitle={
        <>
          Professional <span className="text-[#E53935]">Painting Services</span> in Calgary
        </>
      }
      heroDescription="Transform your home inside and out with DHI Exteriors' professional painting services. Over 30 years of delivering flawless, weather-resistant finishes across Calgary."
      benefitsTag="Why Choose Us"
      benefitsTitle={
        <>
          Calgary&apos;s Trusted{" "}
          <span className="gradient-text">Painting Experts</span>
        </>
      }
      benefits={benefits}
      serviceImage1="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
      serviceImage2="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80"
      steps={steps}
      faqs={faqs}
      ctaTitle={
        <>
          Ready to <span className="text-white/90">Refresh Your Home</span>?
        </>
      }
      ctaDescription="Get a free, no-obligation quote for your painting project. Our team is ready to bring your vision to life with expert craftsmanship."
    />
  );
}
