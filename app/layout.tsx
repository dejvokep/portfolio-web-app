import type {Metadata, Viewport} from "next";
import {JetBrains_Mono, Rubik} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Notice from "@/components/notice";
import Separator from "@/components/separator";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {deriveMetadata} from "@/lib/metadata";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = deriveMetadata("intro");
export const viewport: Viewport = {themeColor: "#FFFFFF"};

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
  return <html lang={"en"} className={`${rubik.variable} ${mono.variable}`}>
    <body className={"relative min-h-screen font-mono antialiased px-4 py-4"}>
      <div className={"mx-auto lg:max-w-[60%] space-y-4"}>
        <Header/>
        <Separator/>
        {children}
        <Separator/>
        <Footer/>
      </div>
      <Notice/>
    </body>
  </html>
}
