import React from "react";
import { PageContainer, PageWrapper } from "@/components/page/page.styles";
import Menu from "@/components/menu/menu";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <PageWrapper>
      <Menu />
      <PageContainer>{children}</PageContainer>
    </PageWrapper>
  );
}
