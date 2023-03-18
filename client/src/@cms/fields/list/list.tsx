import React from "react";
import { ListWrapper } from "@/@cms/fields/list/list.styles";
import { SchemaField } from "@/@cms/types";
import useField from "@/@cms/hooks/use-field";
import SchemaFields from "@/@cms/schema/schema-fields";
import Accordion from "@/components/accordion/accordion";

type Props = {
  schemaField: SchemaField;
  onChange: (schemaField: SchemaField) => void;
};

export default function List({ schemaField, onChange }: Props) {
  const field = useField(schemaField, onChange);

  const add = React.useCallback(() => {
    console.log("todo: add", schemaField);
  }, []);

  return (
    <ListWrapper>
      <Accordion title={field.label.plural}>
        {schemaField.schema !== undefined && (
          <SchemaFields schema={schemaField.schema!} />
        )}
        <button onClick={add}>Add {field.label.singular}</button>
      </Accordion>
    </ListWrapper>
  );
}
