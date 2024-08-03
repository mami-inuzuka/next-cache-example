import { getItem } from "@/app/_lib/getItem";
import React from "react";

export const ServerComponent = async () => {
  const result = await getItem();

  return <section>{result.timestamp}</section>;
};
