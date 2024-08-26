import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { House, FolderOpenDot, Mail, Newspaper } from "lucide-react";
import Footer from "./components/Footer.jsx";
import Head from 'next/head';

const poppins = Poppins({ subsets: ["latin"], weight: "500"});

export const metadata = {
  title: "Krishna's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
  			<link rel='icon' href='/pic.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  		</Head>
      <body className={`${poppins.className} bg-[#07142b] text-[#dcdcde]`}>
        <Navbar/>
        <div className="flex flex-col min-h-screen overflow-hidden mt-16">
          <main className="flex flex-grow pl-5 pt-10 flex-col pr-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

