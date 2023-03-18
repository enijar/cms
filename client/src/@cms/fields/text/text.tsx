import React from "react";
import { TextWrapper } from "@/@cms/fields/text/text.styles";
import { TextField } from "@/@cms";
import Label from "@/@cms/components/label/label";

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
