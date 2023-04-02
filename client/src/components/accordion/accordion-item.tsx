import React from "react";
import {
  AccordionItemBody,
  AccordionItemHeader,
  AccordionItemInner,
  AccordionItemWrapper,
} from "@/components/accordion/accordion-styles";

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onRemove: () => void;
  title: string;
  children?: React.ReactNode;
};

export default function AccordionItem({
  open,
  onOpen,
  onClose,
  onRemove,
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

  return (
    <AccordionItemWrapper>
      <AccordionItemHeader onClick={open ? onClose : onOpen}>
        <span>{title}</span>
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
