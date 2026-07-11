import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Fraunces,
  Manrope,
} from "next/font/google";

import "./globals.css";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Helicopter Tours & Charter in Nepal - Mountain Helicopters (Since 2009)",
  description:
    "Nepal's most experienced helicopter operator. Tours, charter, and 24/7 rescue from Kathmandu. Your safety is our priority. Since 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[72px] md:pb-0">
        {/* <Navbar /> */}

        <main className="flex-1">
          {children}
        </main>

        {/* <Footer />
        <WhatsappButton /> */}
      </body>
    </html>
  );
}