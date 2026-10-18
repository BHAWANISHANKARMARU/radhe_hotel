import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "@/components/ui/provider";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Radhe Hotel & Restaurant | Sridungargarh", template: "%s | Radhe Hotel & Restaurant" },
  description: "Thoughtful stays, pure vegetarian dining and warm hospitality on NH-11, Sridungargarh.",
  openGraph: { title: "Radhe Hotel & Restaurant", description: "Thoughtful stays, pure vegetarian dining and warm hospitality on NH-11, Sridungargarh.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${inter.variable}`}><body><Provider><Header />{children}<Footer /></Provider></body></html>;
}
