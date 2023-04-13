import React from "react";
import { home } from "@/../../config/schemas";
import trpc from "@/services/trpc";
import { schemaData } from "@/cms";
import Schema from "@/components/schema/schema";

export default function Content() {
  const content = trpc.getContent.useQuery({ name: "home" });
  const saveContent = trpc.saveContent.useMutation();

  if (content.isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>Content</h1>
      <Schema
        disabled={saveContent.isLoading}
        schema={home}
        data={content.data as any}
        onSubmit={(schema) => {
          if (saveContent.isLoading) return;
          saveContent.mutate({ name: "home", data: schemaData(schema) });
        }}
      />
    </>
  );
}
