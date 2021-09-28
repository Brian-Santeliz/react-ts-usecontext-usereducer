import { createContext } from "react";
import { Todo, TodoState } from "../interfaces";

type ContextType = {
  todoState: TodoState;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
};
export const todoContext = createContext<ContextType>({} as ContextType);
