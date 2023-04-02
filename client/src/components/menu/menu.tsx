import React from "react";
import { MenuWrapper } from "@/components/menu/menu.styles";
import MenuItem from "@/components/menu/menu-item";

type Props = {
  //
};

export default function Menu({}: Props) {
  return (
    <MenuWrapper>
      <MenuItem to="/">Dashboard</MenuItem>
      <MenuItem to="/schemas">Schemas</MenuItem>
      <MenuItem to="/users">Users</MenuItem>
    </MenuWrapper>
  );
}
