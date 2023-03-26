import { ListField, RichTextField, TextField } from "@/../../shared/types";

export type AllFields = TextField | RichTextField | ListField;

export type Fields = {
  [name: string]: AllFields;
};

export type Schema = {
  [name: string]: AllFields;
};
