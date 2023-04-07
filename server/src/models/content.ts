import { Column, DataType, Model, Table } from "sequelize-typescript";
import { SchemaData } from "../../../shared/types";

@Table({ tableName: "content" })
export default class Content extends Model {
  @Column({ unique: true })
  name!: string;

  @Column({ type: DataType.JSON })
  data?: SchemaData;
}
