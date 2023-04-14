import React from "react";
import { Link } from "react-router-dom";
import { capitalCase } from "change-case";
import * as schemas from "@/../../config/schemas";

export default function ContentList() {
  const schemaNames = React.useMemo(() => {
    return Object.keys(schemas).reverse();
  }, [schemas]);

  return (
    <>
      <h1>Content</h1>
      {schemaNames.map((name, index) => {
        return (
          <div key={index}>
            <Link to={`/content/${name}`}>{capitalCase(name)}</Link>
          </div>
        );
      })}
    </>
  );
}
