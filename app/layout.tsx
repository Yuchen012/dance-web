import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// 日本語フォントはファイル数が非常に多く、next/font でビルド時に取得すると
// Vercel のビルドで Google Fonts へのリクエストが失敗するため、ブラウザ側で読み込む
const JP_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Shippori+Mincho:wght@500;600;700&display=swap";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={JP_FONTS_URL} />
      </head>
      <body className={`${cormorant.variable} antialiased`}>{children}</body>
    </html>
  );
}
