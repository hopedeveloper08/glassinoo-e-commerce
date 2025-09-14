"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "./menuItems";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="max-md:hidden navbar bg-base-200 shadow-lg">
      <div className="lg:container mx-auto px-4 flex justify-between">
        <div className="flex gap-4 items-center">
          {/* brand */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="گلاسینو"
              width={48}
              height={48}
            />
            <span className="text-2xl font-bold text-primary opacity-80">
              گلاسینو
            </span>
          </Link>

          {/* items */}
          <ul className="menu menu-horizontal">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));

              return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`flex items-center gap-2 ${
                      isActive ? "text-primary font-semibold" : ""
                    }`}
                  >
                    <item.icon size={20} />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social medias */}
        <div className="my-auto max-lg:hidden flex gap-2">
          <a
            className="btn btn-ghost btn-circle text-red-400"
            href="https://www.instagram.com/glassco.home?igsh=ajUza2RieDQ5OG9q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={24} />
          </a>
          <a
            className="btn btn-ghost btn-circle text-green-400"
            href="https://wa.me/09036202425"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DesktopMenu;