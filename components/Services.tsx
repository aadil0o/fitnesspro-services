"use client";

import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  Clock3,
  Award,
} from "lucide-react";

const services = [
  {
    title: "Gym Equipment Maintenance",
    image: "/images/maintenance.jpg",
  },
  {
    title: "Installation & Assembly",
    image: "/images/installation.jpg",
  },
  {
    title: "Repair & Troubleshooting",
    image: "/images/repair.jpg",
  },
  {
    title: "Spare Parts Supply",
    image: "/images/spare-parts.jpg",
  },
  {
    title: "Preventive Maintenance Contracts",
    image: "/images/amc.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[8px] text-yellow-500 text-center mb-4">
          What We Do
        </p>

        <h2 className="text-5xl font-bold text-center mb-20">
          OUR <span className="text-yellow-500">SERVICES</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* LEFT */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative h-72 overflow-hidden rounded-2xl border border-yellow-500/20"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#101010] border border-yellow-500 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,215,0,0.15)] h-fit">
            <h3 className="text-4xl font-bold mb-10">
              Why <span className="text-yellow-500">Choose Us?</span>
            </h3>

            <Info
              icon={<ShieldCheck />}
              text="Support for all major international fitness brands"
            />

            <Info
              icon={<MapPin />}
              text="Serving clients across Saudi Arabia"
            />

            <Info
              icon={<Clock3 />}
              text="Fast Response & 24/7 Technical Support"
            />

            <Info
              icon={<Award />}
              text="Experienced & Certified Technicians"
            />

            <a
              href="https://wa.me/966539465815"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-10 bg-yellow-500 text-black rounded-xl py-4 text-center font-bold hover:bg-yellow-400 transition"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-center py-5 border-b border-yellow-500/20">
      <div className="text-yellow-500">{icon}</div>

      <p className="text-gray-300">{text}</p>
    </div>
  );
}