import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/config/brand";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.productionUrl),
  title: {
    default: "GOLDPEN GROUP Messaging Compliance",
    template: "%s | GOLDPEN GROUP Messaging Compliance",
  },
  description:
    "Privacy Policy, SMS Terms & Conditions, and SMS Consent information for GOLDPEN GROUP and the GOLDPEN Acquisition Intelligence messaging program.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
