import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";
import SplashScreen from "../components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Kumar Gupta | Full Stack Developer",
  description: "Turning Ideas into Scalable Applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} text-slate-200 antialiased`}>
        <SplashScreen />
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
