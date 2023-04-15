import styled from "styled-components";
import { FieldWrapper } from "@/cms/fields/field.styles";

export const ColorOutput = styled.div`
  --color: #000000;
  --size: 2em;
  width: var(--size);
  height: var(--size);
  background-color: var(--color);
  border: 1px solid #777777;
  position: relative;
  z-index: 0;
  cursor: pointer;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }
`;

export const ColorWrapper = styled(FieldWrapper)`
  //
`;
