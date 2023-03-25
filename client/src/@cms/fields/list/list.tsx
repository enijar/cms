import React from "react";
import pluralize from "pluralize";
import { capitalCase } from "change-case";
import { ListWrapper } from "@/@cms/fields/list/list.styles";
import Accordion from "@/@cms/components/accordion/accordion";
import Fields from "@/@cms/components/fields/fields";
import { ListField } from "@/@cms";
import Button from "@/@cms/components/button/button";
import Label from "@/@cms/components/label/label";

type Props = {
  field: ListField;
};

export default function List({ field }: Props) {
  const [value, setValue] = React.useState<ListField["value"]>([
    ...field.value,
  ]);

  const [openIndex, setOpenIndex] = React.useState(-1);

  return (
    <ListWrapper>
      <Label text={pluralize(field.name, 0)} />
      {value.map((fields, index) => {
        const n = index + 1;
        const title = `${n}. Edit ${capitalCase(pluralize(field.name, 1))}`;
        return (
          <Accordion
            key={index}
            title={title}
            open={openIndex === index}
            onOpenChange={(open) => {
              if (!open) return;
              setOpenIndex(index);
            }}
          >
            <Fields key={index} schema={fields} />
          </Accordion>
        );
      })}
      <div>
        <Button
          onClick={() => {
            field.add();
            const value = [...field.value];
            setValue(value);
            setOpenIndex(value.length - 1);
          }}
        >
          Add {pluralize(field.name, 1)}
        </Button>
      </div>
    </ListWrapper>
  );
}
