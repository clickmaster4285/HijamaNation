import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hijama Course and Cupping Therapy in the UK | Hijama Nation",
    template: "%s | Hijama Nation",
  },
  description: "Hijama Nation is a platform for those who want to join a Hijama course, book cupping therapy, or connect with certified practitioners for clear guidance, safe practice, and trusted support.",
  icons: {
    icon: "/images/Hijamalogo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
