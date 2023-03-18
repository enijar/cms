import React from "react";
import pluralize from "pluralize";
import { ListWrapper } from "@/@cms/fields/list/list.styles";
import Accordion from "@/@cms/components/accordion/accordion";
import Fields from "@/@cms/components/fields/fields";
import { ListField } from "@/@cms";
import Button from "@/@cms/components/button/button";

type Props = {
  field: ListField;
};

export default function List({ field }: Props) {
  const [value, setValue] = React.useState<ListField["value"]>([
    ...field.value,
  ]);

  return (
    <ListWrapper>
      <Accordion title={pluralize(field.name, 0)}>
        {value.map((fields, index) => {
          return <Fields key={index} schema={fields} />;
        })}
        <Button
          onClick={() => {
            field.add();
            setValue([...field.value]);
          }}
        >
          Add {pluralize(field.name, 1)}
        </Button>
      </Accordion>
    </ListWrapper>
  );
}
