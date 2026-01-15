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
  title: 'SUG Executives | Student Union Government',
  description:
    'Meet the Student Union Government executives. View current and past executive committees representing student interests.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="flex">
          <div className="md:flex hidden">
            <Sidebar />
          </div>
          <div className="md:pl-67.5 flex-1 flex flex-col  h-screen overflow-hidden ">
            <Header />
            <div className="bg-gray-300 rounded-t-2xl h-full sm:mr-5 mr-0 sm:p-8 p-4 sm:mt-0 mt-22 min-h-[90vh] overflow-hidden">
              {children}
            </div>
            <div className="flex md:hidden absolute bottom-2 left-1/2 -translate-x-1/2">
              <Mobilenav />
            </div>
          </div>
        </section>

      </body>
    </html>
  );
}
