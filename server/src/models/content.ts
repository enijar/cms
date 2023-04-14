import {
  Column,
  DataType,
  Index,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";
import { SchemaData } from "../../../shared/types";

@Table({ tableName: "content" })
export default class Content extends Model {
  @Index
  @Unique({ name: "name", msg: "cdkey_should_be_unique" })
  @Column
  name!: string;

  @Column({ type: DataType.JSON })
  data?: SchemaData;
}
