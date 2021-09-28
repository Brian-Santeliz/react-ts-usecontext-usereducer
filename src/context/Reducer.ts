import { Todo, TodoState } from "../interfaces/";
export enum todoType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}
type AddTodoAction = {
  type: typeof todoType.ADD_TODO;
  payload: Todo;
};

type toggleTodoAction = {
  type: typeof todoType.TOGGLE_TODO;
  payload: {
    id: number;
  };
};
type todoActionTypes = AddTodoAction | toggleTodoAction;

export const todoReducer = (
  state: TodoState,
  action: todoActionTypes
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
