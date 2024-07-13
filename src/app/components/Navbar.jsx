"use client";
import React, { createContext, useContext, useState } from "react";
import Link from "next/link";
import { House, CircleUser, FolderOpenDot, Mail, Newspaper } from "lucide-react";

const SidebarContext = createContext();

const Navbar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`navbar h-screen fixed transition-all duration-300 ${
        expanded ? "navbar-expanded" : ""
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="h-full flex flex-col bg-[#2e3047] border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img
              src="logo.jpg"
              alt="Krishna Sarathi Ghosh"
              className={`shadow-md overflow-hidden transition-all shadow-blue-500/50 rounded-lg ${
                expanded ? "w-16 ml-3" : "w-0"
              }`}
            />
          </div>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 text-white">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, isActive, pageHref }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <Link href={pageHref}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
          isActive
            ? "bg-gradient-to-tr from-[#2e3047] to-[#2e3047]"
            : "bg-gradient-to-tr from-[#2e3047] to-[#2e3047]"
        } hover:bg-gradient-to-tr hover:from-[#4a4e6b] hover:to-[#4a4e6b]`}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span
            className={`transition-all duration-300 ${
              expanded ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {text}
          </span>
        </div>
      </li>
    </Link>
  );
}

export default Navbar;
