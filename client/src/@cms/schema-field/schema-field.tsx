import React from "react";
import { SchemaFieldWrapper } from "@/@cms/schema-field/schema-field.styles";
import { SchemaField } from "@/@cms/types";

type Props = {
  schemaField: SchemaField;
};

export default function SchemaField({ schemaField }: Props) {
  return (
    <SchemaFieldWrapper>
      <div>SchemaField</div>
    </SchemaFieldWrapper>
  );
}
