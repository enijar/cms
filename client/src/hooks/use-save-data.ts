import React from "react";
import { SchemaData } from "@/../../shared/types";
import config from "@/config";

export default function useSaveData(name: string) {
  const [data, setData] = React.useState<SchemaData | null>(null);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (data === null) return;
    setSaving(true);
    fetch(`${config.apiUrl}/api/content`, {
      method: "post",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, data }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setSaving(false);
      });
  }, [data, name]);

  return React.useMemo(() => {
    return {
      save: setData,
      saving,
    };
  }, [setData, saving]);
}
