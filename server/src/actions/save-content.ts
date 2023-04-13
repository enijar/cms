import { z } from "zod";
import { Op, WhereOptions } from "sequelize";
import Content from "../models/content";
import trpc from "../services/trpc";

const saveContent = trpc.procedure
  .input(
    z.object({
      id: z.number().min(1).optional(),
      name: z.string().min(1).optional(),
      data: z.any(),
    })
  )
  .mutation(async ({ input }) => {
    try {
      const or: WhereOptions[] = [];
      if (input.id !== undefined) {
        or.push({ id: input.id });
      }
      if (input.name !== undefined) {
        or.push({ name: input.name });
      }
      const content = await Content.findOne({ where: { [Op.or]: or } });
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
