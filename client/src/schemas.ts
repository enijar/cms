import { createSchema } from "@/@cms";

export const homeSchema = createSchema((fields) => {
  return {
    title: fields.text(),
    description: fields.richText(),
    image: fields.image(),
    people: fields.list({
      name: fields.text(),
      picture: fields.image(),
      // friends: fields.list({
      //   name: fields.text(),
      //   bio: fields.richText(),
      // }),
    }),
  };
});
