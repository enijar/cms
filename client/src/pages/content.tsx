import React from "react";
import { useParams } from "react-router-dom";
import * as schemas from "@/../../config/schemas";
import trpc from "@/services/trpc";
import { schemaData } from "@/cms";
import Schema from "@/components/schema/schema";

type Params = {
  name: string;
};

export default function Content() {
  const { name } = useParams<Params>();
  const content = trpc.getContent.useQuery({ name: name! });
  const saveContent = trpc.saveContent.useMutation();

  if (content.isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>Content</h1>
      <Schema
        disabled={saveContent.isLoading}
        schema={schemas.home}
        data={content.data as any}
        onSubmit={(schema) => {
          if (saveContent.isLoading) return;
          saveContent.mutate({ name: name!, data: schemaData(schema) });
        }}
      />
    </>
  );
}
