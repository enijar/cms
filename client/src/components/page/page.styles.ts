import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 0.5em;
`;

export const PageWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-template-columns: max-content 1fr;
`;
