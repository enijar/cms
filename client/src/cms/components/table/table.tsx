import React from "react";
import {
  TableBody,
  TableCol,
  TableContainer,
  TableHead,
  TableRow,
  TableWrapper,
} from "@/cms/components/table/table.styles";

type Props = {
  headers?: string[];
  rows: React.ReactNode[][];
};

export default function Table({ headers, rows }: Props) {
  return (
    <TableWrapper>
      <TableContainer>
        <TableHead>
          <TableRow columns={(headers ?? []).length}>
            {(headers ?? []).map((header, index) => {
              return <TableCol key={index}>{header}</TableCol>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((columns, index) => {
            return (
              <TableRow key={index} columns={columns.length}>
                {columns.map((column, index) => {
                  return <TableCol key={index}>{column}</TableCol>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </TableWrapper>
  );
}
