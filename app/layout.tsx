import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "谷优 - Web 前端工程师作品集",
  description:
    "谷优的 Web 前端工程师面试作品集，展示 Garena、Free Fire 官网、DI Dashboard、赛事可视化、游戏活动页、AI Chat 与 RAG 等项目经历。",
  keywords: [
    "谷优",
    "Web 前端",
    "前端工程师",
    "React",
    "Vue",
    "Next.js",
    "Nuxt.js",
    "TypeScript",
    "Garena",
    "Free Fire",
    "RAG",
    "Streaming Chat",
  ],
  authors: [{ name: "谷优" }],
  openGraph: {
    title: "谷优 - Web 前端工程师作品集",
    description:
      "7 年 Web 前端经验，覆盖游戏活动、国际化官网、数据平台、赛事可视化与 AI 应用开发。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
