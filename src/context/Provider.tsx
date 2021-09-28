import { todoContext } from "./Context";
import { useReducer } from "react";
import { Todo, TodoState } from "../interfaces";
import { todoReducer, todoType } from "./Reducer";
interface ContextProviderProp {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
  todos: [
    {
      id: 1,
      description: "How use TS with React",
      done: false,
      name: "Learn Typescript",
    },
  ],
  pending: 1,
};
export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [stateTodo, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const toggleTodo = (id: number) => {
    dispatch({
      type: todoType.TOGGLE_TODO,
      payload: { id },
    });
  };
  const removeTodo = (id: number) => {
    dispatch({
      type: todoType.REMOVE_TODO,
      payload: { id },
    });
  };
  const addTodo = (todo: Todo) => {
    dispatch({
      type: todoType.ADD_TODO,
      payload: {
        ...todo,
      },
    });
  };
  return (
    <todoContext.Provider
      value={{
        todoState: stateTodo,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
