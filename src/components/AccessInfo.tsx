"use client";

import { motion } from "framer-motion";

const infoItems = [
  { label: "店名", value: "やきにく 新（あらた）" },
  { label: "住所", value: "大阪府大阪市都島区東野田町1-20-16" },
  { label: "電話", value: "06-6809-7829", href: "tel:06-6809-7829" },
  {
    label: "営業時間",
    value: "17:00〜23:00（L.O 22:30）",
  },
  { label: "定休日", value: "水曜日" },
  { label: "アクセス", value: "京橋駅より徒歩5分 / 大阪城北詰駅より徒歩3分" },
  { label: "席数", value: "全20席（完全個室あり）" },
  { label: "お支払い", value: "現金 / クレジットカード各種" },
];

export default function AccessInfo() {
  return (
    <section
      id="access"
      className="relative py-32 md:py-40 bg-walnut-dark/20"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-gold/50 text-xs tracking-[0.5em] uppercase">
            Access
          </span>
          <h2 className="text-gold text-3xl md:text-4xl font-semibold mt-4 tracking-[0.2em]">
            ご案内
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Info list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-4 border-b border-walnut/20"
                >
                  <span className="text-gold/60 text-xs tracking-[0.2em] min-w-[80px] pt-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-washi/70 text-sm tracking-wider hover:text-gold transition-colors duration-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-washi/70 text-sm tracking-wider">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-washi/30 text-xs mt-8 tracking-wider leading-relaxed">
              ※ 22時以降のご来店は事前にご予約・ご連絡をお願いいたします
              <br />※ ノーゲスト・ノーリザーブの場合、22時に閉店する場合がございます
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden border border-walnut/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5!2d135.5272!3d34.6976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5aSn6Ziq5bqc5aSn6Ziq5biC6YO95bO25Yy65p2x6YeO55Sw55S6MS0yMC0xNg!5e0!3m2!1sja!2sjp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="やきにく 新 地図"
              />
            </div>

            {/* CTA below map */}
            <div className="mt-8 text-center">
              <a
                href="https://tabelog.com/osaka/A2701/A270107/27151551/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gold/10 border border-gold/40 text-gold text-sm tracking-[0.2em] hover:bg-gold/20 hover:border-gold/60 transition-all duration-500"
              >
                食べログで予約する
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
