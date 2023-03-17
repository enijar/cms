import { Schema, SchemaFieldOptions, SchemaFields } from "@/@cms/types";

export function createSchema(fn: (fields: SchemaFields) => Schema): any {
  const fields: SchemaFields = {
    text(options?: SchemaFieldOptions) {
      return {
        type: "text",
        value: "",
        name: "",
        options,
      };
    },
    richText(options?: SchemaFieldOptions) {
      return {
        type: "richText",
        value: "",
        name: "",
        options,
      };
    },
    image(options?: SchemaFieldOptions) {
      return {
        type: "image",
        value: "",
        name: "",
        options,
      };
    },
    list(schema: Schema, options?: SchemaFieldOptions) {
      return {
        type: "list",
        value: "",
        name: "",
        options,
        schema,
      };
    },
  };

  function updateSchema(schema: Schema): Schema {
    for (const name in schema) {
      if (!schema.hasOwnProperty(name)) continue;
      schema[name].name = name;
      if (schema[name].schema !== undefined) {
        schema[name].schema = updateSchema(schema[name].schema!);
      }
    }
    return schema;
  }

  return updateSchema(fn(fields));
}
