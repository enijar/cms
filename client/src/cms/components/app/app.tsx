import React from "react";
import { AppReset } from "@/cms/components/app/app.styles";

type Props = {
  children: React.ReactNode;
};

export default function App({ children }: Props) {
  return (
    <>
      <AppReset />
      {children}
    </>
  );
}
