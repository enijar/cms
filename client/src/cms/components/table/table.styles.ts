import styled from "styled-components";

type RowProps = {
  columns?: number;
};

export const TableRow = styled.div<RowProps>`
  padding: 0.5em;
  display: grid;
  gap: 1em;
  grid-template-columns: ${({ columns = 0 }) => {
    return Array.from(Array(columns))
      .map(() => "1fr")
      .join(" ");
  }};
`;

export const TableCol = styled.div`
  //
`;

export const TableHead = styled.div`
  ${TableRow} {
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const TableBody = styled.div`
  ${TableRow} {
    background-color: rgba(255, 255, 255, 0.1);

    :nth-last-of-type(odd) {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TableWrapper = styled.div`
  //
`;
