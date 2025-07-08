import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Venjix",
  description: "A modern portfolio website showcasing Venjix’s professional video editing and filmmaking services with project galleries and a contact form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-Lora bg-black'>
          <Navbar />
          {children}
          <ContactForm />
          <Footer />
      </body>
    </html>
  );
}
