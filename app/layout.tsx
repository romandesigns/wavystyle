import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import { fontSans } from "@/components/FontFamily";

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
          "min-h-screen bg-background font-sans antialiased relative flex items-center justify-center",
          fontSans.variable
        )}
      >
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
