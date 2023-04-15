import React from "react";
import { Link } from "react-router-dom";
import { capitalCase } from "change-case";
import * as schemas from "@/../../config/schemas";
import Table from "@/cms/components/table/table";

export default function ContentList() {
  const schemaNames = React.useMemo(() => {
    return Object.keys(schemas);
  }, [schemas]);

  return (
    <>
      <Table
        headers={["Content"]}
        rows={schemaNames.map((name, index) => {
          return [
            <div key={index}>
              <Link to={`/content/${name}`}>{capitalCase(name)}</Link>
            </div>,
          ];
        })}
      />
    </>
  );
}
