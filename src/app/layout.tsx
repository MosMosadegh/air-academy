import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Air Academy | آکادمی هوا - باشگاه پروازی پاراگلایدر",
  description: "باشگاه پروازی پاراگلایدر با استانداردهای بین‌المللی APPI. آموزش پاراگلایدر از مبتدی تا حرفه‌ای، پرواز تفریحی تندم، و دریافت گواهینامه بین‌المللی.",
  keywords: ["پاراگلایدر", "پرواز", "آموزش پاراگلایدر", "APPI", "پرواز تفریحی", "تندم", "paragliding", "Iran"],
  authors: [{ name: "Air Academy" }],
  openGraph: {
    title: "Air Academy | آکادمی هوا",
    description: "باشگاه پروازی پاراگلایدر با استانداردهای بین‌المللی APPI",
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
