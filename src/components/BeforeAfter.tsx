"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  className?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt,
  className = "",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setPosition((p) => Math.max(0, p - 2));
      if (e.key === "ArrowRight")
        setPosition((p) => Math.min(100, p + 2));
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={`relative select-none cursor-col-resize overflow-hidden rounded-xl ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After image (full width, behind) */}
      <div className="relative aspect-[16/10] w-full">
        <Image src={afterSrc} alt={`${alt} - after`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={`${alt} - before`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
        {afterLabel}
      </div>
    </div>
  );
}
