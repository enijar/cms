import React from "react";
import { DatetimeField } from "@/../../shared/types";
import { DatetimeWrapper } from "@/fields/datetime/datetime.styles";
import Label from "@/components/label/label";

type Props = {
  field: DatetimeField;
};

export default function Datetime({ field }: Props) {
  const [value, setValue] = React.useState<DatetimeField["value"]>(field.value);

  return (
    <DatetimeWrapper>
      <Label text={field.name} />
      <input
        value={value}
        name={field.name}
        type="datetime-local"
        onChange={(event) => {
          field.setValue(event.target.value);
          setValue(field.value);
        }}
      />
    </DatetimeWrapper>
  );
}
