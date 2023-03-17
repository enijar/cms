import styled from "styled-components";
import { FieldWrapper } from "@/@cms/fields/field.styles";

export const ListHeader = styled.button`
  //
`;

export const ListBodyInner = styled.div`
  padding: 0.5em;
  border: 0.1em dashed #ffffff;
  border-block-start: none;
  margin-block-start: -1em;
`;

export const ListBody = styled.div`
  --open: 0;
  --scroll-height: 0px;
  overflow: hidden;
  max-height: calc(var(--scroll-height) * var(--open));
  margin-block-start: -0.25em;
`;

export const ListWrapper = styled(FieldWrapper)`
  //
`;
