import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roseware Integrations",
  description: "Where Portland craftmanship meets everyday business solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <Navbar />
          <main className="min-h-custom">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
