import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { useLocale } from "next-intl";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Yuri Cruger",
  description: "Portfólio de desenvolvimento web.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = useMessages();
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body className={`${poppins.className} bg-zinc-100 dark:bg-zinc-900`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <ScrollToTop />
            <Toaster />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
