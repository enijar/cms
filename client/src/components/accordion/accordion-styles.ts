import styled from "styled-components";

export const AccordionInner = styled.div`
  padding: 0.5em 1em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-block-start: none;
`;

export const AccordionBody = styled.div`
  --open: 0;
  --scroll-height: 0px;
  overflow: hidden;
  max-height: calc(var(--scroll-height) * var(--open));
`;

export const AccordionHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: 500;
`;

export const AccordionWrapper = styled.div`
  //
`;
