export type SchemaFieldType = "text" | "richText" | "image" | "list";

export type SchemaFieldOptions = {
  label: string;
};

export type SchemaField = {
  type: SchemaFieldType;
  name: string;
  value: string;
  options?: Partial<SchemaFieldOptions>;
  schema?: Schema;
};

export type Schema = {
  [name: string]: SchemaField;
};

export type SchemaFields = {
  text: (options?: SchemaFieldOptions) => SchemaField;
  richText: (options?: SchemaFieldOptions) => SchemaField;
  image: (options?: SchemaFieldOptions) => SchemaField;
  list: (schema: Schema, options?: SchemaFieldOptions) => SchemaField;
};
