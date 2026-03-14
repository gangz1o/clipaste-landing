export const FAQS_EN = [
  {
    title: "What is Clipaste?",
    content:
      "Clipaste is a high-performance clipboard manager for Mac that outperforms popular alternatives like PasteNow and Paste. It offers lightning-fast clipboard access, intelligent history management, and seamless landscape/portrait mode switching.",
  },
  {
    title: "How is Clipaste faster than PasteNow and Paste?",
    content:
      "Clipaste is built with a focus on performance optimization, utilizing efficient data structures and caching mechanisms to ensure minimal latency. Our benchmarks show significantly faster clipboard access times compared to other popular clipboard tools.",
  },
  {
    title: "Does Clipaste support both landscape and portrait modes?",
    content:
      "Yes! Clipaste supports seamless switching between landscape and portrait modes, making it perfect for any workflow. Whether you're using a horizontal or vertical monitor setup, Clipaste adapts to your needs.",
  },
  {
    title: "Is my clipboard data secure?",
    content:
      "Absolutely. Clipaste prioritizes your privacy. Your data stays on your device by default. If you choose to use cloud sync, we use end-to-end encryption to protect your data.",
  },
  {
    title: "Does Clipaste require a subscription?",
    content:
      "No, Clipaste is a one-time purchase with no subscription fees. You get lifetime access to all features and free updates.",
  },
  {
    title: "How do I get started with Clipaste?",
    content:
      "Simply download Clipaste from our website, install it on your Mac, and start using it immediately. No complex setup required!",
  },
  {
    title: "Can I sync my clipboard across devices?",
    content:
      "Yes! Clipaste offers cloud sync functionality that allows you to access your clipboard history across all your Mac devices.",
  },
  {
    title: "Is there a free trial?",
    content:
      "Yes, we offer a free trial so you can experience the performance difference yourself before purchasing.",
  },
];

export const FAQS_ZH = [
  {
    title: "什么是 Clipaste？",
    content:
      "Clipaste 是一款高性能的 Mac 剪贴板管理器，比 PasteNow 和 Paste 等流行工具更快。它提供闪电般的剪贴板访问、智能历史记录管理和无缝的横版竖版切换功能。",
  },
  {
    title: "Clipaste 为什么比 PasteNow 和 Paste 更快？",
    content:
      "Clipaste 采用性能优化为核心的开发理念，使用高效的数据结构和缓存机制确保最低延迟。我们的基准测试显示，与其他流行的剪贴板工具相比，剪贴板访问时间显著更快。",
  },
  {
    title: "Clipaste 支持横版和竖版模式吗？",
    content:
      "完全支持！Clipaste 支持横版和竖版之间的无缝切换，非常适合任何工作流程。无论您使用水平还是垂直显示器设置，Clipaste 都能适应您的需求。",
  },
  {
    title: "我的剪贴板数据安全吗？",
    content:
      "完全安全。Clipaste 优先考虑您的隐私。您的数据默认保存在您的设备上。如果您选择使用云同步，我们使用端到端加密来保护您的数据。",
  },
  {
    title: "Clipaste 需要订阅吗？",
    content:
      "不需要，Clipaste 是一次性购买，没有订阅费用。您可以终身使用所有功能并获得免费更新。",
  },
  {
    title: "如何开始使用 Clipaste？",
    content:
      "只需从我们的网站下载 Clipaste，安装在您的 Mac 上，即可立即使用。无需复杂设置！",
  },
  {
    title: "我可以跨设备同步剪贴板吗？",
    content:
      "可以！Clipaste 提供云同步功能，让您可以在所有 Mac 设备上访问剪贴板历史。",
  },
  {
    title: "有免费试用吗？",
    content:
      "有，我们提供免费试用，让您在购买前亲身体验性能差异。",
  },
];

export const FAQS_JA = [
  {
    title: "Clipaste とは？",
    content: "Clipasteは、PasteNowやPasteよりも高速な、高性能なMac用クリップボードマネージャーです。",
  },
];

export const FAQS_AR = [
  {
    title: "ما هو Clipaste؟",
    content: "Clipaste هو مدير الحافظة عالي الأداء لـ Mac والذي يتفوق على البدائل الشائعة مثل PasteNow و Paste.",
  },
];

export const FAQS_ES = [
  {
    title: "¿Qué es Clipaste?",
    content: "Clipaste es un gestor de portapapeles de alto rendimiento para Mac que supera a alternativas populares como PasteNow y Paste.",
  },
];

export const FAQS_RU = [
  {
    title: "Что такое Clipaste?",
    content: "Clipaste — это высокопроизводительный менеджер буфера обмена для Mac.",
  },
];

interface FAQSCollection {
  [key: `FAQS_${string}`]: Array<{ title: string; content: string }>;
}

export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
  FAQS_JA,
  FAQS_AR,
  FAQS_ES,
  FAQS_RU
}
