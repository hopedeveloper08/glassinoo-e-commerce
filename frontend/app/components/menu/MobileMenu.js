"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "./menuItems";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <ul className="md:hidden dock z-50 bg-base-200">
      {menuItems.map((item) => {
        const isActive = pathname === item.link;
        
        return (
          <Link
            href={item.link}
            key={item.title}
            className={`flex flex-col items-center p-2 ${
              isActive ? "dock-active text-primary" : ""
            }`}
          >
            <item.icon size={20} />
            <span className="dock-label">{item.title}</span>
          </Link>
        );
      })}
    </ul>
  );
}
