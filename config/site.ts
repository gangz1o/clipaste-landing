import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const baseSiteConfig = {
  name: "Clipaste - 极致性能的剪贴板工具",
  description:
    "比 PasteNow 和 Paste 性能更高的剪贴板工具，支持横版竖版切换，让你的工作效率翻倍。",
  url: "https://clipaste.app",
  ogImage: "https://clipaste.app/og.png",
  metadataBase: '/',
  keywords: ["clipaste", "clipboard", "paste tool", "mac clipboard", "clipboard manager"],
  authors: [
    {
      name: "Clipaste",
      url: "https://clipaste.app",
      twitter: 'https://twitter.com/clipaste',
    }
  ],
  creator: '@clipaste',
  openSourceURL: 'https://github.com/clipaste/clipaste',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: '下载', href: '#download', icon: BsGithub },
    { name: '特性', href: '#features', icon: BsGithub },
    { name: '常见问题', href: '#faq', icon: BsGithub },
  ],
  footerLinks: [
    { name: 'email', href: "mailto:hello@clipaste.app", icon: MdEmail },
    { name: 'github', href: "https://github.com/clipaste/clipaste", icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/clipaste", icon: BsTwitterX },
  ],
  footerProducts: [
    { url: 'https://clipaste.app', name: 'Clipaste' },
    { url: 'https://github.com/clipaste/clipaste', name: 'GitHub' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
