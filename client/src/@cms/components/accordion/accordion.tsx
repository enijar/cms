import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionInner,
  AccordionWrapper,
} from "@/@cms/components/accordion/accordion-styles";

type Props = {
  title: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange: (open: Props["open"]) => void;
};

export default function Accordion({
  title,
  children,
  open = false,
  onOpenChange,
}: Props) {
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onOpenChangeRef = React.useRef(onOpenChange);

  React.useEffect(() => {
    onOpenChangeRef.current(isOpen);
  }, [isOpen]);

  React.useLayoutEffect(() => {
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
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggle}>{title}</AccordionHeader>
      <AccordionBody ref={bodyRef}>
        <AccordionInner>{children}</AccordionInner>
      </AccordionBody>
    </AccordionWrapper>
  );
}
