import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "./navLinks";

const NavDesktop = () => {
  const pathname = usePathname();

  return (
    <nav>
      {navLinks.map((nav) => {
        const isActive = pathname === nav.url;

        return (
          <Link
            className="text-slate-900 font-bold text-sm opacity-40 hover:opacity-90 px-2 py-5 transition-opacity"
            href={nav.url}
            key={nav.url}
            style={{ opacity: isActive ? 1 : null }}
          >
            {nav.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavDesktop;
