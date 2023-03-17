import React from "react";
import { homeSchema } from "@/schemas";
import SchemaFields from "@/@cms/schema/schema-fields";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <SchemaFields schema={homeSchema} />
    </main>
  );
}
