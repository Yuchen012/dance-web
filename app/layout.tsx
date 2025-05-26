import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Anne | ジャズダンス・ピラティス・モダンバレエ入門！",
  description: "山梨県甲府市にあるスタジオです。音楽にのって楽しく身体を動かしながら体力・筋力・柔軟性・バランス感覚の向上を目指します。ピラティスでは美しい姿勢、しっかりした体幹を！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
