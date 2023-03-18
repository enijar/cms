import React from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { RichTextWrapper } from "@/@cms/fields/rich-text/rich-text.styles";
import { RichTextField } from "@/@cms";

type Props = {
  field: RichTextField;
};

export default function RichText({ field }: Props) {
  const [value, setValue] = React.useState<RichTextField["value"]>(field.value);

  const editorState = React.useMemo(() => {
    return EditorState.createWithContent(
      ContentState.createFromBlockArray(htmlToDraft(value).contentBlocks)
    );
  }, [value]);

  return (
    <RichTextWrapper>
      <label>{field.name}</label>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={(editorState) => {
          const value = draftToHtml(
            convertToRaw(editorState.getCurrentContent())
          );
          field.setValue(value);
          setValue(value);
        }}
      />
    </RichTextWrapper>
  );
}
