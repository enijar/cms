import React from "react";
import { ButtonWrapper } from "@/components/button/button.syles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}
