import React from "react";
import { capitalCase } from "change-case";
import { GroupField } from "@/../../shared/types";
import { GroupWrapper } from "@/cms/fields/group/group.styles";
import Label from "@/cms/components/label/label";
import Fields from "@/cms/components/fields/fields";

type Props = {
  field: GroupField;
};

export default function Group({ field }: Props) {
  return (
    <GroupWrapper>
      <Label text={capitalCase(field.name)} />
      <Fields schema={field.value} />
    </GroupWrapper>
  );
}
