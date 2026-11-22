import type { Metadata } from "next";
import "./globals.css";

// Google Fonts は next/font でビルド時に取得すると Vercel のビルドで
// リクエストが失敗することがあるため、ブラウザ側で読み込む
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Dancing+Script:wght@600&display=swap";

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
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
