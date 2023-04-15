import React from "react";
import { MenuWrapper } from "@/cms/components/menu/menu.styles";
import MenuItem from "@/cms/components/menu/menu-item";
import config from "@/config";

export default function Menu() {
  return (
    <MenuWrapper>
      {config.menuLinks.map((menuLink, index) => {
        return (
          <MenuItem to={menuLink.to} key={index}>
            {menuLink.label}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
}
