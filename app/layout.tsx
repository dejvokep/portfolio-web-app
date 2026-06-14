import type { Metadata } from "next";
import {JetBrains_Mono, Rubik} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Footer from "@/components/footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dávid Kepič | dejvokep.dev",
  description: "Junior software engineer with a background in math, physics, and IT. Passionate about building scalable systems, solving hard problems, and working closely with others to find the best solution.",
  keywords: ["software", "hardware", "development", "student", "ctu", "open", "source"],
  authors: [{name: "Dávid Kepič"}],
  metadataBase: process.env.HOST,
  alternates: {canonical: process.env.HOST},
  openGraph: {
    title: "Dávid Kepič | dejvokep.dev",
    description: "Junior software engineer with a background in math, physics, and IT. Passionate about building scalable systems, solving hard problems, and working closely with others to find the best solution.",
    url: process.env.HOST,
    siteName: "dejvokep.dev",
    type: "website",
    locale: "en"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dávid Kepič | dejvokep.dev",
    description: "Junior software engineer with a background in math, physics, and IT. Passionate about building scalable systems, solving hard problems, and working closely with others to find the best solution.",
  },
  robots: {index: true, follow: true}
};

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
  return <html lang={"en"} className={`${rubik.variable} ${mono.variable}`}>
    <body className={"min-h-screen font-mono antialiased"}>
      {children}
      <Footer/>
    </body>
  </html>
}
