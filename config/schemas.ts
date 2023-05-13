import { createSchema, fields } from "../client/src/cms/cms";

export const pages = createSchema({
  pages: fields.list(
    {
      name: fields.text(),
      title: fields.text(),
    },
    { titleField: "name" }
  ),
});
