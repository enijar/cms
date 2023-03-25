import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Schema as SchemaType } from "@/../../shared/types";

@Table({ tableName: "schemas" })
export default class Schema extends Model {
  @Column({ defaultValue: DataType.UUIDV4, type: DataType.UUID, unique: true })
  uuid!: string;

  @Column({ type: DataType.JSON })
  schema!: SchemaType;
}
