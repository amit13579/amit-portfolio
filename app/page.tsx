"use client";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Download, Briefcase, Award, Terminal, Mail, Linkedin } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [activeExp, setActiveExp] = useState<number | null>(0);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 sm:px-12 max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
      
      {/* HERO SECTION */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeUp}
        className="flex flex-col items-start gap-6 relative"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Available for Full-Time Roles
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking
