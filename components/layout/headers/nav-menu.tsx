import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
