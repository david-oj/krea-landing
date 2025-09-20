import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";

const suisseIntl = localFont({
  src: [
    {
      path: "../assets/fonts/fonnts.com-SuisseIntl-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krea Landing - Assessment",
  description: "A pixel perfect recreation of the Krea landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${suisseIntl.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
