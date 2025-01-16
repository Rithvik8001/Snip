"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm transition-colors hover:text-black/80 dark:hover:text-white/80",
            pathname === item.href
              ? "text-black dark:text-white"
              : "text-black/60 dark:text-white/60"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
