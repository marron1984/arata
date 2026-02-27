import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "京橋 焼肉 やきにく新（あらた）| タンが美味いと噂の大衆焼肉店【大阪 京橋駅徒歩5分】",
  description:
    "京橋で焼肉なら「やきにく 新（あらた）」。人気No.1の上塩タンをはじめ、黒毛和牛を中心にリーズナブルに楽しめる大衆焼肉店。京橋駅徒歩5分・大阪城北詰駅徒歩3分。全38席貸切可能。営業時間17:00〜23:00。ご予約はお電話で。",
  keywords: [
    "京橋 焼肉",
    "京橋 焼肉 おすすめ",
    "京橋 焼肉 安い",
    "京橋 焼肉 人気",
    "京橋 焼肉 デート",
    "京橋 焼肉 貸切",
    "京橋 タン",
    "京橋 大衆焼肉",
    "京橋駅 焼肉",
    "大阪 京橋 焼肉",
    "都島区 焼肉",
    "大阪城北詰 焼肉",
    "やきにく 新",
    "やきにく あらた",
    "京橋 焼肉 ランキング",
    "京橋 和牛",
  ],
  openGraph: {
    title: "京橋 焼肉 やきにく新 | タンが美味いと噂の大衆焼肉店",
    description:
      "京橋で焼肉なら「やきにく 新」。人気No.1の上塩タン、黒毛和牛をリーズナブルに。京橋駅徒歩5分。全38席貸切可能。",
    type: "website",
    locale: "ja_JP",
    siteName: "やきにく 新（あらた）",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "JP-27",
    "geo.placename": "大阪市都島区",
    "geo.position": "34.6976;135.5272",
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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "やきにく 新（あらた）",
              alternateName: "やきにく あらた",
              description:
                "京橋で焼肉なら「やきにく 新」。タンが美味いと噂の大衆焼肉店。人気No.1の上塩タンをはじめ、黒毛和牛をリーズナブルに楽しめます。",
              servesCuisine: ["焼肉", "和牛", "ホルモン"],
              priceRange: "¥3,000〜¥5,000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "東野田町1-20-16",
                addressLocality: "大阪市都島区",
                addressRegion: "大阪府",
                postalCode: "534-0024",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.6976,
                longitude: 135.5272,
              },
              telephone: "06-6809-7829",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "17:00",
                closes: "23:00",
              },
              hasMenu: {
                "@type": "Menu",
                hasMenuSection: [
                  {
                    "@type": "MenuSection",
                    name: "名物",
                    hasMenuItem: [
                      {
                        "@type": "MenuItem",
                        name: "満肉盛り合わせ",
                        offers: { "@type": "Offer", price: "3580", priceCurrency: "JPY" },
                      },
                      {
                        "@type": "MenuItem",
                        name: "和牛しゃぶロース",
                        offers: { "@type": "Offer", price: "1078", priceCurrency: "JPY" },
                      },
                    ],
                  },
                  {
                    "@type": "MenuSection",
                    name: "肉",
                    hasMenuItem: [
                      {
                        "@type": "MenuItem",
                        name: "上塩タン",
                        description: "当店人気No.1",
                        offers: { "@type": "Offer", price: "1518", priceCurrency: "JPY" },
                      },
                      {
                        "@type": "MenuItem",
                        name: "特上タン",
                        offers: { "@type": "Offer", price: "2508", priceCurrency: "JPY" },
                      },
                      {
                        "@type": "MenuItem",
                        name: "特選ハラミ",
                        offers: { "@type": "Offer", price: "2508", priceCurrency: "JPY" },
                      },
                    ],
                  },
                ],
              },
              acceptsReservations: "True",
              paymentAccepted: "Cash, Credit Card",
              numberOfEmployees: { "@type": "QuantitativeValue" },
              maximumAttendeeCapacity: 38,
              publicAccess: true,
              smokingAllowed: false,
              areaServed: {
                "@type": "City",
                name: "大阪市",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
