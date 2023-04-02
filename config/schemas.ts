import { createSchema, fields } from "../client/src/cms";

export const home = createSchema({
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
