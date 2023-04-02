import React from "react";
import { AccordionWrapper } from "@/components/accordion/accordion-styles";
import AccordionItem from "@/components/accordion/accordion-item";

type Props = {
  items: Array<{
    title: string;
    children?: React.ReactNode;
  }>;
  onRemove: (index: number) => void;
};

export type AccordionApi = {
  open: (index: number) => void;
};

function Accordion(
  { items, onRemove }: Props,
  ref: React.ForwardedRef<AccordionApi | null>
) {
  const [openIndex, setOpenIndex] = React.useState(-1);

  React.useImperativeHandle(ref, () => {
    return {
      open(index) {
        setOpenIndex(index);
      },
    };
  });

  return (
    <AccordionWrapper>
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            open={index === openIndex}
            onOpen={() => setOpenIndex(index)}
            onClose={() => setOpenIndex(-1)}
            onRemove={() => onRemove(index)}
            title={item.title}
            children={item.children}
          />
        );
      })}
    </AccordionWrapper>
  );
}

export default React.forwardRef(Accordion);
