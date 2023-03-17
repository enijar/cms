import React from "react";
import { TextWrapper } from "@/@cms/fields/text/text.styles";
import { SchemaField } from "@/@cms/types";
import useField from "@/@cms/hooks/use-field";

type Props = {
  schemaField: SchemaField;
  onChange: (schemaField: SchemaField) => void;
};

export default function Text({ schemaField, onChange }: Props) {
  const field = useField(schemaField, onChange);

  return (
    <TextWrapper>
      <label htmlFor={field.id}>{field.label}</label>
      <input
        id={field.id}
        value={field.value}
        name={field.name}
        onChange={(event) => {
          field.setValue(event.target.value);
        }}
      />
    </TextWrapper>
  );
}
