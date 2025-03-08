import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
export const viewport: Viewport = {
  width: "device-width", initialScale: 1
}
export const metadata: Metadata = {
  title: "JUNE | Build THE Experience",
  description: "Iterative Innovation | Fullstack Developer | Software Engineer | Web Developer | UI/UX Designer | .NET Developer Portfolio | June Trinh | junetrinh.dev",
  authors: [{ name: "June Trinh", url: "https://www.junetrinh.dev" }],
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Fullstack", "web development", "Docker", "GraphQL",
    "PostgreSQL", "Node.js", "Express", "REST API", "API", "MongoDB", "Mongoose", "JWT", "Authentication", "UI", "UX", "Front-end"
    , "Frontend", "Backend", "Fullstack", "Full-stack", "Developer", "Software Engineer", "Software Developer", "Engineer", "Software", "Development", "Web", "App",
    "Application", "Website", "Portfolio", "Projects", "Work", "Experience", "Skills", "About", "Contact", "Blog", "Posts", "Articles", "Resume",
    "CV", "June Trinh", "June", "Trinh", "junetrinh.dev", "junetrinh"],

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
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            "name": "JUNE | Build THE Experience",
            "url": "https://junetrinh.dev",
            "description": "Iterative Innovation | Fullstack Developer | Software Engineer | Web Developer | UI/UX Designer.",
            "author": {
              "@type": "Person",
              "name": "June Trinh"
            }
          })}
        </script>
      </head>
      <body
        className={`${codaCaption.variable} ${geistSans.variable} ${geistMono.variable} ${Bestermind.variable} antialiased bg-foregound/35`}
      >

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
