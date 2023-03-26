import React from "react";
import { TextField } from "@/../../shared/types";
import { TextWrapper } from "@/fields/text/text.styles";
import Label from "@/components/label/label";

type Props = {
  field: TextField;
};

export default function Text({ field }: Props) {
  const [value, setValue] = React.useState<TextField["value"]>(field.value);

  return (
    <TextWrapper>
      <Label text={field.name} />
      <input
        value={value}
        name={field.name}
        onChange={(event) => {
          field.setValue(event.target.value);
          setValue(field.value);
        }}
      />
    </TextWrapper>
  );
}
