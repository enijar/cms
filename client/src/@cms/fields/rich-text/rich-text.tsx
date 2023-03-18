import React from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import useField from "@/@cms/hooks/use-field";
import { RichTextWrapper } from "@/@cms/fields/rich-text/rich-text.styles";
import { SchemaField } from "@/@cms/types";

type Props = {
  schemaField: SchemaField;
  onChange: (schemaField: SchemaField) => void;
};

export default function RichText({ schemaField, onChange }: Props) {
  const field = useField(schemaField, onChange);

  const editorState = React.useMemo(() => {
    return EditorState.createWithContent(
      ContentState.createFromBlockArray(htmlToDraft(field.value).contentBlocks)
    );
  }, [field.value]);

  return (
    <RichTextWrapper>
      <label>{field.label.formatted}</label>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={(editorState) => {
          field.setValue(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          );
        }}
      />
    </RichTextWrapper>
  );
}
