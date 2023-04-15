import React from "react";
import { AccordionWrapper } from "@/components/accordion/accordion-styles";
import AccordionItem from "@/components/accordion/accordion-item";

type Props = {
  items: Array<{
    title: string;
    children?: React.ReactNode;
  }>;
  onRemove: (index: number) => void;
  onReOrder: (index: number, newIndex: number) => void;
};

export type AccordionApi = {
  open: (index: number) => void;
};

function Accordion(
  { items, onRemove, onReOrder }: Props,
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
            onReOrder={(dir) => {
              if (dir === -1 && index === 0) return;
              if (dir === 1 && index === items.length - 1) return;
              const newIndex = index + dir;
              onReOrder(index, newIndex);
            }}
            title={item.title}
            children={item.children}
          />
        );
      })}
    </AccordionWrapper>
  );
}

export default React.forwardRef(Accordion);
