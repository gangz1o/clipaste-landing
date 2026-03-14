import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Trial",
    price: "Free",
    href: "#download",
    description:
      "Try Clipaste free for 7 days. Experience the ultimate clipboard performance.",
    features: [
      "7-day free trial",
      "Full features access",
      "No credit card required",
      "Mac only",
    ],
    buttonText: "Start Free Trial",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Lifetime",
    href: "#download",
    description: "One-time payment, lifetime use. Own Clipaste forever.",
    price: "$19",
    features: [
      "One-time payment",
      "Lifetime updates",
      "All future features",
      "Priority support",
      "Mac only",
    ],
    buttonText: "Buy Now",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "试用版",
    price: "免费",
    href: "#download",
    description: "免费试用 7 天。体验极致的剪贴板性能。",
    features: [
      "7天免费试用",
      "全部功能访问",
      "无需信用卡",
      "仅支持 Mac",
    ],
    buttonText: "开始免费试用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "终身版",
    href: "#download",
    description: "一次性付款，终身使用。",
    price: "¥99",
    features: [
      "一次性付款",
      "终身免费更新",
      "所有未来功能",
      "优先支持",
      "仅支持 Mac",
    ],
    buttonText: "立即购买",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "試用版",
    price: "無料",
    href: "#download",
    description: "7日間無料お試し。究極のクリップボードパフォーマンスを体験。",
    features: [
      "7日間無料試用",
      "全機能へのアクセス",
      "クレジットカード不要",
      "Macのみ",
    ],
    buttonText: "無料試用を開始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "生涯版",
    href: "#download",
    description: "一回限りの支払い。Clipasteを一生中使用。",
    price: "$19",
    features: [
      "一回限りの支払い",
      "生涯無料更新",
      "すべての将来機能",
      "優先サポート",
      "Macのみ",
    ],
    buttonText: "今すぐ購入",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "تجربة مجانية",
    price: "مجاناً",
    href: "#download",
    description: "جرب Clipaste مجاناً لمدة 7 أيام. استمتع بأداء الحافظة النهائي.",
    features: [
      "تجربة مجانية 7 أيام",
      "الوصول إلى جميع الميزات",
      "لا حاجة لبطاقة ائتمان",
      "Mac فقط",
    ],
    buttonText: "ابدأ التجربة المجانية",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "مدى الحياة",
    href: "#download",
    description: "دفعة واحدة، استخدام مدى الحياة. امتلك Clipaste للأبد.",
    price: "$19",
    features: [
      "دفعة واحدة",
      "تحديثات مدى الحياة",
      "جميع الميزات المستقبلية",
      "دعم أولوية",
      "Mac فقط",
    ],
    buttonText: "اشترِ الآن",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Prueba gratis",
    price: "Gratis",
    href: "#download",
    description: "Prueba Clipaste gratis durante 7 días. Experimenta el rendimiento definitivo del portapapeles.",
    features: [
      "Prueba gratuita de 7 días",
      "Acceso a todas las funciones",
      "Sin tarjeta de crédito",
      "Solo Mac",
    ],
    buttonText: "Iniciar prueba gratis",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Permanente",
    href: "#download",
    description: "Pago único, uso de por vida. Ten Clipaste para siempre.",
    price: "$19",
    features: [
      "Pago único",
      "Actualizaciones de por vida",
      "Todas las funciones futuras",
      "Soporte prioritario",
      "Solo Mac",
    ],
    buttonText: "Comprar ahora",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Бесплатная пробная версия",
    price: "Бесплатно",
    href: "#download",
    description: "Попробуйте Clipaste бесплатно в течение 7 дней. Оцените максимальную производительность буфера обмена.",
    features: [
      "Бесплатный пробный период 7 дней",
      "Полный доступ к функциям",
      "Кредитная карта не требуется",
      "Только для Mac",
    ],
    buttonText: "Начать бесплатную пробную версию",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Пожизненная версия",
    href: "#download",
    description: "Единовременная оплата, пожизненное использование. Получите Clipaste навсегда.",
    price: "$19",
    features: [
      "Единовременная оплата",
      "Пожизненные обновления",
      "Все будущие функции",
      "Приоритетная поддержка",
      "Только для Mac",
    ],
    buttonText: "Купить сейчас",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}
