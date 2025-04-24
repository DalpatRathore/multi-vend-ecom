"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NavbarSidebar from "./NavbarSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

type NavbarItemProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};
const NAVBAR_ITEMS = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/about-us",
    children: "About Us",
  },
  {
    href: "/contact-us",
    children: "Contact Us",
  },
  {
    href: "/cart",
    children: "Cart",
  },
];

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <NavbarSidebar
        items={NAVBAR_ITEMS}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className="hidden lg:flex items-center gap-4 pr-6">
        {NAVBAR_ITEMS.map(item => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex items-center">
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href={"/sign-in"}>Login</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href={"/sign-up"}>Start Selling</Link>
        </Button>
      </div>
      <div className="lg:hidden flex items-center pr-6">
        <Button
          variant={"outline"}
          className="bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
