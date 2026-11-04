import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAG Consult | Profitable Poultry & Swine Farming",
  description:
    "KAG Consult specializes in poultry and swine farming and nutrition: farm setup and management, expert guidance, custom feed formulation and animal health optimization. KNUST-Apemso, Ghana.",
  keywords: [
    "poultry farming Ghana",
    "swine farming",
    "feed formulation",
    "animal nutrition",
    "KAG Consult",
    "Kumasi",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
