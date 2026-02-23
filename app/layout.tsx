import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IAAAACAME - International Association of African American Ambassadors to Africa",
  description: "Empowering African Communities Through Education & Development. Building bridges between Africa and the Diaspora.",
  keywords: ["Africa", "Education", "Development", "NGO", "Community", "Empowerment"],
  authors: [{ name: "IAAAACAME" }],
  openGraph: {
    title: "IAAAACAME - Empowering African Communities",
    description: "Building bridges between Africa and the Diaspora through education and development",
    type: "website",
  },
};

// Force fresh build
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
