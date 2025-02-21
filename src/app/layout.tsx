import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Toolsbar from "@/components/Toolsbar";
import Header from "@/components/Header";
import Explorer from "@/components/Explorer";
import Footer from "@/components/Footer";
import Headercontent from "@/components/Headercontent";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimia Rahimi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={` ${geistMono.variable} antialiased overflow-hidden`}>
        <div className="grid  grid-cols-min-min-one md:grid-rows-custom h-full overflow-hidden">
          <div className="col-span-3">
            <Header />
          </div>
          <Toolsbar />
          <Explorer />

          <div className="grid  overflow-hidden h-full">
            <div>
              <Headercontent />
            </div>
            <div className=" overflow-y-auto h-full ">{children}</div>
          </div>
          <div className="col-span-3">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
