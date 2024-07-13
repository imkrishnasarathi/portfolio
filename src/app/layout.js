import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SidebarItem } from "./components/Navbar";
import { House, CircleUser, FolderOpenDot, Mail, Newspaper } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>
          <SidebarItem icon={<House />} text="Home" isActive={true} pageHref="/" />
          <SidebarItem icon={<CircleUser />} text="About" pageHref="/about" />
          <SidebarItem icon={<FolderOpenDot />} text="Projects" pageHref="/projects" />
          <SidebarItem icon={<Newspaper />} text="Articles" pageHref="/articles" />
          <SidebarItem icon={<Mail />} text="Contact" pageHref="/contact" />
        </Navbar>
        <main className="ml-20 transition-all duration-300">{children}</main>
      </body>
    </html>
  );
}
