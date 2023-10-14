import "./globals.css";
import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { AuthProvider } from "@/components/auth/AuthContext";

const yrsa = Geologica({ subsets: ["latin"] });
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
      <body className={`${yrsa.className} tracking-tighter`}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-custom">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
