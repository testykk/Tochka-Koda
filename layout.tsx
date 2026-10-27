import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Точка Кода — разработка цифровых решений", template: "%s | Точка Кода" },
  description: "Индивидуальная разработка сайтов, программ, Minecraft-плагинов и ботов.",
  openGraph: {
    title: "Точка Кода — превращаем идеи в работающий код",
    description: "Разработка цифровых решений под ваши задачи.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
