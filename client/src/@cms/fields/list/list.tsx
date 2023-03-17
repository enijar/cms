import React from "react";
import {
  ListBody,
  ListBodyInner,
  ListHeader,
  ListWrapper,
} from "@/@cms/fields/list/list.styles";
import { SchemaField } from "@/@cms/types";
import useField from "@/@cms/hooks/use-field";
import SchemaFields from "@/@cms/schema/schema-fields";

type Props = {
  schemaField: SchemaField;
  onChange: (schemaField: SchemaField) => void;
};

export default function List({ schemaField, onChange }: Props) {
  const field = useField(schemaField, onChange);

  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const body = bodyRef.current;
    if (body === null) return;
    body.style.setProperty("--open", `${open ? 1 : 0}`);
  }, [open]);

  React.useEffect(() => {
    const body = bodyRef.current;
    if (body === null) return;
    let nextFrame: number;
    (function tick() {
      nextFrame = requestAnimationFrame(tick);
      body.style.setProperty("--scroll-height", `${body.scrollHeight}px`);
    })();
    return () => {
      cancelAnimationFrame(nextFrame);
    };
  }, []);

  const toggle = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const add = React.useCallback(() => {
    console.log("todo: add");
  }, []);

  return (
    <ListWrapper>
      <ListHeader onClick={toggle}>{field.label}</ListHeader>
      <ListBody ref={bodyRef}>
        <ListBodyInner>
          {schemaField.schema !== undefined && (
            <SchemaFields schema={schemaField.schema!} />
          )}
          <button onClick={add}>New Item</button>
        </ListBodyInner>
      </ListBody>
    </ListWrapper>
  );
}
