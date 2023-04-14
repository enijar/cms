import React from "react";
import { ColorField } from "@/../../shared/types";
import { ColorOutput, ColorWrapper } from "@/fields/color/color.styles";
import Label from "@/components/label/label";

type Props = {
  field: ColorField;
};

export default function Color({ field }: Props) {
  const [value, setValue] = React.useState<ColorField["value"]>(field.value);
  const outputRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const output = outputRef.current;
    if (output === null) return;
    output.style.setProperty("--color", value);
  }, [value]);

  return (
    <ColorWrapper>
      <Label text={field.name} />
      <ColorOutput ref={outputRef}>
        <input
          value={value}
          name={field.name}
          type="color"
          onChange={(event) => {
            field.setValue(event.target.value);
            setValue(field.value);
          }}
        />
      </ColorOutput>
    </ColorWrapper>
  );
}
