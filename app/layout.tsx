import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://itsnimadrs.github.io"),
  title: "Nima Rajabi — Front-End Developer",
  description:
    "Portfolio of Nima Rajabi — Front-End Developer specialized in React, TypeScript and modern JavaScript. Based in Tehran, Iran.",
  openGraph: {
    title: "Nima Rajabi — Front-End Developer",
    description:
      "React & TypeScript developer based in Tehran. Building attractive, efficient and responsive web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

// Applied before paint so the saved theme never flashes.
const themeInitScript = `try{if(localStorage.getItem('nr-theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
