import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import { fontSans } from "@/components/FontFamily";
import MainNavigation from "@/components/Navigation/MainNavigation";

export const metadata: Metadata = {
  title: "WavyStyle | Home",
  description:
    "Discover Román Feliz's portfolio, a hub for his web development and music production projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="p-0 m-0 box-border">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative grid grid-cols-1 grid-rows-[auto_1fr] items-center justify-center bg-radial-gradient",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
