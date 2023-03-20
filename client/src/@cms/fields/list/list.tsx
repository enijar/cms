import React from "react";
import pluralize from "pluralize";
import { ListWrapper } from "@/@cms/fields/list/list.styles";
import Accordion from "@/@cms/components/accordion/accordion";
import Fields from "@/@cms/components/fields/fields";
import { ListField } from "@/@cms";
import Button from "@/@cms/components/button/button";
import Label from "@/@cms/components/label/label";
import { capitalCase } from "change-case";

type Props = {
  field: ListField;
};

export default function List({ field }: Props) {
  const [value, setValue] = React.useState<ListField["value"]>([
    ...field.value,
  ]);

  return (
    <ListWrapper>
      <Label text={pluralize(field.name, 0)} />
      {value.map((fields, index) => {
        const n = index + 1;
        const title = `${n}. Edit ${capitalCase(pluralize(field.name, 1))}`;
        return (
          <Accordion key={index} title={title}>
            <Fields key={index} schema={fields} />
          </Accordion>
        );
      })}
      <div>
        <Button
          onClick={() => {
            field.add();
            setValue([...field.value]);
          }}
        >
          Add {pluralize(field.name, 1)}
        </Button>
      </div>
    </ListWrapper>
  );
}
