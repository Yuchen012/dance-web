import type { Metadata } from "next";
import "./globals.css";

// Google Fonts は next/font でビルド時に取得すると Vercel のビルドで
// リクエストが失敗することがあるため、ブラウザ側で読み込む
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Dancing+Script:wght@600&display=swap";

export const metadata: Metadata = {
  title: "Studio Anne | 甲府市のピラティス・ダンス・バレエ教室",
  description:
    "何歳になっても自分らしく動ける身体を。山梨県甲府市小瀬町のStudio Anneでは、ピラティス・ダンス（ジャズダンス）・バレエ（モダンバレエ）を通して、幼児からシニアまですべての世代の健康を身体づくりから応援します。親子クラス・パーソナルレッスンもあります。",
  openGraph: {
    title: "Studio Anne | 甲府市のピラティス・ダンス・バレエ教室",
    description:
      "何歳になっても自分らしく動ける身体を。山梨県甲府市小瀬町のStudio Anneでは、ピラティス・ダンス（ジャズダンス）・バレエ（モダンバレエ）を通して、幼児からシニアまですべての世代の健康を身体づくりから応援します。親子クラス・パーソナルレッスンもあります。",
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
