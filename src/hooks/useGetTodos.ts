import { useContext } from "react";
import { todoContext } from "../context/Context";
export const useGetTodos = () => {
  const {
    todoState: { todos },
    toggleTodo,
    addTodo,
    removeTodo
  } = useContext(todoContext);
  return {
    todos,
    pending: todos.filter((todo) => !todo.done).length,
    completed: todos.filter((todo) => todo.done).length,
    toggleTodo,
    addTodo,
    removeTodo
  };
};
