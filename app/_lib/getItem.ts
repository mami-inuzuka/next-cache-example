export type Todo = {
  id: 1;
  title: string;
  completed: boolean;
  timestamp: string;
};

export const getItem = async (): Promise<Todo> => {
  // TODO: { cache: "no-store" } をオプションに設定して挙動を確認する
  const res = await fetch("http://localhost:3000/todos/1");
  return res.json();
};
