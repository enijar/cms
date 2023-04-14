import React from "react";
import {
  AccordionItemBody,
  AccordionItemHeader,
  AccordionItemInner,
  AccordionItemReOrderingArrows,
  AccordionItemWrapper,
} from "@/components/accordion/accordion-styles";

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onRemove: () => void;
  onReOrder: (dir: -1 | 1) => void;
  title: string;
  children?: React.ReactNode;
};

export default function AccordionItem({
  open,
  onOpen,
  onClose,
  onRemove,
  onReOrder,
  title,
  children,
}: Props) {
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

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

  React.useLayoutEffect(() => {
    const body = bodyRef.current;
    if (body === null) return;
    body.style.setProperty("--open", `${open ? 1 : 0}`);
  }, [open]);

  const reOrder = React.useCallback(
    (dir: -1 | 1) => {
      return (event: React.MouseEvent) => {
        event.stopPropagation();
        onReOrder(dir);
      };
    },
    [onReOrder]
  );

  return (
    <AccordionItemWrapper>
      <AccordionItemHeader onClick={open ? onClose : onOpen}>
        <span>
          <AccordionItemReOrderingArrows>
            <svg
              onClick={reOrder(-1)}
              enableBackground="new 0 0 20 28"
              viewBox="0 0 20 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 26v-19.2l4.6 4.6c.4.4.9.6 1.4.6 1 0 2-.8 2-2 0-.5-.2-1-.6-1.4l-8-8c-.3-.3-.7-.6-1.4-.6s-1.1.3-1.4.6l-8 8c-.4.4-.6.9-.6 1.4 0 1.2 1 2 2 2 .5 0 1-.2 1.4-.6l4.6-4.6v19.2c0 1.1.9 2 2 2s2-.9 2-2z" />
            </svg>
            <svg
              onClick={reOrder(1)}
              enableBackground="new 0 0 20 28"
              viewBox="0 0 20 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 26v-19.2l4.6 4.6c.4.4.9.6 1.4.6 1 0 2-.8 2-2 0-.5-.2-1-.6-1.4l-8-8c-.3-.3-.7-.6-1.4-.6s-1.1.3-1.4.6l-8 8c-.4.4-.6.9-.6 1.4 0 1.2 1 2 2 2 .5 0 1-.2 1.4-.6l4.6-4.6v19.2c0 1.1.9 2 2 2s2-.9 2-2z" />
            </svg>
          </AccordionItemReOrderingArrows>
          <span>{title}</span>
        </span>
        <button
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
        >
          Remove
        </button>
      </AccordionItemHeader>
      <AccordionItemBody ref={bodyRef}>
        <AccordionItemInner>{children}</AccordionItemInner>
      </AccordionItemBody>
    </AccordionItemWrapper>
  );
}
