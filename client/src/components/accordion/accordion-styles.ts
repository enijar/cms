import styled from "styled-components";

export const AccordionItemInner = styled.div`
  padding: 0.5em 1em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-block-start: none;
`;

export const AccordionItemBody = styled.div`
  --open: 0;
  --scroll-height: 0px;
  overflow: hidden;
  max-height: calc(var(--scroll-height) * var(--open));
`;

export const AccordionItemHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: 500;
`;

export const AccordionItemWrapper = styled.div`
  //
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
`;
