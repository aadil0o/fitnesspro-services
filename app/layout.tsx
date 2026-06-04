import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitnessPro Services | Gym Equipment Maintenance & Repair",
  description:
    "Professional Maintenance & Repair Services for Commercial & Home Gym Equipment across KSA and Dubai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}