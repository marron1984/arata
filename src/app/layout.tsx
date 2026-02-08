import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "やきにく 新（あらた）| 京橋・都島区の高級焼肉",
  description:
    "大阪・京橋にひっそりと佇む、大人のための焼肉店「やきにく 新」。厳選された黒毛和牛と、木の温もりに包まれた空間で、特別なひとときをお過ごしください。接待・記念日・デートに。",
  keywords: [
    "京橋 焼肉 高級",
    "都島区 接待 焼肉",
    "やきにく 新",
    "京橋 焼肉 デート",
    "大阪 高級焼肉",
    "京橋 焼肉 個室",
  ],
  openGraph: {
    title: "やきにく 新（あらた）| 京橋・都島区の高級焼肉",
    description:
      "厳選された黒毛和牛と、木の温もりに包まれた空間で、特別なひとときを。",
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
