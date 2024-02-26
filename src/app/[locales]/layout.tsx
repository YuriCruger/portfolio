import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Yuri Cruger",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={poppins.className}>
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
