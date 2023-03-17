import React from "react";
import { SchemaField } from "@/@cms/types";

type Field = {
  id: string;
  name: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function useField(
  schemaField: SchemaField,
  onChange: (schemaField: SchemaField) => void
): Field {
  const onChangeRef = React.useRef(onChange);
  React.useMemo(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const [value, setValue] = React.useState(schemaField.value);

  React.useEffect(() => {
    schemaField.value = value;
    onChangeRef.current(schemaField);
  }, [schemaField, value]);

  const id = React.useId();

  const label = React.useMemo(() => {
    return schemaField.options?.label ?? schemaField.name;
  }, [schemaField.options?.label, schemaField.name]);

  return React.useMemo(() => {
    return {
      id,
      name: schemaField.name,
      label,
      value,
      setValue,
    };
  }, [id, schemaField.name, label, value, setValue]);
}
