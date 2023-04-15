import React from "react";
import {
  ColorField,
  DatetimeField,
  GroupField,
  ListField,
  RichTextField,
  Schema,
  TextField,
} from "@/../../shared/types";
import { FieldsWrapper } from "@/cms/components/fields/fields.styles";
import { schemaToFields } from "@/cms/cms";
import Text from "@/cms/fields/text/text";
import RichText from "@/cms/fields/rich-text/rich-text";
import Color from "@/cms/fields/color/color";
import Datetime from "@/cms/fields/datetime/datetime";
import List from "@/cms/fields/list/list";
import Group from "@/cms/fields/group/group";

type Props = {
  schema: Schema;
};

export default function Fields({ schema }: Props) {
  const fields = React.useMemo(() => {
    return schemaToFields(schema);
  }, [schema]);

  return (
    <FieldsWrapper>
      {fields.map((field, index) => {
        switch (field.type) {
          case "text":
            return <Text key={index} field={field as TextField} />;
          case "richText":
            return <RichText key={index} field={field as RichTextField} />;
          case "color":
            return <Color key={index} field={field as ColorField} />;
          case "datetime":
            return <Datetime key={index} field={field as DatetimeField} />;
          case "list":
            return <List key={index} field={field as ListField} />;
          case "group":
            return <Group key={index} field={field as GroupField} />;
          default:
            return <React.Fragment key={index} />;
        }
      })}
    </FieldsWrapper>
  );
}
