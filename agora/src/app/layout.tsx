import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agora — A Dartmouth space for AI and the future of education",
  description:
    "Agora is a collaborative center at Dartmouth College where students and faculty think critically about how AI fits into the future of learning.",
  openGraph: {
    title: "Agora at Dartmouth",
    description:
      "A space at Dartmouth for the ongoing conversation about AI and the future of education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-warm-white font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
