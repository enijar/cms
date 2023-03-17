import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionInner,
  AccordionWrapper,
} from "@/components/accordion/accordion-styles";

type Props = {
  title: React.ReactNode;
  children?: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
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
    setOpen((open) => !open);
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
