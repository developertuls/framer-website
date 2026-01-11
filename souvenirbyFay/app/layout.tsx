
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LanguageProvider} from "@/context/LanguageContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souvenir by Fay",
  description: "Luxury handmade resin art crafted with care and faith.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
      {/* 🌍 GLOBAL PROVIDERS */}
      <LanguageProvider>
     <CurrencyProvider>
     
    
     
            <Navbar />
            {children}
            <Footer />
    
     </CurrencyProvider>
     </LanguageProvider>
      </body>
    </html>
  );
}
