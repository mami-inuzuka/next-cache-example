"use client";

import { getItem, Todo } from "@/app/_lib/getItem";
import { useEffect, useState } from "react";

export const ClientComponent = () => {
  const [result, setResult] = useState<Todo | null>(null);

  useEffect(() => {
    getItem().then((result) => {
      setResult(result);
    });
  }, []);

  if (!result) return <section>Loading...</section>;

  return <section>{result.timestamp}</section>;
};
