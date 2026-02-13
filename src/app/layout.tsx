import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "やきにく 新（あらた）| 大阪京橋 タンが美味いと噂の大衆焼肉店",
  description:
    "大阪京橋タンが美味いと噂の大衆焼肉店「やきにく 新」。人気No.1の上塩タンをはじめ、肉でお腹いっぱいに。無垢の温かい木の温もりに包まれた空間で、ガッツリ焼肉をお楽しみください。",
  keywords: [
    "京橋 焼肉",
    "京橋 タン",
    "都島区 焼肉",
    "やきにく 新",
    "京橋 焼肉 デート",
    "大阪 焼肉 大衆",
    "京橋 焼肉 貸切",
  ],
  openGraph: {
    title: "やきにく 新（あらた）| 大阪京橋 タンが美味いと噂の大衆焼肉店",
    description:
      "人気No.1の上塩タンをはじめ、肉でお腹いっぱいに。大阪京橋の大衆焼肉店。",
    type: "website",
    locale: "ja_JP",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Serif+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
