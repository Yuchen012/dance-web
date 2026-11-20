import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shippori = Shippori_Mincho({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Anne | 山梨県甲府市のダンススタジオ",
  description:
    "ジャズダンス・ピラティス・モダンバレエ入門！音楽にのって楽しく身体を動かしながら体力・筋力・柔軟性・バランス感覚の向上を目指します。ピラティスでは美しい姿勢、しっかりした体幹を！",
  openGraph: {
    title: "Studio Anne | 山梨県甲府市のダンススタジオ",
    description:
      "ジャズダンス・ピラティス・モダンバレエ入門！音楽にのって楽しく身体を動かしながら体力・筋力・柔軟性・バランス感覚の向上を目指します。ピラティスでは美しい姿勢、しっかりした体幹を！",
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
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${shippori.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
