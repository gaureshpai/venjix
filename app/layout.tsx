import type { Metadata } from "next";
import "@/public/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SessionProvider from "@/app/SessionProvider";

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
      <body className='font-Lora'>
        <SessionProvider>
          <Navbar />
          {children}
          <ContactForm />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
