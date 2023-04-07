import type { Request, Response } from "express";
import { z } from "zod";
import Content from "../models/content";

const schema = z.object({
  name: z.string().min(1),
  data: z.any(),
});

export default async function content(req: Request, res: Response) {
  try {
    const input = schema.parse(req.body);
    const content = await Content.findOne({ where: { name: input.name } });
    if (content === null) {
      return res.status(404).json({ errors: { server: "Not found" } });
    }
    await content.update({ data: input.data });
    res.status(200).json({ messages: { server: "Content saved" } });
  } catch (err) {
    console.error(err);
    res.status(422).json({ errors: { server: "Bad request" } });
  }
}
