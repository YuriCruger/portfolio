import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Yuri Cruger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
