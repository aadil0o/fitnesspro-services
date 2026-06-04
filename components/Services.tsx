"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Treadmill Repair",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  },
  {
    title: "Cross Trainer Service",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200",
  },
  {
    title: "Exercise Bike Maintenance",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
  },
  {
    title: "Gym Equipment Installation",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200",
  },
  {
    title: "AMC Maintenance Contracts",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200",
  },
  {
    title: "Spare Parts Replacement",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
    >
      <div className="container-custom">

        <h2 className="text-4xl md:text-5xl font-bold text-center gold-text mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
  key={index}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="overflow-hidden bg-[#111111] border border-yellow-600/20 rounded-2xl"
>
  <img
    src={service.image}
    alt={service.title}
    className="h-56 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-xl font-semibold mb-4">
      {service.title}
    </h3>

    <p className="text-gray-400">
      Professional servicing performed by trained
      technicians using quality tools and parts.
    </p>
  </div>
</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}