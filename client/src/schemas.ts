import { createSchema } from "@/@cms";

export const homeSchema = createSchema((fields) => {
  return {
    title: fields.text({ label: "Title" }),
    description: fields.richText({ label: "Description" }),
    image: fields.image({ label: "Image" }),
    items: fields.list(
      {
        title: fields.text({ label: "Item Title" }),
        image: fields.image({ label: "Image" }),
        subItems: fields.list(
          {
            title: fields.text({ label: "Sub-item Title" }),
            description: fields.richText({ label: "Sub-item Description" }),
          },
          { label: "Sub-items" }
        ),
      },
      { label: "Items" }
    ),
  };
});
