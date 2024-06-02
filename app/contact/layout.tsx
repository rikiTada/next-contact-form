import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "contact",
  description: "アプリに関するお問い合わせ",
};

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={cn(
          notoSansJP.className,
          "min-h-screen flex flex-col overflow-y-auto"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header title="お問い合わせ" />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
