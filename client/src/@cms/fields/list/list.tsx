import React from "react";
import { ListWrapper } from "@/@cms/fields/list/list.styles";
import Accordion from "@/components/accordion/accordion";
import Fields from "@/@cms/fields/fields";
import { ListField } from "@/@cms/cms";

type Props = {
  field: ListField;
};

export default function List({ field }: Props) {
  const [value, setValue] = React.useState<ListField["value"]>([
    ...field.value,
  ]);

  return (
    <ListWrapper>
      <Accordion title={field.name}>
        {value.map((fields, index) => {
          return <Fields key={index} schema={fields} />;
        })}
        <button
          onClick={() => {
            field.add();
            setValue([...field.value]);
          }}
        >
          Add {field.name}
        </button>
      </Accordion>
    </ListWrapper>
  );
}
