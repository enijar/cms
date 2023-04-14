import { Column, Index, Model, Table, Unique } from "sequelize-typescript";

@Table({ tableName: "users" })
export default class User extends Model {
  @Index
  @Unique({ name: "email", msg: "cdkey_should_be_unique" })
  @Column
  email!: string;

  @Column
  password?: string;

  toJSON<T extends User["_attributes"]>() {
    const data = super.toJSON<User>();
    delete data.password;
    return data;
  }
}
