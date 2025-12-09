import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "やしきん - マイページ",
  description: "やしきんのプロフィールページ。大分出身、福岡在住。お絵描き、IoT開発、ギターが趣味です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
