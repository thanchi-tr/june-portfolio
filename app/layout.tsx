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

export const viewport: Viewport = {
  width: "device-width", initialScale: 1
}
export const metadata: Metadata = {
  title: "JUNE | Build THE Experience",
  description: "Explore my portfolio showcasing expertise in .NET, Next.js, Angular, and cutting-edge web technologies. Available for remote full-time development work in Melbourne, Australia.",
  authors: [{ name: "June Trinh", url: "https://www.junetrinh.dev" }],
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Fullstack", "web development", "Docker", "GraphQL",
    "PostgreSQL", "Node.js", "Express", "REST API", "API", "MongoDB", "Mongoose", "JWT", "Authentication", "UI", "UX", "Front-end"
    , "Frontend", "Backend", "Fullstack", "Full-stack", "Developer", "Software Engineer", "Software Developer", "Engineer", "Software", "Development", "Web", "App",
    "Application", "Website", "Portfolio", "Projects", "Work", "Experience", "Skills", "About", "Contact", "Blog", "Posts", "Articles", "Resume",
    "CV", "June Trinh", "June", "Trinh", "junetrinh.dev", "junetrinh", "Developer in Melbourne", "Developer in Australia", "Remote Developer",
    "Full-time Developer", "Hire Developer", "Hire June", "Hire June Trinh", "Hire June Trinh in Melbourne", "Hire June Trinh in Australia", "Hire June Trinh for Full-time"],

  icons: {
    icon: "/brandlogo.ico", // or "/favicon.png"
  },
  openGraph: {
    title: "JUNE | .NET Dev| Next Dev | Angular Dev | Build THE Experience ",
    description: "Explore my portfolio showcasing expertise in .NET, Next.js, Angular, and cutting-edge web technologies. Available for remote full-time development work in Melbourne, Australia.",
    url: "https://junetrinh.dev",
    siteName: "June Trinh",
    images: [
      { url: "https://junetrinh.dev/ava.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/logo.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/animated_ava.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/ava3.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/ava.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/asset/FizzBuzz/add.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/asset/FizzBuzz/game.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/asset/FizzBuzz/score.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/asset/FizzBuzz/waitRoom.png", width: 1200, height: 630 },
      { url: "https://junetrinh.dev/icons/angular.png", width: 300, height: 300 },
      { url: "https://junetrinh.dev/icons/Auth0.jpg", width: 300, height: 300 },
      { url: "https://junetrinh.dev/icons/express.png", width: 300, height: 300 },
      { url: "https://junetrinh.dev/icons/dotnetCore.png", width: 300, height: 300 },
      { url: "https://junetrinh.dev/icons/compareNSave.png", width: 300, height: 300 },
      { url: "https://junetrinh.dev/icons/carinaEye.jpg", width: 300, height: 300 },
      { url: "https://junetrinh.dev/icons/jungTalent.jpg", width: 300, height: 300 },
      { url: "https://junetrinh.dev/brandlogo.ico", width: 200, height: 200 }

    ],

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://junetrinh.dev" />
        <link rel="icon" href="/brandlogo.ico" sizes="32x32" />
        <link rel="preload" href="/styles/global.css" as="style" />
        <script type="application/ld+json" defer>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            "name": [
              "JUNE | Build THE Experience",
              "Xuan Trinh", "June Dev", "Developer",
              "Full-Stack Developer", "Software Engineer",
              "Web Developer", "UI/UX Designer", "Dotnet Developer",
              "Angular Developer", "Next.js Developer",
              "June Trinh | junetrinh.dev"
            ],
            "url": "https://junetrinh.dev",
            "description": "Iterative Innovation | Fullstack Developer | Software Engineer | Web Developer | UI/UX Designer.",
            "author": {
              "@type": "Person",
              "name": "June Trinh"
            }, "jobTitle": [
              "Tech Lead",
              "Full Stack Developer",
              "Software Engineer",
              "Web Developer",
              "UI/UX Designer",
              "Dotnet Developer",
              "Angular Developer",
              "Next.js Developer"],
            "worksFor": {
              "@type": "Organization",
              "name": "Jung Talents"
            },

          })}
        </script>
      </head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${Bestermind.variable} antialiased bg-foregound/35`}
      >

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
