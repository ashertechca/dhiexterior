"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 500);
  });

  return (
    <motion.div
      initial={false}
      animate={visible ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 pointer-events-none"
    >
      <Link
        href="/quote"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#C62828] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#C62828]/30 backdrop-blur-sm"
      >
        Get Your Free Quote
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
