import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Venjix",
  description:
    "Discover Venjix, a passionate video editor and filmmaker dedicated to transforming ideas into cinematic experiences. Explore a curated portfolio of creative projects, professional editing services, and bespoke filmmaking solutions for brands, creators, and storytellers. Connect with Venjix to elevate your visual content with expertise, artistry, and a personal touch.",
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
