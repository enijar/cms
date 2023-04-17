import React from "react";
import pluralize from "pluralize";
import { capitalCase } from "change-case";
import { ListField } from "@/../../shared/types";
import { ListWrapper } from "@/cms/fields/list/list.styles";
import Accordion, { AccordionApi } from "@/cms/components/accordion/accordion";
import Fields from "@/cms/components/fields/fields";
import Button from "@/cms/components/button/button";
import Label from "@/cms/components/label/label";
import { subscription, swap } from "@/cms/cms";

type Props = {
  field: ListField;
};

export default function List({ field }: Props) {
  const [value, setValue] = React.useState<ListField["value"]>([
    ...field.value,
  ]);

  const [resetKey, setResetKey] = React.useState(1);

  const itemTitles = React.useMemo<string[]>(() => {
    return value.map((fields, index) => {
      const key = field.options?.titleField as keyof typeof fields;
      const dynamicTitle = (fields[key]?.value ?? "") as string;
      let title = field.name;
      if (dynamicTitle.trim().length > 0) {
        title = dynamicTitle;
      }
      return title;
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

  const [orderKey, setOrderKey] = React.useState("");

  return (
    <ListWrapper>
      <Label text={pluralize(field.name, 0)} />
      {value.length === 0 && <>No {pluralize(field.name, 0)}</>}
      <Accordion
        key={orderKey}
        ref={accordionRef}
        onRemove={(index) => {
          field.remove(index);
          const value = [...field.value];
          setValue(value);
        }}
        onReOrder={(index, newIndex) => {
          const ordered = [...swap([...value], index, newIndex)];
          setValue([...ordered]);
          field.setValue([...ordered]);
          const indices = swap(
            value.map((_, i) => i),
            index,
            newIndex
          );
          setOrderKey(indices.join(""));
        }}
        items={value.map((fields, index) => {
          return {
            title: capitalCase(pluralize(itemTitles[index], 1)),
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
