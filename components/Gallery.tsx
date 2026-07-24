"use client";

import Image from "next/image";

const gallery = [
  "/images/gallery1.jpg",
  "/images/maintenance.jpg",
  "/images/installation.jpg",
  "/images/repair.jpg",
  "/images/spare-parts.jpg",
  "/images/amc.jpg",
];

export default function Gallery() {
  return (
    <section className="py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-yellow-500 text-center">
          Our Work
        </p>

        <h2 className="text-5xl font-bold text-center mb-16">
          Repair <span className="text-yellow-500">Gallery</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map((img) => (
            <div
              key={img}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt="FitnessPro Services"
                width={800}
                height={600}
                className="w-full h-72 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}