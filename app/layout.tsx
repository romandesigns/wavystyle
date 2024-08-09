import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import { fontSans } from "@/components/FontFamily";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="p-0 m-0 box-border">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative grid grid-cols-1 grid-rows-[auto_calc(100dvh-5rem)] items-stretch justify-stretch bg-radial-gradient",
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
