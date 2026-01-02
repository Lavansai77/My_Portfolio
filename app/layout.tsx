import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bandari Lavan Sai | Portfolio",
  description:
    "Portfolio of Bandari Lavan Sai — MERN stack developer and CSE student. Projects in React, Node.js, Express, MongoDB, plus AI/data learning.",
  openGraph: {
    title: "Bandari Lavan Sai | Portfolio",
    description:
      "MERN stack developer building responsive web apps with clean UX and reliable APIs.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-slate-100">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}