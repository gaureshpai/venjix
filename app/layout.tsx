import type { Metadata } from "next";
import "@/public/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SessionProvider from "@/app/SessionProvider";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Venjix",
  description: "Designed and Developed by Gauresh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-Lora bg-black'>
        <SessionProvider>
          <Navbar />
          {children}
          <ContactForm />
          <Footer />
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
