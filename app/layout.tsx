'use client'; 

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Mobilenav from "@/components/Mobilenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/forgot-password' || pathname === '/reset-password';

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} w-full overflow-x-hidden`}>
        {isAuthPage ? (
          children
        ) : (
          <section className="flex flex-col w-full max-w-full overflow-x-hidden">
            <div className="md:flex hidden">
              <Sidebar />
            </div>
            <div className="md:pl-67.5 flex-1 flex flex-col h-screen pb-10 lg:pb-7 min-h-screen bg-gray-50">
              <Header />
              <div className="bg-gray-300 rounded-t-2xl sm:mr-5 mr-0 sm:p-8 p-4 sm:mt-25 mt-22 lg:mt-25 h-full overflow-y-auto z-0 pt-6 sm:pt-10 md:pt-25 lg:pt-10">
                {children}
              </div>
              <div className="flex md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 z-10">
                <Mobilenav />
              </div>
            </div>
          </section>
        )}
      </body>
    </html>
  );
}