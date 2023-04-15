import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  padding-block: 0.5em;

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

  --background: #2e2e2e;
  --border: #777777;
  --color: #ffffff;

  .rdw-editor-wrapper,
  .rdw-editor-toolbar,
  input,
  textarea,
  button {
    border-radius: 0 !important;
    background-color: var(--background) !important;
    border: 1px solid var(--border) !important;
    color: var(--color);
  }

  .rdw-editor-toolbar {
    border: none !important;
    border-bottom: 1px solid var(--border) !important;
  }

  .rdw-option-active {
    background-color: #000000 !important;
  }

  .rdw-option-wrapper,
  .rdw-dropdown-wrapper,
  .rdw-dropdown-optionwrapper {
    background-color: var(--background) !important;
    border: 1px solid var(--border) !important;
    color: var(--color) !important;

    img {
      filter: invert(1);
    }
  }

  .rdw-dropdownoption-active,
  .rdw-dropdownoption-highlighted {
    background-color: #444444 !important;
  }

  .rdw-dropdown-carettoopen {
    border-top-color: var(--color) !important;
  }

  .rdw-dropdown-carettoclose {
    border-bottom-color: var(--color) !important;
  }

  .rdw-option-active {
    background-color: #000000 !important;
  }

  .rdw-colorpicker-modal {
    background-color: var(--background) !important;
    border: 1px solid var(--border) !important;
    box-shadow: 3px 3px 5px var(--border) !important;
    left: auto !important;
    right: 5px !important;
  }

  input,
  textarea,
  button {
    padding: 0.25em 0.5em;
  }

  button {
    background-color: var(--background) !important;
    border: 1px solid var(--border) !important;
    color: var(--color) !important;
  }

  .rdw-editor-main {
    padding: 0.25em 0.5em !important;
    font-size: 1rem !important;
    max-height: 25em !important;
  }
`;
