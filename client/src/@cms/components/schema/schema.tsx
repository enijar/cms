import React from "react";
import { Schema as SchemaType } from "@/@cms";
import { SchemaWrapper } from "@/@cms/components/schema/schema.styles";
import Fields from "@/@cms/components/fields/fields";
import Button from "@/@cms/components/button/button";

type Props = {
  schema: SchemaType;
  onSubmit: (schema: SchemaType) => void;
};

export default function Schema({ schema, onSubmit }: Props) {
  return (
    <SchemaWrapper>
      <Fields schema={schema} />
      <Button onClick={() => onSubmit(schema)}>Submit</Button>
    </SchemaWrapper>
  );
}
