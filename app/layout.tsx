import type { Metadata } from "next";
import "@/public/styles/globals.css";
import SessionProvider from "@/app/SessionProvider";
// import { Analytics } from "@vercel/analytics/react"

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
          {children}
          {/* <Analytics /> */}
        </SessionProvider>
      </body>
    </html>
  );
}
