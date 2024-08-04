import {
  Poppins as FontSans,
  Damion as FonthandWritting,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontHandWritting = FonthandWritting({
  subsets: ["latin"],
  variable: "--font-handwritting",
  weight: ["400"],
});
