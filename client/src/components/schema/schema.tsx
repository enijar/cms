import React from "react";
import { Schema as SchemaType, SchemaData } from "@/../../shared/types";
import { SchemaWrapper } from "@/components/schema/schema.styles";
import Fields from "@/components/fields/fields";
import Button from "@/components/button/button";
import { hydrateSchema } from "@/cms";

type Props = {
  schema: SchemaType;
  data?: SchemaData;
  onSubmit: (schema: SchemaType) => void;
};

export default function Schema({ schema, data, onSubmit }: Props) {
  const hydratedSchema = React.useMemo(() => {
    return hydrateSchema(schema, data);
  }, [schema, data]);

  return (
    <SchemaWrapper>
      <Fields schema={schema} />
      <Button onClick={() => onSubmit(schema)}>Submit</Button>
    </SchemaWrapper>
  );
}
