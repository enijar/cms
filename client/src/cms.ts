import { cloneDeep } from "lodash";
import { ListField, RichTextField, TextField } from "@/../../shared/types";
import { AllFields, Fields, Schema } from "@/types";

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
      remove(index) {
        this.value = this.value.filter((_, i) => i !== index);
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

export function deserializeSchema(schema: string): Schema {
  const result: Schema = {};
  const data = JSON.parse(schema) as Fields;
  for (const name in data) {
    const field = data[name];
    switch (field.type) {
      case "text":
        result[name] = fields.text();
        break;
      case "richText":
        result[name] = fields.richText();
        break;
      case "list":
        const list = deserializeSchema(
          JSON.stringify((data[name] as ListField).fields)
        );
        result[name] = fields.list(list);
        result[name].value = field.value;
        break;
    }
  }
  return result;
}
