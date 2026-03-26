import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-crimson_text",
});

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: "Dr. Sarah Alice Taylor Morrow",
  description: "Celebration of life for Dr. Sarah Morrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          crimson_text.variable
        )}
      >
        {children}
        <Script defer src="https://analytics.lacy.sh/script.js" data-website-id="9cd6bdd2-7fab-4a29-80c0-355ee514e28f" />
      </body>
    </html>
  );
}
