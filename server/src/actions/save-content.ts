import { z } from "zod";
import Content from "../models/content";
import trpc from "../services/trpc";

const saveContent = trpc.procedure
  .input(
    z.object({
      name: z.string().min(1),
      data: z.any(),
    })
  )
  .mutation(async ({ input }) => {
    try {
      const [content] = await Content.findOrCreate({
        where: { name: input.name },
      });
      if (content === null) {
        return false;
      }
      await content.update({ data: input.data });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  });

export default saveContent;
