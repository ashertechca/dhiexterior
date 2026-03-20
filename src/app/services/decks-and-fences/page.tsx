import type { Metadata } from "next";

import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Custom Decks & Fences Calgary | DHI Exteriors",
  description:
    "Custom deck building and fence installation in Calgary. Durable, weather-treated materials, entertainment-ready designs, privacy solutions, and full permit handling. Get a free quote from DHI Exteriors.",
  openGraph: {
    title: "Custom Decks & Fences Calgary | DHI Exteriors",
    description:
      "Create the perfect outdoor space with custom-built decks and fences in Calgary. Durable materials, beautiful designs, and expert installation. Free quotes available.",
    url: "https://dhiexteriors.com/services/decks-and-fences",
  },
  keywords: [
    "deck building Calgary",
    "custom decks Calgary",
    "fence installation Calgary",
    "privacy fence Calgary",
    "composite decking Calgary",
    "deck contractor Calgary",
  ],
};

const benefits = [
  {
    icon: "PenTool",
    title: "Custom Designs",
    description:
      "Every deck and fence is designed to your exact specifications — from multi-level entertainment decks to elegant privacy fences that complement your home.",
  },
  {
    icon: "Shield",
    title: "Durable Materials",
    description:
      "We build with premium pressure-treated lumber, composite decking, and cedar fencing that stand up to Calgary's freeze-thaw cycles for years.",
  },
  {
    icon: "PartyPopper",
    title: "Entertainment Ready",
    description:
      "Built-in seating, lighting prep, railing options, and BBQ areas — we design decks that are perfect for hosting Calgary's best summer gatherings.",
  },
  {
    icon: "Lock",
    title: "Privacy Solutions",
    description:
      "From solid board fences to lattice-top designs, we create privacy barriers that keep your yard secluded without sacrificing style.",
  },
  {
    icon: "CloudSun",
    title: "Weather-Treated",
    description:
      "All wood components are sealed and treated to resist moisture, UV damage, warping, and insect damage in Alberta's variable climate.",
  },
  {
    icon: "FileCheck",
    title: "Permit Handling",
    description:
      "We navigate Calgary's building permit process for you, ensuring your deck or fence project meets all municipal codes and setback requirements.",
  },
];

const steps = [
  {
    icon: "Phone",
    title: "Free Consultation & Design",
    description:
      "We visit your property, discuss your vision, take measurements, and create a custom design plan with material recommendations.",
  },
  {
    icon: "Ruler",
    title: "Permits & Material Sourcing",
    description:
      "We handle all required City of Calgary permits and source the highest quality materials for your specific project.",
  },
  {
    icon: "Hammer",
    title: "Expert Construction",
    description:
      "Our skilled crews build your deck or fence with precision, following best practices for structural integrity and longevity.",
  },
  {
    icon: "ClipboardCheck",
    title: "Final Inspection & Handover",
    description:
      "We conduct a thorough walkthrough, ensure everything meets code, and hand over your new outdoor space ready to enjoy.",
  },
];

const faqs = [
  {
    question: "What decking materials do you recommend for Calgary?",
    answer:
      "For Calgary's climate, we typically recommend composite decking (like Trex or TimberTech) for low maintenance and superior weather resistance, or premium pressure-treated lumber for a natural wood look at a lower price point. Cedar is another excellent option for its natural rot resistance. We'll help you weigh the pros, cons, and costs of each during your consultation.",
  },
  {
    question: "Do I need a permit to build a deck or fence in Calgary?",
    answer:
      "In most cases, yes. The City of Calgary requires a development permit for decks over 0.6 metres (about 2 feet) above grade, and fences over 1.85 metres in the front yard or 1.85 metres in the rear. We handle the entire permit process for you, ensuring your project is fully compliant.",
  },
  {
    question: "How long does a deck or fence project typically take?",
    answer:
      "A standard fence installation can be completed in 1-3 days. A typical deck build takes 5-10 business days depending on size and complexity. Multi-level decks or those requiring extensive foundation work may take longer. We provide a detailed timeline in your project proposal.",
  },
  {
    question: "Can you build a deck or fence in winter?",
    answer:
      "We can install fences through most of the year, though frozen ground may require specialized equipment for post holes. Deck construction is best done in spring through fall when temperatures allow for proper concrete curing and material handling. We'll advise you on the best timing for your specific project.",
  },
];

export default function DecksAndFencesPage() {
  return (
    <ServicePageContent
      heroImage="/deck-fence.png"
      heroTag="Our Services"
      heroTitle={
        <>
          Custom <span className="text-[#E53935]">Decks & Fences</span> in Calgary
        </>
      }
      heroDescription="Extend your living space outdoors with beautifully crafted decks and fences from DHI Exteriors. Custom designs, durable materials, and expert construction — built for Calgary's seasons."
      benefitsTag="Why Choose Us"
      benefitsTitle={
        <>
          Built for Calgary&apos;s{" "}
          <span className="gradient-text">Outdoor Living</span>
        </>
      }
      benefits={benefits}
      serviceImage1="https://images.unsplash.com/photo-1595514535116-d3e9af43e4e4?w=800&q=80"
      serviceImage2="https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80"
      steps={steps}
      faqs={faqs}
      ctaTitle={
        <>
          Ready to Build Your{" "}
          <span className="text-white/90">Dream Outdoor Space</span>?
        </>
      }
      ctaDescription="Get a free, no-obligation quote for your deck or fence project. Let's create an outdoor space you'll love for years to come."
    />
  );
}
