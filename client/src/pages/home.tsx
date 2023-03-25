import React from "react";
import {
  createSchema,
  deserializeSchema,
  fields,
  serializeSchema,
} from "@/@cms";
import Schema from "@/@cms/components/schema/schema";

const schema = createSchema({
  title: fields.text(),
  description: fields.richText(),
  locations: fields.list({
    address: fields.text(),
    info: fields.richText(),
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
          console.log(deserializeSchema(serialized));
        }}
      />
    </main>
  );
}
