import { z } from "zod";
import * as schemas from "@/../../config/schemas";
import Content from "../models/content";
import trpc from "../services/trpc";

const getContent = trpc.procedure
  .input(z.object({ name: z.string().min(1) }))
  .query(async ({ input }) => {
    try {
      const schemaNames = Object.keys(schemas);
      if (!schemaNames.includes(input.name)) {
        return false;
      }
      const [content] = await Content.findOrCreate({
        where: { name: input.name },
      });
      if (content === null) {
        return false;
      }
      return content.data ?? null;
    } catch (err) {
      console.error(err);
      return false;
    }
  });

export default getContent;
