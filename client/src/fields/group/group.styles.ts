import styled from "styled-components";
import { FieldWrapper } from "@/fields/field.styles";
import { FieldsWrapper } from "@/components/fields/fields.styles";

export const GroupWrapper = styled(FieldWrapper)`
  ${FieldsWrapper} {
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5em;
  }
`;
