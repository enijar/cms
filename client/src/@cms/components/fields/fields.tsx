import React from "react";
import {
  ListField,
  RichTextField,
  Schema,
  schemaToFields,
  TextField,
} from "@/@cms";
import Text from "@/@cms/fields/text/text";
import List from "@/@cms/fields/list/list";
import RichText from "@/@cms/fields/rich-text/rich-text";

type Props = {
  schema: Schema;
};

export default function Fields({ schema }: Props) {
  const fields = React.useMemo(() => {
    return schemaToFields(schema);
  }, [schema]);

  return (
    <>
      {fields.map((field, index) => {
        switch (field.type) {
          case "text":
            return <Text key={index} field={field as TextField} />;
          case "richText":
            return <RichText key={index} field={field as RichTextField} />;
          case "list":
            return <List key={index} field={field as ListField} />;
          default:
            return <React.Fragment key={index} />;
        }
      })}
    </>
  );
}
