import React from "react";
import { Route } from "react-router-dom";
import Pages from "@/cms/components/pages/pages";

const Example = React.lazy(() => import("@/pages/example"));

export default function App() {
  return (
    <Pages>
      <Route path="/example" element={<Example />} />
    </Pages>
  );
}
