import { cloneDeep } from "lodash";
import {
  AllFields,
  Fields,
  GroupField,
  ListField,
  RichTextField,
  Schema,
  SchemaData,
  TextField,
} from "@/../../shared/types";

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
  group(fields: Fields): GroupField {
    return {
      type: "group",
      name: "group",
      value: fields,
      setValue(value) {
        this.value = value;
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
      case "text": {
        const f = fields.text();
        f.setValue(field.value as string);
        result[name] = f;
        break;
      }
      case "richText": {
        const f = fields.richText();
        f.setValue(field.value as string);
        result[name] = f;
        break;
      }
      case "list": {
        const list = deserializeSchema(
          JSON.stringify((data[name] as ListField).fields)
        );
        const f = fields.list(list);
        f.setValue(field.value as Fields[]);
        result[name] = f;
        break;
      }
      case "group": {
        const group = deserializeSchema(
          JSON.stringify((data[name] as GroupField).value)
        );
        const f = fields.group(group);
        f.setValue(group);
        result[name] = f;
        break;
      }
    }
  }
  return createSchema(result);
}

export function schemaData(schema: Schema): SchemaData {
  const formatted: SchemaData = {};
  for (const name in schema) {
    formatted[name] = {
      type: schema[name].type,
      value: schema[name].value,
    };
    if (schema[name].type === "list") {
      const field = schema[name] as ListField;
      formatted[name].value = field.value.map((fields) => {
        return schemaData(fields);
      });
    }
    if (schema[name].type === "group") {
      const field = schema[name] as GroupField;
      formatted[name] = schemaData(field.value);
    }
  }
  return formatted;
}

export function hydrateSchema(schema: Schema, data?: SchemaData): Schema {
  schema = cloneDeep(schema);
  if (data === undefined) {
    return schema;
  }
  for (const name in schema) {
    const field = schema[name];
    switch (field.type) {
      case "text": {
        const f = schema[name] as TextField;
        f.setValue(data[name].value as string);
        break;
      }
      case "richText": {
        const f = schema[name] as RichTextField;
        f.setValue(data[name].value as string);
        break;
      }
      case "list": {
        const f = schema[name] as ListField;
        f.setValue(
          (data[name].value as SchemaData[]).map((data) => {
            return hydrateSchema(f.fields, data);
          })
        );
        break;
      }
      case "group": {
        const f = schema[name] as GroupField;
        f.setValue(hydrateSchema(f.value, data[name] as SchemaData));
        break;
      }
    }
  }
  return schema;
}
