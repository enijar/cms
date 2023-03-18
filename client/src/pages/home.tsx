import React from "react";
import { createSchema, fields, serializeSchema } from "@/@cms";
import Fields from "@/@cms/fields/fields";

const schema = createSchema({
  title: fields.text(),
  description: fields.richText(),
  locations: fields.list({
    address: fields.text(),
    info: fields.richText(),
  }),
});

export default function Home() {
  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      if (key === "enter") {
        console.log(serializeSchema(schema));
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <Fields schema={schema} />
    </main>
  );
}
