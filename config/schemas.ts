import { createSchema, fields } from "../client/src/cms";

export const home = createSchema({
  title: fields.text(),
  description: fields.richText(),
  person: fields.group({
    name: fields.text(),
    bio: fields.richText(),
    skinTone: fields.color(),
    partner: fields.group({
      name: fields.text(),
      bio: fields.richText(),
      friends: fields.list({
        name: fields.text(),
        info: fields.group({
          dob: fields.datetime(),
          height: fields.text(),
        }),
      }),
    }),
  }),
  locations: fields.list({
    address: fields.text(),
    info: fields.richText(),
  }),
});

export const about = createSchema({
  title: fields.text(),
  description: fields.richText(),
});
