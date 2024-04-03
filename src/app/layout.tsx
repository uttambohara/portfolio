import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";

const inter = M_PLUS_1p({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Uttam Bohara",
  description: "Portfolio site of Uttam Bohara. | me",
  icons: {
    icon: "/uttam.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
