import { cloneDeep } from "lodash";
import {
  AllFields,
  ColorField,
  DatetimeField,
  Fields,
  GroupField,
  ListField,
  ListOptions,
  RichTextField,
  Schema,
  SchemaData,
  TextField,
} from "@/../../shared/types";

const subscriptions = new Map<string, Array<(...args: any[]) => void>>();

export const subscription = {
  emit(event: string, ...args: any[]) {
    const subs = subscriptions.get(event);
    if (subs === undefined) return;
    for (const sub of subs) {
      sub(...args);
    }
  },
  subscribe(event: string, fn: (...args: any[]) => void): () => void {
    if (!subscriptions.has(event)) {
      subscriptions.set(event, []);
    }
    const subs = subscriptions.get(event) ?? [];
    subs.push(fn);
    subscriptions.set(event, subs);
    return () => {
      if (!subscriptions.has(event)) return;
      const subs = subscriptions.get(event) ?? [];
      subscriptions.set(
        event,
        subs.filter((item) => item !== fn)
      );
    };
  },
};

export const fields = {
  text(): TextField {
    return {
      type: "text",
      name: "text",
      value: "",
      setValue(value) {
        this.value = value;
        subscription.emit("change", this.value);
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
        subscription.emit("change", this.value);
      },
    };
  },
  color(): ColorField {
    return {
      type: "color",
      name: "color",
      value: "#000000",
      setValue(value) {
        this.value = value;
        subscription.emit("change", this.value);
      },
    };
  },
  datetime(): TextField {
    return {
      type: "datetime",
      name: "datetime",
      value: "",
      setValue(value) {
        this.value = value;
        subscription.emit("change", this.value);
      },
    };
  },
  list(fields: Fields, options?: ListOptions): ListField {
    return {
      type: "list",
      name: "list",
      options,
      fields,
      value: [],
      setValue(value) {
        this.value = value;
        subscription.emit("change", value);
      },
      add() {
        this.value.push(createSchema(this.fields));
        subscription.emit("change", this.value);
      },
      remove(index) {
        this.value = this.value.filter((_, i) => i !== index);
        subscription.emit("change", this.value);
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
        subscription.emit("change", this.value);
      },
    };
  },
};

export function createSchema(fields: Fields): Schema {
  fields = cloneDeep(fields);
  const schema: Schema = {};
  for (const name in fields) {
    const field = cloneDeep(fields[name]);
    field.name = name;
    if (field.type === "group") {
      const groupField = field as GroupField;
      groupField.value = createSchema(groupField.value);
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

export function formatDate(date: Date): string {
  const f = (n: number): string => `${n}`.padStart(2, "0");
  const year = date.getUTCFullYear();
  const month = f(date.getUTCMonth() + 1);
  const day = f(date.getUTCDate());
  const hours = f(date.getUTCHours());
  const mins = f(date.getUTCMinutes());
  const seconds = f(date.getUTCSeconds());
  return `${year}-${month}-${day} ${hours}:${mins}:${seconds}`;
}

export function schemaData(schema: Schema): SchemaData {
  schema = cloneDeep(schema);
  const formatted: SchemaData = {};
  for (const name in schema) {
    switch (schema[name].type) {
      case "datetime": {
        const field = schema[name] as DatetimeField;
        let value = field.value;
        try {
          const date = new Date(field.value);
          if (!isNaN(date.getTime())) {
            const offset = new Date().getTimezoneOffset() * 1000 * 60;
            value = formatDate(new Date(date.getTime() + offset));
          }
        } catch {
          // Ignore date parsing
        }
        formatted[name] = {
          type: "datetime",
          value: value,
        };
        break;
      }
      case "list": {
        const field = schema[name] as ListField;
        formatted[name] = {
          type: "list",
          value: field.value.map((fields) => {
            return schemaData(fields);
          }),
        };
        break;
      }
      case "group": {
        const field = schema[name] as GroupField;
        formatted[name] = {
          type: "group",
          value: schemaData(field.value),
        };
        break;
      }
      default: {
        formatted[name] = {
          type: schema[name].type,
          value: schema[name].value,
        };
      }
    }
  }
  return formatted;
}

export function hydrateSchema(
  schema: Schema,
  data: SchemaData | null = null
): Schema {
  if (data === null) {
    return schema;
  }
  for (const name in schema) {
    if (!data.hasOwnProperty(name)) {
      continue;
    }
    const field = schema[name];
    field.name = name;
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
      case "color": {
        const f = schema[name] as ColorField;
        f.setValue(data[name].value as string);
        break;
      }
      case "datetime": {
        const f = schema[name] as DatetimeField;
        let value = data[name].value as string;
        try {
          const utcDate = new Date(Date.parse(value));
          if (!isNaN(utcDate.getTime())) {
            const offset = new Date().getTimezoneOffset() * 60 * 1000;
            value = formatDate(new Date(utcDate.getTime() - offset));
          }
        } catch {
          // Ignore date parsing
        }
        f.setValue(value);
        break;
      }
      case "list": {
        const f = schema[name] as ListField;
        f.setValue(
          (data[name].value as SchemaData[]).map((data) => {
            return hydrateSchema(cloneDeep(f.fields), data);
          })
        );
        break;
      }
      case "group": {
        const f = schema[name] as GroupField;
        f.setValue(hydrateSchema(f.value, data[name].value as SchemaData));
        break;
      }
    }
  }
  return schema;
}

export function swap(array: any[], index: number, newIndex: number) {
  const temp = array[index];
  array[index] = array[newIndex];
  array[newIndex] = temp;
  return array;
}
