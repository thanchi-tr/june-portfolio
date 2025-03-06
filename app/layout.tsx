import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/hooks/context/useThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Bestermind = localFont({
  src: "./fonts/BestermindRegular.ttf",
  variable: "--font-bestermind",
  weight: "100 900",
});
const codaCaption = localFont({
  src: './fonts/CodaCaption-Heavy.ttf',
  weight: '700',
  style: 'normal',
  variable: '--font-coda-caption',
});

export const metadata: Metadata = {
  title: "JUNE | Build an Experience",
  description: "Iterative Innovation",
  icons: {
    icon: "/brandlogo.ico", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${codaCaption.variable} ${geistSans.variable} ${geistMono.variable} ${Bestermind.variable} antialiased bg-foregound/35`}
      >
        <ThemeProvider>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
