// src/app/(website)/layout.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
      <WhatsappButton />
    </>
  );
}