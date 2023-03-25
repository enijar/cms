import React from "react";
import pluralize from "pluralize";
import { capitalCase } from "change-case";
import { ListWrapper } from "@/@cms/fields/list/list.styles";
import Accordion, { AccordionApi } from "@/@cms/components/accordion/accordion";
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

  const accordionRef = React.useRef<AccordionApi | null>(null);

  return (
    <ListWrapper>
      <Label text={pluralize(field.name, 0)} />
      <Accordion
        ref={accordionRef}
        items={value.map((fields, index) => {
          const n = index + 1;
          return {
            title: `${n}. Edit ${capitalCase(pluralize(field.name, 1))}`,
            children: <Fields key={index} schema={fields} />,
          };
        })}
      />
      <div>
        <Button
          onClick={() => {
            field.add();
            const value = [...field.value];
            setValue(value);
            accordionRef.current?.open(value.length - 1);
          }}
        >
          Add {pluralize(field.name, 1)}
        </Button>
      </div>
    </ListWrapper>
  );
}
