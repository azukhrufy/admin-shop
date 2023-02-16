import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MenuIcon } from "../Icons/MenuIcons";

export interface Menus {
  id: string | number;
  name: string;
  icon?: React.ReactNode | string | JSX.Element;
  path: any;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  menus?: Menus[];
  logo?: React.ReactNode | string;
}

const Sidebar = ({ menus, logo }: SidebarProps) => {
  const router = useRouter();
  return (
    <div className="deall-sidebar">
      <div className="deall-sidebar-logo">{logo}</div>
      <div className="deall-sidebar-menus">
        {menus &&
          menus.map((m, id) => (
            <Link href={m.path} key={id}>
              <div key={id} className={`deall-sidebar-menu ${router.asPath === m.path ? "active" : ""}`}>
                {m.icon}
                <p>{m.name}</p>
              </div>
            </Link>
          ))}
      </div>
      <div className="deall-sidebar-logout">{MenuIcon.logout}</div>
    </div>
  );
};

export default Sidebar;
