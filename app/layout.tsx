import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full overflow-x-hidden antialiased">
`}
      >
        <section className="flex flex-col w-full max-w-full overflow-x-hidden">
          <div className="md:flex hidden">
            <Sidebar />
          </div>
          <div className="md:pl-67.5 flex-1 flex flex-col h-screen ">
            <Header />
            <div className="bg-gray-300 rounded-t-2xl  sm:mr-5 mr-0 sm:p-8 p-4 sm:mt-0 mt-22 h-full  overflow-y-auto z-0">
              {children}
            </div>
            <div className="flex md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 z-10">
              <Mobilenav />
            </div>
          </div>
        </section>

      </body>
    </html>
  );
}
