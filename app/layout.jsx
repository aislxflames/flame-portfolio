import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Aislx Flames",
  description: "Flame Portfolio - Aislx's Personal Portfolio Fullstack Developer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aislx Flames",
    description: "Aislx's Personal Portfolio Fullstack Developer",
    url: "https://portfolio.theflames.fun",
    images: [
      {
        url: "https://portfolio.theflames.fun/preview.png",
        width: 1200,
        height: 630,
        alt: "Flame Portfolio Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${montserratSans.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
    </html>
  );
}
