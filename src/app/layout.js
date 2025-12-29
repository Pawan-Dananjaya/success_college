import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. IMPORT YOUR COMPONENTS HERE
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Success International College", // Updated title
  description: "Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. ADD THEM HERE (Order matters!) */}
        <TopBar /> 
        <Navbar />
        
        {/* This renders the actual page content */}
        {children}
      </body>
    </html>
  );
}