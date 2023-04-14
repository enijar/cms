import React from "react";
import pluralize from "pluralize";
import { capitalCase } from "change-case";
import { ListField } from "@/../../shared/types";
import { ListWrapper } from "@/fields/list/list.styles";
import Accordion, { AccordionApi } from "@/components/accordion/accordion";
import Fields from "@/components/fields/fields";
import Button from "@/components/button/button";
import Label from "@/components/label/label";
import { subscription } from "@/cms";

type Props = {
  field: ListField;
};

export default function List({ field }: Props) {
  const [value, setValue] = React.useState<ListField["value"]>([
    ...field.value,
  ]);

  const [resetKey, setResetKey] = React.useState(1);

  const itemTitles = React.useMemo<string[]>(() => {
    return value.map((fields) => {
      const key = field.options?.titleField as keyof typeof fields;
      const dynamicTitle = (fields[key]?.value ?? "") as string;
      return dynamicTitle.trim().length === 0 ? field.name : dynamicTitle;
    });
  }, [value, field, resetKey]);

  const accordionRef = React.useRef<AccordionApi | null>(null);

  React.useEffect(() => {
    return subscription.subscribe("change", () => {
      setResetKey((resetKey) => {
        return (resetKey + 1) % 1000;
      });
    });
  }, []);

  return (
    <ListWrapper>
      <Label text={pluralize(field.name, 0)} />
      {value.length === 0 && <>No {pluralize(field.name, 0)}</>}
      <Accordion
        ref={accordionRef}
        onRemove={(index) => {
          field.remove(index);
          const value = [...field.value];
          setValue(value);
        }}
        items={value.map((fields, index) => {
          const n = index + 1;
          return {
            title: `${n}. ${capitalCase(pluralize(itemTitles[index], 1))}`,
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
