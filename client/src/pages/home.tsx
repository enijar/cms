import React from "react";
import { createSchema, fields, format, serializeSchema } from "@/cms";
import Schema from "@/components/schema/schema";

const schema = createSchema({
  title: fields.text(),
  description: fields.richText(),
  locations: fields.list({
    address: fields.text(),
    info: fields.richText(),
    items: fields.list({
      name: fields.text(),
    }),
  }),
});

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Schema
        schema={schema}
        onSubmit={(schema) => {
          const serialized = serializeSchema(schema);
          console.log(serialized);
          console.log(format(schema));
        }}
      />
    </main>
  );
}
