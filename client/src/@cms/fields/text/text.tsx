import React from "react";
import { TextWrapper } from "@/@cms/fields/text/text.styles";
import { TextField } from "@/@cms";

type Props = {
  field: TextField;
};

export default function Text({ field }: Props) {
  const [value, setValue] = React.useState<TextField["value"]>(field.value);

  return (
    <TextWrapper>
      <label>{field.name}</label>
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
