import { createContext } from "react";
import { Todo } from "../interfaces";

type ContextType = {
  todo: Todo[];
  toggleTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
};
export const todoContext = createContext<ContextType>({} as ContextType);
