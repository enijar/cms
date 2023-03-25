import { cloneDeep } from "lodash";

export type Field = {
  type: "text" | "richText" | "list";
  name: string;
};

export type TextField = Field & {
  value: string;
  setValue: (value: TextField["value"]) => void;
};

export type RichTextField = Field & {
  value: string;
  setValue: (value: RichTextField["value"]) => void;
};

export type ListField = Field & {
  fields: Fields;
  value: Fields[];
  setValue: (value: ListField["value"]) => void;
  add: () => void;
};

export type AllFields = TextField | RichTextField | ListField;

export type Fields = {
  [name: string]: AllFields;
};

export type Schema = {
  [name: string]: AllFields;
};

export const fields = {
  text(): TextField {
    return {
      type: "text",
      name: "text",
      value: "",
      setValue(value) {
        this.value = value;
      },
    };
  },
  richText(): RichTextField {
    return {
      type: "richText",
      name: "richText",
      value: "",
      setValue(value) {
        this.value = value;
      },
    };
  },
  list(fields: Fields): ListField {
    return {
      type: "list",
      name: "list",
      fields,
      value: [],
      setValue(value) {
        this.value = value;
      },
      add() {
        this.value.push(createSchema(this.fields));
      },
    };
  },
};

export function createSchema(fields: Fields): Schema {
  const schema: Schema = {};
  for (const name in fields) {
    const field = cloneDeep(fields[name]);
    field.name = name;
    if (field.type === "list") {
      const listField = field as ListField;
      listField.value = [createSchema(listField.fields)];
    }
    schema[name] = field;
  }
  return schema;
}

export function schemaToFields(schema: Schema): AllFields[] {
  const fields: AllFields[] = [];
  for (const name in schema) {
    fields.push(schema[name]);
  }
  return fields;
}

export function serializeSchema(schema: Schema): string {
  return JSON.stringify(schema);
}
