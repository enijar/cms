import React from "react";
import { SchemaFieldsWrapper } from "@/@cms/schema/schema-fields.styles";
import { Schema, SchemaField } from "@/@cms/types";
import Text from "@/@cms/fields/text/text";
import RichText from "@/@cms/fields/rich-text/rich-text";
import Image from "@/@cms/fields/image/image";
import List from "@/@cms/fields/list/list";

type Props = {
  schema: Schema;
};

function schemaToSchemaFields(schema: Schema): SchemaField[] {
  const schemaFields: SchemaField[] = [];
  for (const name in schema) {
    schemaFields.push(schema[name]);
  }
  return schemaFields;
}

export default function SchemaFields({ schema }: Props) {
  const schemaFields = React.useMemo(() => {
    return schemaToSchemaFields(schema);
  }, [schema]);

  const handleChange = React.useCallback(() => {
    console.log("change");
  }, []);

  return (
    <SchemaFieldsWrapper>
      {schemaFields.map((schemaField, index) => {
        switch (schemaField.type) {
          case "text":
            return (
              <Text
                key={index}
                schemaField={schemaField}
                onChange={handleChange}
              />
            );
          case "richText":
            return (
              <RichText
                key={index}
                schemaField={schemaField}
                onChange={handleChange}
              />
            );
          case "image":
            return (
              <Image
                key={index}
                schemaField={schemaField}
                onChange={handleChange}
              />
            );
          case "list":
            return (
              <List
                key={index}
                schemaField={schemaField}
                onChange={handleChange}
              />
            );
          default:
            return <React.Fragment key={index} />;
        }
      })}
    </SchemaFieldsWrapper>
  );
}
