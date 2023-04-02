import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { MenuItemWrapper } from "@/components/menu/menu.styles";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function MenuItem({ to, children }: Props) {
  const { pathname } = useLocation();
  const active = React.useMemo(() => {
    return matchPath(pathname, to) !== null;
  }, [pathname, to]);

  return (
    <MenuItemWrapper to={to} data-active={active}>
      {children}
    </MenuItemWrapper>
  );
}
