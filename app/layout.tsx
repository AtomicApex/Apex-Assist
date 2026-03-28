import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Assist — Personal help in Brighton, VIC",
  description:
    "Friendly local assistance for busy families near Dendy Street, Brighton. Organisation, tutoring, tech help, gardening, and pet & house help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={outfit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
