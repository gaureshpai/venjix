import type { Metadata } from "next";
import "@/public/styles/globals.css";
import SessionProvider from "@/app/SessionProvider";
// import { Analytics } from "@vercel/analytics/react"

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
        <SessionProvider>
          {children}
          {/* <Analytics /> */}
        </SessionProvider>
      </body>
    </html>
  );
}
