import React from "react";
import { MenuIcon } from "../Icons/MenuIcons";

export interface Menus {
  id: string | number;
  name: string;
  icon?: React.ReactNode | string | JSX.Element;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  menus?: Menus[];
  logo?: React.ReactNode | string;
}

const Sidebar = ({ menus, logo }: SidebarProps) => {
  return (
    <div className="deall-sidebar">
      <div className="deall-sidebar-logo">{logo}</div>
      <div className="deall-sidebar-menus">
        {menus &&
          menus.map((m, id) => (
            <div key={id} className="deall-sidebar-menu">
              {m.icon}
              <p>{m.name}</p>
            </div>
          ))}
      </div>
      <div className="deall-sidebar-logout">
        {MenuIcon.logout}
      </div>
    </div>
  );
};

export default Sidebar;
