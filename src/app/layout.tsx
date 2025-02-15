import { Metadata } from "next"; 
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Header from './components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "700"], // Added specific weights
  style: ["normal", "italic"], // Added specific styles
});

export const metadata: Metadata = {
  title: "Kettle Shop ",
  description: "The best place to buy online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
