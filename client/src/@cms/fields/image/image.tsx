import React from "react";
import { ImageWrapper } from "@/@cms/fields/image/image.styles";
import useField from "@/@cms/hooks/use-field";
import { SchemaField } from "@/@cms/types";

type Props = {
  schemaField: SchemaField;
  onChange: (schemaField: SchemaField) => void;
};

export default function Image({ schemaField, onChange }: Props) {
  const field = useField(schemaField, onChange);

  return (
    <ImageWrapper>
      <label htmlFor={field.id}>{field.label}</label>
      <input
        type="file"
        id={field.id}
        name={field.name}
        maxLength={1}
        onChange={(event) => {
          console.log(event.target.files);
          // @todo upload file
          const value = "https://example.com/file";
          field.setValue(value);
        }}
      />
    </ImageWrapper>
  );
}
