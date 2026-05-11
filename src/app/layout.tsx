import type { Metadata } from "next";
import { Inter, Noto_Serif, Roboto_Mono } from "next/font/google";

import AppFooter from "@/components/AppFooter/AppFooter";
import AppHeader from "@/components/AppHeader/AppHeader";

import "@/styles/index.scss";
import styles from "./layout.module.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KTC",
  description: "Portfolio e progetti KTC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${notoSerif.variable} ${robotoMono.variable}`}>
      <body className={styles.layout}>
        <AppHeader />

        <main className={styles.layout__main}>{children}</main>

        <AppFooter />
      </body>
    </html>
  );
}
