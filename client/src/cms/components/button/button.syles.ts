import styled from "styled-components";

export const ButtonWrapper = styled.button`
  appearance: none;
  background-color: #2e2e2e;
  color: #ffffff;
  padding: 0.25em 0.5em;
  cursor: pointer;
  border: 1px solid #777777;

  &[disabled] {
    background-color: #404040;
    cursor: not-allowed;
  }
`;
