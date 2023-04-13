import { z } from "zod";
import { Op, WhereOptions } from "sequelize";
import Content from "../models/content";
import trpc from "../services/trpc";

const getContent = trpc.procedure
  .input(
    z.object({
      id: z.number().min(1).optional(),
      name: z.string().min(1).optional(),
    })
  )
  .query(async ({ input }) => {
    const or: WhereOptions[] = [];
    if (input.id !== undefined) {
      or.push({ id: input.id });
    }
    if (input.name !== undefined) {
      or.push({ name: input.name });
    }
    try {
      const content = await Content.findOne({ where: { [Op.or]: or } });
      if (content === null) {
        return null;
      }
      return content.data ?? null;
    } catch (err) {
      console.error(err);
      return null;
    }
  });

export default getContent;
