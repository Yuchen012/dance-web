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
  title: "Studio Anne | 山梨県甲府市のスタジオ",
  description: "ジャズダンス・ピラティス・モダンバレエ入門！音楽にのって楽しく身体を動かしながら体力・筋力・柔軟性・バランス感覚の向上を目指します。ピラティスでは美しい姿勢、しっかりした体幹を！",
  openGraph: {
    title: "Studio Anne | 山梨県甲府市のスタジオ",
    description: "ジャズダンス・ピラティス・モダンバレエ入門！音楽にのって楽しく身体を動かしながら体力・筋力・柔軟性・バランス感覚の向上を目指します。ピラティスでは美しい姿勢、しっかりした体幹を！",
    type: "website",
    url: "https://studio-anne.net",
  },
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
