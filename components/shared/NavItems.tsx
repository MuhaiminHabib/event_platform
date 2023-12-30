import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row md:flex-between w-full gap-6">
      {headerLinks.map((item, i) => (
        <li key={i}>
          <Link href={item.route}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
