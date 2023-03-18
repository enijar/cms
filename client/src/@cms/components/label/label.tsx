import React from "react";
import { capitalCase } from "change-case";
import { LabelWrapper } from "@/@cms/components/label/label.styles";

type Props = {
  text: string;
};

export default function Label({ text }: Props) {
  return <LabelWrapper>{capitalCase(text)}</LabelWrapper>;
}
