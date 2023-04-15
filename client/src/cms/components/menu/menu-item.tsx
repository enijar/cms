import React from "react";
import { useLocation, matchPath } from "react-router-dom";
import { MenuItemWrapper } from "@/cms/components/menu/menu.styles";

type Props = {
  to: string;
  routeMatcher?: string;
  children: React.ReactNode;
};

export default function MenuItem({ to, routeMatcher, children }: Props) {
  const { pathname } = useLocation();
  const active = React.useMemo(() => {
    if (routeMatcher !== undefined) {
      return matchPath(pathname, routeMatcher);
    }
    if (to === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(to);
  }, [pathname, to]);

  return (
    <MenuItemWrapper to={to} data-active={active}>
      {children}
    </MenuItemWrapper>
  );
}
