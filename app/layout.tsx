import type {Metadata} from "next";

import "./globals.css";
import {Inter as FontSans} from "next/font/google";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen  bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
