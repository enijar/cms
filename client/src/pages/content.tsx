import React from "react";
import Schema from "@/components/schema/schema";
import { deserializeSchema, schemaData } from "@/cms";
import { home } from "@/../../config/schemas";

export default function Content() {
  return (
    <>
      <h1>Content</h1>
      <Schema
        schema={home}
        data={schemaData(
          deserializeSchema(
            `{"title":{"type":"text","name":"title","value":"t1"},"description":{"type":"richText","name":"description","value":"<p>t2</p>\\n"},"person":{"type":"group","name":"person","value":{"name":{"type":"text","name":"text","value":"t3"},"bio":{"type":"richText","name":"richText","value":"<p>t4</p>\\n"}}},"locations":{"type":"list","name":"locations","fields":{"address":{"type":"text","name":"text","value":""},"info":{"type":"richText","name":"richText","value":""}},"value":[{"address":{"type":"text","name":"address","value":"t5"},"info":{"type":"richText","name":"info","value":"<p>t6</p>\\n"}}]}}`
          )
        )}
        onSubmit={(schema) => {
          console.log(schemaData(schema));
        }}
      />
    </>
  );
}
