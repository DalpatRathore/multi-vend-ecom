"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <div className="hiddend md:flex items-center gap-4 pr-6">
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
    </nav>
  );
};

export default Navbar;
