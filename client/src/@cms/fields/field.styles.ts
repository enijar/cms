import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-block: 1em;

  fieldset {
    border-style: dashed;
    border-width: 0.1em;
    padding: 0.5em;

    legend {
      background-color: #ffffff;
      color: #000000;
      padding: 0.25em 0.5em;
      margin-inline-start: 0.5em;
    }
  }

  label {
    font-size: 0.75em;
  }

  .rdw-editor-wrapper,
  input,
  textarea {
    background-color: #ffffff;
    color: #000000;
  }

  .rdw-editor-main {
    padding-inline: 1em;
    font-size: 0.75em;
    max-height: 50ch;
  }

  button {
    appearance: none;
    border: none;
    background-color: #ffffff;
    color: #000000;
    padding: 0.25em 0.5em;
    cursor: pointer;
  }
`;
