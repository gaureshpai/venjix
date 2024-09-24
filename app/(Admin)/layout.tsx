import type { Metadata } from "next";
import "@/public/styles/globals.css";

export const metadata: Metadata = {
    title: "Venjix - Admin Pannel",
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
                {children}
            </body>
        </html>
    );
}
