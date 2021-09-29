import React, { useState } from "react";
import { useGetTodos } from "../hooks/useGetTodos";
import { TodoItem } from "./TodoItem";
import {Todo as TodoInterface} from '../interfaces'
export const Todo = () => {
  const { todos, addTodo } = useGetTodos();
  const [todo, setTodo] = useState<TodoInterface>({
    name: "",
    description: "",
    done: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.name.length > 0 && todo.description.length > 0) {
      addTodo({
        ...todo,
        id: Date.now(),
      });
      setTodo({
        description: "",
        done: false,
        name: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre del ToDo"
          type="text"
          name="name"
          value={todo.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Descripcion del ToDo"
          type="text"
          name="description"
          value={todo.description}
          onChange={(e) => handleChange(e)}
        />
        <button>Agregar</button>
      </form>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
