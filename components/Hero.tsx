"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          FitnessPro
          <span className="gold-text"> Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Professional Maintenance & Repair Services for Commercial & Home Gym
          Equipment across Saudi Arabia.
        </motion.p>

        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
          >
            Request Service
          </a>

          <a
            href="https://wa.me/966539465815"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-500 px-8 py-4 rounded-xl"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}