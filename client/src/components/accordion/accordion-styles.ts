import styled from "styled-components";

export const AccordionItemInner = styled.div`
  padding: 0.5em;
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
  padding: 0.5em;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 0.6em;
    cursor: pointer;
  }

  > span {
    display: flex;
    gap: 1ch;
  }
`;

export const AccordionItemReOrderingArrows = styled.div`
  display: flex;
  gap: 0.25em;

  svg {
    height: 1em;
    aspect-ratio: 1 / 1;

    path {
      fill: #ffffff;
    }

    :last-child {
      transform: rotate(180deg);
    }
  }
`;

export const AccordionItemWrapper = styled.div`
  //
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
`;
