import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SidebarItem } from "./components/Navbar";
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
  		</Head>
      <body className={`${poppins.className} bg-[#07142b] text-[#dcdcde]`}>
        <Navbar>
          <SidebarItem icon={<House />} text="Home" isActive={true} pageHref="/" />
          <SidebarItem icon={<FolderOpenDot />} text="Projects" pageHref="/projects" />
          <SidebarItem icon={<Newspaper />} text="Articles" pageHref="/articles" />
          <SidebarItem icon={<Mail />} text="Contact" pageHref="/contact" />
        </Navbar>
        <div className="ml-20 flex flex-col min-h-screen overflow-hidden">
          <main className="flex flex-grow pl-5 pt-10 flex-col pr-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

