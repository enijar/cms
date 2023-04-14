import type { Request, Response } from "express";
import { Op, WhereOptions } from "sequelize";
import Content from "../../models/content";

type Params = {
  idOrName: string;
};

export default async function getContent(req: Request<Params>, res: Response) {
  try {
    const or: WhereOptions[] = [];
    const maybeId = parseInt(req.params.idOrName);
    if (!isNaN(maybeId)) {
      or.push({ id: maybeId });
    } else {
      or.push({ name: req.params.idOrName });
    }
    const content = await Content.findOne({ where: { [Op.or]: or } });
    if (content === null) {
      return res.status(404).json({ errors: { server: "Not found" } });
    }
    res.status(200).json(content.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: { server: "Server error" } });
  }
}
