import React from "react";
import { createSchema, fields, format, serializeSchema } from "@/cms";
import Schema from "@/components/schema/schema";

const schema = createSchema({
  title: fields.text(),
  description: fields.richText(),
  person: fields.group({
    name: fields.text(),
    bio: fields.richText(),
  }),
  locations: fields.list({
    address: fields.text(),
    info: fields.richText(),
  }),
});

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Schema
        schema={schema}
        onSubmit={(schema) => {
          const serialized = serializeSchema(schema);
          console.log(serialized);
          console.log(format(schema));
        }}
      />
    </>
  );
}
