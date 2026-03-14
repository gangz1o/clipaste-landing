import { LucideIcon, Smartphone, Clock, Cloud, Shield, Trophy, ArrowRight } from "lucide-react";
import { IconType } from "react-icons";

export const FEATURES_EN = [
  {
    title: "🚀 3-5x Faster Than Competitors",
    content: "Our benchmark tests show Clipaste is 3-5x faster than PasteNow and Paste. Lightning-fast clipboard access with minimal latency.",
    icon: Trophy,
  },
  {
    title: "横版竖版无缝切换",
    content: "Seamlessly switch between landscape and portrait modes. Perfect for any workflow and screen orientation.",
    icon: Smartphone,
  },
  {
    title: "智能历史记录",
    content: "Intelligent clipboard history that learns from your usage patterns. Never lose important content again.",
    icon: Clock,
  },
  {
    title: "云端同步",
    content: "Sync your clipboard across all your devices. Access your clipboard history anywhere, anytime.",
    icon: Cloud,
  },
  {
    title: "隐私优先",
    content: "Your data stays on your device. Optional cloud sync with end-to-end encryption.",
    icon: Shield,
  },
  {
    title: "一次付费终身使用",
    content: "One-time payment, no subscription. Compare to Paste's $29.99/year. Pay less, get more.",
    icon: ArrowRight,
  },
];

export const FEATURES_ZH = [
  {
    title: "🚀 速度远超竞品 3-5 倍",
    content: "我们的基准测试显示，Clipaste 比 PasteNow 和 Paste 快 3-5 倍。闪电般的剪贴板访问，极低延迟体验。",
    icon: Trophy,
  },
  {
    title: "横版竖版无缝切换",
    content: "支持横版和竖版无缝切换。完美适应任何工作流程和屏幕方向。",
    icon: Smartphone,
  },
  {
    title: "智能历史记录",
    content: "智能剪贴板历史记录，学习你的使用习惯。再也不会丢失重要内容。",
    icon: Clock,
  },
  {
    title: "云端同步",
    content: "跨设备同步剪贴板。随时随地访问你的剪贴板历史。",
    icon: Cloud,
  },
  {
    title: "隐私优先",
    content: "你的数据只保存在你的设备上。可选的云同步采用端到端加密。",
    icon: Shield,
  },
  {
    title: "一次付费终身使用",
    content: "一次性付款，无需订阅。对比 Paste 的 $29.99/年，付费更少，享受更多。",
    icon: ArrowRight,
  },
];

export const FEATURES_JA = [
  { title: "🚀 競合より3-5倍高速", content: "ClipasteはPasteNowやPasteより3-5倍高速です。", icon: Trophy },
  { title: "横版・縦版シームレス切替", content: "横版と縦版をシームレスに切り替え。", icon: Smartphone },
  { title: "スマート履歴", content: "使用パターンを学習するインテリジェントなクリップボード履歴。", icon: Clock },
  { title: "クラウド同期", content: "すべてのデバイスでクリップボードを同期。", icon: Cloud },
  { title: "プライバシー優先", content: "データはデバイス上に保持。オプションのクラウド同期はエンドツーエンド暗号化。", icon: Shield },
  { title: "一回限りの支払い", content: "月額料金なし。Pasteの年間$29.99と比較。", icon: ArrowRight },
];

export const FEATURES_AR = [
  { title: "🚀 3-5x أسرع من المنافسين", content: "Clipaste أسرع بـ 3-5 مرات من PasteNow و Paste.", icon: Trophy },
  { title: "تبديل سلس بين الأفقي والعمودي", content: "قم بالتبديل بين الوضع الأفقي والعمودي بسلاسة.", icon: Smartphone },
  { title: "سجل ذكي", content: "سجل الحافظة الذكي الذي يتعلم من أنماط الاستخدام.", icon: Clock },
  { title: "مزامنة سحابية", content: "مزامنة الحافظة عبر جميع أجهزتك.", icon: Cloud },
  { title: "الخصوصية أولاً", content: "بياناتك تظل على جهازك.", icon: Shield },
  { title: "دفعة واحدة", content: "لا توجد رسوم شهرية مثل Paste.", icon: ArrowRight },
];

export const FEATURES_ES = [
  { title: "🚀 3-5x más rápido que competidores", content: "Clipaste es 3-5 veces más rápido que PasteNow y Paste.", icon: Trophy },
  { title: "Cambio fluido entre horizontal y vertical", content: "Cambia entre modos horizontal y vertical sin problemas.", icon: Smartphone },
  { title: "Historial inteligente", content: "Historial de portapapeles inteligente que aprende de tu uso.", icon: Clock },
  { title: "Sincronización en la nube", content: "Sincroniza tu portapapeles entre todos tus dispositivos.", icon: Cloud },
  { title: "Privacidad primero", content: "Tus datos permanecen en tu dispositivo.", icon: Shield },
  { title: "Pago único", content: "Sin tarifas mensuales como Paste.", icon: ArrowRight },
];

export const FEATURES_RU = [
  { title: "🚀 В 3-5 раз быстрее конкурентов", content: "Clipaste в 3-5 раз быстрее, чем PasteNow и Paste.", icon: Trophy },
  { title: "Плавное переключение между горизонтальным и вертикальным", content: "Переключайтесь между горизонтальным и вертикальным режимами без проблем.", icon: Smartphone },
  { title: "Умная история", content: "Интеллектуальная история буфера обмена, которая учится на вашем использовании.", icon: Clock },
  { title: "Облачная синхронизация", content: "Синхронизируйте буфер обмена между всеми устройствами.", icon: Cloud },
  { title: "Конфиденциальность прежде всего", content: "Ваши данные остаются на вашем устройстве.", icon: Shield },
  { title: "Единовременная оплата", content: "Без ежемесячной платы как у Paste.", icon: ArrowRight },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: Array<{ title: string; content: string; icon: IconType | LucideIcon | string }>;
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
  FEATURES_JA,
  FEATURES_AR,
  FEATURES_ES,
  FEATURES_RU
}
