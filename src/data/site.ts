export const site = {
  name: 'Reposer〜ルポゼ〜',
  tagline: '華やかさの中に、本物の安らぎを。',
  phone: '070-6605-0201',
  phoneHref: 'tel:07066050201',
  address: '宮崎県都城市',
  access: '都城駅から車で5〜8分',
  parking: '駐車場あり',
  reception: '9:30〜翌3:00',
  receptionDisplay: '9:30 — 27:00',
  receptionNote: '27:00まで受付',
  holiday: '年中無休',
  rooms: '3ルーム',
  payment: '現金・クレジットカード',
  paymentNote: 'クレジットカード決済は手数料10%を頂戴します。',
  webUrl: 'https://estama.jp/shop/49703/',
  lineUrl: 'https://line.me/ti/p/k56BRLhubq',
  title: '都城市のメンズエステ Reposer〜ルポゼ〜｜完全予約制',
  description: '宮崎県都城市のメンズエステ「Reposer〜ルポゼ〜」。華やかさの中に、本物の安らぎを。ゴージャスコース90分17,000円・120分22,000円。完全予約制、駐車場あり。電話・エステ魂・LINEからご予約いただけます。',
} as const;

export const navigation = [
  { href: '#concept', label: 'ルポゼについて', en: 'Concept' },
  { href: '#menu', label: 'メニュー・料金', en: 'Menu' },
  { href: '#space', label: 'サロンの空間', en: 'Space' },
  { href: '#access', label: '店舗情報', en: 'Information' },
] as const;

export const courses = [
  { name: 'ゴージャスコース', minutes: 90, price: 17000, rank: '人気No.1', description: '日常を離れて、心ほどけるひとときを。' },
  { name: 'ゴージャスコース', minutes: 120, price: 22000, rank: '人気No.2', description: '時間を忘れて、ゆったりと癒しに浸る。' },
] as const;

export const options = [
  { name: '極液', price: 3000, rank: '人気No.1' },
  { name: 'アロマオイル', price: 2000, rank: '人気No.2' },
] as const;
