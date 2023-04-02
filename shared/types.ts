export type Field = {
  type: "text" | "richText" | "list" | "group";
  name: string;
};

export type TextField = Field & {
  value: string;
  setValue: (value: TextField["value"]) => void;
};

export type RichTextField = Field & {
  value: string;
  setValue: (value: RichTextField["value"]) => void;
};

export type ListField = Field & {
  fields: Fields;
  value: Fields[];
  setValue: (value: ListField["value"]) => void;
  add: () => void;
  remove: (index: number) => void;
};

export type GroupField = Field & {
  value: Fields;
  setValue: (value: GroupField["value"]) => void;
};

export type AllFields = TextField | RichTextField | ListField | GroupField;

export type Fields = {
  [name: string]: AllFields;
};

export type Schema = {
  [name: string]: AllFields;
};
