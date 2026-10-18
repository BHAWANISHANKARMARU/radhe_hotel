import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "@/components/ui/provider";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", weight: ["400", "500", "600"] });
const interfaceFont = Manrope({ subsets: ["latin"], variable: "--font-interface" });

export const metadata: Metadata = {
  title: { default: "Radhe Hotel & Restaurant | Sridungargarh", template: "%s | Radhe Hotel & Restaurant" },
  description: "Stay warmly, dine traditionally and celebrate beautifully at Radhe Hotel & Restaurant.",
  openGraph: { title: "Radhe Hotel & Restaurant", description: "Thoughtful stays, pure vegetarian dining and warm hospitality on NH-11, Sridungargarh.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${editorial.variable} ${interfaceFont.variable}`}><body><Provider><Header />{children}<Footer /></Provider></body></html>;
}
