"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const serviceOptions = [
  "Exterior Painting",
  "Interior Painting",
  "Doors & Windows",
  "Decks & Fences",
  "Siding & Eaves",
  "Basement Development",
  "General Consultation",
];

const expectations = [
  "A thorough assessment of your property and project scope",
  "A detailed written estimate with transparent pricing",
  "Expert recommendations tailored to your needs and budget",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  // Convert Sunday=0 to Monday-based: Mon=0, Tue=1, ..., Sun=6
  return day === 0 ? 6 : day - 1;
}

function isSunday(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay() === 0;
}

function isPast(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(year, month, day);
  return date < today;
}

function isToday(year: number, month: number, day: number) {
  const today = new Date();
  return (
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day
  );
}

export default function BookingPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime("");
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime("");
  };

  const canGoBack =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canSubmit = selectedDate && selectedTime && selectedService && name && phone && email;

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FAFAF8] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center pt-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C62828]/15 mb-8">
            <CheckCircle className="w-10 h-10 text-[#C62828]" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1F2E] mb-6">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-[#4A5568] mb-4">
            We&apos;ll send a confirmation to your email.
          </p>
          <div className="bg-white rounded-2xl p-6 border border-black/[0.06] inline-block text-left mb-10">
            <div className="space-y-3 text-[#4A5568]">
              <p>
                <span className="text-[#9CA3AF]">Date:</span>{" "}
                <span className="text-[#1A1F2E] font-medium">
                  {new Date(currentYear, currentMonth, selectedDate!).toLocaleDateString(
                    "en-CA",
                    { weekday: "long", month: "long", day: "numeric", year: "numeric" }
                  )}
                </span>
              </p>
              <p>
                <span className="text-[#9CA3AF]">Time:</span>{" "}
                <span className="text-[#1A1F2E] font-medium">{selectedTime}</span>
              </p>
              <p>
                <span className="text-[#9CA3AF]">Service:</span>{" "}
                <span className="text-[#1A1F2E] font-medium">{selectedService}</span>
              </p>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C62828] text-white font-semibold rounded-lg hover:bg-[#C62828]/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] py-20 px-4">
      <div className="max-w-7xl mx-auto pt-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C62828]/30 bg-[#C62828]/10 mb-6">
            <Calendar className="w-4 h-4 text-[#C62828]" />
            <span className="text-[#C62828] text-sm font-medium">Book Now</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1F2E] mb-4">
            Book a Consultation
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Schedule a free in-home estimate with our experienced team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Calendar */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/[0.06]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#1A1F2E] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C62828]" />
                  Select a Date
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoBack}
                    className="w-10 h-10 rounded-lg border border-black/[0.08] flex items-center justify-center text-[#6B7280] hover:border-black/[0.12] hover:text-[#1A1F2E] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-[#1A1F2E] font-medium min-w-[160px] text-center">
                    {monthName}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="w-10 h-10 rounded-lg border border-black/[0.08] flex items-center justify-center text-[#6B7280] hover:border-black/[0.12] hover:text-[#1A1F2E] transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-[#9CA3AF] py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for offset */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {/* Day cells */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const disabled =
                    isPast(currentYear, currentMonth, day) ||
                    isSunday(currentYear, currentMonth, day);
                  const todayHighlight = isToday(currentYear, currentMonth, day);
                  const selected = selectedDate === day;

                  return (
                    <button
                      key={day}
                      disabled={disabled}
                      onClick={() => {
                        setSelectedDate(day);
                        setSelectedTime("");
                      }}
                      className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                        disabled
                          ? "text-[#D1D5DB] cursor-not-allowed"
                          : selected
                          ? "bg-[#C62828] text-white shadow-lg shadow-[#C62828]/20"
                          : todayHighlight
                          ? "bg-[#8E712F]/15 text-[#8E712F] border border-[#8E712F]/20 hover:bg-[#8E712F]/20"
                          : "text-[#4A5568] hover:bg-black/[0.03]"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-black/[0.06]">
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <div className="w-3 h-3 rounded bg-[#8E712F]/15 border border-[#8E712F]/20" />
                  Today
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <div className="w-3 h-3 rounded bg-[#C62828]" />
                  Selected
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <div className="w-3 h-3 rounded bg-black/[0.04]" />
                  Unavailable
                </div>
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/[0.06]">
                <h2 className="text-xl font-semibold text-[#1A1F2E] flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-[#C62828]" />
                  Select a Time
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedTime === slot
                          ? "bg-[#C62828] text-white shadow-lg shadow-[#C62828]/20"
                          : "bg-[#F5F3EE] border border-black/[0.08] text-[#6B7280] hover:border-[#C62828]/30 hover:text-[#1A1F2E]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Service & Contact Form */}
            {selectedDate && selectedTime && (
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/[0.06]">
                <h2 className="text-xl font-semibold text-[#1A1F2E] mb-6">
                  Your Details
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4A5568] mb-2">
                      Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] focus:outline-none focus:border-[#C62828] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
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
                    <label className="block text-sm font-medium text-[#4A5568] mb-2">
                      Additional Notes{" "}
                      <span className="text-[#9CA3AF]">(optional)</span>
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Anything else we should know..."
                      className="w-full px-4 py-3 bg-[#F5F3EE] border border-black/[0.08] rounded-xl text-[#1A1F2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C62828] transition-colors resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#8E712F] to-[#C62828] text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Side Info */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl p-8 border border-black/[0.06] sticky top-32 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1F2E] mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C62828] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#1A1F2E] font-medium">Service Area</p>
                      <p className="text-sm text-[#6B7280]">
                        Calgary, AB &amp; Surrounding Areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C62828] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#1A1F2E] font-medium">Phone</p>
                      <a
                        href="tel:587-575-4832"
                        className="text-sm text-[#8E712F] hover:text-[#8E712F]/80 transition-colors"
                      >
                        587-575-4832
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C62828] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#1A1F2E] font-medium">Email</p>
                      <a
                        href="mailto:clarence@dhiexteriors.com"
                        className="text-sm text-[#8E712F] hover:text-[#8E712F]/80 transition-colors"
                      >
                        clarence@dhiexteriors.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="pt-6 border-t border-black/[0.06]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1F2E] mb-5">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {expectations.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C62828]/10 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-[#C62828]" />
                      </div>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="pt-6 border-t border-black/[0.06]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1F2E] mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Monday - Friday</span>
                    <span className="text-[#1A1F2E]">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Saturday</span>
                    <span className="text-[#1A1F2E]">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Sunday</span>
                    <span className="text-[#9CA3AF]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
