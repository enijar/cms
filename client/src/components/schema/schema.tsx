import React from "react";
import { Schema as SchemaType, SchemaData } from "@/../../shared/types";
import { SchemaWrapper } from "@/components/schema/schema.styles";
import { hydrateSchema } from "@/cms";
import Fields from "@/components/fields/fields";
import Button from "@/components/button/button";

type Props = {
  schema: SchemaType;
  onSubmit: (schema: SchemaType) => void;
  data?: SchemaData;
  disabled?: boolean;
};

export default function Schema({
  schema,
  onSubmit,
  data,
  disabled = false,
}: Props) {
  const hydratedSchema = React.useMemo(() => {
    return hydrateSchema(schema, data);
  }, [schema, data]);

  return (
    <SchemaWrapper>
      <Fields schema={hydratedSchema} />
      <Button onClick={() => onSubmit(schema)} disabled={disabled}>
        Submit
      </Button>
    </SchemaWrapper>
  );
}
