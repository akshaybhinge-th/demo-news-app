"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={currentPath.startsWith(href) ? "active" : ""}
    >
      {children}
    </Link>
  );
};

export default NavLink;
