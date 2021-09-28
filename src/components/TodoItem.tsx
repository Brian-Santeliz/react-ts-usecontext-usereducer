import { useGetTodos } from "../hooks/useGetTodos";
import { Todo } from "../interfaces";
interface TodoItemProps {
  todo: Todo;
}
export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, removeTodo } = useGetTodos();
  return (
    <ul>
      <li
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        Nombre:{todo.name}
        <br />
        Descripcion:{todo.description}
        <br />
        Terminado: {todo.done ? "Si" : "No"}
      </li>
      <button onClick={() => removeTodo(todo.id)}>Eliminar ToDo</button>
    </ul>
  );
};
